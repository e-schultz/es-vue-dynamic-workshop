<script setup>
import { reactive, ref } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import FormField from "./FormField.vue";
import CheckBox from "./CheckBox.vue";

const props = defineProps(["schema"]);
const emits = defineEmits(["update:modelValue", "update:formValue"]);

const components = { TextField, SelectList, CheckBox };
const formData = ref({});
function removeField(fieldName) {
  delete formData.value[fieldName];
}
</script>
<template>
  <div>
    <template v-for="(field, index) in schema">
      <FormField
        :field="field"
        v-bind="$attrs"
        :formData="formData"
        @delete:formModel="removeField"
      />
    </template>
  </div>
</template>
