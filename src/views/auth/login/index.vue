<template>
  <div class="bg-[#FAFAFA]">
    <div class="h-[50vh] bg-[#0052CC]"></div>
    <div class="absolute inset-0 bottom-0 left-0 flex justify-center items-center h-screen">
      <div class="h-[25rem] w-[32rem] rounded-[10px] overflow-hidden drop-shadow-lg bg-[#ffffff]">
        <div><h1 class="font-bold text-[21px] pt-[40px] text-center">Login</h1></div>
        <form action="" @submit.prevent="login">
          <label for="#" class="block pl-[80px] pt-[40px]">
            <span class="block text-[12px] text-slate-700">Username</span>
            <input v-model="formData.username" type="text" class="border w-[340px] h-[44px] mt-2 pl-[8px]" required />
          </label>
          <label for="#" class="block pl-[80px] pt-[20px]">
            <span class="block text-[12px] text-slate-700">Password</span>
            <input v-model="formData.password" :type="showPassword ? 'text' : 'password'" class="border w-[340px] h-[44px] mt-2 pl-[8px]" required />
            <a href="#" @click="showPassword = !showPassword">
            </a>
          </label>
          <button class="w-[98px] h-[40px] ml-[201px] mt-[40px] text-sm bg-[#1963D2] hover:bg-blue-700 text-white px-2 py-2 rounded" style="text-align: center;" type="'submit'">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    useAuthStore
  } from "@/stores/auth.store.js"

  export default {
    data() {
      return {
        authStore: useAuthStore(),
        formData: {
          username: "",
          password: "",
        },
        showPassword: false
      }
    },
    methods: {
      login() {
        this.authStore.login(this.formData)
      }
    }
  }
</script>
