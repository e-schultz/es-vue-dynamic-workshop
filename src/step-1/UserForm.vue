<script setup>
defineProps(["name", "userName", "email"]);
</script>
<template>
  <div class="user-form-root">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          :value="name"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Username</label>
      <div
        class="control has-icons-left has-icons-right"
      >
        <input
          class="input is-success"
          type="text"
          placeholder="Text input"
          :value="userName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <p class="help is-success">
        This username is available
      </p>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div
        class="control has-icons-left has-icons-right"
      >
        <input
          class="input"
          type="email"
          placeholder="Email input"
          :value="email"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i
            class="fas fa-exclamation-triangle"
          ></i>
        </span>
      </div>
      <p class="help is-danger">
        This email is invalid
      </p>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">
          Submit
        </button>
      </div>
      <div class="control">
        <button class="button is-link is-light">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
