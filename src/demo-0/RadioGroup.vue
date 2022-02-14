<script setup>
import { ref } from "vue";
const props = defineProps(["multi", "options", "name", "label", "modelValue"]);
defineEmits(["update:modelValue"]);
let model = ref(props.modelValue);
</script>
<template>
  <div>
    <label
      >{{ label }}
      <template v-for="(option, index) in options">
        <input
          type="radio"
          :value="option"
          :name="name"
          v-model="model"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <label>{{ option }}</label>
      </template>
    </label>
  </div>
</template>
