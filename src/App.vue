<script setup lang="ts">
import { RouterView} from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

// import { onMounted } from "vue";
// import useLoginUser from '@/utils/loginUser';


// const { getUserLogin } = useLoginUser();
// onMounted(async () => {
//   await getUserLogin();
// });

</script>


<template>
  <div class="bg-black-555">
    <Navbar/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style>
</style>

