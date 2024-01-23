<template>
    <div class="h-full w-ful pb-4">
        <div class="search-set p-1 w-full">
            <div class="relative w-full px-[0.75rem] py-[0.5rem]  bg-[#2a2d35] rounded-[5px]">
                <form class="flex">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" transform="translate(2 2)">
                            <path d="m18.02 9.01a9.01 9.01 0 1 1 -9.01-9.01 9.01 9.01 0 0 1 9.01 9.01z" />
                            <path
                                d="m9.01000023 2.5c-3.58963013 0-6.51000023 2.9203701-6.51000023 6.51000023s2.9203701 6.51000023 6.51000023 6.51000023 6.51000023-2.9203701 6.51000023-6.51000023-2.9203701-6.51000023-6.51000023-6.51000023m0-2.5c4.97608948 0 9.01000023 4.0339098 9.01000023 9.01000023 0 4.97608948-4.03391075 9.01000023-9.01000023 9.01000023-4.97609043 0-9.01000023-4.03391075-9.01000023-9.01000023 0-4.97609043 4.0339098-9.01000023 9.01000023-9.01000023z"
                                fill="#5f6672" />
                        </g>
                        <path
                            d="m3.992.95a2.1 2.1 0 0 0 -1.97-.95 2.02 2.02 0 0 0 -1.68.79 2.029 2.029 0 0 0 -.22 1.84c.43 1.3 1.18 1.59 1.59 1.64a1.148 1.148 0 0 0 .19.01 2.168 2.168 0 0 0 1.78-1.18 2.06 2.06 0 0 0 .31-2.15z"
                            fill="#5f6672" transform="translate(17.998 18)" />
                        <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)" />
                    </svg>
                    <input
                        class="w-[100%] pl-[0.5rem] m-0 outline-none text-sm font-bold placeholder-navbarIconBlack dark:text-white text-black rounded bg-[#2A2D35]"
                        v-model="searchQuery" type="text" placeholder="Search..."
                        @input="searchQuery = searchQuery.toUpperCase()" />
                </form>
            </div>
        </div>
        <div class="table-nameset-last h-full border-0 mt-[-9px]">
            <div class="relative w-full font-ibm-plex-sans">
                <div class="relative top-0 left-0 w-full flex h-[38px] border-0">
                    <div class="w-33 p-3 dark:text-navbarIconBlack text-headerTextLightGray">
                        <div class="flex text-xs justify-start">
                            <svg @click="() => filterFavStock()" :class="showOnlyFav ? 'fill-[#FFC64B]' : 'fill-[#afb3bd]'"
                                class="mt-0.5 mb-1 mr-3 inline-block duration-300 cursor-pointer cursor-pointer"
                                height="15.892" viewBox="0 0 15.999 15.892" width="15.999"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m9.389 1.149 1.41 2.82a1.759 1.759 0 0 0 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99a1.726 1.726 0 0 0 -.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.389-1.42a1.7 1.7 0 0 0 -1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.459a1.817 1.817 0 0 0 -.43-1.46l-1.991-1.991c-1.17-1.17-.79-2.35.84-2.63l2.55-.42a1.727 1.727 0 0 0 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01z" />
                            </svg>
                            <span class="whitespace-nowrap mt-0.5">
                                Symbol
                            </span>
                        </div>
                    </div>
                    <div class="w-33 p-3 dark:text-navbarIconBlack text-headerTextLightGray">
                        <div class="flex gap-1 dark:text-navbarIconBlack text-xs justify-center">
                            <span class="mt-0.5">Last Price</span>
                        </div>
                    </div>
                    <div class="w-33 flex justify-end p-3 dark:text-navbarIconBlack text-headerTextLightGray pt-[10px]">
                        <div @click="() => toggleSeachbutton()">
                            <button class="text-xs">{{ buttonChang }}</button>
                            <svg class="mt-0.5 w-4 fill-[#afb3bd]  hover:fill-white mb-1 ml-2 inline-block duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="14.001" height="13.092"
                                viewBox="0 0 14.001 13.092">
                                <g id="Group_40035" data-name="Group 40035"
                                    transform="translate(-437.389 555.06) rotate(-90)">
                                    <path id="Union_97" data-name="Union 97"
                                        d="M6849.726-8279.488v-11.632l-1.8,1.759a.563.563,0,0,1-.78,0,.532.532,0,0,1,0-.76l2.735-2.672a.561.561,0,0,1,.389-.157.565.565,0,0,1,.191.036.03.03,0,0,0,.021.006.567.567,0,0,1,.191.123l2.727,2.664a.529.529,0,0,1,0,.76.561.561,0,0,1-.778,0l-1.794-1.75v11.623a.549.549,0,0,1-.55.539A.549.549,0,0,1,6849.726-8279.488Zm-6.156.5a.033.033,0,0,0-.022-.006.555.555,0,0,1-.19-.123l-2.728-2.663a.532.532,0,0,1,0-.762.563.563,0,0,1,.778,0l1.794,1.753v-11.625a.548.548,0,0,1,.55-.538.548.548,0,0,1,.552.538v11.631l1.8-1.759a.563.563,0,0,1,.778,0,.531.531,0,0,1,0,.762l-2.734,2.67a.558.558,0,0,1-.389.159A.565.565,0,0,1,6843.57-8278.986Z"
                                        transform="translate(-6298.502 8730.339)" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div ref="tableScoll" id="tablesearchFindStock"
                    class="table-secrh overflow-y-auto h-[305px] w-[100%] pl-[10px] pr-[10px]">
                    <div>
                        <div class="min-height-[111750px] relative">
                            <table class="w-[100%] border-0 mt-1 relative">
                                <tbody id="tbody-search">
                                    <tr v-for="item in findStock" :key="item.StockNumber" id="searchFindStock"
                                        @click="() => fetchStockNumbers(item.StockNumber, item.StockSymbol)"
                                        class=" bg-transparent hover:bg-[#5F6672]/10 w-[100%] flex flex-row justify-between items-center h-[30px] ">
                                        <td
                                            class="text-[12px] xl:text-[14px] text-left flex py-1 w-[120px] whitespace-nowrap">
                                            <svg @click="(e) => {
                                                e.stopPropagation()
                                                toggleStartest(item.StockNumber)
                                            }" :class="fillStar(item.StockNumber)"
                                                class="mt-0.5 w-4 mb-1 mr-3 inline-block duration-300 cursor-pointer"
                                                height="15.892" viewBox="0 0 15.999 15.892" width="15.999"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="m9.389 1.149 1.41 2.82a1.759 1.759 0 0 0 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99a1.726 1.726 0 0 0 -.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.389-1.42a1.7 1.7 0 0 0 -1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.459a1.817 1.817 0 0 0 -.43-1.46l-1.991-1.991c-1.17-1.17-.79-2.35.84-2.63l2.55-.42a1.727 1.727 0 0 0 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01z" />
                                            </svg>
                                            <div class="mt-[2px] text-xs w-[50%] overflow-hidden hover:overflow-none">
                                                {{ item.StockSymbol }}</div>
                                        </td>
                                        <td class="text-[12px] xl:text-[14px] w-[120px]">
                                            <div :class="changeColorText(item.LastSalePrice, item.PriorClosePrice, item.Ceiling, item.Floor)"
                                                class="text-xs w-[50px] text-right ">{{ item.LastSalePrice }}
                                            </div>
                                        </td>
                                        <td class="text-[12px] xl:text-[14px] text-right">
                                            <div :class="textChangePriceCSS(item.ChangePricePct)" class="text-xs w-[40px]"
                                                v-if="buttonChang == '%CHG'">
                                                {{ textChangePrice(item.ChangePricePct) }}% </div>
                                            <div :class="textChangePriceCSS(item.ChangePrice)" class="text-xs w-[40px]"
                                                v-else-if="buttonChang == 'CHG'">
                                                {{ textChangePrice(item.ChangePrice) }}</div>
                                            <div :class="textChangePriceCSS(item.ProjectedPrice)" class="text-xs w-[40px]"
                                                v-else-if="item.ProjectedPrice == ''">
                                                {{ textChangePrice(item.ProjectedPrice) }}</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TradeService from "@/services/trade.service";
