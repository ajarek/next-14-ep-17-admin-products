'use client'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

import { ModeToggle } from './ui/toggle-mode'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <NavigationMenu className='bg-indigo-400 min-w-full flex max-sm:flex-wrap max-sm:justify-center max-sm:gap-2 justify-between items-center p-2'>
      <Link
        href='/'
        legacyBehavior
        passHref
      >
        <NavigationMenuLink className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl font-medium transition-colors hover:bg-violet-200 hover:text-accent-foreground focus:bg-violet-200 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ml-4'>
          Admin Products
        </NavigationMenuLink>
      </Link>
      <NavigationMenuItem className='flex items-center list-none '>
      <Link
        href='/create'
        legacyBehavior
        passHref
      >
        <NavigationMenuLink className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl font-medium transition-colors hover:bg-violet-200 hover:text-accent-foreground focus:bg-violet-200 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mr-4'>
          Create Product
        </NavigationMenuLink>
        </Link>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <ModeToggle />
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  )
}

export default Navbar
