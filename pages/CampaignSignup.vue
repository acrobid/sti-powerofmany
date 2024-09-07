<!-- Working on this page -->
<!-- N1: union_name title should be pulled from the backend -->
<!-- N2: the submit & redirect button should redirect to a completion page -->
<!-- N3: completion page should be added still! -->

<template>
  <div>
    <!-- NOTE 1: dynamic union_name input from backend -->
     UNION_NAME
  </div>
  <div>
    <UInput v-model="nonuser_name" size="sm" color="white" placeholder="Name" />
    <UInput v-model="department" size="sm" color="white" placeholder="Department" />
    <UInput v-model="job_title" size="sm" color="white" placeholder="Job title" />
    <UInput v-model="employee_id" size="sm" color="white" placeholder="Employee Id" />
    <UInput v-model="email" size="sm" color="white" placeholder="Email address" />
    <UInput v-model="phone_number" size="sm" color="white" placeholder="Phone number" />
    <UButton>Submit and Sign</UButton> <!-- Note 2: Should redirect to completion page -->
  </div>
</template>

<script lang="ts" setup>
const nonuser_name = ref('')
const employee_id = ref('')
const job_title = ref('')
const department = ref('')
const email = ref('')
const phone_number = ref('')

</script>

<style>

</style>