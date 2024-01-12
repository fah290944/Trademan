<script setup lang="ts">
import { computed, onMounted, ref , watch} from "vue";
import usechangeColorText from '@/utils/ChangeColorText';
import usechangeColorBar from '@/utils/ChangeColorBar';
import usechangeMarketText from '@/utils/ChangeTextVolMarket';
import usechangeMarkerColor from '@/utils/ChangeMarkerColor';
import TradeService from '@/services/trade.service';
import PageTrade from "@/components/PageTrade.vue";
import SearchStock from "@/components/SearchStock.vue";
// import useTest from '@/utils/test';

const { changeColorText } = usechangeColorText();
const { changeColorBar } = usechangeColorBar();
const { changeMarketText, messageMarketTextVol } = usechangeMarketText();
const { changeMarkerColor } = usechangeMarkerColor();
const { searchStockBySymbol } = TradeService();
const { searchStock } = TradeService();
const { allInformation } = TradeService();
const { stockInformation } = TradeService();
const nowt = new Date();
const nowte = nowt.getMinutes();

// const { getStock } = useTest();

type TStockInfo = {
    StockNumber: string,
    LastSalePrice: string,
    ChangePricePct: string,
    ComparePrice: string,
    Average: string,
    PriorClosePrice: string,
    CmprPct: string,
    ChangePrice: string,
    High52: string,
    Low52: string,
    Ceiling: string,
    Floor: string,
    ProjectedClose: string,
    HighPrice: string,
    LowPrice: string,
    TotalValue: string,
    Open1: string,
    Open2: string,
    TotalVolume: string,
    OpenVolume: string,
    OpenVolumePct: string,
    BuyVolume: string,
    SellVolume: string,
    SellVolumePct: string,
    StockFullName: string,
    StockSymbol: string,
}

type TbidofferInfo = {
    BidPrice1: string,
    BidVolume1: string,
    BidTotal1: string,
    BidPrice2: string,
    BidVolume2: string,
    BidTotal2: string,
    BidPrice3: string,
    BidVolume3: string,
    BidTotal3: string,
    BidPrice4: string,
    BidVolume4: string,
    BidTotal4: string,
    BidPrice5: string,
    BidVolume5: string,
    BidTotal5: string,
    BidPrice6: string,
    BidVolume6: string,
    BidTotal6: string,
    BidPrice7: string,
    BidVolume7: string,
    BidTotal7: string,
    BidPrice8: string,
    BidVolume8: string,
    BidTotal8: string,
    BidPrice9: string,
    BidVolume9: string,
    BidTotal9: string,
    BidPrice10: string,
    BidVolume10: string,
    BidTotal10: string,
    OfferPrice1: string,
    OfferVolume1: string,
    OfferTotal1: string,
    OfferPrice2: string,
    OfferVolume2: string,
    OfferTotal2: string,
    OfferPrice3: string,
    OfferVolume3: string,
    OfferTotal3: string,
    OfferPrice4: string,
    OfferVolume4: string,
    OfferTotal4: string,
    OfferPrice5: string,
    OfferVolume5: string,
    OfferTotal5: string,
    OfferPrice6: string,
    OfferVolume6: string,
    OfferTotal6: string,
    OfferPrice7: string,
    OfferVolume7: string,
    OfferTotal7: string,
    OfferPrice8: string,
    OfferVolume8: string,
    OfferTotal8: string,
    OfferPrice9: string,
    OfferVolume9: string,
    OfferTotal9: string,
    OfferPrice10: string,
    OfferVolume10: string,
    OfferTotal10: string,
}

const searchData = ref<any[]>([])
const stockData = ref<any[]>([])
const stockInf = ref<TStockInfo>();
const bidOffer = ref<TbidofferInfo>();

let prevnum = ref('')
let price = ref('')
let ceiling = ref('')
let floor = ref('')

