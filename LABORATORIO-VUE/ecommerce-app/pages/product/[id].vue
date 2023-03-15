<template>
    <div class="container">
      <NuxtLink to="/" class="back">⬅️ Go back</NuxtLink>
      <article>
        <div>
          <img :src="product?.avatar_url" alt="" class="img"/>
        </div>
        <div v-if="product">
          <h1>{{ product.id }}</h1>
          <p class="flex">
            {{ product.login }}
          </p>
        </div>
      </article>
    </div>
  </template>
  
  <script setup lang="ts">
  import { productService } from '@/services/products'
  import { Product } from '~~/types'
  import {useRoute} from 'vue-router'

  const route = useRoute();
  const login = route.params.id as string;
  
  

  const product:Product = await productService.getProductById(login);

  </script>
  
  <style scoped>
  .back {
    display: block;
    margin: 1rem 0;
    
  }
  .img{
    width: 100px;
  }
  </style>