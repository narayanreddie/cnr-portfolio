<template>
  <Section
    id="technologies"
    title="Technologies"
    description="Languages / Frameworks / Tools I have worked with."
  >
    <!-- tab buttons -->
    <header class="border-b border-border py-2">
      <ul class="flex items-center justify-start">
        <li v-for="tab in tabs" :key="tab" class="mr-1">
          <button
            :class="[
              'px-3 py-1.5 text-sm rounded-md transition-colors cursor-pointer',
              currentCategory === tab
                ? 'bg-primary text-white shadow'
                : 'bg-transparent text-white hover:bg-primary/10',
            ]"
            @click="currentCategory = tab"
          >
            {{ tab }}
          </button>
        </li>
      </ul>
    </header>

    <!-- tech chips -->
    <ul class="flex items-center justify-start flex-wrap mt-4">
      <Tech
        v-for="tech in filteredTechs"
        :key="tech.name"
        :name="tech.name"
      />
    </ul>
  </Section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Section from '@/components/home/section.vue';
import Tech from '@/components/home/tech.vue';
import { tabs, techs } from './data';

type Tab = typeof tabs[number];
const currentCategory = ref<Tab>('All'); // ← exact match to tabs array

const filteredTechs = computed(() =>
  currentCategory.value === 'All'
    ? techs
    : techs.filter((t) =>
        (t.category as ReadonlyArray<string>).includes(currentCategory.value)
      )
);
</script>