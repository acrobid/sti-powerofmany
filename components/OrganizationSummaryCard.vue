<template>
  <div class="bg-white shadow rounded-lg overflow-hidden">
    <div class="p-6 border-b border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900">Union Organizing Campaign</h3>
      <p class="mt-1 text-sm text-gray-500">Campaign details and goals.</p>
    </div>
    <div class="p-6">
      <dl class="divide-y divide-gray-200">
        <div class="py-4 flex items-center justify-between">
          <dt class="text-sm font-medium text-gray-900">Company</dt>
          <dd class="text-sm text-gray-700">{{ companyName }}</dd>
        </div>
        <div class="py-4 flex items-center justify-between">
          <dt class="text-sm font-medium text-gray-900">Union goals</dt>
          <dd class="text-sm text-gray-700">{{ unionGoals }}</dd>
        </div>
        <div class="py-4 flex items-center justify-between">
          <dt class="text-sm font-medium text-gray-900">Union mission statement</dt>
          <dd class="text-sm text-gray-700">{{ unionMissionStatement }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
const companyName = "Acme.org";
const unionGoals = "To improve working conditions and wages for all employees";
const unionMissionStatement =
  "Our mission is to empower workers to stand together for fair wages, job security, and the respect they deserve.";
</script>
