<template>
  <div class="relative bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
        <OrganizerInfoCard />
        <div v-if="campaignExists">
          <OrganizationSummaryCard :company-name="companyName" />
          <CampaignUserList :union-name="companyName" />
        </div>
        <div v-else>
          <CreateCampaign />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const userToken = useStorage("userToken", "");

const companyName = ref("");
const campaignExists = computed(() => companyName.value !== "");

interface UnionInfo {
  unionName: string;
  qrCodeLink: string;
  signedCount: number;
  checkProfilesTF: boolean;
}

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

  const url = `http://3.34.105.135:8000/unions/read/${userToken.value}`;

  try {
    const result = (await $fetch(url, requestOptions)) as unknown as {
      unions: UnionInfo[];
    };
    console.log({ result });
    const unions = result.unions;
    if (unions && unions.length > 0) {
      companyName.value = unions[0].unionName;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
</script>
