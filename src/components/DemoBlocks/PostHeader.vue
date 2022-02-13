<script setup>
defineProps(["title", "subtitle"]);
</script>
<template>
  <div class="block"><TitleSection :title="title" :subtitle="subtitle" /></div>
</template>
