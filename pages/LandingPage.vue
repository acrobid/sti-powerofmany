<template>
  <div>
    <!-- Hero Section -->
    <div class="relative bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Form the Union of Your Future
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Be part of a global movement, stand together, and make your voice
            heard. Learn about the benefits of union formation and create one
            today.
          </p>
        </div>
      </div>
      <ChatBot />
    </div>

    <!-- Union Cards Section -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="union in unions"
          :key="union.id"
          class="bg-gray-800 p-6 rounded-lg text-white hover:bg-gray-700"
        >
          <h3 class="text-xl font-semibold">{{ union.name }}</h3>
          <p class="mt-3 text-sm">{{ union.description }}</p>
          <a
            :href="union.link"
            class="mt-4 block text-violet-400 hover:text-violet-300"
            >Learn more</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const unions = ref([
  {
    id: 1,
    name: "Korean Confederation of Trade Unions (KCTU)",
    description: "Website: http://kctu.org/",
    link: "http://kctu.org/",
  },
  {
    id: 2,
    name: "Federation of Korean Trade Unions (FKTU)",
    description: "Website: http://www.fktu.or.kr/",
    link: "http://www.fktu.or.kr/",
  },
  {
    id: 3,
    name: "Korean Metal Workers’ Union (KMWU)",
    description: "Website: http://www.kmwu.or.kr/",
    link: "http://www.kmwu.or.kr/",
  },
  {
    id: 4,
    name: "Korean Government Employees’ Union (KGEU)",
    description: "Website: http://www.kgeu.org/",
    link: "http://www.kgeu.org/",
  },
  {
    id: 5,
    name: "Korean Teachers and Education Workers Union (KTU)",
    description: "Website: http://www.eduhope.net/",
    link: "http://www.eduhope.net/",
  },
]);
</script>

<style scoped>
.hero {
  background-color: #1f2937; /* Dark background for the hero section */
}
</style>
