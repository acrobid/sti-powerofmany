<template>
  <!-- Modal -->
  <GenericModal v-model="isOpen" title="Log in to your account">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <!-- Email -->
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-300"
            >Email address</label
          >
          <div class="mt-2">
            <UInput
              id="email"
              variant="none"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <!-- Password -->
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-300"
              >Password</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <UInput
              id="password"
              color="violet"
              variant="none"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <!-- Log In Button -->
        <div>
          <UButton
            type="submit"
            color="violet"
            class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Log in
          </UButton>
        </div>
      </form>
    </div>

    <!-- Close Modal -->
    <div class="mt-4 text-center">
      <UButton color="violet" @click="isOpen = false"> Close </UButton>
    </div>
  </GenericModal>
</template>

<script lang="ts" setup>
const isOpen = defineModel<boolean>();
</script>

<style scoped></style>
