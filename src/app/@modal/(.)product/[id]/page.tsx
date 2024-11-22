"use client"
import React from 'react'
import  Image  from "next/image";
import { useRouter } from 'next/navigation';//钩子允许您在函数组件中访问路由对象 


const products = [
    {
      id: 1,
      name: "Earthen Bottle",
      price: 48,
      imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper."
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      price: 35,
      imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
      imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top."
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      price: 89,
      imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt: "Person using a pen to cross a task off a productivity paper card."
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      price: 35,
      imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top."
    }
  ];
  export default function Page({params}:{params:{id:string}}) {
    const product = products.find((product) => product.id === Number(params.id))!
    const router =  useRouter()
    // 点击其他地方则返回
     return <div className="flex items-center justify-center fixed inset-0 bg-gray-500/[.8]"  onClick={router.back}>
      {/* 点击图片不会关 */}
     <Image className='rounded-lg' width={300} height={300}  src={product.imageSrc} alt={product.imageAlt}  onClick={e=>e.stopPropagation}/>
    </div>;
   }