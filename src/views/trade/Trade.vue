<script setup lang="ts">
import { onMounted, ref } from "vue";
import TradeService from '@/services/trade.service';
import LoginService from '@/services/login.service';
import useStockAllInformation from '@/utils/stockAllInformation';
import useLoginUser from '@/utils/LoginUser';
import type IStockInformation from "@/interfaces/IStockInformation";
import StockName from "@/views/trade/StockName.vue"
import StockDetail from "@/views/trade/StockDetail.vue";
import MarketTradePage from "@/views/trade/MarketTrades.vue";
import BestBidsOffres from "@/views/trade/BestBidsOffres.vue";
import SearchAndStockList from "@/views/trade/SearchAndStockList.vue";
import type IBid from "@/interfaces/IBid";
import type IOffer from "@/interfaces/IOffer";
import type IBidsOffers from "@/interfaces/IBidsOffers";
// import { io, Socket } from 'socket.io-client';
// import { ws } from "@/socket"




const { stockInformation, stockInformationNumber, } = TradeService();
const nowt = new Date();
const nowte = nowt.getMinutes();
const { getInit } = useStockAllInformation();
const { getUserLogin } = useLoginUser();
let stockInf = ref<IStockInformation>();
const marketTrade = ref<any[]>([]);
const bidOffer = ref<IBidsOffers>();


const getInitReal = async () => {
    await stockInformation().then((res: any) => {
        // console.log("res.stockInformation  ==>", res)
        stockInf.value = res.StockInfo
        // console.log("stockInf.value ==>", stockInf.value)
        marketTrade.value = res.Lastsale
        bidOffer.value = res.BestBidOffer
        chanageFormatBidOffer(bidOffer.value);
    }).catch((e: any) => { console.log("e==>", e) })

    // ws()
    // setTimeout(() => {
    //     ws().disconnect()
    // }, 5000);
};

onMounted(async () => {
    await getUserLogin();
    await getInitReal();
    await getInit();
    const storedGraphTrade = localStorage.getItem('storedStockSymbolGraph')
    if (storedGraphTrade) {
        stockSymbolGraph.value = storedGraphTrade
    } else {
        stockSymbolGraph.value = "1DIV"
    }
});

let stockSymbolGraph = ref('')

const fetchStockNumber = async (stockNumber: string, stockSymbol: string) => {
    stockSymbolGraph.value = stockSymbol
    if (stockNumber !== undefined) {
        localStorage.setItem('storedStockSymbolGraph', stockSymbol)
        localStorage.setItem('storedStockNumber', stockNumber)
        await stockInformationNumber(stockNumber).then((res: any) => {
            stockInf.value = res.StockInfo
            // console.log("stockInf.value ==>", stockInf.value)
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


const infoOff = ref<IOffer[]>([]);
const infoBid = ref<IBid[]>([]);

const chanageFormatBidOffer = (bidOffer: any) => {
    const resultsOff: IOffer[] = [];
    const resultsBid: IBid[] = [];
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
    infoOff.value = resultsOff.sort((a: any, b: any) => (
        b.OfferPrice - a.OfferPrice
    ))
    infoBid.value = resultsBid
    // console.log('Infooff.value ==>', infoOff.value)
    // console.log('Infobid.value ==>', infoBid.value)
};

</script>

<template>
    <div class="bg-black-555 pb-[12rem] px-4 lg:w-[100%] text-white">
        <div class="grid grid-cols-12 h-full auto-rows-min">
            <div
                class="bg-transparent col-start-1 col-end-4 row-start-1 row-end-2 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <StockName :stockInfo="stockInf" />
            </div>
            <div
                class="bg-transparent col-start-4 col-end-13 row-start-1 row-end-2 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <StockDetail :stockInfo="stockInf" />
            </div>
            <div
                class="bg-transparent col-start-1 col-end-4 row-start-2 row-end-5 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <BestBidsOffres :stockInfo="stockInf" :marketTradepages="marketTrade" :infoBids="infoBid"
                    :infoOffs="infoOff" />
            </div>
            <div
                class="bg-transparent col-start-4 col-end-10 row-start-2 row-span-3 border-b border-r border-l dark:border-borderGray dark:border-opacity-25 border-opacity-25">
                <iframe v-if="stockSymbolGraph"
                    :src="`https://demo.efinancethai.com/html5/controls/stockchart_trade/chartSTI.asp?userid=98-thansiri&symbol=${stockSymbolGraph ?? '1DIV'}&hidesearch=Y&rgb=20,20,20&tp=0&support_new_design=true`"
                    title="Graph Trade index" width="100%" height="100%">
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