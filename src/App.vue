<script setup>
import {
  RouterLink,
  RouterView,
} from "vue-router";
</script>

<template>
  <header>
    <nav class="breadcrumb">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/sample"
            >Example Content Model</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/about"
            >Example Form</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/step-1"
            >Step 1</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
  <div class="section">
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>
