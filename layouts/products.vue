<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <nuxt-link to="/products" class="font-bold">Sifat</nuxt-link>     
         </nav>
      </header>
      <!-- output the page content  -->
      <div class="container mx-auto p-4">
        <slot />
      </div>

      <footer class=" container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </footer>
    </div>
  </template>

  <style scoped>
     .router-link-exact-active {
        color: aqua;
     }
  </style>