<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import usechangeColorText from '@/utils/ChangeColorText';
import usechangeColorBar from '@/utils/ChangeColorBar';
import usechangeMarketText from '@/utils/ChangeTextVolMarket';
import usechangeArrowAtBar from '@/utils/ChangeArrowAtBar';
import TradeService from '@/services/trade.service';
import LoginService from '@/services/login.service';
import useTest from '@/utils/test';
import useloginUser from '@/utils/loginUser';
import type TBidOfferInfor from "@/interfaces/TBidsOffers";
import type TStockInformation from "@/interfaces/TStockInformation";
import StockName from "@/components/StockName.vue"
import StockDetail from "@/components/StockDetail.vue";
import MarketTradePage from "@/components/MarketTrades.vue";
import BestBidsOffres from "@/components/BestBidsOffres.vue";
import SearchAndStockList from "@/components/SearchAndStockList.vue";
import type TBid from "@/interfaces/TBid";
import type TOffer from "@/interfaces/TOffer";

const { changeColorText } = usechangeColorText();
const { changeColorBar } = usechangeColorBar();
const { changeArrowAtBar } = usechangeArrowAtBar();
const { changeMarketText, messageMarketTextVol } = usechangeMarketText();
const { searchStockBySymbol, searchStock, allInformation, stockInformation, stockInformationNumber, } = TradeService();
const { userAuthen } = LoginService();
const nowt = new Date();
const nowte = nowt.getMinutes();

const { getStockData, getinit } = useTest();
const { setDataAuthenUser } = useloginUser();
const stockData = ref<any[]>([]);
const stockInf = ref<TStockInformation>();
const marketTrade = ref<any[]>([]);
const bidOffer = ref<TBidOfferInfor>();


const getinitreal = async () => {
    await userAuthen().then((res: any) => {
        setDataAuthenUser(res.AuthenInfo.AuthenKey)
        // console.log("res AuthenInfo test ==>", res)
        // console.log("res AuthenInfo ==>", res.AuthenInfo.AuthenKey)
    }).catch((e: any) => { console.log("e==>", e) })
    // await allInformation().then((res: any) => {
    //     //setStock(res)
    //     console.log("res.StockInformation ==>", res.StockInformation)
    //     searchData.value = res.StockInformation
    //     stockData.value = res.StockInformation
    // }).catch((e: any) => { console.log("e==>", e) })
    await stockInformation().then((res: any) => {
        // console.log("res.stockInformation  ==>", res)
        stockInf.value = res.StockInfo
        // console.log(' stockInf.value 1 ==>', stockInf.value)
        marketTrade.value = res.Lastsale
        bidOffer.value = res.BestBidOffer
    }).catch((e: any) => { console.log("e==>", e) })
    chanageFormatBidOffer(bidOffer.value);
    calcPosOfBox()
};


onMounted(async () => {
    await getinitreal();
    await getinit();
    const storedGraphTrade = localStorage.getItem('storedStockSymbolGraph')
    if (storedGraphTrade) {
        stockSymbolGraph.value = storedGraphTrade
    }
});


const buttonChang = ref('%CHG');

const toggleSeachbutton = () => {
    if (buttonChang.value == '%CHG') {
        return buttonChang.value = 'CHG'
    }
    if (buttonChang.value == 'CHG') {
        return buttonChang.value = 'PO'
    }
    if (buttonChang.value == 'PO') {
        return buttonChang.value = '%CHG'
    }
};

//lazy load
const postBox = ref(0)
const postBoxBottom = ref(0)
const tableScoll = ref<HTMLElement>();

const calcPosOfBox = () => {
    if (tableScoll.value) {
        postBox.value = tableScoll.value.getBoundingClientRect().top
        postBoxBottom.value = tableScoll.value.getBoundingClientRect().bottom
        // console.log("topPosition ==>", postBox.value)
        // console.log("bottomPosition ==>", postBoxBottom.value)
    }
}
//lazy load end

let stockSymbolGraph = ref('')

const fetchStockNumber = async (stockNumber: string, StockSymbol: string) => {
    stockSymbolGraph.value = StockSymbol
    if(stockNumber !== undefined){
        localStorage.setItem('storedStockSymbolGraph', StockSymbol)
        localStorage.setItem('storedStockNumber', stockNumber)
        await stockInformationNumber(stockNumber).then((res: any) => {
            // console.log("stockInf.value ==>", stockInf.value)
            stockInf.value = res.StockInfo
            marketTrade.value = res.Lastsale
            bidOffer.value = res.BestBidOffer
        })
        chanageFormatBidOffer(bidOffer.value);
    }
}

