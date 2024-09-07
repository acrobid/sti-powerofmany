<template>
  <!-- Modal -->
  <UModal v-model="isOpen">
    <div class="bg-gray-900 p-8 rounded-lg shadow-lg">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="/public/logo.webp"
          alt="Union Creation Logo"
        />
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white"
        >
          {{ title }}
        </h2>
      </div>
      <slot />
    </div>
  </UModal>
</template>

<script lang="ts" setup>
const isOpen = defineModel<boolean>();
defineProps<{ title: string }>();
</script>
