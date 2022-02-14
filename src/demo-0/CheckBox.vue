<script setup>
defineProps(["modelValue", "label"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <!--
  <div>
    <label>
      <input
        type="checkbox"
        :checked="modelValue"
        @input="$emit('update:modelValue', $event.target.checked)"
      />
      {{ label }}
    </label>
  </div>-->

  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input
          type="checkbox"
          :checked="modalValue"
          @input="
            $emit(
              'update:modelValue',
              $event.target.checked
            )
          "
        />
        {{ label }}
      </label>
    </div>
  </div>
</template>
