<script setup>
defineProps(["blocks", "isPrimary"]);
</script>
<template>
  <section :class="['message', isPrimary === true ? 'is-primary' : '']">
    <component v-for="block in blocks" :is="block.component">
      <span v-html="block.slots"></span>
    </component>
  </section>
</template>
