<script setup>
import { ref, computed } from "vue";
import UserForm from "./UserForm.vue";
import MessageForm from "./MessageForm.vue";
const showUser = ref(true);
const showWhich = computed(() => {
  return showUser.value === true
    ? UserForm
    : MessageForm;
});
</script>
<template>
  <div class="container is-fluid">
    <div class="box">
      <header>
        <h1 class="title">Welcome!</h1>
      </header>
      <!--- toggle user and message section -->
      <section>
        <div class="control">
          <label class="radio">
            <input
              type="radio"
              name="showWhich"
              :value="true"
              v-model="showUser"
            />
            Display User
          </label>
          <label class="radio">
            <input
              type="radio"
              name="showWhich"
              :value="false"
              v-model="showUser"
            />
            Display Message - value of showUser is
            {{ showUser }}
          </label>
        </div>
      </section>

      <section>
        <component
          :is="showWhich"
          class="box"
          :name="'Evan'"
          :userName="'@evan_just_evan'"
          :email="'evan@rangle.io'"
          :subject="'I have questionss'"
          :question="'Too Many questions'"
        />
      </section>
    </div>
  </div>
</template>
