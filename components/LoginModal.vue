<template>
  <!-- Modal -->
  <GenericModal v-model="isOpen" title="Log in to your account">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6">
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
          </div>
          <div class="mt-2">
            <UInput
              id="password"
              v-model="password"
              color="violet"
              variant="none"
              name="password"
              type="password"
              required
              class="block w-full rounded-md border-0 py-1.5 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <!-- Log In Button -->
        <div>
          <UButton
            color="violet"
            class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            @click="submitLogin"
          >
            Log in
          </UButton>
        </div>
      </form>
    </div>

    <!-- Register modal -->
    <div class="mt-10 text-center text-white">
      <p>No account yet?</p>
    </div>
    <div class="mt-2 text-center">
      <div class="mt-2 text-center">
        <UButton 
          @click="$emit('register')" 
          class="flex justify-center items-center w-1/2 mx-auto rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Register here
        </UButton>
      </div>
    </div>
  </GenericModal>
</template>

<script lang="ts" setup>
import { useStorage } from "@vueuse/core";

defineEmits(["register"]);
const isOpen = defineModel<boolean>();
const userToken = useStorage("userToken", "");

const email = ref("");
const password = ref("");

const router = useRouter();

async function submitLogin() {
  console.log(
    `Logging in with email: ${email.value} and password: ${password.value}`,
  );
  const json = {
    userId: email.value,
    userPwd: password.value,
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
    `http://3.34.105.135:8000/creators/login?userId=${email.value}&userPwd=${password.value}`,
    requestOptions,
  ).catch((error) => {
    console.error("Error:", error);
  });

  // @ts-expect-error no typing here
  userToken.value = result?.creator_id;

  console.log(userToken.value);

  if (userToken.value) {
    router.push({ path: "/UserInfo" });
    isOpen.value = false;
  }
}
</script>

<style scoped></style>