// watch(findStock, (curr,prev) => {
//     console.log('a:', curr);
//     console.log('b:', prev);
//     // console.log('c:', c);
// });



const Infooff = ref<TOffer[]>([]);
const Infobid = ref<TBid[]>([]);

const chanageFormatBidOffer = (bidOffer: any) => {
    const resultsOff: TOffer[] = [];
    const resultsBid: TBid[] = [];
    for (let i = 1; i <= 10; i++) {

        const OfferPriceKey = `OfferPrice${i}`
        const OfferVolumeKey = `OfferVolume${i}`
        const OfferTotaleKey = `OfferTotal${i}`

        const BidPriceKey = `BidPrice${i}`
        const BidVolumeKey = `BidVolume${i}`
        const BidTotaleKey = `BidTotal${i}`
        // BidPriceKey = BidPrice1

        const OfferPricet = bidOffer[OfferPriceKey]
        const OfferVolumet = bidOffer[OfferVolumeKey]
        const OfferTotalet = bidOffer[OfferTotaleKey]

        const BidPricet = bidOffer[BidPriceKey]
        const BidVolumet = bidOffer[BidVolumeKey]
        const BidTotalet = bidOffer[BidTotaleKey]
        //ค่าของ BidPrice1 ซึ่งคือ 151.00

        // BidPricet = bidOffer.BidPrice1(BidPriceKey)
        if (!!OfferPricet) {
            resultsOff.push({
                OfferPrice: OfferPricet,
                OfferVolume: OfferVolumet,
                OfferTotal: OfferTotalet,
            })
        }
        if (!!BidPricet) {
            resultsBid.push({
                BidPrice: BidPricet,
                BidVolume: BidVolumet,
                BidTotal: BidTotalet,
            })
        }

    }
    Infooff.value = resultsOff.sort((a: any, b: any) => (
        b.OfferPrice - a.OfferPrice
    ))
    Infobid.value = resultsBid
    // console.log('Infooff.value ==>', Infooff.value)
    // console.log('Infobid.value ==>', Infobid.value)

};

</script>

<template>
    <div class="bg-black-555 pb-[12rem] px-4 lg:w-[100%] text-white">
        <div class="grid grid-cols-12 h-full auto-rows-min">
            <div
                class="bg-transparent col-start-1 col-end-4 row-start-1 row-end-2 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <StockName :stockInfo="stockInf"/>
            </div>
            <div
                class="bg-transparent col-start-4 col-end-13 row-start-1 row-end-2 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <StockDetail :stockInfo="stockInf"/>
            </div>
            <div
                class="bg-transparent col-start-1 col-end-4 row-start-2 row-end-5 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <BestBidsOffres :stockInfo="stockInf" :marketTradepages="marketTrade" :Infobids="Infobid" :Infooffs="Infooff" />
            </div>
            <div
                class="bg-transparent col-start-4 col-end-10 row-start-2 row-span-3 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <iframe 
                    v-if="stockSymbolGraph"
                    :src="`https://demo.efinancethai.com/html5/controls/stockchart_trade/chartSTI.asp?userid=98-thansiri&symbol=${stockSymbolGraph ?? '1DIV'}&hidesearch=Y&rgb=20,20,20&tp=0&support_new_design=true`"
                    title="Graph Trade index" width="100%" height="100%"
                    >
                </iframe>
            </div>
            <div
                class="bg-transparent col-start-10 col-end-13 row-start-2 row-end-3 border-b border-r dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <SearchAndStockList :fetchStockNumbers="fetchStockNumber" />

            </div>
            <div
                class="col-start-10 col-end-13 row-start-4 row-end-5 bg-transparent border-b border-r dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <MarketTradePage :stockInfo="stockInf" :marketTradepages="marketTrade" />
            </div>
            <div class="col-start-1 col-end-13 row-start-5 row-end-7 bg-transparent ">

            </div>
        </div>
    </div>
</template>

<style>
::-webkit-scrollbar {
    width: 3px;
}

::-webkit-scrollbar-track {
    background: #161a1e;
}

::-webkit-scrollbar-thumb {
    background: #474747;
}

::-webkit-scrollbar-thumb:hover {
    background: #555555;
}
</style>