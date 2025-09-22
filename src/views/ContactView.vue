<template>
  <h2>{{ title }}</h2>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const title = ref('Contact us')

        return { title}
    }

}
</script>

<style>

</style>