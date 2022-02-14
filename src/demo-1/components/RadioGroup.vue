<script setup>
import { ref } from "vue";
defineProps(["options", "name", "label", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div>
    <label
      >{{ label }}
      <template v-for="(option, index) in options">
        <input
          type="radio"
          :value="option"
          :checked="modelValue === option"
          :name="name"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <label>{{ option }}</label>
      </template>
    </label>
  </div>
</template>
