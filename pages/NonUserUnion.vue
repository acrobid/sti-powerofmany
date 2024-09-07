<!-- Working on this page -->
<!-- N1: union_name title should be pulled from the backend -->
<!-- N2: what_we_do text should be pulled from the backend -->
<!-- N3: mission_statement text should be pulled from the backend -->
<!-- N4: Should redirect to CampaignSignup page -->

<template>
  <div>
    <h1>Union Name</h1>
    <!-- NOTE 1: dynamic union_name input from backend -->
    UNION_NAME
  </div>
  <div>
    <h1>What we do</h1>
    <!-- NOTE 2: dynamic what_we_do input from backend -->
    WHAT_WE_DO
  </div>
  <div>
    <h1>Mission statement</h1>
    <!-- NOTE 3: dynamic mission_statement input from backend -->
    MISSION_STATEMENT
  </div>
  <div>
    <h3>Do you want to support this union?</h3>
    <UButton>Sign up here</UButton> <!-- Note 4: Should redirect to CampaignSignup page -->
  </div>
</template>

<script lang="ts" setup>
</script>

<style>

</style>