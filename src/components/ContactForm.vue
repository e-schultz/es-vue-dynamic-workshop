<script setup>
import TextInput from "@/components/TextInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";
import EmailInput from "@/components/EmailInput.vue";
</script>
<template>
  <div>
    <TextInput label="First Name" />
    <TextInput label="Last Name" />
    <TextInput label="UserName" maxlength="30" minlength="3" />
    <EmailInput label="Email" />
    <PasswordInput label="Password" />
  </div>
</template>
