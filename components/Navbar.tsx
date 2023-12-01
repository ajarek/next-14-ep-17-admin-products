'use client'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { ModeToggle } from './ui/toggle-mode'
import Link from "next/link"


const Navbar = () => {
  return (
    <NavigationMenu>
      <Link
            href='/'
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl font-medium transition-colors hover:bg-violet-600 hover:text-accent-foreground focus:bg-violet-600 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ml-4'>
              Quiz
            </NavigationMenuLink>
          </Link>
    <NavigationMenuItem className='list-none'>
   
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <ModeToggle />
      </NavigationMenuLink>
   
  </NavigationMenuItem>
  </NavigationMenu>
  )
}

export default Navbar