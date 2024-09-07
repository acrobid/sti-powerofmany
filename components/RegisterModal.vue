<template>
  <UModal v-model="isOpen">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white"
      >
        Sign in to your account
      </h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-300"
            >Email address</label
          >
          <div class="mt-2">
            <UInput
              id="email"
              v-model="email"
              variant="none"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-300"
              >Password</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-400 hover:text-indigo-300"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <UInput
              id="password"
              v-model="password"
              variant="none"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <UButton
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            :disabled="isDisabled"
            @click="submitRegistration"
          >
            Sign in
          </UButton>
        </div>
      </form>
    </div>
    <div class="my-4 text-center">
      <UButton
        class="text-gray-400 hover:text-gray-200"
        @click="isOpen = false"
      >
        Close
      </UButton>
    </div>
  </UModal>
</template>

<script lang="ts" setup>
const email = ref("");
const password = ref("");

const isOpen = defineModel<boolean>("isOpen");
const isDisabled = computed(() => !email.value || !password.value);

function submitRegistration() {
  console.log("Submitting registration...");
}
</script>

<style scoped>
.fade-in {
  transition: opacity 0.5s;
  opacity: 0;
}
.fade-in-enter-active {
  opacity: 1;
}

.fade-out {
  transition: opacity 0.5s;
  opacity: 1;
}
.fade-out-leave-active {
  opacity: 0;
}
</style>
