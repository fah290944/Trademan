export default function () {

    const changeColorCHG = (changePrice: string) => {
        const number = Number(changePrice)
        if(changePrice === "0.00"){
            return 'text-[#F2BA40]'
        }
        else if(number > 0){
            return 'text-[#01C233]'
        }else{
            return 'text-[#FA6B82]'
        }
    }

    return{
        changeColorCHG,
    }

};