<script setup>
import { ref, computed } from "vue";
import Login from "./Login.vue";
import Comment from "./Comment.vue";
import MiscFields from "./MiscFields.vue";
const tabs = {
  Login,
  Comment,
  MiscFields,
};
const activeTab = ref("Comment");
</script>

<template>
  <div class="box">
    <h1>
      Component :is Tab Example - end - component
      map
    </h1>
    <h2>
      {{ activeTab }}
    </h2>
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
      <component :is="tabs[activeTab]" />
    </div>
  </div>
</template>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
