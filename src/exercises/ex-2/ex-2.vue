<script setup>
import { ref } from "vue";
import TextField from "./components/TextField.vue";
import RadioGroup from "./components/RadioGroup.vue";
import UserAddress from "./components/UserAddress.vue";
const formData = ref({});
const SCHEMA = [
  {
    component: "TextField",
    model: "firstName",
    props: {
      label: "First Name",
      placeholder: "First Name",
    },
  },
  {
    component: "TextField",
    model: "lastName",
    props: {
      label: "Last Name",
      placeholder: "Last Name",
    },
  },
  {
    component: "TextField",
    model: "jobTitle",
    props: {
      label: "Job Title",
      placeholder: "Job Title",
    },
  },
  {
    component: "RadioGroup",
    model: "hasVue",
    props: {
      options: ["yes", "no"],
      label: "Has Vue",
      placeholder: "Has Vue",
    },
  },
  {
    component: "UserAddress",
    model: "userAddress",
  },
];
</script>
<template>
  <section>
    <div class="content">
      <h1>Initial Dynamic Form</h1>
      <h2>
        Replace the below form with one generated
        from the schema
      </h2>
    </div>
    <div class="block">
      <h2>Signup 1</h2>
      <form
        @submit.prevent="handleSubmit($event)"
      >
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
          <TextField
            label="Job Title"
            v-model="formData.jobTitle"
          />
          <RadioGroup
            label="Vue Expierience?"
            :options="['yes', 'no']"
            v-model="formData.hasVue"
          />
          <UserAddress
            v-model="formData.userAddress"
          />
          <button type="submit">Go!</button>
        </fieldset>
      </form>
    </div>
    <div class="block">
      debug:: {{ formData }}
    </div>
  </section>
</template>
