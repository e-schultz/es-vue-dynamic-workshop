<script setup>
defineProps(["label", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="field">
    <label class="label"> {{ label }} </label>
    <div class="control">
      <input
        type="text"
        autocomplete="disabled"
        class="input"
        v-bind="$attrs"
        :value="modelValue"
        @input="
          $emit(
            'update:modelValue',
            $event.target.value
          )
        "
      />
    </div>
  </div>
</template>
