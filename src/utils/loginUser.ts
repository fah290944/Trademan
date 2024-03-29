
import LoginService from '@/services/login.service';
import useUserAuthenStore from '@/stores/login';
import { computed } from 'vue';

export default function () {

    const { userAuthen } = LoginService();

    const getUserLogin = async () => {
        await userAuthen().then((res: any) => {
            setDataAuthenUser(res)
            // setDataAuthenUser(res.AuthenInfo.AuthenKey)
            // setDataSocket(res.Socket)
        }).catch((e: any) => { console.log("e==>", e) })
    }
   const store = useUserAuthenStore();

   const setDataAuthenUser = (data: any) => {
        store.setUserAuthenKey(data);
   }

   //เพิ่มฟังก์ชันอื่นๆ
   const getDataSocket = () => {
    return store.socketUser;
   }

   const getDataUserAuthen = () => {
    return store.authenUser;
   }

    return{
        setDataAuthenUser,
        getDataUserAuthen,
        getUserLogin,
        getDataSocket,

    }

};