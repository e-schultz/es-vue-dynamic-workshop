<script setup>
defineProps(["subject", "question", "email"]);
</script>
<template>
  <div class="container">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Subject</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              class="input is-danger"
              type="text"
              :value="subject"
              placeholder="e.g. Partnership opportunity"
            />
          </div>
          <p class="help is-danger">This field is required</p>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">From email:</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input" type="email" :value="email" placeholder="reply to" />
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Question</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea
              class="textarea"
              :value="question"
              placeholder="Explain how we can help you"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
