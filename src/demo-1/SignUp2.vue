<script setup>
import { ref } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
const formData = ref({});
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
        <TextField v-model="formData.email" label="Business Email" placeholder="email" />
        <TextField
          v-model="formData.companyName"
          label="Company Name"
          placeholder="Company Name"
        />
        <SelectList
          label="Job Title"
          :options="['Developer', 'Manager', 'Other']"
          v-model="formData.jobTitle"
        />
      </fieldset>
    </form>
    {{ formData }}
  </div>
</template>
