"use client"

import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./navigation-menu";
import Link from "next/link";
import { BadgeDollarSign, ChartNoAxesCombined, Moon, ShelvingUnit, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";


export default function Navbar() {
  const { setTheme } = useTheme();
  return (
    <div className="flex justify-between items-center px-7">
        <Image src={"/logo_no_background.png"} alt="Logo" width={100} height={100}/>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="#">Home</Link>} />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="#">How it work</Link>} />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Feature</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px]">
                  <li>
                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><ShelvingUnit />Inventory</Link>} />
                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><BadgeDollarSign />Sale</Link>} />
                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><ChartNoAxesCombined />Dashboard</Link>} />
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="#">F.A.Q</Link>} />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>Get start</Button>
        </div>
    </div>
  )
}
