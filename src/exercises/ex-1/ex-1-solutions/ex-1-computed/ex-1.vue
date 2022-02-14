<script setup>
import { ref, computed } from "vue";
import Login from "./Login.vue";
import LoggedIn from "./LoggedIn.vue";
import Comment from "./Comment.vue";
import MiscFields from "./MiscFields.vue";

const activeTab = ref("Comment");
const isLoggedIn = ref(false);
const displayTab = computed(() => {
  switch (activeTab.value) {
    case "Comment":
      return Comment;
    case "Login":
      return isLoggedIn.value ? LoggedIn : Login;
    case "MiscFields":
      return MiscFields;
  }
});
</script>

<template>
  <div class="box">
    <h1>
      Component :is Tab Example - end - computed
    </h1>
    <h2>
      {{ activeTab }}
    </h2>
    <input type="checkbox" v-model="isLoggedIn" />
    Is Logged In?
  </div>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li>
          <a @click.prevent="activeTab = 'Login'"
            >Login</a
          >
        </li>
        <li>
          <a
            @click.prevent="activeTab = 'Comment'"
            >Comment</a
          >
        </li>
        <li>
          <a
            @click.prevent="
              activeTab = 'MiscFields'
            "
            >Misc Fields</a
          >
        </li>
      </ul>
    </div>
    <div class="box">
      <component :is="displayTab" />
    </div>
  </div>
</template>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
