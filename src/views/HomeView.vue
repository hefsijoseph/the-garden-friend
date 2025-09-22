<template>
  <div class="home">
    <h1 class="text-primary">{{ title }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup(){
    const title = ref('The Garden Friend')

     return { title }
  }

 
}
</script>
