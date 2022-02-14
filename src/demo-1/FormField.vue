<!-- idea 
- when a compoent loads - it makes an API call to get it's own schema 
  - doing this nested?
  
-->
<script setup>
import { reactive, ref, computed, isRef, inject, watch } from "vue";
import { FORM_MODEL } from "./constants.js";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import CheckBox from "./CheckBox.vue";
import RadioGroup from "./RadioGroup.vue";

const props = defineProps(["field"]);
const emit = defineEmits(["update:modelValue", "update:formValue", "delete:formModel"]);
const components = { TextField, SelectList, CheckBox, RadioGroup };

const formData = inject(FORM_MODEL);

const schemaCondition = computed(() => {
  const condition = props.field.condition;

  let result = true;
  if (!condition) return true;

  if (typeof condition === "function") {
    result = condition(formData.value);
  } else if (condition.modelEq) {
    result = formData.value[condition.modelEq.model] === condition.modelEq.value;
  }

  return result;
});
watch(schemaCondition, (shouldDisplay) => {
  // since we are getting formData from the injection
  // can modify it down here
  delete formData.value[props.field.model];
});
</script>
<template>
  <component
    :is="components[field.component]"
    v-model="formData[field.model]"
    @update:modelValue="$emit('update:formValue', field.model, $event)"
    v-bind="field.props"
    v-if="schemaCondition"
  />
</template>
