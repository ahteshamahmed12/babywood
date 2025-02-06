'use client';

import { useEffect, useState } from 'react';

function CartIndicator() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const items: any = Object.values(cart);
    setProducts(items);
  }, []);

  return (
    <>
      {products.map((item: any) => (
        <div key={item._id} className='border-red-500 text-white bg-red-500 rounded-full px-[8px] right-20 md:right-32 top-6 absolute '>
          {products.length}
        </div>
      ))}
    </>
  );
}

export default CartIndicator;
