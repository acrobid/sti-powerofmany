<template>
  <div class="bg-gray-900 py-12 sm:py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="space-y-8">
        <!-- Organizer Info Card -->
        <OrganizerInfoCard />

        <!-- Conditional Content -->
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

<script setup lang="ts">
const campaignExists = ref(true);
</script>
