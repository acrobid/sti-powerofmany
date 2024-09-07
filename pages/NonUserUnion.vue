<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h1
          class="text-base font-semibold leading-7 text-indigo-700 lg:text-5xl"
        >
          Union Name
        </h1>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl"
        >
          Join us in building a stronger voice for workers.
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
      <div class="mx-auto mt-5 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
      <div class="flex justify-center mt-12">
        <UButton
          :to="link"
          class="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:shadow-lg hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full sm:w-auto"
        >
          Join the union
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouteQuery } from "@vueuse/router";

const unionName = useRouteQuery("unionName", "");

const link = computed(() => `/CampaignSignup?unionName=${unionName.value}`);
console.log(link.value);

const features = [
  {
    name: "WHAT WE DO",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa. Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
  },
  {
    name: "OUR MISSION",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet. Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
  },
];
</script>
