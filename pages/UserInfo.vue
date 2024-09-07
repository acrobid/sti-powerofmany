<template>
  <div class="relative bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
        <OrganizerInfoCard />
        <div v-if="campaignExists">
          <OrganizationSummaryCard />
          <CampaignUserList />
        </div>
        <div v-else>
          <CreateCampaign />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const campaignExists = ref(true);
</script>
