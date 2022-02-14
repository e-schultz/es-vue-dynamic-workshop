<script setup>
defineProps(["label"]);
</script>
<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">{{ label }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            v-bind="$attrs"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
