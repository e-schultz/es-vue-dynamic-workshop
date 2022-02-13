<script setup>
import TextInput from "@/components/TextInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";
import EmailInput from "@/components/EmailInput.vue";
import ContactForm from "../components/ContactForm.vue";
import AddressForm from "../components/AddressForm.vue";
</script>
<template>
  <section class="contact-details">
    <div>
      <form>
        <!-- <TextInput label="First Name" />
        <TextInput label="Last Name" />
        <TextInput label="UserName" maxlength="30" minlength="3" />
        <EmailInput label="Email" />
        <PasswordInput label="Password" />-->
        <div class="box">
          <ContactForm />
        </div>
        <div class="box"><AddressForm /></div>
      </form>
    </div>

    <article class="message is-info">
      <div class="message-header">
        Info
        <button class="delete"></button>
      </div>
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi,
        tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean
        ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin
        porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui
        urna, vehicula et sem eget, facilisis sodales sem.
      </div>
    </article>
  </section>
</template>

<style></style>
