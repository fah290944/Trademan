import { ref } from "vue"

export default function () {

    const changeColorBar = (price: string = "", prev: string = "") => {

        if(price === prev){
           return 'bg-darkBar'
        }
        else if(price > prev){
            return 'bg-darkGreenbgBar'
        }
        // else if(x < prev){
        //     return 'text-redSell'
        // }
        // else if(x < prev){
        //     return 'text-redSell'
        // }
        else{
            return 'bg-darkBar'
        }
    }

    return{
        changeColorBar,
    }

};