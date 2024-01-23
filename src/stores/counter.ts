import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('stockInfo', () => {
  const searchData = ref<any[]>([]);
  const stockInfo = ref<any[]>([]);


  const dataStock = computed(() => stockInfo.value);

  const setAllInformation = (data:any) => {
    searchData.value = data.StockInformation;
    stockInfo.value = data.StockInformation;

  }

  return { dataStock, setAllInformation }
})