import usechangeColorText from '@/utils/ChangeColorText';
import { computed, onMounted, onUnmounted, ref, type ComputedRef, type PropType } from "vue";
import useTest from '@/utils/test';

const { searchStockBySymbol } = TradeService();
const { changeColorText } = usechangeColorText();
const searchQuery = ref('');
const showOnlyFav = ref(false)
const stockStar = ref<String[]>([]);

const myTable = ref<HTMLElement | null>(null);
// const { stockInformationNumber} = TradeService();
const { getStockData } = useTest();

const props = defineProps({
    fetchStockNumbers: {
        type: Function,
        required: true,
    },
})


onMounted(async () => {
    const storedFavStockNumber = localStorage.getItem('storedFavStockNumber')
    if (storedFavStockNumber) {
        stockStar.value = JSON.parse(storedFavStockNumber)
    }
    onScrollStop(() => {
        calcPosOfBox()
        findStockSymbol()
    });
});


const onScrollStop = (callback: () => void): void => {
    let isScrolling: any;
    const element = document.getElementById("tablesearchFindStock");    
    if (element) {
        element.addEventListener(
            'scroll',
            (e: Event) => {
                clearTimeout(isScrolling);
                isScrolling = setTimeout(() => {
                    callback();
                }, 500);
            },
            false
        );
    }

};

