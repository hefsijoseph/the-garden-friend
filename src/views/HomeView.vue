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

    <section id="about" class="bg-secondary-light-9 mt-5 pt-4 pb-4">
        <div class="container">
            <h2 class="mb-2">About Hefsi Designs</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, itaque a impedit alias obcaecati nulla
                minima, quia voluptas consequatur ipsam exercitationem praesentium, soluta cumque reiciendis.
                Praesentium facere error saepe hic ipsam, necessitatibus modi. Cum maxime maiores vitae iure, earum
                corrupti, quis minima culpa optio debitis eaque vel, voluptas temporibus tenetur omnis quisquam quaerat
                odio laudantium! Ad tempore delectus nisi accusamus libero ea repudiandae eius expedita quae saepe ipsa
                exercitationem tempora, laborum cumque ullam. Voluptas fuga, ratione ducimus dolores corporis delectus
                aut. Harum expedita excepturi recusandae ad, nisi laborum voluptatem, natus adipisci voluptatibus alias
                et atque in facere explicabo porro maxime.</p>
            <p class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit obcaecati sit. Dolore
                ipsum laudantium sed, pariatur beatae natus nihil id repellendus molestias porro nulla quaerat laborum
                ab incidunt. Eaque dolorem repellat, qui labore reprehenderit non harum dolores modi, iusto fugiat
                expedita sed architecto praesentium atque suscipit at! Ducimus, saepe nam officiis facere qui voluptates
                quam ipsum tempora cumque neque nulla. Debitis aut molestias nostrum voluptates deleniti, animi illum
                fuga, explicabo nulla laudantium rem. Provident beatae saepe enim iure ad possimus id fuga, corrupti
                quibusdam iusto voluptates corporis animi optio, dolores veniam, molestiae deleniti aperiam facere nisi!
                Magnam, ratione eveniet!</p>
        </div>
    </section>

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
