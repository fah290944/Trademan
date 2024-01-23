export default function () {

    const changeColorText = (price: String ="", prev: String = "", ceiling: String = "",  floor: String = "") => {
      
      if(price !== ''){
        if (price === '0.00' ) {
            return 'text-[#F2BA40]'; // สีเหลือง
          } else if (price === ceiling) {
            return 'text-[#558BED]'; // สีน้ำเงิน
          } else if (price === floor) {
            return 'text-[#D964D7]'; // สีม่วง
          } else if (price === prev) {
            return 'text-[#F2BA40]'; // สีเหลือง
          } else if (Number(price) < Number(prev)) {
            return 'text-[#FA6B82]'; // สีแดง
          } else if (Number(price) > Number(prev)) {
            return 'text-[#01C233]'; // สีเขียว
          } else {
            return 'text-[#fff]'; // กรณีอื่นๆ สีดำหรือค่าที่ต้องการ
          }
      }
    };

    return{
        changeColorText,
    }

};