<template>
  <div>
    <nav class="bg-gray-900 text-white px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img
            src="/public/logo.webp"
            alt="Union Creation Logo"
            class="h-10 w-auto mr-4"
          />
          <div class="text-2xl font-bold">Form a union</div>
        </div>

        <div>
          <UButton
            color="violet"
            class="px-4 py-2 rounded mr-2"
            @click="loginModal = true"
          >
            Login
          </UButton>
          <UButton
            color="violet"
            class="px-4 py-2 rounded mr-2"
            @click="registerModal = true"
          >
            Sign Up
          </UButton>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Join the Union of Your Future
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Be part of a global movement, stand together, and make your voice
            heard. Learn about different unions and join the one that suits your
            goals.
          </p>
        </div>

        <div class="relative mt-16 max-w-md mx-auto">
          <div
            class="bg-gray-900 bg-opacity-80 rounded-xl p-6 shadow-lg text-center border border-violet-500 animate-pulse"
          >
            <h5 class="text-2xl font-bold text-white">
              Need help? Ask our chatbot about unions!
            </h5>
            <div class="relative mt-4 flex items-center space-x-3">
              <UInput
                id="search"
                v-model="chatInput"
                color="violet"
                type="text"
                name="search"
                class="block w-full px-4 py-2 border border-transparent rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
                placeholder="What benefits do unions offer?"
              />
              <UButton color="violet" class="px-6 py-2" @click="chat">
                Chat Now
              </UButton>
            </div>
          </div>
        </div>

        <p class="mt-6 text-center text-sm text-gray-400">
          Join today and make a difference.
          <a
            class="font-semibold text-reen-400 hover:text-violet-300"
            @click="loginModal = true"
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

    <!-- Footer Section -->
    <footer class="bg-gray-800 text-gray-400 py-10">
      <div
        class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <!-- About Section -->
        <div>
          <h3 class="font-semibold text-lg text-white">About Us</h3>
          <p class="mt-4">
            We connect people to unions and organizations to stand together for
            a common cause. Join the union that speaks for you!
          </p>
        </div>

        <!-- Links Section -->
        <div>
          <h3 class="font-semibold text-lg text-white">Quick Links</h3>
          <ul class="mt-4 space-y-2">
            <li><a href="#" class="hover:text-white">Join a Union</a></li>
            <li><a href="#" class="hover:text-white">Union Benefits</a></li>
            <li><a href="#" class="hover:text-white">Upcoming Events</a></li>
            <li><a href="#" class="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div>
          <h3 class="font-semibold text-lg text-white">Contact</h3>
          <p class="mt-4">Email: support@unioncreation.com</p>
          <p class="mt-2">Phone: +1 234 567 890</p>
        </div>

        <!-- Social Media Section -->
        <div>
          <h3 class="font-semibold text-lg text-white">Follow Us</h3>
          <div class="flex mt-4 space-x-4">
            <a href="#" class="hover:text-white">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.23 5.924c-.793.355-1.645.593-2.541.7a4.48 4.48 0 001.962-2.485 8.966 8.966 0 01-2.832 1.083A4.481 4.481 0 0015.447 4c-2.481 0-4.493 2.013-4.493 4.494 0 .353.04.696.117 1.025A12.73 12.73 0 012.228 5.425a4.482 4.482 0 001.388 5.98 4.428 4.428 0 01-2.034-.562v.057c0 2.194 1.561 4.022 3.635 4.435a4.513 4.513 0 01-2.026.077c.571 1.777 2.229 3.071 4.19 3.107a9.01 9.01 0 01-5.586 1.926c-.364 0-.725-.022-1.081-.064a12.698 12.698 0 006.897 2.021c8.28 0 12.806-6.861 12.806-12.807 0-.195-.004-.389-.013-.582a9.166 9.166 0 002.26-2.337z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <LoginModal v-model="loginModal" />
    <RegisterModal v-model="registerModal" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const loginModal = ref(false);
const registerModal = ref(false);

const chatInput = ref("");
const chat = () => {
  alert(`Chatting about: ${chatInput.value}`);
};
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
