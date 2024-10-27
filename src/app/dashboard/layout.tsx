'use client'// 指定客户端组件
import { useState } from "react";
import Links from "@/components/links";
import { Inter } from 'next/font/google' //

const inter = Inter({ subsets: ['latin'] }) //


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0);

  return (
    <div className="{inter.className}">
      <Links/>
     
      {/* <div>
        <div>Dashboard Layout {count}</div>
        <button style={{ background: 'green' }} onClick={() => setCount(count + 1)}>+1</button>
      </div> */}
      {children}
    </div>
  );
}