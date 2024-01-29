import { io } from "socket.io-client";
import useLoginUser from "@/utils/LoginUser";
import useUserAuthenStore from "@/stores/login";
import { ref } from "vue";
// const { getdataSocket } = useLoginUser();


export const ws = ():any => {
  const URL = useUserAuthenStore();
  // const socket = io('https://demotrade.efintradeplus.com:8443/Stock');
   
  const socket = io(URL.socketUser);
    socket.on("update data", (data: any) => {
      console.log(`data is ==>`, data);
    });

    socket.on("connect", () => {
      console.log(`Connected to socket.io`);
      socket.emit(
        "set room",
        JSON.stringify([
          { room: "LS_BBL" },
          { room: "TP_BBL" },
          { room: "BBL" },
        ])
      );
    });

    socket.on("disconnect", () => {
      console.log(`disConnected to socket.io`);
    });
    return socket
};
