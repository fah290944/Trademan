import { ref } from "vue"

export default function () {

    const changeColorBar = (price: string = "", prev: string = "") => {

        if(price === prev){
           return 'bg-darkBar'
        }
        else if(price > prev){
            return 'bg-darkGreenbgBar'
        }
        else{
            return 'bg-darkBar'
        }
    }

    return{
        changeColorBar,
    }

};