<template>
  <GenericModal v-model="isOpen" title="Register for a new account">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-300">Email address</label>
          <div class="mt-2">
            <UInput
              id="email"
              v-model="email"
              color="violet"
              variant="none"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:bg-gray-700 focus:text-white focus:ring-gray-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <!-- Password Input -->
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-300">Password</label>
          </div>
          <div class="mt-2">
            <UInput
              id="password"
              v-model="password"
              color="violet"
              variant="none"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <!-- Confirm Password Input -->
        <div>
          <div class="flex items-center justify-between">
            <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-300">Confirm Password</label>
          </div>
          <div class="mt-2">
            <UInput
              v-model="confirmPassword"
              color="violet"
              variant="none"
              name="confirm-password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
          <div v-if="password !== confirmPassword" class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-red-300">{{ passwordConfirmHint }}</label>
          </div>
        </div>

        <!-- Sign Up Button -->
        <div>
          <UButton
            type="submit"
            color="violet"
            class="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="isDisabled"
            @click="submitRegistration"
          >
            Sign up
          </UButton>
        </div>
      </form>
    </div>

    <!-- Close Button -->
      <div class="mt-10 text-center">
        <UButton 
          @click="isOpen = false" 
          class="flex justify-center items-center w-1/2 mx-auto rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Close
        </UButton>
      </div>
  </GenericModal>
</template>


<script lang="ts" setup>
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const isOpen = defineModel<boolean>();
const isDisabled = computed(() => !email.value || !password.value);
const doPasswordsMatch = computed(
  () => password.value === confirmPassword.value,
);
const passwordConfirmHint = computed(() => {
  if (!confirmPassword.value) return "";
  return doPasswordsMatch.value ? "Passwords match" : "Passwords do not match";
});

async function submitRegistration() {
  const json = {
    creatorName: "홍길동",
    emailName: "hong@example.com",
    birthDate: "1990-01-01",
    phoneNum: "01012345678",
    userId: "hong123",
    userPwd: "securepassword",
  };
  const raw = JSON.stringify(json);

  const requestOptions = {
    method: "POST",
    body: raw,
    headers: {
      "Content-Type": "application/json",
    },
  } as const;

  const result = await $fetch(
    "http://3.34.105.135:8000/creators/register",
    requestOptions,
  ).catch((error) => {
    console.error("Error:", error);
  });

  console.log({ result });
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
