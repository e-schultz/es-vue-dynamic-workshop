<script setup>
defineProps(["subject", "question", "email"]);
import TextInput from "@/components/TextInput.vue";
import TextArea from "@/components/TextArea.vue";
</script>
<template>
  <div class="container">
    <TextInput label="Subject" :value="subject" />
    <TextInput
      label="From Email:"
      :value="email"
    />
    <TextArea
      label="Question:"
      :value="question"
    />
  </div>
</template>
