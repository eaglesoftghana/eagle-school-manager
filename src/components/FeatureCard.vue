<script setup lang="ts">
import type { LucideProps } from 'lucide-vue-next';
import type { FunctionalComponent } from 'vue';

type LucideIcon = FunctionalComponent<LucideProps>


interface Props {
  icon: LucideIcon,
  heading: string,
  text: string
}

const props = defineProps<Props>();

</script>

<template>
  <div :title="props.heading"
    class="card p-6 rounded-xl bg-body shadow-lg border border-gray-100 w-full  max-w-md dark:border-gray-700 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
    <div class="flex flex-col items-center text-center">
      <span
        class="mb-3 flex h-15 w-15 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light">
        <component :is="props.icon" :size="30" />
      </span>
      <h4 class="text-lg font-semibold  capitalize leading-snug mb-2">
        {{ props.heading }}
      </h4>
      <p class="text-sm text-gray-500 dark:text-gray-300">
        {{ props.text }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>