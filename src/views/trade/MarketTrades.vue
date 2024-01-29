<template>
                <div class="h-full w-full">
                    <div class="text-sm font-ibm-plex-sans dark:text-white text-navbarTxtBlack py-2 px-3">
                        Market Trade</div>
                    <div class="relative w-full font-ibm-plex-sans">
                        <div class="relative top-0 left-0 w-full flex h-[38px] border-0">
                            <div class="w-25 p-3 dark:bg-darkMode dark:text-navbarIconBlack text-headerTextLightGray">
                                <div class="flex gap-1 dark:text-navbarIconBlack text-xs justify-start">
                                    <span class="mt-0.5">Price</span>
                                </div>
                            </div>
                            <div class="w-25 p-3 dark:bg-darkMode dark:text-navbarIconBlack text-headerTextLightGray">
                                <div class="flex gap-1 dark:text-navbarIconBlack text-xs justify-center">
                                    <span class="mt-0.5">Side</span>
                                </div>
                            </div>
                            <div class="w-25 p-3 dark:bg-darkMode dark:text-navbarIconBlack text-headerTextLightGray">
                                <div class="flex gap-1 dark:text-navbarIconBlack text-xs justify-end">
                                    <span class="mt-0.5">Volume</span>
                                </div>
                            </div>
                            <div class="w-25 p-3 dark:bg-darkMode dark:text-navbarIconBlack text-headerTextLightGray">
                                <div class="flex gap-1 dark:text-navbarIconBlack text-xs justify-end">
                                    <span class="mt-0.5">Time</span>
                                </div>
                            </div>
                        </div>
                        <div class="vue-recycle-scroller ready direction-vertical overflow-y-auto h-[330px]">
                            <div class="min-h-[1500px]">
                                <div v-for="item, index in marketTrade" :key="index"
                                    class="border-0 flex justify-between select-none hover:dark:bg-darkGray hover:bg-headerGray">
                                    <div :class="changeColorText(item.Price, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)"
                                        class="text-xs xl:text-sm py-1.5 w-1/4 pl-3 font-tuffy">
                                        {{ item.Price }}
                                    </div>
                                    <div
                                        class="flex gap-1 justify-center text-xs xl:text-sm text-center font-tuffy py-1.5 w-[80px] dark:text-priceYellow text-primaryYellow-200">
                                        <span v-if="item.Side == 'S'" class="text-[#D964D7]">{{ item.Side }}</span>
                                        <span v-else-if="item.Side == 'B'" class="text-[#F2BA40]">{{ item.Side }}</span>
                                        <span v-else-if="item.Side == ''" class="text-[#fff]">{{ item.Side }}</span>
                                    </div>
                                    <div
                                        class="flex gap-1 justify-end text-xs xl:text-sm text-right font-tuffy py-1.5 pr-3 w-1/4 dark:text-priceYellow text-primaryYellow-200">
                                        <span v-if="item.Side == 'S'" class="text-[#D964D7]">{{ item.Volume }}</span>
                                        <span v-else-if="item.Side == 'B'" class="text-[#F2BA40]">{{ item.Volume }}</span>
                                        <span v-else-if="item.Side == ''" class="text-[#fff]">{{ item.Volume }}</span>
                                    </div>
                                    <div :class="changeColorText(item.Price, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)"
                                        class="flex gap-1 justify-end text-xs xl:text-sm text-right py-1.5 w-1/4 pr-3 dark:text-primaryRed text-darkRedTxt font-tuffy">
                                        {{ item.TimeStamp }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script setup lang="ts">
import type IStockInformation from '@/interfaces/IStockInformation';
import { computed, type PropType } from 'vue';
import usechangeColorText from '@/utils/ChangeColorText';

const { changeColorText } = usechangeColorText();

const props = defineProps({
    stockInfo: {
        type: Object as PropType<IStockInformation>,
        required: true,
        default: {}
    },
    marketTradepages: {
        type: Array as PropType<Array<any>>,
        required: true,
    },
    
});

const stockInf = computed (()=>{
    return props.stockInfo
})
const marketTrade = computed (()=>{
    return props.marketTradepages
})

</script>