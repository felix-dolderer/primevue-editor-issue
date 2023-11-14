<script setup lang="ts">
const msg = ref("");
</script>

<template>
  <!-- Raises Warning -->
  <!--
    Hydration node mismatch:
    - Client vnode: Editor 
    - Server rendered DOM
  -->
  <Editor v-model="msg" />
  <p class="font-semibold text-white pb-1">Raises Warning</p>
  <p class="text-white">Hydration node mismatch:</p>
  <p class="text-white">- Client vnode: Editor</p>
  <p class="text-white">- Server rendered DOM</p>
</template>
