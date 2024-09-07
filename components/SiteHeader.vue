<template>
  <div>
    <nav class="bg-gray-900 text-white px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <NuxtImg
            src="logo.webp"
            alt="Union Creation Logo"
            class="h-10 w-auto mr-4"
          />
          <div class="text-2xl font-bold" style="text-wrap: pretty">
            Form A Union
          </div>
        </div>

        <div v-if="!isLoggedIn" class="gap-4 flex flex-end">
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
        <div v-else class="gap-4 flex flex-end">
          <UButton
            class="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded"
            @click="router.push('/UserInfo')"
            >Dashboard</UButton
          >
          <UButton
            class="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded"
            @click="logout"
          >
            Logout
          </UButton>
        </div>
      </div>

      <LoginModal v-model="loginModal" @register="registerModal = true" />
      <RegisterModal v-model="registerModal" />
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useStorage } from "@vueuse/core";

const router = useRouter();

const userToken = useStorage("userToken", "");
const loginModal = ref(false);
const registerModal = ref(false);

const isLoggedIn = computed(() => userToken.value !== "");

function logout() {
  userToken.value = "";
  router.push({ path: "/LandingPage" });
}
</script>

<style></style>
