<script setup>
import { ref } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import SignUp1 from "./SignUp1.vue";
import SignUp2 from "./SignUp2.vue";
import SignUp3 from "./SignUp3.vue";
import SignUp4 from "./SignUp4.vue";
import SignUp4Gen from "./SignUp4Gen.vue";

const selectedSignup = ref("SignUp1");
const SIGNUPS = {
  SignUp1,
  SignUp2,
  SignUp3,
  SignUp4,
  SignUp4Gen,
};
// this is feeling closer to the 2nd or 3rd step --- not the first
// thats ok for now
let formData = ref({});
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
    component: TextField,
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
    <SelectList
      label="Preview Form"
      :options="[
        'SignUp1',
        'SignUp2',
        'SignUp3',
        'SignUp4',
        'SignUp4Gen',
      ]"
      v-model="selectedSignup"
    />
    <div
      class="block border-2 border-solid border-black p-4 m-4"
    >
      <component :is="SIGNUPS[selectedSignup]" />
    </div>
  </div>
</template>

<!--
speaker notes - rough draft

-->
