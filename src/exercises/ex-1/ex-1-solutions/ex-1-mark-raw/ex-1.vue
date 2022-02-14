<script setup>
import { ref, computed, markRaw } from "vue";
import Login from "./Login.vue";
import Comment from "./Comment.vue";
import MiscFields from "./MiscFields.vue";
markRaw(Login);
markRaw(Comment);
markRaw(MiscFields);
const activeTab = ref(Comment);
</script>

<template>
  <div class="box">
    <h1>
      Component :is Tab Example - end - mark raw
    </h1>
    <h2>
      {{ activeTab }}
    </h2>
  </div>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li>
          <a @click.prevent="activeTab = Login"
            >Login</a
          >
        </li>
        <li>
          <a @click.prevent="activeTab = Comment"
            >Comment</a
          >
        </li>
        <li>
          <a
            @click.prevent="
              activeTab = MiscFields
            "
            >Misc Fields</a
          >
        </li>
      </ul>
    </div>
    <div class="box">
      <component :is="activeTab" />
    </div>
  </div>
</template>
