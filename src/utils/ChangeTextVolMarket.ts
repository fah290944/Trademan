import { ref } from "vue";

export default function () {
    
    let messageMarketTextVol = ref('')

    const changeMarketText = (now: any) =>{

        if (now >= 12 && now < 30) {
             return messageMarketTextVol.value = 'Pre Open 2';
          } else if (now >= 30) {
                return messageMarketTextVol.value = 'Open Vol';
          } else {
            return messageMarketTextVol.value = 'test';
          }
    }

    // const changeOpenText = (text: string) =>{

    //     console.log("test2",text)
    //     if (text === '') {
    //          return '';
    //       } 
    //        else {
    //         return "(" + text + ")";
    //       }
    // }

    return{
        changeMarketText,
        messageMarketTextVol,
        // changeOpenText,
    }

};