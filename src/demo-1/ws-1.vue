<script setup>
import { ref } from "vue";
import TextField from "./components/TextField.vue";
import SignUp1 from "./forms/SignUp1.vue";
import SignUp2 from "./forms/SignUp2.vue";
import SignUp3 from "./forms/SignUp3.vue";
import SignUp4 from "./forms/SignUp4.vue";
import SignUp4Gen from "./forms/SignUp4Gen.vue";
import SignUp1Gen from "./forms/SignUp1Gen.vue";
import UserAddress from "./components/UserAddress.vue";

// this is feeling closer to the 2nd or 3rd step --- not the first
// thats ok for now
let formData = ref({
  userAddress: {},
});
let schema = [
  {
    component: TextField,
    model: "firstName",
    props: {
      placeholder: "Enter First Name",
      label: "First Name",
    },
  },
  {
    component: "TextField",
    model: "lastName",
    props: {
      placeholder: "Enter Last Name",
      label: "Last Name",
    },
  },
];
function update(model, value) {
  console.log("updating", { model, value });
  formData.value[model] = value;
}
</script>
<template>
  <div class="section">
    <h1>Welcome - Intro</h1>
    <component
      v-for="row in schema"
      :is="row.component"
      v-bind="row.props"
      :modelValue="formData[row.model]"
      @update:modelValue="
        update(row.model, $event)
      "
    />

    <h2>Output</h2>
    <ul>
      <li>
        First Name: {{ formData.firstName }}
      </li>
      <li>Last Name: {{ formData.lastName }}</li>
    </ul>
    -
    <div class="box">
      <SignUp1Gen />
    </div>
    <!--
    <div class="box">
      <SignUp4Gen />
    </div>
    <div class="box">
      <UserAddress
        v-model="formData.userAddress"
      />
      {{ formData }}
    </div>-->
    <!--<SignUp4Gen />-->
    <!--<SignUp1Gen />-->
  </div>
</template>

<!--
speaker notes - rough draft

-->
