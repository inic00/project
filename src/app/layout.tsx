import type { Metadata } from "next"; 
import localFont from "next/font/local";
import { ABeeZee } from 'next/font/google'//字体 点击链接可查看详细链接
import { AntdRegistry } from '@ant-design/nextjs-registry';//处理组件样式闪烁问题
import "./globals.css";

const inter = ABeeZee({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-abeezee',
})
export default function RootLayout({
  children,//这是RootLayout函数的参数,它解构出一个名为children的变量  {children}其他页面的内容在这里进行一个呈现
}: Readonly<{
  children: React.ReactNode; //指定了组件的属性类型  Readonly表示这个对象是只读的,children属性是一个React.ReactNode类型,这意味着它可以接受任何有效的React节点.
}>) {
  return (
    // suppressContentEditableWarning={true}   // suppressContentEditableWarning属性用于告诉浏览器不要警告,因为这个页面没有使用contentEditable属性.
    <html lang="en"   >
      <body className={inter.className}>
        <AntdRegistry>
          {children}  
        </AntdRegistry>
      </body>
    </html>
  );
}
