<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h1 class="text-base font-semibold leading-7 text-indigo-700 lg:text-5xl">
        Union Name
      </h1>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl"
      >
        Join us in building a stronger voice for workers.
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Register for our union by filling out the form below.
      </p>
    </div>
    <form
      action="#"
      method="POST"
      class="mx-auto mt-16 max-w-xl sm:mt-20 bg-gray-50 p-8 rounded-lg shadow-lg"
      @submit="submitForm"
    >
      <div class="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >First name</label
          >
          <div class="mt-2.5">
            <UInput
              id="first-name"
              v-model="firstName"
              variant="none"
              type="text"
              name="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Last name</label
          >
          <div class="mt-2.5">
            <UInput
              id="last-name"
              v-model="lastName"
              variant="none"
              type="text"
              name="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="job_title"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Job title</label
          >
          <div class="mt-2.5">
            <UInput
              id="job_title"
              v-model="jobTitle"
              variant="none"
              type="text"
              name="job_title"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="department"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Department</label
          >
          <div class="mt-2.5">
            <UInput
              id="department"
              v-model="department"
              variant="none"
              type="text"
              name="department"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="employee_id"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Employee ID</label
          >
          <div class="mt-2.5">
            <UInput
              id="employee_id"
              v-model="employeeId"
              variant="none"
              type="text"
              name="employee_id"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >Email</label
          >
          <div class="mt-2.5">
            <UInput
              id="email"
              v-model="email"
              variant="none"
              type="email"
              name="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch
              v-model="agreed"
              :class="[
                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              ]"
            >
              <span class="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                :class="[
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                ]"
              />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-gray-600">
            By selecting this, you agree to our
            {{ " " }}
            <a href="#" class="font-semibold text-indigo-600"
              >privacy&nbsp;policy</a
            >.
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:shadow-lg hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign and Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const email = ref("");
const firstName = ref("");
const lastName = ref("");
const jobTitle = ref("");
const department = ref("");
const employeeId = ref("");

const agreed = ref(false);

function submitForm() {
  console.log({
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    jobTitle: jobTitle.value,
    department: department.value,
    employeeId: employeeId.value,
    agreed: agreed.value,
  });
}
</script>
