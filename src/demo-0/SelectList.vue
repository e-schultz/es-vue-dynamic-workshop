<script setup>
defineProps([
  "multi",
  "options",
  "name",
  "label",
  "modelValue",
]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <!--<div>
    <label
      >{{ label }}
      <select
        class="mt-1 w-full"
        :multiple="multi"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option value="" disabled>Select One</option>
        <option v-for="option in options" :key="option">
          {{ option }}
        </option>
      </select>
    </label>
  </div>-->

  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <div class="select">
        <select
          :multiple="multi"
          :value="modelValue"
          @input="
            $emit(
              'update:modelValue',
              $event.target.value
            )
          "
        >
          <option value="" disabled>
            Select One
          </option>
          <option
            v-for="option in options"
            :key="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
