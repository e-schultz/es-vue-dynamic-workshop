import { provide, ref, isRef } from "vue";
import { FORM_MODEL } from "./constants.js";
export default function useDynamicForm(initialValue = {}) {
  const formModel = isRef(initialValue) ? initialValue : ref(initialValue);
  provide(FORM_MODEL, formModel);
  return {
    formModel,
  };
}
