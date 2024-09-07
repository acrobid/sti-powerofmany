<template>
    <div class="max-w-3xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg p-6 space-y-4 border border-violet-500 ">
      <!-- Chat Header -->
      <div class="flex items-center space-x-4">
        <img
          class="h-12 w-12 rounded-full"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Chatbot Avatar"
        />
        <div>
          <h2 class="text-2xl font-bold">UNION CHATBOT</h2>
          <p class="text-gray-400">
            Need help? Ask our chatbot about unions!
          </p>
        </div>
      </div>
  
      <!-- Predefined Bot Suggestions (as buttons) -->
      <div class="space-y-3">
        <button
          @click="submitPredefinedQuestion('What are the main benefits of joining a union?')"
          class="bg-gray-800 w-full p-4 rounded-lg flex items-center space-x-3 hover:bg-gray-700"
        >
          <span class="bg-gray-700 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p>What are the main benefits of joining a union?</p>
        </button>
  
        <button
          @click="submitPredefinedQuestion('How can I start a union at my workplace?')"
          class="bg-gray-800 w-full p-4 rounded-lg flex items-center space-x-3 hover:bg-gray-700"
        >
          <span class="bg-gray-700 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p>How can I start a union at my workplace?</p>
        </button>
  
        <button
          @click="submitPredefinedQuestion('Can I join a union if I work remotely?')"
          class="bg-gray-800 w-full p-4 rounded-lg flex items-center space-x-3 hover:bg-gray-700"
        >
          <span class="bg-gray-700 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p>Can I join a union if I work remotely?</p>
        </button>
  
        
  
      </div>
  
      <!-- Conversation History -->
      <div class="space-y-4 mt-8">
        <div
          v-for="message in conversationHistory"
          :key="message.id"
          class="flex flex-col space-y-2">
          <!-- User Message -->
          <div
            v-if="message.type === 'user'"
            class="self-end bg-violet-600 p-3 rounded-lg max-w-xs"
          >
            <p>{{ message.text }}</p>
          </div>
  
          <!-- Bot Response -->
          <div v-if="message.type === 'bot'" class="self-start bg-gray-800 p-3 rounded-lg max-w-xs">
            <p>{{ message.text }}</p>
          </div>
        </div>
      </div>
  
      <!-- User Input -->
      <div class="mt-4">
        <input
          v-model="userInput"
          @keydown.enter="sendMessage"
          id="user-input"  
          name="user-input"  
          type="text"
          placeholder="Write your own question.."
          class="w-full p-3 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-violet-500"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const userInput = ref('')
  const conversationHistory = ref([])
  
  const submitPredefinedQuestion = (question) => {
    // Push the user's question to the chat
    conversationHistory.value.push({
      id: Date.now(),
      type: 'user',
      text: question,
    })
  
    // Simulate bot response
    setTimeout(() => {
      conversationHistory.value.push({
        id: Date.now() + 1,
        type: 'bot',
        text: `Here is the answer to your question: "${question}".`,
      })
    }, 1000)
  }
  
  const sendMessage = () => {
    if (userInput.value.trim()) {
      // Add user message to history
      conversationHistory.value.push({
        id: Date.now(),
        type: 'user',
        text: userInput.value,
      })
  
      // Simulate bot response
      setTimeout(() => {
        conversationHistory.value.push({
          id: Date.now() + 1,
          type: 'bot',
          text: `Here is the answer to your question: "${userInput.value}".`,
        })
      }, 1000)
  
      // Clear user input
      userInput.value = ''
    }
  }
  </script>
  
  <style scoped>
  /* Optional styles */
  </style>
  