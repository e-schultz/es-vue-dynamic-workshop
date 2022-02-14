<script setup>
defineProps([
  "modelValue",
  "name",
  "placeholder",
  "label",
]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        class="input"
        type="text"
        v-bind="$attrs"
        :name="name"
        :value="modelValue"
        @input="
          $emit(
            'update:modelValue',
            $event.target.value
          )
        "
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
};
</script>
