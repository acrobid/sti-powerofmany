<template>
  <!-- Navbar -->
  <nav class="bg-gray-800 text-white px-6 py-4">
    <div class="flex justify-between items-center">
      <div class="text-2xl font-bold">MyPlatform</div>
      <div>
        <button @click="openModal('login')" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2">
          Login
        </button>
        <button @click="openModal('signup')" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </div>
  </nav>

  <!-- Landing Page Content -->
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>
    </div>
  </div>

  <!-- Import and use the modal components -->
  <LoginModal :isOpen="isModalOpen && modalType === 'login'" @close="closeModal" />
  <RegisterModal :isOpen="isModalOpen && modalType === 'signup'" @close="closeModal" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const modalType = ref('')

function openModal(type: string) {
  modalType.value = type
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}
</script>

<style scoped></style>




