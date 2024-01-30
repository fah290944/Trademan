<template>
  <Disclosure as="nav" class="bg-blak-trade">
    <div class="sticky top-0 z-50 border-b dark:border-borderGray dark:border-opacity-25 border-opacity-25">
      <div class="backgroung-navbar w-full h-[55px] px-2 sm:px-6 lg:px-8 flex justify-center">
        <div class="container flex justify-between px-12">
        <ul class="flex justify-start items-center gap-[25px] text-[15px] text-white">
          <li>
            <img class="w-[128px] h-[51px]" src="../assets/icons/landingPage-logo.svg" alt="" />
          </li>
          <li>
            <a class="hover:text-yellowPrev" href="">Market</a>
          </li>
          <li>
            <a class="hover:text-yellowPrev" href="/trade">Trade</a>
          </li>
          <li>
            <a class="hover:text-yellowPrev" href="">Portfolio</a>
          </li>
          <li>
            <a class="hover:text-yellowPrev" href="">Bubble</a>
          </li>
          <li class="flex">
            <a class="hover:text-yellowPrev" href="">Coachman</a>
            <img class="h-[16px] ml-1 mt-[-3px]" src="../assets/icons/new_feature.png" alt="" />
          </li>
        </ul>
        <ul class="flex justify-end items-center gap-3 text-[15px] text-white">
          <li class="flex items-center">
            <svg class="w-5 h-5 z-10 fill-[#fff]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m18.1 6.659c-1.81 0-2.55-1.28-1.65-2.85a1.9 1.9 0 0 0 -.7-2.59l-1.73-.99a1.669 1.669 0 0 0 -2.28.6l-.11.19c-.9 1.57-2.38 1.57-3.29 0l-.11-.19a1.641 1.641 0 0 0 -2.26-.6l-1.73.99a1.908 1.908 0 0 0 -.7 2.6c.91 1.56.17 2.84-1.64 2.84a1.906 1.906 0 0 0 -1.9 1.9v1.76a1.906 1.906 0 0 0 1.9 1.9c1.81 0 2.55 1.28 1.64 2.85a1.9 1.9 0 0 0 .7 2.59l1.73.99a1.669 1.669 0 0 0 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19a1.669 1.669 0 0 0 2.28.6l1.73-.99a1.9 1.9 0 0 0 .7-2.59c-.91-1.57-.17-2.85 1.64-2.85a1.906 1.906 0 0 0 1.9-1.9v-1.76a1.921 1.921 0 0 0 -1.91-1.9zm-8.1 6.03a3.25 3.25 0 1 1 3.25-3.25 3.256 3.256 0 0 1 -3.25 3.25z"
                transform="translate(2 2.561)" />
              <path d="m0 0h24v24h-24z" fill="none" opacity="0" transform="matrix(-1 0 0 -1 24 24)" />
            </svg>
            <span class="px-2 text-[16px]" href="">Setting</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 z-10 fill-[#fff]" viewBox="0 0 24.766 24.766" xmlns="http://www.w3.org/2000/svg">
              <path d="m0 0h24.766v24.766h-24.766z" fill="none" opacity="0" />
              <path d="m10.319 5.159a5.159 5.159 0 1 1 -5.16-5.159 5.159 5.159 0 0 1 5.16 5.159z"
                transform="translate(7.223 2.064)" />
              <path
                d="m9.38 0c-5.17 0-9.38 3.467-9.38 7.739a.511.511 0 0 0 .516.516h17.728a.511.511 0 0 0 .516-.516c0-4.272-4.21-7.739-9.38-7.739z"
                transform="translate(3.003 14.963)" />
            </svg>
            <span class="px-2" href="">130532</span>
          </li>
          <li>
            <img class="w-[90px]"
              src="../assets/image/iconsimulator.png"
              alt="">
          </li>
        </ul>
        </div>
      </div>
  </div>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure } from '@headlessui/vue'


const navigation = [
  { name: 'Marget', href: '#', current: false },
  { name: 'Trade', href: '/trade', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Bubble', href: '#', current: false },
  { name: 'Coachnan', href: '#', current: false },
]
</script>