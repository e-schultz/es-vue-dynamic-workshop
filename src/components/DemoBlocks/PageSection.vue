<script setup>
defineProps(["blocks"]);
</script>
<template>
  <article class="is-medium">
    <component
      v-for="block in blocks"
      :is="block.component"
      :blocks="block.body"
      v-bind="block.props"
    >
      <template v-if="block.slots">
        {{ block.slots }}
      </template>
    </component>
  </article>
</template>
