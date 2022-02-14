<script setup>
import { ref, computed, watch, reactive } from "vue";
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
import TextField from "./TextField.vue";
// if this is reactive - the watch can work like
//
/*
const addressForm = reactive({
  address1: "",
  address2: "",
  country: "",
  city: "",
  prov: "",
});
watch(addressForm, (form) => {
  console.log("hi boo");
});

if ref --- then need to watch on addressForm.value

const addressForm = ref({
  address1: "",
  address2: "",
  country: "",
  city: "",
  prov: "",
});
watch(addressForm.value, (form) => {
  console.log("hi boo");
});
*/
const addressForm = ref({
  address1: "",
  address2: "",
  country: "",
  city: "",
  prov: "",
});
watch(addressForm.value, (form) => {
  console.log(form, form.value);
  emit("update:modelValue", form);
});
</script>
<template>
  <div>
    <TextField label="Address 1" v-model="addressForm.address1" />
    <TextField label="Address 2" v-model="addressForm.address2" />
    <div class="flex">
      <TextField label="Country" v-model="addressForm.country" />
      <TextField label="City" v-model="addressForm.city" />
      <TextField label="Prov" v-model="addressForm.prov" />
    </div>
  </div>
</template>
