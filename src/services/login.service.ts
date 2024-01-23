import axios from "axios";
// import setDataAuthenUser from '@/utils/loginUser';

export default function LoginService() {

  const userAuthen = async () => {
    var data = {
        WebMethod: "USERAUTHEN",
        Data: {
            "UserId": "98-thansiri",
            "Password": "1234",
            "VersionCode": "1.0.0",
            "Channel": "EFIN",
            "TerminalId": "W",
            "DeviceInfo": {
                "LocalIp": "2C84DA2D52DD8C9A07CC6528936F1408OR",
                "DeviceId": "84976624E3938404116D9EF75E534CAC",
                "DeviceName": "ios",
                "DeviceModel": "91E5595EDD7C378DF55BA163EF13F340",
                "UserAgent": "Googlebot/2.1 (+http://www.google.com/bot.html)"
            }
        }
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
    userAuthen,
  };
}
