<script setup>
defineProps(["label"]);
</script>
<template>
  <div class="field">
    <label class="label"> {{ label }} </label>
    <div class="control">
      <input
        type="text"
        autocomplete="disabled"
        class="input"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>
