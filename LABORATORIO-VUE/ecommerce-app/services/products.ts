import { Product } from '~~/types'

 export const productService = {
  async get(organ:string) {
    const products = await fetch(`https://api.github.com/orgs/${organ}/members`).then((r) =>
      r.json()
    )
    return products as Product[]; 
  },

  async getProductById(login:string) {
    const product = await fetch(
      `https://api.github.com/users/${login}`
    ).then((r) =>r.json());
    return product as Product;
  },
 }