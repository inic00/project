"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const linkData = [
  {
    name: 'Performnce',
    href: '/Performnce',
  },
  {
    name: 'Rellability',
    href: '/Rellability',
  },
  {
    name: 'Scale',
    href: '/Scale',
  },
  {
    name: 'About',
    href: '/dashboard/about',
  },
]

export function Links() {
  const pathname = usePathname()
  return (
    <div className='absolute w-full z-10'>
      <div className='flex justify-between container mx-auto text-black p-8'>
        <Link className='text-3xl font-bold' href="/dashboard">Home</Link>
      
      <div className='text-xl space-x-4'>
        {
          linkData.map((link) => ( // 使用箭头函数定义回调
            <Link
              key={link.name} // 确保 link.name 是唯一的,否则考虑使用其他唯一标识符
              className={pathname === link.href ? "text-purple-500" : ""}
              href={link.href}
            >
              {link.name}
            </Link>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Links