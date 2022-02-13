<script setup>
defineProps(["blocks"]);
</script>
<template>
  <div class="columns">
    <div v-for="block in blocks" class="column">
      <component :is="block.component" :blocks="block.body" v-bind="block.props">
        <template v-if="block.slots">
          {{ block.slots }}
        </template>
      </component>
    </div>
  </div>
</template>
