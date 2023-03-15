
import { defineStore } from 'pinia'
import { Product } from '~~/types'

export type CartItem = { quantity: number; data: Product }
export type CartItemRecord = Record<Product['id'], CartItem>
import { productService} from '~~/services/products';

export const useCartStore = defineStore('apiGitHub',()=>{
  
  
  const searchText = ref("lemoncode"); 

  const list: Ref<Product[]> = ref([]);


  const onSubmit =  async (organ: string)=>{
  list.value = await productService.get(organ);
  }
  
  const searchHandler = async (text = searchText.value) => {
    list.value = await productService.get(text);
    console.log(text);
};

  return {onSubmit, list, searchText, searchHandler}
})

