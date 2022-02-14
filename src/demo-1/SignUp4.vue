<script setup>
import { reactive, ref } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
const formData = ref({});
function clearFields() {
  let { firstName, lastName, usingFor, ...rest } = formData.value;

  formData.value = { firstName, lastName, usingFor };
}
</script>
<template>
  <div>
    <form>
      <fieldset>
        <legend>Signup 4 Details</legend>
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
        <SelectList
          label="Using For"
          :options="['Personal', 'Work']"
          v-model="formData.usingFor"
          @update:modelValue="clearFields"
        />
        <TextField
          v-model="formData.workEmail"
          label="Work Email"
          placeholder="email"
          v-if="formData.usingFor === 'Work'"
        />
        <TextField
          v-model="formData.companyName"
          label="Company Name"
          placeholder="Company Name"
          v-if="formData.usingFor === 'Work'"
        />
        <SelectList
          label="Industry"
          :options="['Industry 1', 'Industry 2', 'Industry 3', 'Other']"
          v-model="formData.industry"
          v-if="formData.usingFor === 'Work'"
        />
      </fieldset>
    </form>
    {{ formData }}
  </div>
</template>