const getinit = async () => {
    await allInformation().then((res: any) => {
        searchData.value = res.StockInformation
        stockData.value = res.StockInformation
    })
    await stockInformation().then((res: any) => {
        prevnum.value = res.StockInfo.PriorClosePrice
        price.value = res.StockInfo.LastSalePrice
        ceiling.value = res.StockInfo.Ceiling
        floor.value = res.StockInfo.Floor
        stockInf.value = res.StockInfo
        bidOffer.value = res.BestBidOffer
    })
    chanageFormatBidOffer(bidOffer.value);
}

onMounted(() => {
    changeMarketText(nowte);
    getinit();
    
});

const message = ref<any>()
const message1 = ref<any>()



const buttonType = ref(['%CHG', 'CHG', 'PO']);
const buttonType1 = ref(buttonType.value[0]);

const toggleSeachbutton = () => {
    let num = buttonType.value.indexOf(buttonType1.value);
    let sum = (num + 1) % buttonType.value.length;
    // console.log(num, sum);
    if (num == 2) {
        console.log(buttonType.value[0])
        buttonType1.value = buttonType.value[0]
    }
    else {
        console.log(buttonType.value[sum])
        buttonType1.value = buttonType.value[sum];
    }
}



let searchQuery = ref('')

const findStock = computed(() => {
    if(searchQuery.value){
        console.log('searchQuery.value ==>', searchQuery.value)
        return stockData.value.filter((item) => (
            item.StockSymbol.toLowerCase().includes(searchQuery.value.toLowerCase())
            ));
    }
    else{
        console.log('searchQuery.value ==> null')
    }
})

// const searchinput = () =>{
//     console.log('searchQuery.value ==>', searchQuery.value)
//     let stockDataAll = stockData.value.filter((item) => (
//         item.StockSymbol.toLowerCase().includes(searchQuery.value.toLowerCase())
//     ));
// }

watch( () => findStock.value, () => {
    console.log('findStock.value ==>',findStock.value)
} 
);


type Tbid = {
    BidPrice: string;
    BidVolume: string;
    BidTotal: string;
};

const TInfo: Tbid[] = [];

const chanageFormatBidOffer = (bidOffer: any) => {
    // const TInfo: Tbid[] = [];

    for (let i = 1; i <= 10; i++) {

        const BidPriceKey = `BidPrice${i}`
        const BidVolumeKey = `BidVolume${i}`
        const BidTotaleKey = `BidTotal${i}`
        // BidPriceKey = BidPrice1


        const BidPricet = bidOffer[BidPriceKey]
        const BidVolumet = bidOffer[BidVolumeKey]
        const BidTotalet = bidOffer[BidTotaleKey]
        //ค่าของ BidPrice1 ซึ่งคือ 151.00

        // BidPricet = bidOffer.BidPrice1(BidPriceKey)

        // console.log('tttt ==>', bidOffer[BidPriceKey])

        TInfo.push({
            BidPrice: BidPricet,
            BidVolume: BidVolumet,
            BidTotal: BidTotalet,
        })
    }
    // console.log("TInfo test ==>", TInfo);
    return TInfo

};



// let isStarSelectedHaed= ref(false)
// let isStarSelected= ref(false)
// let stars: Array(5).fill(false)

// const toggleFavStarHaed = () => {
//     isStarSelectedHaed.value = !isStarSelectedHaed.value

// }

// const toggleFavStar = () => {
//     isStarSelected.value = !isStarSelected.value

// }
// const toggleStar = (index:any) => {
//     stars[index] = !stars[index]

// }

const star = ref(true)
// const toggleFavStar = (favStar:boolean) =>{
//     if(star.value === true){
//         return 'fill-[#FFC64B]'
//     }
//     else{
//         return 'fill-[#afb3bd]'
//     }

// }


</script>

