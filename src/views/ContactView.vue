<template>
  <h2 class="text-error">{{ title }}</h2>
  <SignupForm />
</template>

<script>
import { ref } from 'vue'
import SignupForm from '../components/SignupForm.vue'

export default {
    components: { SignupForm },
    setup(){
        const title = ref('Contact us')

        return { title}
    }

}
</script>

<style>

</style>