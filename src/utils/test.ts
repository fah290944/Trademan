import TradeService from '@/services/trade.service';
import { useCounterStore } from '@/stores/counter';

export default function () {

    const {allInformation} = TradeService();

    const getinit = async () => {
        await allInformation().then((res: any) => {
            // console.log("res.StockInformation ==>", res.StockInformation)
            setStock(res)
            // searchData.value = res.StockInformation
            // stockData.value = res.StockInformation
        }).catch((e: any) => { console.log("e==>", e) })
    };

   const store = useCounterStore();

   const setStock = (data:any) => {
    store.setAllInformation(data);
   }

   const getStockData = () => {
    return store.dataStock;
   }

    return{
        setStock,
        getStockData,
        getinit,
    }

};