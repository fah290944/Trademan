import axios from "axios";
import useLoginUser from '@/utils/LoginUser';
// import useTest from '@/utils/test';

export default function TradeService() {
  const {getDataUserAuthen } = useLoginUser();
// const { setStock } = useTest();
// let apiUrl =
//       "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";

  const searchStockBySymbol = async (stocksymbol: any) => {
    var data = {
      WebMethod: "searchstockbysymbol",
      Data: {
        SortBy: "",
        SymbolList: stocksymbol,
        ViewType: "",
      },
      AuthenKey:
        getDataUserAuthen(),
    };
    let apiUrl =
      "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";
  
    try {
      const res = await axios.post(apiUrl, data);
      return res.data;
    } catch (error: any) {
      console.log("Request failed ==>", error);
    }
  };

  const allInformation = async () => {
    var data = {
      WebMethod: "loadallinformation",
      Data: "",
      AuthenKey:
        getDataUserAuthen(),
    };
    let apiUrl =
      "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";

    try {
      const res = await axios.post(apiUrl, data);
      // setStock(res.data);
      return res.data;
    } catch (error: any) {
      console.log("Request failed ==>", error);
    }
  };

  const stockInformationNumber = async (stocknumber: any) => {
    var data = {
      WebMethod: "loadstockinformation",
      Data: {
          "StockNumber": stocknumber,
          "TickerRow": 5
      },
      AuthenKey:
        getDataUserAuthen(),
    };
    let apiUrl =
      "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";

    try {
      const res = await axios.post(apiUrl, data);
      return res.data
    } catch (error: any) {
      console.log("Request failed ==>", error);
    }
  };

  const stockInformation = async () => {
    const StockNumber = localStorage.getItem('storedStockNumber')
    var data = {
      WebMethod: "loadstockinformation",
      Data: {
          "StockNumber": StockNumber ?? '66061',
          "TickerRow": 5
      },
      AuthenKey:
        getDataUserAuthen(),
    };
    let apiUrl =
      "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";

    try {
      const res = await axios.post(apiUrl, data);
      return res.data;
    } catch (error: any) {
      console.log("Request failed ==>", error);
    }
  };

  const searchStock = async () => {
    var data = {
      WebMethod: "loadstockinformation",
      Data: {
          "StockNumber": "66061",
          "TickerRow": 5
      },
      AuthenKey:
        getDataUserAuthen(),
    };

    let apiUrl =
      "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";

    try {
      const res = await axios.post(apiUrl, data);
      return res.data;
    } catch (error: any) {
      console.log("Request failed ==>", error);
    }
  };

  return {
    searchStockBySymbol,
    searchStock,
    allInformation,
    stockInformation,
    stockInformationNumber,

  };
}
