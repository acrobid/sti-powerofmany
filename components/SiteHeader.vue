<template>
  <div>
    <nav class="bg-gray-900 text-white px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img
            src="/public/logo.webp"
            alt="Union Creation Logo"
            class="h-10 w-auto mr-4"
          />
          <div class="text-2xl font-bold">Form a union</div>
        </div>

        <div v-if = "isLogedIn" >
          <UButton
            color="violet"
            class="px-4 py-2 rounded mr-2"
            @click="loginModal = true"
          >
            Login
          </UButton>
          <UButton
            color="violet"
            class="px-4 py-2 rounded mr-2"
            @click="registerModal = true"
          >
            Sign Up
          </UButton>
        </div>
        <button v-else class="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
      
      <LoginModal v-model="loginModal" @register="registerModal = true" />
      <RegisterModal v-model="registerModal" />
    </nav>
  </div>
</template>

<script lang="ts" setup>
const loginModal = ref(false);
const registerModal = ref(false);

const isLogedIn = ref(false);
</script>

<style></style>
