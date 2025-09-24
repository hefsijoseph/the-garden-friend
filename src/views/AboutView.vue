<template>
  <div class="about">
    <h2 class=" mt-2 font-xl">{{ title }}</h2>

    <AboutUs  :footerMessage = "footerMessage"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import AboutUs from '../components/AboutUs.vue'

export default {
  components: { AboutUs },
  setup() {
    const title = ref('Our Story')
         
    const footerMessage = ref('Copyright 2025 Designed & Created by Hefsi')

    return { title, footerMessage }
  },
}
</script>

