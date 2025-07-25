<template>
  <Section id="experience" title="Experience" description="">
    <ul>
      <li
        v-for="(exp, i) in experiences"
        :key="i"
        class="experience mb-0 p-2 pl-4 pb-4 last:pb-0 rounded-md relative md:transition-colors md:hover:bg-primary/5 md:pl-2 md:mb-4 md:last:mb-0 md:pb-0 last:[&>div:first]:bg-purple-700"
      >
        <!-- decorative bar + dot -->
        <div
          aria-hidden
          class="absolute top-[1rem] left-0 h-full w-8 flex flex-col items-start md:hidden"
        >
          <span class="w-2 h-2 flex-shrink-0 flex-grow-0 block rounded-full bg-primary" />
          <span class="w-[0.1rem] h-full bg-primary ml-[0.2rem] mt-[-0.1rem]" />
        </div>

        <div>
          <p class="text-muted-foreground" :aria-label="exp.duration.replace(/-/, 'to')">
            {{ exp.duration }}
          </p>
          <p class="text-primary">{{ exp.location }}</p>
        </div>

        <div>
          <h3>
            <a
              :href="exp.website"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-start"
            >
              <span>{{ exp.title }}</span>
              <span class="ml-[0.1rem]">
                <MoveUpRight class="w-3 h-3" />
              </span>
            </a>
          </h3>

          <div>
            <p
              v-for="(des, j) in exp.descriptions"
              :key="j"
              class="text-muted-foreground mb-1 last:mb-0"
            >
              {{ des }}
            </p>
          </div>

          <ul class="flex items-center justify-start flex-wrap mt-2">
            <Tech v-for="tec in exp.techs" :key="tec" :name="tec" />
          </ul>
        </div>
      </li>
    </ul>
  </Section>
</template>

<script setup lang="ts">
import { MoveUpRight } from 'lucide-vue-next';
import Section from '@/components/home/section.vue';
import Tech from '@/components/home/tech.vue';
import { experiences } from './data';
</script>

<style scoped>
@import './index.css';
</style>