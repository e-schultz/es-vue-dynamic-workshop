<!--
Since we areusing Bulma, we would like to use 
some of it's styling to layout our form fields.

The markup is getting a little heavy, and if we wanted to have more than a few fields on the page - this would quickly get messy.

- Refactor this component to create a CustomInput field
- it should work with v-model


-->
<script setup>
import { ref } from "vue";
const msg = ref("Hello World!");
import CustomInput from "./CustomInput.vue";
</script>

<template>
  <div class="section">
    <h1>{{ msg }}</h1>
    <h2>v-model Start point</h2>
    <!-- Refactor into a CustomInput that works with v-model -->
    <div class="box">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="e.g Alex Smith"
            v-model="msg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
