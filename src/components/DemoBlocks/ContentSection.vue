<script setup>
defineProps(["blocks"]);
</script>
<template>
  <div class="content">
    <component v-for="block in blocks" :is="block.component" :blocks="block.body">
      {{ block.slots }}
    </component>
  </div>
</template>
