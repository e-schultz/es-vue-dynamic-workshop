<script setup>
import { reactive, ref } from "vue";
import useDynamicForm from "./useDynamicForm.js";
import FormGen from "./FormGen.vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import CheckBox from "./CheckBox.vue";

const formData = ref({});
useDynamicForm(formData);
const components = { TextField, SelectList, CheckBox };

const schema = [
  {
    component: "TextField",
    model: "firstName",
    props: { label: "First Name", placeholder: "Please Enter Your First name" },
  },
  {
    component: "TextField",
    model: "lastName",
    props: { label: "Last Name", placeholder: "Please Enter Your Last name" },
  },
  {
    component: "RadioGroup",
    model: "isTest",
    props: {
      label: "Some Test",
      options: ["yes", "no"],
    },
  },
  {
    component: "SelectList",
    model: "usingFor",
    props: {
      label: "Using For",
      options: ["Personal", "Work"],
    },
  },
  {
    component: "TextField",
    model: "companyName",
    props: { label: "Company Name" },
    condition: (e) => e.usingFor === "Work",
  },
  {
    component: "TextField",
    model: "email",
    props: { label: "Email", placeholder: "work email" },
    condition: (e) => e.usingFor === "Work",
  },
  {
    component: "SelectList",
    model: "industry",
    props: {
      label: "Industry",
      options: ["Industry 1", "Industry 2", "Industry 3", "Other"],
    },
    condition: (e) => e.usingFor === "Work",
  },
  {
    component: "CheckBox",
    model: "hasVueExpierience",
    props: {
      label: "Have you used Vue before?",
    },
  },
  {
    component: "TextField",
    model: "vueComment",
    props: {
      label: "What do you like about Vue?",
    },
    condition: {
      modelEq: {
        model: "hasVueExpierience",
        value: true,
      },
    },
  },
];
let handleUpdateModel = (model) => {
  formData.value = model;
};
let handleUpdate = (field, value) => {
  console.log("hi", { field, value });
  formData.value[field] = value;
};
</script>
<template>
  <div>
    <form>
      <fieldset>
        <legend>Signup 4 Details</legend>
        <FormGen :schema="schema" @update:modelValue="handleUpdateModel" />
      </fieldset>
    </form>
    {{ formData }}
  </div>
</template>
