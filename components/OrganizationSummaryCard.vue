<template>
  <div class="bg-white shadow rounded-lg overflow-hidden">
    <div class="p-6 border-b border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900">Union Organizing Campaign</h3>
      <p class="mt-1 text-sm text-gray-500">Campaign details and goals.</p>
    </div>
    <div class="p-6">
      <dl class="divide-y divide-gray-200">
        <div class="py-4 flex items-center justify-between">
          <dt class="text-sm font-medium text-gray-900">Company</dt>
          <dd class="text-sm text-gray-700">{{ companyName }}</dd>
        </div>
        <div class="py-4 flex items-center justify-between">
          <dt class="text-sm font-medium text-gray-900">Union goals</dt>
          <dd class="text-sm text-gray-700">{{ unionGoals }}</dd>
        </div>
        <div class="py-4 flex items-center justify-between">
          <dt class="text-sm font-medium text-gray-900">Union mission statement</dt>
          <dd class="text-sm text-gray-700">{{ unionMissionStatement }}</dd>
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
