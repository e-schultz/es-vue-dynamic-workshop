<script setup>
import "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/js/all.min.js"  
import { ref } from 'vue'
import Container from "./Container.vue"
import BaseInput from "./BaseInput.vue"
const msg = ref('Hello ')
</script>

<template>
   <Container>
     <div class="box">
			<h1>{{ msg }}</h1>
       <label class="label">Text
					<BaseInput type="text" minlength="5" maxlength="10"/>
        </label>
       <label class="label">Date
					<BaseInput type="date" />
        </label>
        <label class="label">Range
          <BaseInput type="range" id="vol" name="vol" min="0" max="50"/>
        </label>
       <!--
       <label for="birthday">Birthday:</label>
			 <input type="date" id="birthday" name="birthday">
      
       <label for="vol">Volume (between 0 and 50):</label>
			
-->
     </div>
	</Container>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>