<script setup>
import { reactive } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
const formData = reactive({});
</script>
<template>
  <div>
    <form>
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
        <TextField v-model="formData.email" label="Work Email" placeholder="email" />
        <TextField
          v-model="formData.companyName"
          label="Company Name"
          placeholder="Company Name"
        />
        <SelectList
          label="Industry"
          :options="['Industry 1', 'Industry 2', 'Industry 3', 'Other']"
          v-model="formData.industry"
        />
      </fieldset>
    </form>
    {{ formData }}
  </div>
</template>
