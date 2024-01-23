import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserAuthenStore = defineStore('UserAuthen', () => {
  const userAuthen = ref('');

  const authenUser = computed(() => userAuthen.value);

  const setUserAuthenKey = (data:any) => {
    userAuthen.value = data
  }

  return { authenUser, setUserAuthenKey }
})
