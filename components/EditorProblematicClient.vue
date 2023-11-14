<script setup lang="ts">
const msg = ref("");
</script>

<template>
  <ClientOnly>
    <!-- Raises Warning -->
    <!--
      Failed to resolve component: Editor
    -->
    <Editor v-model="msg" />
  </ClientOnly>
  <p class="font-semibold text-white pb-1">Raises Warning</p>
  <p class="text-white">Failed to resolve component: Editor</p>
</template>
