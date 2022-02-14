<script setup>
defineProps(["modelValue", "label"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input
          type="checkbox"
          :checked="modelValue"
          @input="
            $emit(
              'update:modelValue',
              $event.target.checked
            )
          "
        />
        {{ label }} --
      </label>
    </div>
  </div>
</template>
