import Hero from "@/components/hero";
import  homeSrc  from "@/public/麦当当.pic.jpg";
import {Metadata} from "next";

// 页面元数据 静态
export const metadata: Metadata = {
    title: 'Scale',
    description: 'Dashboard Scale ',
  }
export default function settingsPage() {
     return (
      <Hero imgUrl={homeSrc} altText="Home" content="Welcome to the Dashboard 麦当当!" />
    )
  }