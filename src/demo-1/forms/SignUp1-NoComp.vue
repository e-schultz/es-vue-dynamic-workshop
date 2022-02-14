<script setup>
import { reactive, ref } from "vue";
import TextField from "./components/TextField.vue";
import SelectList from "./components/SelectList.vue";
import RadioGroup from "./components/RadioGroup.vue";
const formData = ref({});
</script>
<template>
  <div>
    <form @submit.prevent="handleSubmit($event)">
      <fieldset>
        <legend>Signup Details</legend>
        <fieldset class="flex">
          <label>First name</label>

          <input
            type="text"
            :name="'firstName'"
            autocomplete="off"
            v-model="formData.firstName"
            :placeholder="'First Name'"
          />

          <label>Last name</label>

          <input
            type="text"
            :name="'lastName'"
            autocomplete="off"
            v-model="formData.lastName"
            :placeholder="'Last Name'"
          />
        </fieldset>

        <label
          >Job Title

          <input
            class="mt-1 block w-full"
            type="text"
            :name="'jobTitle'"
            autocomplete="off"
            v-model="formData.jobTitle"
            :placeholder="'Job Title'"
          />
        </label>
        <label>
          Has Vue Expierence?
          <input
            type="radio"
            id="one"
            value="Yes"
            v-model="formData.hasVue"
          />
          <label>Yes</label>
          <input
            type="radio"
            id="two"
            value="No"
            v-model="formData.hasVue"
          />
          <label>No</label>
        </label>
        <br />
        <button type="submit">Go!</button>
      </fieldset>
    </form>
    {{ formData }}
  </div>
</template>
