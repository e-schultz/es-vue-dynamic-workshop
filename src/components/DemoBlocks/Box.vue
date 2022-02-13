<script setup>
defineProps(["blocks"]);
</script>
<template>
  <div class="box">
    <slot>
      <component v-for="block in blocks" :is="block.component" :blocks="block.body">
      </component>
    </slot>
  </div>
</template>
