<template>
      <nav class="navbar">
        <div class="container">
            <h1 class="site-title text-secondary">The garden friend</h1>
            <ul class="display-f">
                <li class="ml-1 text-hover-secondary">
                   <router-link to="/">Home</router-link> 
                </li>
                <li class="ml-1 text-hover-secondary">
                    <router-link :to="{ name: 'about'}">About</router-link>
                </li>

                 <li class="ml-1 text-hover-secondary">
                    <router-link :to="{ name: 'services'}">Our Services</router-link>
                </li>

                 <li class="ml-1 text-hover-secondary">
                    <router-link :to="{ name: 'contact'}">Contact</router-link>
                </li>
                
            </ul>
        </div>
    </nav>
  <router-view/>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}
 /* nav h1{
  color: #1ac888;
 } */
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #1ac888 ;
}
</style>
