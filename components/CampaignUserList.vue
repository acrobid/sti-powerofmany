<template>
  <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
    <h3 class="text-base font-semibold leading-6 text-gray-900 pb-8">
      Total signatures {{ people.length }}
    </h3>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div
        v-for="person in people"
        :key="person.email"
        class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        <div class="min-w-0 flex-1">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
            <p class="truncate text-sm text-gray-500">{{ person.role }}</p>
          </a>
        </div>
        <div>
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900">{{ person.email }}</p>
          <p class="truncate text-sm text-gray-500">{{ person.department }}</p>
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
// More people...
const people = Array.from({ length: 20 }, () => ({ ...onePerson }));
</script>
