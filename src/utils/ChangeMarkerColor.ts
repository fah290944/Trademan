export default function () {

    const changeMarkerColor = (marker: String = "") => {
        if(marker == '+'){
            return 'text-[#01C233]';
        }else if(marker == '-'){
            return 'text-[#FA6B82]'; 
        }else{
            return 'text-[#F2BA40]'; 
        }
    };

    return{
        changeMarkerColor,
    }


};