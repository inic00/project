import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link"; // nextjs提供的路由组件
import  usePathname  from 'next/navigation' //确定链接是否处于活动状态 进行高亮
import "./globals.css";
const pathname = usePathname

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,   //这是RootLayout函数的参数,它解构出一个名为children的变量  {children}其他页面的内容在这里进行一个呈现
}: Readonly<{
  children: React.ReactNode; //指定了组件的属性类型  Readonly表示这个对象是只读的,children属性是一个React.ReactNode类型,这意味着它可以接受任何有效的React节点.
}>) {
  return (
    // suppressContentEditableWarning={true}   // suppressContentEditableWarning属性用于告诉浏览器不要警告,因为这个页面没有使用contentEditable属性.
    <html lang="en"   >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}  
    
      </body>
    </html>
  );
}
