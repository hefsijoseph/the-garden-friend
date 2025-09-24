<template>
  <div class="container">
    <h2 class="mb-2"></h2>
    <div class="row gap-2" v-if="stories.length">
      <div class="col-12-xs col-6-md col-6-lg">
        <div class="card p-0" @click.self="handleClick">
          <h3 class="card-title m-1">
           {{ stories[0].title}}
          </h3>
          <img :src="stories[0].image" :alt="stories[0].title" />
          <p class="m-1">
           {{ stories[0].description }}
          </p>
           <button class="btn-secondary text-white font-md">Explore All</button>
        </div>
      </div>

        <div class="col-12-xs col-6-md col-6-lg">
        <div class="card p-0" @click.self="handleClick">
          <h3 class="card-title m-1">
           {{ stories[1].title }}
          </h3>
          <img :src="stories[1].image" :alt="stories[1].title" />
          <p class="m-1">
          {{ stories[1].description }}
 </p>
           <button class="btn-secondary text-white font-md">See All Green Spaces</button>
        </div>
      </div>
    </div>
  </div>
  <Footer>{{ footerMessage }}</Footer>
</template>

<script>
import { onMounted, ref } from 'vue';
import Footer from '../components/Footer.vue'

export default {
    components: { Footer },
    props: ['footerMessage'],
    setup(){

        const stories = ref([])

        onMounted( () => {

         fetch("http://localhost:3000/stories")
        .then((res) => res.json())
        .then((data) => (stories.value = data))
        .catch((err) => console.log(err.message));
        })

        return { stories }
    }
};
</script>

<style>
</style>