<template>
    <div class="bg-transparent mx-auto place-content-center pb-4 px-4 lg:w-[95%] text-white">
        <div class="grid grid-cols-12 h-full auto-rows-min">
            <div
                class="bg-transparent col-start-1 col-end-4 row-start-1 row-end-2 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <div class="h-full w-full relative">
                    <div
                        class="h-[94px] grid grid-rows-3 dark:bg-transparent bg-headerGray font-ibm-plex-sans w-full px-3 pb-1 pt-2">
                        <div class="flex justify-between w-full">
                            <div
                                class="text-xl font-bold flex rounded-md pr-3 dark:bg-white bg-textBlack dark:text-navbarTxtBlack text-white">
                                <img src="https://s3.efinancethai.com/symbols-logo/BBL.png" alt="" class="h-[24px] px-2" />
                                <div class="text-black">{{ stockInf?.StockSymbol }}</div>
                            </div>
                            <div class="text-xl font-tuffy-bold font-bold"
                                :class="changeColorText(stockInf?.LastSalePrice, prevnum, ceiling, floor)">
                                {{ stockInf?.LastSalePrice }}</div>
                        </div>
                        <div class="flex justify-between w-full items-center">
                            <div class="text-headerTextLightGray text-[11px] font-light mt-1.5">
                                {{ stockInf?.StockFullName }} </div>
                            <div
                                class="text-sm font-tuffy flex font-bold mt-1 dark:text-priceYellow text-primaryYellow-200 font-tuffy">

                                <div :class="changeMarkerColor(stockInf?.ComparePrice)" class="pr-1">
                                    {{ stockInf?.ComparePrice }}{{ stockInf?.ChangePrice }}</div>
                                <div :class="changeMarkerColor(stockInf?.ComparePrice)">
                                    {{ stockInf?.ComparePrice }}{{ stockInf?.ChangePricePct }}</div>
                            </div>
                        </div>
                        <div class="flex justify-between w-full items-center">

                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-transparent col-start-4 col-end-13 row-start-1 row-end-2 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <div class="h-full w-full border-0 relative text-sm px-3 pb-1 pt-2 flex">
                    <div class="md:w-[15%]">
                        <div class="grid grid-row-3 gap-1.5">
                            <div class="items-center grid grid-cols-2">
                                <div class="font-tuffy">Avg</div>
                                <div :class="changeColorText(stockInf?.Average, prevnum, ceiling, floor)">
                                    {{ stockInf?.Average }}</div>
                            </div>
                            <div class="items-center grid grid-cols-2">
                                <div class="font-tuffy">Prev</div>
                                <div :class="changeColorText(stockInf?.PriorClosePrice, prevnum, ceiling, floor)">
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
                                    <span :class="changeColorText(stockInf?.High52, prevnum, ceiling, floor)">{{
                                        stockInf?.High52 }}</span>
                                    <span>/</span>
                                    <span :class="changeColorText(stockInf?.Low52, prevnum, ceiling, floor)">{{
                                        stockInf?.Low52 }}</span>
                                </div>
                            </div>
                            <div class="items-center grid grid-cols-2">
                                <div class="font-tuffy">Ceiling/Floor</div>
                                <div>
                                    <span :class="changeColorText(stockInf?.Ceiling, prevnum, ceiling, floor)">{{
                                        stockInf?.Ceiling }}</span>
                                    <span>/</span>
                                    <span :class="changeColorText(stockInf?.Floor, prevnum, ceiling, floor)">{{
                                        stockInf?.Floor }}</span>
                                </div>
                            </div>
                            <div class="items-center grid grid-cols-2">
                                <div class="font-tuffy">PrjClose/Vol</div>
                                <div :class="changeColorText(price, prevnum, ceiling, floor)">{{ stockInf?.ProjectedClose }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[20%] md:w-[15%]">
                        <div class="grid grid-row-3 gap-1.5">
                            <div class="items-center grid grid-cols-2">
                                <div class="font-tuffy">High</div>
                                <div :class="changeColorText(stockInf?.HighPrice, prevnum, ceiling, floor)">
                                    {{ stockInf?.HighPrice }}</div>
                            </div>
                            <div class="items-center grid grid-cols-2">
                                <div class="font-tuffy">Low</div>
                                <div :class="changeColorText(stockInf?.LowPrice, prevnum, ceiling, floor)">
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
                                <div :class="changeColorText(stockInf?.Open1, prevnum, ceiling, floor)">{{ stockInf?.Open1
                                }}
                                </div>
                            </div>
                            <div class="items-center grid grid-cols-2 ">
                                <div>Open-2</div>
                                <div :class="changeColorText(stockInf?.Open2, prevnum, ceiling, floor)">{{ stockInf?.Open2
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
                                <div>{{ messageMarketTextVol }}</div>
                                <div class="flex text-[#fff]">
                                    <div class="pr-0.5">{{ stockInf?.OpenVolume }}</div>
                                    <div> {{ stockInf?.OpenVolumePct }} </div>
                                </div>
                            </div>
                            <div class="items-center grid grid-cols-2">
                                <div>Buy Vol</div>
                                <div class="flex">
                                    <div class="pr-0.5 text-yellowPrev">{{ stockInf?.BuyVolume }}</div>
                                    <!-- <div>({{ stockInf.BuyVolumePct }})</div> -->
                                </div>
                            </div>
                            <div class="items-center grid grid-cols-2">
                                <div>Sell Vol</div>
                                <div class="flex">
                                    <div class="pr-0.5 text-purpleFloor">{{ stockInf?.SellVolume }}</div>
                                    <!-- <div>({{ stockInf?.SellVolumePct }})</div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-transparent col-start-1 col-end-4 row-start-2 row-end-5 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <div class="h-full w-full flex flex-col justify-between">
                    <div class="table-bit-offer-and-head-table w-full h-full">
                        <div class="flex gap-5 text-sm font-ibm-plex-sans bg-transparent p-3 h-[45px]">

                            <div class="text-xs flex-grow text-headerTextLightGray">Price (THB)</div>
                            <div class="text-xs flex-grow text-headerTextLightGray">Volume ({{ stockInf?.StockSymbol }})
                            </div>
                            <div class="text-xs flex-grow text-headerTextLightGray">Value</div>
                        </div>
                        <div class="table-bit-offer w-full mt-[-10px]">
                            <div class="table-bit w-full pb-1 min-h-[318px]">
                                <table class="w-100 border-0">
                                    <tbody>
                                        <tr v-for="index in 10" :key="index" class="bg-transparent hover:bg-[#5F6672]/10">
                                            <td :class="changeColorText(price, prevnum, ceiling, floor)"
                                                class="text-[12px] xl:text-[14px] text-left py-1.5 pl-3 text[#fff]">
                                                155</td>
                                            <td class="text-[12px] xl:text-[14px] text-grayTxt text[#fff] pr-7 py-1.5 ">
                                                155</td>
                                            <td class="text-[12px] xl:text-[14px] text-grayTxt text[#fff] py-1.5 pr-3">
                                                155</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div :class="changeColorBar(stockInf?.PriorClosePrice, prevnum)"
                                class="px-2.5 py-2 pl-5 flex cursor-pointer mx-2.5 h-[40px]">
                                <span>

                                </span>
                                <div :class="changeColorText(stockInf?.PriorClosePrice, prevnum, ceiling, floor)"
                                    class="font-bold text-base text-priceYellow">
                                    {{ stockInf?.PriorClosePrice }}
                                </div>
                            </div>
                            <div class="table-offer w-full pt-1 pb-[30px] ">
                                <table class="w-100 border-0">
                                    <tbody>
                                        <tr v-for="item, index in TInfo" :key="index"
                                            class="border-0 cursor-pointer  select-none bg-transparent hover:bg-[#5F6672]/10">
                                            <td :class="changeColorText(item.BidPrice, prevnum, ceiling, floor)"
                                                class="text-[12px] xl:text-[14px] text-left text-grayTxt py-1.5 pl-3">
                                                {{ item.BidPrice }}</td>
                                            <td class="text-[12px] xl:text-[14px] text-right text-grayTxt pr-7 py-1.5 ">
                                                {{ item.BidVolume }}</td>
                                            <td class="text-[12px] xl:text-[14px] text-right text-grayTxt py-1.5 pr-3">
                                                {{ item.BidTotal }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div
                        class="foot-bit-offer flex h-[30px] border-t dark:border-borderGray dark:border-opacity-25 border-opacity-25 justify-end">
                        <div
                            class="px-4 cursor-pointer bg-raisinBlack border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                            <svg class="inline-block h-4 fill-manatee" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 14 14">
                                <g id="Group_75772" data-name="Group 75772" transform="translate(-492 -383)">
                                    <rect id="Rectangle_19808" data-name="Rectangle 19808" width="6" height="14" rx="2"
                                        transform="translate(492 383)" />
                                    <rect id="Rectangle_19809" data-name="Rectangle 19809" width="6" height="10" rx="2"
                                        transform="translate(500 383)" />
                                </g>
                            </svg>
                        </div>
                        <div class="px-4 cursor-pointer">
                            <svg class="inline-block h-4 fill-manatee" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 14 14">
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
            </div>
            <div
                class="bg-transparent col-start-4 col-end-10 row-start-2 row-span-3 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <!-- <img src="../assets/image/graph.png" alt=""> -->
            </div>
            <div
                class="bg-transparent col-start-10 col-end-13 row-start-2 row-end-3 border-b border-r dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <div class="h-full w-ful pb-4">
                    <div class="search-set p-1 w-full">
                        <div class="relative w-full px-[0.75rem] py-[0.5rem]  bg-[#2a2d35] rounded-[5px]">
                            <form class="flex">
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" transform="translate(2 2)">
                                        <path d="m18.02 9.01a9.01 9.01 0 1 1 -9.01-9.01 9.01 9.01 0 0 1 9.01 9.01z" />
                                        <path
                                            d="m9.01000023 2.5c-3.58963013 0-6.51000023 2.9203701-6.51000023 6.51000023s2.9203701 6.51000023 6.51000023 6.51000023 6.51000023-2.9203701 6.51000023-6.51000023-2.9203701-6.51000023-6.51000023-6.51000023m0-2.5c4.97608948 0 9.01000023 4.0339098 9.01000023 9.01000023 0 4.97608948-4.03391075 9.01000023-9.01000023 9.01000023-4.97609043 0-9.01000023-4.03391075-9.01000023-9.01000023 0-4.97609043 4.0339098-9.01000023 9.01000023-9.01000023z"
                                            fill="#5f6672" />
                                    </g>
                                    <path
                                        d="m3.992.95a2.1 2.1 0 0 0 -1.97-.95 2.02 2.02 0 0 0 -1.68.79 2.029 2.029 0 0 0 -.22 1.84c.43 1.3 1.18 1.59 1.59 1.64a1.148 1.148 0 0 0 .19.01 2.168 2.168 0 0 0 1.78-1.18 2.06 2.06 0 0 0 .31-2.15z"
                                        fill="#5f6672" transform="translate(17.998 18)" />
                                    <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)" />
                                </svg>
                                <input
                                    class="w-[100%] pl-[0.5rem] m-0 outline-none text-sm font-bold placeholder-navbarIconBlack dark:text-white text-black rounded bg-[#2A2D35]"
                                    v-model="searchQuery" placeholder="Search..." type="text" />
                            </form>
                        </div>
                    </div>
                    <!-- <SearchStock @send-message="(x) => {message = x
                        console.log(message)}" ></SearchStock> -->
                    <div class="table-nameset-last h-full border-0 mt-[-9px]">
                        <div class="relative w-full font-ibm-plex-sans">
                            <div class="relative top-0 left-0 w-full flex h-[38px] border-0">
                                <div class="w-33 p-3 dark:text-navbarIconBlack text-headerTextLightGray">
                                    <div class="flex text-xs justify-start">
                                        <svg class="mt-0.5 mb-1 mr-3 inline-block duration-300 fill-[#afb3bd] fill-navbarIconBlack cursor-pointer cursor-pointer"
                                            height="15.892" viewBox="0 0 15.999 15.892" width="15.999"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m9.389 1.149 1.41 2.82a1.759 1.759 0 0 0 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99a1.726 1.726 0 0 0 -.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.389-1.42a1.7 1.7 0 0 0 -1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.459a1.817 1.817 0 0 0 -.43-1.46l-1.991-1.991c-1.17-1.17-.79-2.35.84-2.63l2.55-.42a1.727 1.727 0 0 0 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01z" />
                                        </svg>
                                        <span class="whitespace-nowrap mt-0.5">
                                            Symbol
                                        </span>
                                    </div>
                                </div>
                                <div class="w-33 p-3 dark:text-navbarIconBlack text-headerTextLightGray">
                                    <div class="flex gap-1 dark:text-navbarIconBlack text-xs justify-center">
                                        <span class="mt-0.5">Last Price</span>
                                    </div>
                                </div>
                                <div class="w-33 flex justify-end p-3 dark:text-navbarIconBlack text-headerTextLightGray">
                                    <PageTrade />
                                </div>
                            </div>
                            <div class="table-secrh overflow-y-auto h-[305px] w-[100%] pl-[10px]">
                                <div>
                                    <div class="min-height-[111750px]">
                                        <table class="w-[100%] border-0 mt-1">
                                            <tbody>
                                                <tr v-for="item in findStock" :key="item.StockNumber"
                                                    class="bg-transparent hover:bg-[#5F6672]/10">
                                                    <td class="text-[12px] xl:text-[14px] text-left flex py-1">
                                                        <svg class="mt-0.5 w-4 mb-1 mr-3 inline-block duration-300 fill-[#545556] cursor-pointer"
                                                            height="15.892" viewBox="0 0 15.999 15.892" width="15.999"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m9.389 1.149 1.41 2.82a1.759 1.759 0 0 0 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99a1.726 1.726 0 0 0 -.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.389-1.42a1.7 1.7 0 0 0 -1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.459a1.817 1.817 0 0 0 -.43-1.46l-1.991-1.991c-1.17-1.17-.79-2.35.84-2.63l2.55-.42a1.727 1.727 0 0 0 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01z" />
                                                        </svg>
                                                        <div class="mt-[2px] text-xs w-[40%]">{{
                                                            item.StockSymbol }}</div>
                                                    </td>
                                                    <td class="text-[12px] xl:text-[14px] text-center">
                                                        <div class="text-xs w-[40%]">{{ item.LastSalePrice }}</div>
                                                    </td>
                                                    <td class="text-[12px] xl:text-[14px] text-right">

                                                        <div class="text-xs w-[40%]">{{ item.ChangePrice }}</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="col-start-10 col-end-13 row-start-4 row-end-5 bg-transparent border-b border-r dark:border-borderGray dark:border-opacity-25 border-opacity-25">
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
                            <div class="vue-recycle-scroller__item-wrapper min-h-[1500px]">
                                <!-- <div class="vue-recycle-scroller__item-view"> -->
                                <div
                                    class="border-0 flex justify-between select-none hover:dark:bg-darkGray hover:bg-headerGray">
                                    <div
                                        class="text-xs xl:text-sm font-tuffy py-1.5 w-1/4 pl-3 dark:text-primaryRed text-darkRedTxt font-tuffy">
                                        155.00</div>
                                    <div
                                        class="flex gap-1 justify-center text-xs xl:text-sm text-center font-tuffy py-1.5 w-1/4 dark:text-priceYellow text-primaryYellow-200">
                                        S</div>
                                    <div
                                        class="flex gap-1 justify-end text-xs xl:text-sm text-right font-tuffy py-1.5 pr-3 w-1/4 dark:text-priceYellow text-primaryYellow-200">
                                        100</div>
                                    <div
                                        class="flex gap-1 justify-end text-xs xl:text-sm text-right font-tuffy py-1.5 w-1/4 pr-3 dark:text-primaryRed text-darkRedTxt font-tuffy">
                                        16:29:14</div>
                                </div>
                                <!-- </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-start-1 col-end-13 row-start-5 row-end-7 bg-transparent ">

            </div>
        </div>
    </div>
</template>
