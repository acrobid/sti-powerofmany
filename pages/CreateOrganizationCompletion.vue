<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h1
          class="text-base font-semibold leading-7 text-indigo-700 lg:text-5xl"
        >
          {{ unionName }}
        </h1>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl"
        >
          Thank you for working for greater equality!
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          <QRCode :link="qrLink" />
        </p>
        <UButton color="violet" class="mt-6" @click="router.push('/UserInfo')"
          >Return to Dashboard</UButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouteQuery } from "@vueuse/router";

const router = useRouter();

const unionName = useRouteQuery("unionName", "");
const qrLink = useRouteQuery("qrLink", "");
</script>
