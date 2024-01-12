import axios from "axios";
// import useTest from '@/utils/test';

export default function TradeService() {
// const { setStock } = useTest();
  const authenKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI5OC10aGFuc2lyaSIsIlNlc3Npb25JZCI6IjMiLCJWZXJpZnkyRkEiOnRydWUsIklzMVRpbWVUb2tlbiI6IkZhbHNlIiwibmJmIjoxNzA1MDI0MTYwLCJleHAiOjE3MDUxMTA1NjAsImlhdCI6MTcwNTAyNDE2MH0.cIA6GSDWwHnRH64kZtHB7gdl5cEfAhMu8UTMLnG-a5c'

  const searchStockBySymbol = async () => {
    var data = {
      WebMethod: "searchstockbysymbol",
      Data: {
        SortBy: "",
        SymbolList: [
          "1DIV",
          "24CS",
          "24CS-F",
          "2S",
          "2S-F",
          "3K-BAT",
          "7UP",
          "7UP-F",
          "A",
          "A5",
          "A5-F",
          "AAI",
        ],
        ViewType: "",
      },
      AuthenKey:
        authenKey,
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
        authenKey,
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

  const stockInformation = async () => {
    var data = {
      WebMethod: "loadstockinformation",
      Data: {
          "StockNumber": "65626",
          "TickerRow": 5
      },
      AuthenKey:
        authenKey,
    };
    let apiUrl =
      "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest";

    try {
      const res = await axios.post(apiUrl, data);
      //console.log( res.data);
      return res.data;
    } catch (error: any) {
      console.log("Request failed ==>", error);
    }
  };

  const searchStock = async () => {
    var data = {
      WebMethod: "loadstockinformation",
      Data: {
          "StockNumber": "65626",
          "TickerRow": 5
      },
      AuthenKey:
        authenKey,
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
  };
}
