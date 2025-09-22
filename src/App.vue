<template>
      <nav class="navbar">
        <div class="container">
            <h1 class="site-title">The garden friend</h1>
            <ul class="display-f">
                <li class="ml-1 text-hover-secondary">
                   <router-link to="/">Home</router-link> 
                </li>
                <li class="ml-1 text-hover-secondary">
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </div>
    </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
