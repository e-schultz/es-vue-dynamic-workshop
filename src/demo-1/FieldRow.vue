<script setup>
import { inject, provide, ref, reactive } from "vue";
import FormField from "./FormField.vue";
import useParsedSchema from "./useParsedSchema.js";
const props = defineProps(["schema", "row"]);
//const { parsedSchema } = useParsedSchema(props.schema);
//console.log({ parsedSchema });
</script>
<template>
  <div class="schema-rowcd">
    <FormField
      v-for="field in row"
      :field="field"
      v-bind="$attrs"
      :key="field.model"
      class="schema-col"
    />
  </div>
</template>
