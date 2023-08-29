<template>
  <div>
    <div class=" grid grid-cols-4 gap-5">
      <div v-for="p in products">  
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
   definePageMeta({
    layout: 'products'
   })
    // fetch the products
   const {data: products} = await useFetch('https://fakestoreapi.com/products') 

   useHead({
    title: 'Sifat| Merch',
    meta: [
      { name: 'Sifat', content: 'Nuxt 3 Merch'}
    ]
   })
</script>


