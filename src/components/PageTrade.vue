<template>
    <div>
        <button @click="toggleSeachbutton" class="text-xs">{{ buttonType1 }}</button>
        <svg class="mt-0.5 w-4 fill-[#afb3bd]  hover:fill-white mb-1 ml-2 inline-block duration-300"
            xmlns="http://www.w3.org/2000/svg" width="14.001" height="13.092" viewBox="0 0 14.001 13.092">
            <g id="Group_40035" data-name="Group 40035" transform="translate(-437.389 555.06) rotate(-90)">
                <path id="Union_97" data-name="Union 97"
                    d="M6849.726-8279.488v-11.632l-1.8,1.759a.563.563,0,0,1-.78,0,.532.532,0,0,1,0-.76l2.735-2.672a.561.561,0,0,1,.389-.157.565.565,0,0,1,.191.036.03.03,0,0,0,.021.006.567.567,0,0,1,.191.123l2.727,2.664a.529.529,0,0,1,0,.76.561.561,0,0,1-.778,0l-1.794-1.75v11.623a.549.549,0,0,1-.55.539A.549.549,0,0,1,6849.726-8279.488Zm-6.156.5a.033.033,0,0,0-.022-.006.555.555,0,0,1-.19-.123l-2.728-2.663a.532.532,0,0,1,0-.762.563.563,0,0,1,.778,0l1.794,1.753v-11.625a.548.548,0,0,1,.55-.538.548.548,0,0,1,.552.538v11.631l1.8-1.759a.563.563,0,0,1,.778,0,.531.531,0,0,1,0,.762l-2.734,2.67a.558.558,0,0,1-.389.159A.565.565,0,0,1,6843.57-8278.986Z"
                    transform="translate(-6298.502 8730.339)" />
            </g>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const buttonType = ref(['%CHG', 'CHG', 'PO']);
const buttonType1 = ref('%CHG');

const toggleSeachbutton = () => {
    let num = buttonType.value.indexOf(buttonType1.value);
    let sum = (num + 1) % buttonType.value.length;
    // console.log(num, sum);
    if (num == 2) {
        console.log(buttonType.value[0])
        buttonType1.value = buttonType.value[0]
    }
    else {
        console.log(buttonType.value[sum])
        buttonType1.value = buttonType.value[sum];
    }
}

</script>
