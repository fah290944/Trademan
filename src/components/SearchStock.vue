<template>
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
</template>

<script setup lang="ts">
import { computed, ref, type PropType } from "vue";

const props = defineProps({
    dataAll: {
        type: Array as PropType<Array<{ StockSymbol: string; StockFullName: string }>>,
        required: true,
    },
    dataStock: {
        type: Array as PropType<Array<{ StockSymbol: string; StockFullName: string }>>,
        required: true,
    },
});

const emit = defineEmits(['send-message'])

let searchQuery = ref('')

const findStock = computed(() => {

    const filteredStocks = props.dataStock.filter((item) => (
        // console.log("item ==>",item.StockSymbol.toLowerCase().includes(searchQuery.value.toLowerCase()))
        item.StockSymbol.toLowerCase().includes(searchQuery.value.toLowerCase())
    ));
    console.log('filteredStocks ==>', filteredStocks)
    emit('send-message', filteredStocks);

})

</script>
