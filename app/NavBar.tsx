'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'

const NavBar = () => {
	const currentPath = usePathname()
	const links = [
		{ 
			href: '/dashboard',
			name: 'Dashboard'
		},
		{
			href: '/issues',
			name: 'Issues'
		}
	]
	return (
		<nav className='flex space-x-6 border-b mb-5 h-14 items-center px-6'>
			<Link className='space-x-6' href="/"><AiFillBug /></Link>
			<ul className='flex space-x-6'>
				{ links.map(link => 
				<li>
					<Link
						className={`
							${currentPath === link.href? 'text-zinc-500' : 'text-zinc-900'}
							hover:text-zinc-800 transition-color
						`}
						href={link.href}
						>
							{link.name}
					</Link>
				</li>
				)}
			</ul>
		</nav>
	)
}

export default NavBar