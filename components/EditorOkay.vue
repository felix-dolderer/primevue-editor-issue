<script setup lang="ts">
import Editor from "primevue/editor";

const msg = ref("");
</script>

<template>
  <Editor v-model="msg" />
</template>
