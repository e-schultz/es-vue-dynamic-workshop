<script setup>
import { reactive, ref, computed, isRef } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import CheckBox from "./CheckBox.vue";

const props = defineProps(["field", "formData"]);
const emit = defineEmits(["update:modelValue", "update:formValue", "delete:formModel"]);
const components = { TextField, SelectList, CheckBox };

const schemaCondition = computed(() => {
  const condition = props.field.condition;
  const formData = props.formData;
  if (!condition || typeof condition !== "function") return true;
  console.log(formData, isRef(formData));
  if (condition(formData)) {
    return true;
  } else {
    emit("delete:formModel", props.field.model);
    return false;
    // delete formData.value[props.field.model];
    //return false;
  }
});
</script>
<template>
  <div>
    <component
      :is="components[field.component]"
      v-model="props.formData[field.model]"
      @update:modelValue="$emit('update:formValue', field.model, $event)"
      v-bind="field.props"
      v-if="schemaCondition"
    />
  </div>
</template>
