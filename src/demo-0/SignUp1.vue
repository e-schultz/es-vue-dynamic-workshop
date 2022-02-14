<script setup>
import { reactive } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import RadioGroup from "./RadioGroup.vue";
const formData = reactive({});
function handleSubmit(x, y) {
  console.log("submit", { x, y });
  console.log(x.target.value);
}
</script>
<template>
  <div>
    <h2>Signup 1</h2>
    <form @submit.prevent="handleSubmit($event)">
      <fieldset>
        <legend>Signup Details</legend>
        <TextField
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
        />
        <button type="submit">Go!</button>
      </fieldset>
    </form>
    {{ formData }}
  </div>
</template>
