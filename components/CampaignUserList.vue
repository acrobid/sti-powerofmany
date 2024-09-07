<template>
  <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 rounded-lg mt-4">
    <h3 class="text-base font-semibold leading-6 text-gray-900 pb-8">
      Total signatures {{ people.length }}
    </h3>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div
        v-for="person in people"
        :key="person.nonUserName"
        class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
      >
        <div class="min-w-0 flex-1">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-gray-900">
              {{ person.nonUserName }}
            </p>
            <p class="truncate text-sm text-gray-500">
              {{ person.employeeId }}
            </p>
          </a>
        </div>
        <div>
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900">
            {{ person.nonUserEmail }}
          </p>
          <p class="truncate text-sm text-gray-500">{{ person.department }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  unionName: string;
}>();

interface NonUserInfo {
  nonUserName: string;
  employeeId: string;
  jobTitle: string;
  department: string;
  nonUserEmail: string;
  nonUserPhoneNum: string;
}
// const onePerson = {
//   name: "Leslie Alexander",
//   email: "leslie.alexander@example.com",
//   department: "Business Development",
//   role: "Co-Founder / CEO",
// };
// More people...
const people = ref<NonUserInfo[]>([]); // Array.from({ length: 20 }, () => ({ ...onePerson }));

onMounted(async () => {
  await fetchUnionInfo();
});

async function fetchUnionInfo() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  } as const;

  const url = `http://3.34.105.135:8000/nonUserList/${props.unionName}`;

  try {
    const result = (await $fetch(
      url,
      requestOptions,
    )) as unknown as NonUserInfo[];
    console.log({ result });
    people.value = result;
  } catch (error) {
    console.error("Error:", error);
  }
}
</script>
