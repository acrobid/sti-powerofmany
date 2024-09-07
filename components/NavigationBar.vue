<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="flex flex-shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</a
            >
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 wrap-80"
      >
        <div class="flex justify-between items-center">
          <div class="">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const navigation = [
  { name: "BecomeAnOrganizer", href: "/BecomeAnOrganizer", current: false },
  { name: "LandingPage", href: "/LandingPage", current: false },
  { name: "OrganizationLanding", href: "/OrganizationLanding", current: false },
  { name: "QR", href: "/QR", current: false },
  { name: "UnionInfo", href: "/UnionInfo", current: false },
  { name: "CampaignSignup", href: "/CampaignSignup", current: false },
  { name: "LoginPage", href: "/LoginPage", current: false },
  { name: "OrganizationSignup", href: "/OrganizationSignup", current: false },
  { name: "RegisterPage", href: "/RegisterPage", current: false },
  { name: "UserInfo", href: "/UserInfo", current: false },
  { name: "CheckProfile", href: "/CheckProfile", current: false },
  { name: "NonUserUnion", href: "/NonUserUnion", current: false },
  { name: "OrganizerHub", href: "/OrganizerHub", current: false },
  { name: "SignIn", href: "/SignIn", current: false },
];
</script>

<style scoped>
.wrap-80 {
  display: inline-block;
  max-width: 80%;
  white-space: normal;
  word-wrap: break-word;
}
</style>
