<template>
  <section >
    <div class="listas">
      <ul class="listas">
        <Hijo v-model="searchText" placeholder="lemoncode" /> 
         <li v-for="product in list" :key="product.id">
          <NuxtLink :to="`/product/${product.login}`">
            <strong class="image"> 
              <h3> {{ product.id }}</h3>
              <h3>{{ product.login }} </h3>
              <img :src="product.avatar_url" alt="" loading="lazy" />
            </strong> 
          </NuxtLink>
        </li>
      </ul>
    </div> 
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Hijo from './Hijo.vue'

const { searchHandler} = useCartStore();

onMounted(async () => {
  await searchHandler();
});
const filteredListStore = useCartStore();
filteredListStore.searchHandler();
const { list, searchText } = storeToRefs(filteredListStore)
//const totalProducts = computed(() => list.value.length)
console.log(searchText);

</script>


<style lang="scss" scoped>
.product-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}
.product-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
  background-color: aqua;
}

.product-container__content {
  padding: 0 1em;
}

.product-container__aside {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.image {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
  img {
    width: 150px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}
.product-container--has-discount {
  background-color: rgba(yellow, 0.5);
}
.listas{
  background-color: rgb(180, 232, 215);
}
</style>

