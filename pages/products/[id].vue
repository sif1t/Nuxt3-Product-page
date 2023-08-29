<template>
  <div>
    <head>
      <title>Sifat | {{ product.title }}</title>
      <meta name="description" :content="product.description" />
    </head>
  <ProductDetails :product="product"/>
  </div>
</template>

<script  setup>
 const { id } = useRoute().params
 const uri = 'https://fakestoreapi.com/products/' + id


  // fetch the product
  const {data: product} = await useFetch(uri, { key: id})
//error code
if (!product.value){
   throw createError ({ statusCode: 404, statusMessage: 'product not found', fatal:true})
  }

 definePageMeta({
    layout: 'products'
   })
</script>

<style scoped>

</style>


