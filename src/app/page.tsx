'use client'// 指定客户端组件
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'




import { Button } from 'antd';

const Home = () => (
  <div className="App">
    <Button type="primary"> <Link href="/dashboard">根页面 默认页面 Link标签跳转Dashboard</Link></Button>
    <Button type="primary"> <Link href="/blog">动态路由</Link></Button>

  </div>


);

export default Home;
// export default function Home() {
//   const router = useRouter()
//   // router.push('/dashboard', { scroll: false })  //默认跳转到新页面顶部  设置参数禁用这行为
//   return (
//     <div>

//       <Link href="/dashboard">根页面 默认页面 Link标签跳转Dashboard</Link>
//     </div>
//   );
// }
