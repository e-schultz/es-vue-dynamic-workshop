<script setup>
import { ref, computed } from "vue";
import UserForm from "./UserForm.vue";
import MessageForm from "./MessageForm.vue";
const showUser = true;
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
        <UserForm
          class="box"
          :name="'Evan'"
          :userName="'@evan_just_evan'"
          :email="'evan@rangle.io'"
        />

        <MessageForm
          class="box"
          :subject="'I have questionss'"
          :question="'Too Many questions'"
          :email="'evan@rangle.io'"
        />
      </section>
    </div>
  </div>
</template>

<!--<component :is="showWhich" />-->
<!--  <div class="box">
        <component
          :is="UserForm"
          :name="'Evan Test'"
          :userName="'@evan_just_evan'"
          :email="'evan@rangle.io'"
        ></component>
      </div>

      <div class="box">
        <component
          :is="MessageForm"
          class="box"
          :subject="'I have questionss'"
          :question="'Too Many questions'"
          :email="'evan@rangle.io'"
        />
      </div>-->
<!--
      
      -->
<!--
      <div class="box">
        <component
          :is="showWhich"
          v-bind="userDetails"
        />
      </div>-->
<!--"User Form and Message Form as Components" -->

<!--
const showWhich = computed(() => {
  return showUser.value === true
    ? UserForm
    : MessageForm;
});

const userDetails = ref({
  name: "Evan",
  userName: "@evan_just_evan",
  email: "evan@rangle.io",
  isValid: false,
});
-->
