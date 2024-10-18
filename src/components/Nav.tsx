'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  }
]

export default function Nav() {
  const pathName = usePathname();
  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        return <Link href={link.path} key={index} className={`${link.path === pathName && 'text-accent border-b border-accent'} capitalize font-medium hover:text-blue-900 transition-all duration-200`}>{link.name}</Link>
      })}
    </nav>
  )
}