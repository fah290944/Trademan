<template>
    <div class="h-full w-full relative">
        <div class="h-[94px] grid grid-rows-3 dark:bg-transparent bg-headerGray font-ibm-plex-sans w-full px-3 pb-1 pt-2">
            <div class="flex justify-between w-full">
                <div
                    class="text-xl font-bold flex rounded-md pr-3 dark:bg-white bg-textBlack dark:text-navbarTxtBlack text-white">
                    <img src="https://s3.efinancethai.com/symbols-logo/BBL.png" alt="" class="h-[24px] px-2" />
                    <div class="text-black">{{ stockInf?.StockSymbol }}</div>
                </div>
                <div class="text-xl font-tuffy-bold font-bold"
                    :class="changeColorText(stockInf?.LastSalePrice, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">
                    {{ stockInf?.LastSalePrice }}</div>
            </div>
            <div class="flex justify-between w-full items-center">
                <div class="text-headerTextLightGray text-[11px] font-light mt-1.5">
                    {{ stockInf?.StockFullName }} </div>
                <div class="text-sm font-tuffy flex font-bold mt-1 dark:text-priceYellow text-primaryYellow-200 font-tuffy">
                    <div :class="changeColorCHG(stockInf?.ChangePrice)"
                        class="pr-1">
                        {{ stockInf?.ChangePrice }}</div>

                    <div :class="changeColorCHG(stockInf?.ChangePrice)"
                        class="pr-1">
                        {{ stockInf?.ChangePricePct }}%</div>
                </div>
            </div>
            <div class="flex justify-between w-full items-center">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, type PropType } from 'vue';
import type IStockInformation from "@/interfaces/IStockInformation";
import usechangeColorText from '@/utils/ChangeColorText';
import usechangeColorCHG from '@/utils/ChangeColorCHG'

const { changeColorText } = usechangeColorText();
const { changeColorCHG } = usechangeColorCHG();


const props = defineProps({
    stockInfo: {
        type:  Object as PropType<IStockInformation>,
        required: true,
        default: {}
    },
});

const stockInf = computed (()=>{
    return props.stockInfo
})

</script>