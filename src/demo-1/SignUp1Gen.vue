<!-- <TextField
          v-model="formData.firstName"
          label="First Name"
          placeholder="Please Enter Your First Name"
        />
        <TextField
          v-model="formData.lastName"
          label="Last Name"
          placeholder="Please Enter
    Your Last Name"
        />
        <TextField label="Job Title" v-model="formData.jobTitle" />
        <RadioGroup
          label="Vue Expierience?"
          :options="['yes', 'no']"
          v-model="formData.hasVue"
        />-->
<script setup>
import { reactive, ref } from "vue";
import useDynamicForm from "./useDynamicForm.js";
import FormGen from "./FormGen.vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import CheckBox from "./CheckBox.vue";
import RadioGroup from "./RadioGroup.vue";
import UserAddress from "./UserAddress.vue";

const componentMap = {
  TextField,
  SelectList,
  CheckBox,
  RadioGroup,
  UserAddress,
};
const formData = ref({});
useDynamicForm(formData);
function handleSubmit(x, y) {
  console.log("submit", { x, y });
  console.log(x.target.value);
}
const createTextField = (model, label, placeholder = label) => ({
  component: "TextField",
  model,
  props: { label, placeholder },
});
const createRadioGroup = (model, label, options, placeholder = label) => ({
  component: "RadioGroup",
  model,
  props: {
    options,
    label,
    placeholder,
  },
});
const SCHEMA = [
  createTextField("firstName", "First Name"),
  createTextField("lastName", "Last Name"),
  createTextField("jobTitle", "Job Title"),
  createRadioGroup("hasVue", "Has Vue", ["yes", "no"]),
  {
    component: "UserAddress",
    model: "userAddress",
  },
];
</script>
<template>
  <div>
    {{ formData }}
    <form @submit.prevent="handleSubmit($event)">
      <fieldset>
        <legend>Signup Details</legend>
        <!--  <FormGen :schema="SCHEMA" />-->

        <!--
Before we make this a reusable component - all of the consumers
need to know how to map the components, or have them registered 

import:
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import CheckBox from "./CheckBox.vue";
import RadioGroup from "./RadioGroup.vue";

const componentMap = {
  TextField,SelectList,CheckBox,RadioGroup
}
-->
        <component
          v-for="row in SCHEMA"
          :is="componentMap[row.component]"
          v-bind="row.props"
          v-model="formData[row.model]"
        />
        <!--
  :modelValue="formData[row.model]"
  @update:modelValue="(e) => (formData[row.model] = e)"
-->

        <button type="submit">Go!</button>
      </fieldset>
    </form>
  </div>
</template>
