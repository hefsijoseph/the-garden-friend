<template>
     <footer class="bg-gray-light-7 pt-3 pb-3 mt-5">
        <div class="container">
           <p v-if="footerMessage"> {{ footerMessage }}</p>
          <div class="links" v-else>
            <slot  class="default"></slot>
           <slot name='links' class="named"></slot>
          </div>
         
        </div>
    </footer>
</template>

<script>
export default {
    props: ['footerMessage']

}
</script>

<style>

.links a{
    color: #1ac888;
    padding: 8px;
    border: 1px solid #1ac888;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
    margin:  10px;
}

.links:hover a{
  border: none;
  background: #1ac888;
  color: white;
}
</style>