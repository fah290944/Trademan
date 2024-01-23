import { useUserAuthenStore } from '@/stores/login';

export default function () {

   const store = useUserAuthenStore();

   const setDataAuthenUser = (data: any) => {
    store.setUserAuthenKey(data);
   }

   const getdataUserAuthen = () => {
    return store.authenUser;
   }

    return{
        setDataAuthenUser,
        getdataUserAuthen,

    }

};