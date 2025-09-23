<template>
  <div class="home">
    <div class="container mt-7">
        <div class="row justify-center">
            <div class="col-12-xs col-5-md">
                <h2>
                    <div class="font-xxl">Black Belt</div>
                    <div class="font-xxl text-secondary">Your Website</div>
                </h2>
                <p class="text-gray mt-2 mb-3">
                    {{ title }}
                </p>
                 <router-link :to="{ name: 'services'}" class="btn-outlined-secondary text-secondary text-hover-white">View Our Work</router-link>
            </div>
            <div class="col-12-xs col-5-md">
                <img src="../assets/royal-palm.jpg" class="mt-2" alt="royal-palm">
            </div>
        </div>
    </div>
  </div>



<Footer />
  
</template>

<script>
import { ref } from 'vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'HomeView',
  components: { Footer },
  setup(){
    const title = ref('We connect you to your green space!')

     return { title }
  }

 
}
</script>

<style scoped>
/* .home{
  background-image: url('../assets/royal-palm.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

min-height: 500px;

  position: relative;
}

.home .content{
  position: absolute;
  top: 50%;
  left: 45%;
  color: white;
  font-weight: bolder;
} */

 img{
  width: 60%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

</style>
