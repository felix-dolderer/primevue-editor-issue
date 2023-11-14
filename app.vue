<template>
  <div class="container grid gap-8 grid-cols-2 mx-auto p-8">
    <EditorDisplay label="Works fine">
      <EditorOkay />
    </EditorDisplay>
    <EditorDisplay label="Problematic">
      <EditorProblematic />
    </EditorDisplay>
    <EditorDisplay label="Problematic (Client-Only)">
      <EditorProblematicClient />
    </EditorDisplay>
  </div>
</template>

<style>
body {
  @apply bg-gradient-to-r;
  @apply from-cyan-500;
  @apply to-blue-500;
}
</style>
