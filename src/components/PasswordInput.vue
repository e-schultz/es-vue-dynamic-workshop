<script setup>
import { ref, computed } from "vue";
defineProps(["label"]);
const revealPassword = ref(false);
const fieldType = computed(() => {
  return revealPassword.value ? "text" : "password";
});
const field = ref();
const checkStuff = (e) => {
  console.log(field.value.checkValidity());
  console.log(field.value.validity);
};
</script>
<template>
  <div class="field">
    <label class="label"> {{ label }}</label>
    <div class="control has-icons-left">
      <input
        :type="fieldType"
        autocomplete="disabled"
        minlength="3"
        maxlength="10"
        class="input"
        ref="field"
        @blur="checkStuff"
      />
      <span
        class="icon is-small is-left is-clickable"
        @click="revealPassword = !revealPassword"
      >
        <span v-show="!revealPassword">
          <i class="fas fa-eye"></i>
        </span>
        <span v-show="revealPassword">
          <i class="fas fa-eye-slash"></i>
        </span>
      </span>
    </div>
  </div>
</template>
