// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL 

import Hero from "@/components/hero";
import  homeSrc  from "@/public/龙.jpg";
import {Metadata} from "next";

// 会渲染到 Dashboard layout.tsx
// 页面元数据 静态 网页显示路由名称
export const metadata: Metadata = {
    title: 'Home',
    description: 'Dashboard page',
  }
export default function Page() {
    return (
      <Hero imgUrl={homeSrc} altText="Home" content="Welcome to the Dashboard 龙!" />
    )
  }