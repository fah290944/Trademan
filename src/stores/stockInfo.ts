import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type TStockInformation from '@/interfaces/TStockInformation';
import type TBidOfferInfor from '@/interfaces/TBidsOffers';

export const useCounterStore = defineStore('stockInfo', () => {
    const stockInf = ref<TStockInformation>();
    const marketTrade = ref<any[]>([]);
    const bidOffer = ref<TBidOfferInfor>();

  const dataStockIndex = computed(() => stockInf.value);
  const dataMarketTradeIndex = computed(() => marketTrade.value);
  const databidOfferIndex = computed(() => bidOffer.value);

  const setStockInformation = (data:any) => {
    stockInf.value = data.StockInformation;
    marketTrade.value = data.StockInformation;
    bidOffer.value = data.StockInformation;
  }

  return { dataStockIndex, dataMarketTradeIndex, databidOfferIndex, setStockInformation }
})
