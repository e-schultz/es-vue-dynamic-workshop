<script setup>
defineProps(["title", "subtitle", "blocks"]);
</script>
<template>
  <h1 class="title">{{ title }}</h1>
  <h2 class="subtitle">
    <span v-html="subtitle"></span>
  </h2>
</template>
