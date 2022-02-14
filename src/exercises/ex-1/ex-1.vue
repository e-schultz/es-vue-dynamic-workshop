<!--
Instructions:
- Update the component so when an active tab is clicked, the correct component is displayed.
- extra:
  - Create a checkbox to track of the user is logged in or not
  - If the user is logged in, when displaying the Login component - display a warning instead.
-->
<script setup>
import { ref, computed } from "vue";
import Login from "./Login.vue";
import Comment from "./Comment.vue";
import MiscFields from "./MiscFields.vue";

const activeTab = Comment;
</script>

<template>
  <div class="box">
    <h1>Component :is Tab Example - start</h1>
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
      Update this component so that selecting a
      tab will display the correct
      <component class=""></component>
    </div>
    <div class="box">
      <component :is="activeTab" />
    </div>
    <div class="box">
      Alternative Soltuions
      <nav class="breadcrumb">
        <ul>
          <li>
            <RouterLink to="/ex-1-sol-comp"
              >Computed Prop</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/ex-1-sol-map"
              >Object Map</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/about"
              >using markRaw</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
