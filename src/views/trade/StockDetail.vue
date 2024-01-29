<template>
    <div class="h-full w-full border-0 relative text-sm px-3 pb-1 pt-2 flex">
        <div class="md:w-[15%]">
            <div class="grid grid-row-3 gap-1.5">
                <div class="items-center grid grid-cols-2">
                    <div class="font-tuffy">Avg</div>
                    <div
                        :class="changeColorText(stockInf?.Average, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">
                        {{ stockInf?.Average }}</div>
                </div>
                <div class="items-center grid grid-cols-2">
                    <div class="font-tuffy">Prev</div>
                    <div
                        :class="changeColorText(stockInf?.PriorClosePrice, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">
                        {{ stockInf?.PriorClosePrice }}</div>
                </div>
                <div class="items-center grid grid-cols-2">
                    <div class="font-tuffy">%CMPR</div>
                    <div class="text-yellowPrev">{{ stockInf?.CmprPct }}</div>
                </div>
            </div>
        </div>
        <div class="md:w-[26%] 2xl:w-[23%] md:pr-3">
            <div class="grid grid-row-3 gap-1.5">
                <div class="items-center grid grid-cols-2">
                    <div class="font-tuffy">H/L 52 W</div>
                    <div>
                        <span
                            class="pr-[3px]"
                            :class="changeColorText(stockInf?.High52, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">{{
                                stockInf?.High52 }}</span>
                        <span v-if="stockInf?.High52 && stockInf?.Low52">/</span>
                        <span class="pl-[3px]"
                            :class="changeColorText(stockInf?.Low52, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">{{
                                stockInf?.Low52 }}</span>
                    </div>
                </div>
                <div class="items-center grid grid-cols-2">
                    <div class="font-tuffy">Ceiling/Floor</div>
                    <div>
                        <span
                            class="pr-[3px]"
                            :class="changeColorText(stockInf?.Ceiling, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">{{
                                stockInf?.Ceiling }}</span>
                        <span v-if="stockInf?.Ceiling && stockInf?.Floor">/</span>
                        <span
                            class="pl-[3px]"
                            :class="changeColorText(stockInf?.Floor, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">{{
                                stockInf?.Floor }}</span>
                    </div>
                </div>
                <div class="items-center grid grid-cols-2">
                    <div class="font-tuffy">PrjClose/Vol</div>
                    <div
                        :class="changeColorText(stockInf?.ProjectedClose, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">
                        {{ stockInf?.ProjectedClose }}
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[20%] md:w-[15%]">
            <div class="grid grid-row-3 gap-1.5">
                <div class="items-center grid grid-cols-2">
                    <div class="font-tuffy">High</div>
                    <div
                        :class="changeColorText(stockInf?.HighPrice, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">
                        {{ stockInf?.HighPrice }}</div>
                </div>
                <div class="items-center grid grid-cols-2">
                    <div class="font-tuffy">Low</div>
                    <div
                        :class="changeColorText(stockInf?.LowPrice, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">
                        {{ stockInf?.LowPrice }}</div>
                </div>
                <div class="items-center grid grid-cols-2">
                    <div class="font-tuffy">Value</div>
                    <div>{{ stockInf?.TotalValue }}</div>
                </div>
            </div>
        </div>
        <div class="w-[20%] md:w-[15%]">
            <div class="grid grid-row-3 gap-1.5">
                <div class="items-center grid grid-cols-2">
                    <div class="font-tuffy">Open-1</div>
                    <div
                        :class="changeColorText(stockInf?.Open1, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">
                        {{ stockInf?.Open1
                        }}
                    </div>
                </div>
                <div class="items-center grid grid-cols-2 ">
                    <div>Open-2</div>
                    <div
                        :class="changeColorText(stockInf?.Open2, stockInf?.PriorClosePrice, stockInf?.Ceiling, stockInf?.Floor)">
                        {{ stockInf?.Open2
                        }}
                    </div>
                </div>
                <div class="items-center grid grid-cols-2">
                    <div>Volume</div>
                    <div>{{ stockInf?.TotalVolume }}</div>
                </div>
            </div>
        </div>
        <div class="w-[20%]">
            <div class="grid grid-row-3 gap-1.5">
                <div class="items-center grid grid-cols-2">
                    <div>Open Vol</div>
                    <div class="flex text-[#fff]">
                        <div class="pr-1">{{ stockInf?.OpenVolume }}</div>
                        <div v-if="stockInf?.OpenVolumePct"> ({{ stockInf?.OpenVolumePct }}) </div>
                    </div>
                </div>
                <div class="items-center grid grid-cols-2">
                    <div>Buy Vol</div>
                    <div class="flex">
                        <div class="pr-1 text-yellowPrev">{{ stockInf?.BuyVolume }}</div>
                        <div v-if="stockInf?.BuyVolumePct" class=" text-yellowPrev"> ({{ stockInf?.BuyVolumePct}}) </div>
                    </div>
                </div>
                <div class="items-center grid grid-cols-2">
                    <div>Sell Vol</div>
                    <div class="flex">
                        <div class="pr-1 text-purpleFloor">{{ stockInf?.SellVolume }}</div>
                        <div v-if="stockInf?.SellVolumePct" class=" text-purpleFloor"> ({{ stockInf?.SellVolumePct}}) </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type IStockInformation from "@/interfaces/IStockInformation";
import { computed, type PropType } from "vue";
import usechangeMarketText from '@/utils/ChangeTextVolMarket';
import usechangeColorText from '@/utils/ChangeColorText';

const {  messageMarketTextVol } = usechangeMarketText();
const { changeColorText } = usechangeColorText();

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