<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-6 sm:px-6">
      <h3 class="text-base font-semibold leading-7 text-gray-900">
        Organizer Details Information
      </h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        Personal details and application.
      </p>
    </div>
    <div class="border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Full name</dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ organizerName }}
          </dd>
        </div>
      </dl>
    </div>
    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-900">Email address</dt>
      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {{ organizerEmail }}
      </dd>
    </div>
  </div>
</template>

<script lang="ts" setup>
const organizerName = ref("John Doe");
const organizerEmail = ref("johndoe@gmail.com");
</script>

<style></style>
