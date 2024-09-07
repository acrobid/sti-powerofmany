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

        <!-- Chatbot Section Component -->
        <div class="relative mt-16 max-w-md mx-auto">
          <ChatBot/>
        </div>

        <p class="mt-6 text-center text-sm text-gray-400">
          Join today and make a difference.
          <a class="font-semibold text-reen-400 hover:text-violet-300"
            >Learn more</a
          >
        </p>
      </div>
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

const chatInput = ref("");
async function chat() {
  try {
    console.log(`Sending chat message: ${chatInput.value}`);
    const result = await $fetch("https://debisoft-magic.hf.space/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: ["Why are unions good?"] }),
    });

    console.log(result);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
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

.pulse-border {
  @keyframes pseudo-fade-in-out {
    0% {
      opacity: 1;
    }
    30% {
      scale: 1.05;
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
}

.pulse-border::after {
  content: ""; /* Create the pseudo-element */
  position: absolute; /* Position it absolutely relative to the parent */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: pseudo-fade-in-out 6s infinite;
  transition: outline 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  outline: 3px solid rgba(136, 0, 163, 0.5);
  outline-offset: 0px;
  border-radius: 12px;
  pointer-events: none; /* Ensure it doesn't interfere with interactions */
}
</style>
