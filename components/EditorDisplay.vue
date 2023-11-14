<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <div class="bg-gradient-to-r from-slate-500 to-gray-500 shadow-xl h-96 p-2">
    <div class="grid pb-2">
      <Button class="mx-auto">{{ label }}</Button>
    </div>
    <slot />
  </div>
</template>
