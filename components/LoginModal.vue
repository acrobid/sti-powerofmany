<template>
  <!-- Modal -->
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="/public/logo.webp" alt="Union Creation Logo">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Log in to your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-300">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required
                     class="block w-full rounded-md border-0 py-1.5 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6">
            </div>
          </div>

          <!-- Password -->
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-300">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-green-400 hover:text-green-300">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required
                     class="block w-full rounded-md border-0 py-1.5 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6">
            </div>
          </div>

          <!-- Log In Button -->
          <div>
            <button type="submit"
                    class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
              Log in
            </button>
          </div>
        </form>

        <!-- Not a member? Register Link -->
        <p class="mt-10 text-center text-sm text-gray-400">
          Not a member?
          <a @click.prevent="switchToSignUp" href="#" class="font-semibold leading-6 text-green-400 hover:text-green-300">Register now!</a>
        </p>
      </div>

      <!-- Close Modal -->
      <div class="mt-4 text-center">
        <button @click="closeModal" class="text-gray-400 hover:text-gray-200">Close</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emits = defineEmits(['close', 'switchToSignUp'])

// Close modal function
function closeModal() {
  emits('close')
}

// Switch to Sign-Up modal
function switchToSignUp() {
  emits('switchToSignUp')
}
</script>

<style scoped></style>

  