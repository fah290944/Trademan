
import { io } from "socket.io-client";
import useLoginUser from '@/utils/LoginUser';
import useUserAuthenStore from "@/stores/login";

const {getdataSocket } = useLoginUser();


// "undefined" means the URL will be computed from the `window.location` object
const URL = "https://demotrade.efintradeplus.com:8443/Stock";

// export const socket = io(URL);

// const URL = useUserAuthenStore();

export const socket = io(getdataSocket());

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