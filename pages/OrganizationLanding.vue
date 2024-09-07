<template>
  <div>
    <OrganizerInfoCard />
    <OrganizationSummaryCard v-if="isOrganizationCreated" />
  </div>
</template>

<script lang="ts" setup>
const isOrganizationCreated = ref(true);
</script>

<style></style>
