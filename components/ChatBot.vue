<template>
  <div class="relative mt-16 max-w-md mx-auto pulse-border">
    <div
      class="bg-gray-900 bg-opacity-80 rounded-xl p-6 shadow-lg text-center border border-violet-500"
    >
      <h5 class="text-2xl font-bold text-white">
        Need help? Ask our chatbot about unions!
      </h5>
      <div class="relative mt-4 flex items-center space-x-3">
        <UInput
          id="search"
          v-model="chatInput"
          variant="none"
          color="violet"
          type="text"
          name="search"
          class="block w-full px-4 py-2 border border-transparent rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
          placeholder="What benefits do unions offer?"
        />
        <UButton
          color="violet"
          class="mt-4 px-6 py-2"
          :loading="loading"
          @click="chat(chatInput)"
        >
          Chat Now
        </UButton>
      </div>
    </div>
    <p class="mt-6 text-center text-sm text-gray-400">
      <TypewriterEffect
        :key="chatKey"
        :options="{
          strings: chatOutput,
          delay: 35,
        }"
      />
    </p>
    <div class="flex mt-6 grid grid-cols-1 gap-4">
      <ChatBotExampleButton
        v-for="question in unionQuestions"
        :key="question"
        :question="question"
        @start-chat="(input: string)=>useExampleQuestion(input)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const chatInput = ref("");
const chatOutput = ref<string | string[]>([
  "Unions reduce income inequality.",
  "Unions provide better benefits.",
  "Unions protect workers from exploitation.",
]);
const chatKey = computed(() =>
  Array.isArray(chatOutput.value)
    ? chatOutput.value.join("")
    : chatOutput.value,
);
const loading = ref(false);

async function useExampleQuestion(question: string) {
  chatInput.value = question;
  await chat(question);
}

async function chat(input: string) {
  loading.value = true;
  const json = {
    input,
  };

  const raw = JSON.stringify(json);

  const requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  } as const;

  const url = `http://3.34.105.135:8000/chatbot`;

  interface ChatResponse {
    response: string;
  }

  const result = (await $fetch(url, requestOptions)
    .catch((error) => {
      console.error("Error:", error);
      return;
    })
    .finally(() => {
      loading.value = false;
    })) as unknown as ChatResponse;
  chatOutput.value = result.response;
  console.log({ result });
  console.log(chatOutput.value);
}

const unionQuestions = [
  "What are the benefits of joining a union?",
  "How much are union dues, and what do they cover?",
  "How does the union handle grievances and disputes?",
  "Will joining a union affect my job security?",
  "What is the process for joining a union?",
  "How do unions negotiate contracts with employers?",
  "What role do I play as a union member?",
  "How do unions ensure that employers comply with agreements?",
  "Can I be forced to join a union?",
  "What happens if I disagree with the union’s decisions?",
];
</script>

<style scoped>
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
