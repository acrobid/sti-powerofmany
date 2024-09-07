<template>
  <div class="bg-white shadow rounded-lg overflow-hidden">
    <div class="p-6 border-b border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900">Organizer Details</h3>
      <p class="mt-1 text-sm text-gray-500">Personal details and application.</p>
    </div>
    <div class="p-6">
      <dl class="divide-y divide-gray-200">
        <div class="py-4 flex items-center justify-between">
          <dt class="text-sm font-medium text-gray-900">Full name</dt>
          <dd class="text-sm text-gray-700">{{ organizerName }}</dd>
        </div>
        <div class="py-4 flex items-center justify-between">
          <dt class="text-sm font-medium text-gray-900">Email address</dt>
          <dd class="text-sm text-gray-700">{{ organizerEmail }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
const organizerName = ref("John Doe");
const organizerEmail = ref("johndoe@gmail.com");
</script>
