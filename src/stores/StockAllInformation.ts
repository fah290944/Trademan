import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('stockInfo', () => {
  const stockInfo = ref<any[]>([]);


  const dataStock = computed(() => stockInfo.value);

  const setAllInformation = (data:any) => {
    stockInfo.value = data.StockInformation;

  }

  return { dataStock, setAllInformation }
})
