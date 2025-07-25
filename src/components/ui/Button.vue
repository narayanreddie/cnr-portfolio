<template>
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50',
      variantClass,
      customClass,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  tag?: 'a' | 'button';
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'default' | 'ghost' | 'toggle' | 'toggle-active';
  customClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  variant: 'default',
});

const variantClass = computed(() => {
  switch (props.variant) {
    case 'toggle':
      return 'bg-transparent text-primary hover:bg-primary/10';
    case 'toggle-active':
      return 'bg-primary text-primary-foreground shadow';
    default:
      return '';
  }
});
</script>