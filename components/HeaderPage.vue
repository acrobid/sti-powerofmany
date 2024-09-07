<template>
    <nav class="bg-gray-900 text-white px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img src="/public/logo.webp" alt="Union Creation Logo" class="h-10 w-auto mr-4" />
          <div class="text-2xl font-bold">Union Creation</div>
        </div>
        <button @click="logout" class="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </nav>
</template>
  
<script lang="ts" setup>
  function logout() {
    // Handle logout logic here
    alert("Logged out");
  }
</script>
  
<style scoped></style>
  