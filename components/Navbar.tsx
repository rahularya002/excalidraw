'use client'

import Link from "next/link"
import { Logo } from "./ui/Logo"
import { usePathname } from "next/navigation"

export const Navbar = () => {

    const pathName = usePathname()
    if(pathName === '/'){
        return (
            <div className=" w-full sm:px-20 px-4 absolute z-10 py-4">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <div className="flex gap-4">
                        <Link href={'/signup'}>
                            <button className="bg-primary py-2 px-6 rounded-full text-background text-lg">Sign up</button>
                        </Link>
                        <button className="text-lg border border-primary rounded-full py-2 px-6 ">Sign in </button>
                    </div>
                </div>
            </div>
        )
    }
    
}