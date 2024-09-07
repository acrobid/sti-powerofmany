<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-6 sm:px-6">
      <h3 class="text-base font-semibold leading-7 text-gray-900">
        Union organizing campaign
      </h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Details</p>
    </div>
    <div class="border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Company</dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ companyName }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Union goals</dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ unionGoals }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">
            Union mission statement
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ unionMissionStatement }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const companyName = ref("");

const unionGoals = ref("");
const unionMissionStatement = ref("");

interface UnionInfo {
  unionName: string;
  qrCodeLink: string;
  signedCount: number;
  checkProfilesTF: boolean;
}

const userToken = useStorage("userToken", "");

onMounted(async () => {
  await fetchUnionInfo();
});

async function fetchUnionInfo() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  } as const;

  const url = `http://3.34.105.135:8000/creators/create/${userToken.value}`;

  const result = (await fetch(url, requestOptions).catch((error) => {
    console.error("Error:", error);
  })) as unknown as UnionInfo[];

  companyName.value = result[0].unionName;
}
</script>

<style></style>
