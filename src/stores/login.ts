import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('UserAuthen', () => {
  const userAuthen = ref('');
  const socket = ref('');

  const authenUser = computed(() => userAuthen.value);
  const socketUser = computed(() => socket.value);

  const setUserAuthenKey = (data:any) => {
    userAuthen.value = data.AuthenInfo.AuthenKey
    socket.value = data.AuthenInfo.Socket
  }

  return { authenUser, socketUser, setUserAuthenKey }
})
