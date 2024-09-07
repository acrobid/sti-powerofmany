<template>
  <button
    class="bg-gray-800 w-full p-4 rounded-lg flex items-center space-x-3 hover:bg-gray-700"
    @click="$emit('startChat', question)"
  >
    <span class="bg-gray-700 p-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-violet-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </span>
    <p>{{ question }}</p>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  question: string;
}>();
defineEmits<{
  startChat: [input: string];
}>();
</script>

<style></style>
