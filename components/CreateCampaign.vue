<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h1 class="text-base font-semibold leading-7 text-indigo-700 lg:text-5xl">
        Create a Union
      </h1>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl"
      >
        Help us shape a stronger organization for workers.
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Fill out the form below to establish your union.
      </p>
    </div>
    <form
      class="mx-auto mt-16 max-w-xl sm:mt-20 bg-gray-50 p-8 rounded-lg shadow-lg"
    >
      <div class="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label
            for="organization-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Organization Name</label
          >
          <div class="mt-2.5">
            <UInput
              id="organization-name"
              v-model="organizationName"
              variant="none"
              type="text"
              name="organization-name"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="mission-statement"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Mission Statement</label
          >
          <div class="mt-2.5">
            <UInput
              id="mission-statement"
              v-model="missionStatement"
              variant="none"
              type="text"
              name="mission-statement"
              autocomplete="mission"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="what-we-do"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >What We Do</label
          >
          <div class="mt-2.5">
            <UInput
              id="what-we-do"
              v-model="whatWeDo"
              variant="none"
              type="text"
              name="what-we-do"
              autocomplete="what-we-do"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div class="mt-10">
        <UButton
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:shadow-lg hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="submitForm"
        >
          Sign and Submit
        </UButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
const userToken = useStorage("userToken", "");

const organizationName = ref("");
const missionStatement = ref("");
const whatWeDo = ref("");

async function submitForm() {
  console.log({
    organizationName: organizationName.value,
    missionStatement: missionStatement.value,
    whatWeDo: whatWeDo.value,
  });

  const json = {
    unionName: organizationName.value,
    whatWeDo: whatWeDo.value,
    missionStatement: missionStatement.value,
    qrCodeLink: `https://sti-powerofmany.vercel.app/NonUserUnion?unionName=${organizationName.value}`,
  };
  const raw = JSON.stringify(json);

  const requestOptions = {
    method: "POST",
    body: raw,
    headers: {
      "Content-Type": "application/json",
    },
  } as const;

  const url = `http://3.34.105.135:8000/unions/create/${userToken.value}`;

  const result = await $fetch(url, requestOptions).catch((error) => {
    console.error("Error:", error);
  });

  console.log({ result });
}
</script>