const postBoxBottom = ref(0)
const tableScoll = ref<HTMLElement>();
const boxTr = ref(0)
const fetchFindStockSymbol = ref<string[]>([])

const calcPosOfBox = () => {
    if (tableScoll.value) {
        postBoxBottom.value = tableScoll.value.getBoundingClientRect().bottom
    }
}

let dataTr = ref<any>()

const findStockSymbol = () => {
    const result = []
    const tableRows = document.querySelectorAll("#tablesearchFindStock tbody tr");
    const postBoxBottomValue = postBoxBottom.value;
    let closestRowIndex = -1;
    let closestDistance = Number.MAX_VALUE;

    tableRows.forEach((row, index) => {
        const rect = row.getBoundingClientRect();
        const distance = Math.abs(rect.bottom - postBoxBottomValue);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestRowIndex = index;
            dataTr.value = closestRowIndex;
        }
    });

    const IndexTr = Number(dataTr.value)
    const datatestIndexTr = findStock.value.slice(IndexTr - 10, IndexTr + 1)

    for(const datafinded in datatestIndexTr){
        result.push(datatestIndexTr[datafinded].StockSymbol)

    }

    fetchFindStockSymbol.value = result
    fetchStockSymbol(fetchFindStockSymbol.value)
    localStorage.setItem("fetchFindStockSymbol", JSON.stringify(fetchFindStockSymbol.value))
}

const StockSymbol = ref<string[]>([])
const fetchStockSymbol = async (Symbol: any) => {
    if(StockSymbol){
        await searchStockBySymbol(Symbol).then((res: any) => {
            console.log("res API ==> ",res)
        })
    }
}


const filterFavStock = () => {
    showOnlyFav.value = !showOnlyFav.value
}

const buttonChang = ref('%CHG');

const toggleSeachbutton = () => {
    if (buttonChang.value == '%CHG') {
        return buttonChang.value = 'CHG'
    }
    if (buttonChang.value == 'CHG') {
        return buttonChang.value = 'PO'
    }
    if (buttonChang.value == 'PO') {
        return buttonChang.value = '%CHG'
    }
};

const textChangePrice = (ChangePrice: any) => {
    if (ChangePrice?.startsWith('-')) {
        return ChangePrice
    }
    else if (ChangePrice === '0.00') {
        return ChangePrice
    }
    else if (Number(ChangePrice) > 0) {
        return "+" + ChangePrice
    }
    else if (ChangePrice == '') {
        return ChangePrice = '0.00'
    }
}

const textChangePriceCSS = (ChangePrice: any) => {
    if (ChangePrice?.startsWith('-')) {
        return 'text-[#FA6B82]'
    }
    else if (ChangePrice === '0.00') {
        return 'text-[#F2BA40]'
    }
    else if (Number(ChangePrice) > 0) {
        return 'text-[#01C233]'
    }
    else if (ChangePrice == '') {
        return 'text-[#F2BA40]'
    }
    else {
        return 'text-[#fff]'
    }
}

const fillStar = (StockNumber: string) => {
    const storedFavStockNumber = localStorage.getItem('storedFavStockNumber')
    // console.log('storedFavStockNumber ==>',storedFavStockNumber)
    const checkFavstock = stockStar.value.find((x) => x == StockNumber)
    if (checkFavstock !== undefined) {
        return 'fill-[#FFC64B]'
    }
    else {
        return 'fill-[#545556]'
    }


}

const toggleStartest = (stockNumber: any) => {

    const data = [...stockStar.value]
    const checkStock = data.find((x) => x == stockNumber)

    if (checkStock != undefined) {
        const index = data.indexOf(checkStock);
        data.splice(index, 1);
        stockStar.value = data
    } else {
        data.push(stockNumber)
        stockStar.value = data
    }
    localStorage.setItem('storedFavStockNumber', JSON.stringify(data))
}

const findStock = computed(() => {
    const data = getStockData()
    if (showOnlyFav.value) {
        return data?.filter((item) => (
            stockStar.value?.find(x => x == item.StockNumber)
        ));
    }
    if (searchQuery.value.trim() != '') {
        return data?.filter((item) => (
            // item.StockSymbol
            // console.log('item ====> searchQuery.value ==>', item.StockSymbol)
            item.StockSymbol.toLowerCase().includes(searchQuery.value.toLowerCase())
        ));
    }
    // console.log("data ==> ", data)
    return data
});

</script>
