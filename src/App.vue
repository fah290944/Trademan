<script setup lang="ts">
import { RouterView} from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>


<template>
  <div class="bg-black-555">
    <Navbar/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style>
/* @font-face {
  font-family: "tuffy-bold";
  src: local("tuffy-bold"),
  url("./assets/fonts/Tuffy-Bold.woff") format("Bold");
}
@font-face {
  font-family: "tuffy-BoldItalic";
  src: local("tuffy-BoldItalic"),
  url("./assets/fonts/Tuffy-BoldItalic.woff") format("boldItalic");
} */
/* @font-face {
  font-family: "tuffy-Italic";
  src: local("tuffy-Italic"),
  url("./assets/fonts/Tuffy-Italic.woff") format("italic");
}
@font-face {
  font-family: "tuffy-Regular";
  src: local("tuffy-Regular"),
  url("./assets/fonts/Tuffy-Regular.woff") format("regular");
} */

</style>

