import TradeService from '@/services/trade.service';
import { useCounterStore } from '@/stores/StockAllInformation';

export default function () {

    const {allInformation} = TradeService();

    const getinit = async () => {
        await allInformation().then((res: any) => {
            setStock(res)
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