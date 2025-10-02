<script setup lang="ts">
import { formatCurrency } from '@/composables/useApp';
import { Loader2 } from 'lucide-vue-next';

interface Features {
  name: string,
  value: boolean,
  addOn?: boolean
}

interface Props {
  planName: string,
  description: string,
  price: number,
  features: Features[],
  link?: string
}

const props = defineProps<Props>();

</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <div
      class="flex flex-col h-full p-8 rounded-2xl bg-body shadow-2xl shadow-gray-300/50 dark:shadow-none  border-2 border-gray-300 dark:border-gray-800 hover:border-primary-light transition-all duration-300">

      <h3 class="text-2xl font-bold mb-2 capitalize">
        {{ props.planName }}
      </h3>
      <p class="text-sm mb-6">
        {{ props.description }}
      </p>

      <div class="flex items-end mb-8">
        <span class="text-2xl md:text-3xl font-extrabold dark:text-white">
          {{ formatCurrency(props.price ?? 0) }}
        </span>
        <span class="text-lg font-medium text-primary dark:text-gray-300 ml-1">
          / month
        </span>
      </div>

      <ul class="space-y-4 flex-grow mb-10">
        <li class="flex items-start text-base" v-for="feature in props.features"
          :class="{ 'opacity-50': !feature.value }">
          <svg v-if="!feature.value" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 mr-3 shrink-0"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M6 18 18 6" />
          </svg>
          <span v-if="!feature.value">
            <del>{{ feature.name }}</del>
            <span v-if="feature.addOn">
              (Add-on)
            </span>
          </span>
          <Loader2 v-if="feature.value" class="text-primary mr-3" :size="30" :stroke-width="2" />
          <span v-if="feature.value">
            {{ feature.name }}
          </span>
        </li>
        <li class="flex items-start text-base opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 mr-3 shrink-0" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 18 18 6" />
          </svg>
          <span>
            <del>Staff Limit Increment</del> (Add-on)
          </span>
        </li>
      </ul>

      <a :href="'//app.eagleschoolmanager.com/get-started?plan=' + props.link" role="button"
        class="w-full px-8 py-3 text-lg text-white text-center rounded-xl shadow-md transition-all duration-300 ease-in-out bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-opacity-95 hover:bg-indigo-70 hover:shadow-lg outline outline-gray-400 dark:outline-gray-700">
        Get Started
      </a>

    </div>
  </div>
</template>

<style scoped></style>