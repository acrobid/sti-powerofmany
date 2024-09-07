<template>
  <div class="bg-white shadow rounded-lg overflow-hidden mt-12">
    <div class="p-6 border-b border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900">Total signatures ({{ people.length }})</h3>
    </div>
    <div class="p-6">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          v-for="person in people"
          :key="person.email"
          class="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
        >
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
            <p class="text-sm text-gray-500">{{ person.role }}</p>
          </div>
          <div class="text-sm text-gray-500">
            <p>{{ person.email }}</p>
            <p>{{ person.department }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const onePerson = {
  name: "Leslie Alexander",
  email: "leslie.alexander@example.com",
  department: "Business Development",
  role: "Co-Founder / CEO",
};
const people = Array.from({ length: 20 }, () => ({ ...onePerson }));
</script>
