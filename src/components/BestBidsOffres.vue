<template>
    <div class="h-full w-full flex flex-col justify-between">
        <div class="table-bit-offer-and-head-table w-full h-full">
            <div class="flex gap-5 text-sm font-ibm-plex-sans bg-transparent p-3 h-[45px]">

                <div class="text-xs flex-grow text-headerTextLightGray">Price (THB)</div>
                <div class="text-xs flex-grow text-headerTextLightGray">Volume ({{ stockInf?.StockSymbol }})
                </div>
                <div class="text-xs flex-grow text-headerTextLightGray text-right">Value</div>
            </div>
            <div class="table-bit-offer w-full"
                :class="{ 'mt-[0px]': isClickbuttonBidOffer == 1, 'mt-[-10px]': isClickbuttonBidOffer == 0 }">
                <div class="table-bit w-full pb-1 min-h-[318px] flex">
                    <table class="w-100 h-100 border-0 mt-auto">
                        <tbody class="h-100">
                            <tr v-for="item, index in Infooff" :key="index"
                                class="bg-transparent hover:bg-[#5F6672]/10 h-[33px]">
                                <td v-if="item.OfferPrice"
                                    :class="changeColorText(item.OfferPrice, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)"
                                    class="text-[12px] xl:text-[14px] text-left py-1.5 pl-3 text[#fff]">
                                    {{ item.OfferPrice }}</td>
                                <td v-if="item.OfferPrice"
                                    class="text-[12px] xl:text-[14px] text-grayTxt text[#fff] pr-7 py-1.5 text-center">
                                    {{ item.OfferVolume }}</td>
                                <td v-if="item.OfferPrice"
                                    class="text-[12px] xl:text-[14px] text-grayTxt text[#fff] py-1.5 pr-3 text-right">
                                    {{ item.OfferTotal }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div :class="changeColorBar(stockInf?.PriorClosePrice, stockInf?.PriorClosePrice)"
                    class="px-2.5 py-2 pl-5 flex cursor-pointer mx-2.5 h-[40px]">
                    <span class="pr-3" v-html="changeArrowAtBar(stockInf?.PriorClosePrice,marketTrade)">
                    </span>
                    <div :class="changeColorText(stockInf?.LastSalePrice, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)"
                        class="font-bold text-base text-priceYellow">
                        {{ stockInf?.LastSalePrice }}
                    </div>
                </div>
                <div class="table-offer w-full pt-1 pb-[30px] ">
                    <table class="w-100 border-0">
                        <tbody>
                            <tr v-for="item, index in Infobid" :key="index"
                                class="border-0 cursor-pointer select-none bg-transparent hover:bg-[#5F6672]/10">
                                <td v-if="item.BidPrice"
                                    :class="changeColorText(item.BidPrice, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)"
                                    class="text-[12px] xl:text-[14px] text-left py-1.5 pl-3">
                                    {{ item.BidPrice }}</td>
                                <td v-if="item.BidPrice"
                                    class="text-[12px] xl:text-[14px] text-right text-grayTxt pr-7 py-1.5 ">
                                    {{ item.BidVolume }}</td>
                                <td v-if="item.BidPrice"
                                    class="text-[12px] xl:text-[14px] text-right text-grayTxt py-1.5 pr-3">
                                    {{ item.BidTotal }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div
            class="foot-bit-offer flex h-[30px] border-t dark:border-borderGray dark:border-opacity-25 border-opacity-25 justify-end">
            <div @click="() => toggleClickbuttonBidOffer(1)"
                :class="{ 'bg-raisinBlack fill-[#9da0ab]': isClickbuttonBidOffer == 1, 'fill-[#2f3138]': isClickbuttonBidOffer != 1 }"
                class="px-4 cursor-pointer border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <svg class="inline-block h-4 fill-manatee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <g id="Group_75772" data-name="Group 75772" transform="translate(-492 -383)">
                        <rect id="Rectangle_19808" data-name="Rectangle 19808" width="6" height="14" rx="2"
                            transform="translate(492 383)" />
                        <rect id="Rectangle_19809" data-name="Rectangle 19809" width="6" height="10" rx="2"
                            transform="translate(500 383)" />
                    </g>
                </svg>
            </div>
            <div @click="() => toggleClickbuttonBidOffer(0)"
                :class="{ 'bg-raisinBlack fill-[#9da0ab]': isClickbuttonBidOffer == 0, 'fill-[#2f3138]': isClickbuttonBidOffer != 0 }"
                class="px-4 cursor-pointer ">
                <svg class="inline-block h-4 fill-manatee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <g id="Group_75771" data-name="Group 75771" transform="translate(-533 -383)">
                        <rect id="Rectangle_19806" data-name="Rectangle 19806" width="6" height="14" rx="2"
                            transform="translate(533 383)" />
                        <rect id="Rectangle_19807" data-name="Rectangle 19807" width="6" height="10" rx="2"
                            transform="translate(541 385)" />
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type TbidofferInfor from '@/interfaces/TBidsOffers';
import type TStockInformation from '@/interfaces/TStockInformation';
import ChangeColorBar from '@/utils/ChangeColorBar';
import { computed, onMounted, ref, watch, type PropType } from 'vue';
import usechangeColorText from '@/utils/ChangeColorText';
import usechangeColorBar from '@/utils/ChangeColorBar';
import usechangeArrowAtBar from '@/utils/ChangeArrowAtBar';

const { changeArrowAtBar } = usechangeArrowAtBar();
const { changeColorText } = usechangeColorText();
const { changeColorBar } = usechangeColorBar();

const props = defineProps({
    stockInfo: {
        type: Object as PropType<TStockInformation>,
        required: true,
        default: {}
    },
    marketTradepages: {
        type: Array as PropType<Array<any>>,
        required: true,
    },
    Infobids: {
        type: Array as PropType<Array<any>>,
        required: true,
        default: {}
    },
    Infooffs: {
        type: Array as PropType<Array<any>>,
        required: true,
        default: {}
    }
})

const stockInf = computed (()=>{
    return props.stockInfo
})
const marketTrade = computed (()=>{
    return props.marketTradepages
})
const Infobid = computed (()=>{
    return props.Infobids
})
const Infooff = computed (()=>{
    return props.Infooffs
})

let isClickbuttonBidOffer = ref(0)

const toggleClickbuttonBidOffer = (buttonNumber: number) => {
    if (buttonNumber == 0) {
        isClickbuttonBidOffer.value = 0
    }
    else {
        isClickbuttonBidOffer.value = 1
    }
}

</script>
