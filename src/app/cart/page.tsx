'use client'

import { useEffect, useState } from "react"

function Cart() {
    const [products, setproducts] = useState<{ title: string , description:string}[]>([]);
useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const items:any = Object.values(cart);
    setproducts(items)
},[])
console.log(products);

  return (
    <div>{products.map((product)=>{
        return <div key={product.title}>
            {product.title}
            {product.description}
        </div>
    })}</div>
  )
}

export default Cart