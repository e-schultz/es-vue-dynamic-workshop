<script setup>
import { ref, computed, nextTick } from "vue";
defineProps(["label"]);
const emailField = ref();
const isEmailValid = ref(true);
function validate(e) {
  if (emailField && emailField.value) {
    console.log(emailField.value.validity);
    isEmailValid.value = !emailField.value.validity.valid;
  }
}
</script>
<template>
  <div class="field">
    <label class="label"> {{ label }} </label>
    <div class="control has-icons-left">
      <input
        type="email"
        autocomplete="on"
        :class="['input', !isEmailValid ? 'is-succes' : 'is-danger']"
        ref="emailField"
        @blur="validate"
      />
      <span
        class="icon is-small is-left"
        :class="{ 'has-text-danger': isEmailValid, 'has-text-success': !isEmailValid }"
      >
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>
</template>
