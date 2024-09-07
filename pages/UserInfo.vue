<template>
  <div>
    <HeaderPage/>

    <!-- Main Content Area -->
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-8 space-y-6">
      <OrganizerInfoCard />
      <OrganizationSummaryCard />
      <CampaignUserList />
    </div>
    <FooterPage />
  </div>
</template>

<script setup>
  import HeaderPage from '@/components/HeaderPage.vue'
  import FooterPage from '@/components/FooterPage.vue'
</script>

