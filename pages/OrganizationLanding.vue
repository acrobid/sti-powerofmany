<template>
  <div>
    <OrganizerInfoCard />
    <OrganizationSummaryCard v-if="isOrganizationCreated" />
    <CreateCampaign v-else />
  </div>
</template>

<script lang="ts" setup>
const isOrganizationCreated = ref(false);
</script>

<style></style>
