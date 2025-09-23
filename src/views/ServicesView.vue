<template>
  <div class="services">
    <h2 class="text-primary/">{{ title }}</h2>
    <ul v-if="gardens.length">
      <li
        class="bg-secondary-light-9"
        v-for="garden in gardens"
        :key="garden.id"
      >
        <img :src="garden.imageUrl" alt="image" />
        <h4>{{ garden.name }}</h4>
        <p>{{ garden.description }}</p>
      </li>
    </ul>
  </div>
  <section id="about" class="bg-secondary-light-9 mt-5 pt-4 pb-4">
    <div class="container">
      <h2 class="mb-2">{{ titleTwo}}</h2>
      <p>{{ p1 }}</p>
    </div>
  </section>

     <section id="work" class="mt-5">
        <div class="container">
            <h2 class="mb-2">{{ titleThree}}</h2>
            <div class="row gap-2">
                <div class="col-12-xs col-6-md col-3-lg" v-if="locations.length">
                    <div class="card p-0" v-for="location in locations" :key="location.id">
                        <h3 class="card-title m-1">{{ location.name }}
                            <span class="badge-orange text-white ml-1">new</span>
                        </h3>
                        <img :src="location.imageUrl" :alt="location.name">
                        <p class="m-1"> It is located in {{ location.located }}</p>
                    </div>
                </div>
                </div>
                </div>
            <div class="row justify-center mt-2">
                <button class="btn-secondary text-white font-md">View All</button>
            </div>
    </section>
       <!-- footer -->
 <Footer />
</template>

<script>
import { onMounted, ref } from "vue";
import Footer from '../components/Footer.vue'

export default {
  components: { Footer },
  setup() {
    const title = ref("Solutions for Your Garden's Success");
    const titleTwo = ref("Connecting you to your green space");
    const titleThree = ref("These are the green spaces we've been talking about.")
    const p1 = ref('We also help you find beautiful, green locations that are perfect for taking photos.')
    const gardens = ref([]);
    const locations = ref([])

    onMounted(() => {
      fetch("http://localhost:3000/gardens")
        .then((res) => res.json())
        .then((data) => (gardens.value = data))
        .catch((err) => console.log(err.message));


          fetch("http://localhost:3000/locations")
        .then((res) => res.json())
        .then((data) => (locations.value = data))
        .catch((err) => console.log(err.message));
    });

    return { title, gardens, titleTwo,p1,titleThree,locations };
  },
};
</script>

<style>
.services {
  /* background: #eee; */
  max-width: 1200px;
  margin: 20px auto;
}
.box {
  padding: 100px 0;
  width: 400px;
  text-align: center;
  /* background: #ddd; */
  margin: 20px;
  display: inline-block;
}

p,
ul,
h3,
h4,
h1 {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  background: #fff;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

li.fav {
  background: #ff9ed2;
  color: white;
}
</style>