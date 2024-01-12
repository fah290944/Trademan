export default function () {

    const changeColorArrowBar = (price: string, prev: string) => {

        if(price == prev){
           return 'bg-darkGreenbgBar'
        }
        else if(price < prev){
            return 'bg-redSell'
        }
        // else if(x < prev){
        //     return 'text-redSell'
        // }
        // else if(x < prev){
        //     return 'text-redSell'
        // }
        else{
            return 'bg-yellowPrev'
        }
    }

    return{
        changeColorArrowBar,
    }

};