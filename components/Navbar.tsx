'use client'

import Link from "next/link"
import { Logo } from "./ui/Logo"
import { usePathname } from "next/navigation"

export const Navbar = () => {

    const pathName = usePathname()
    if(pathName === '/' || pathName === '/signup'){
        return (
            <div className=" w-full sm:px-20 px-4 fixed top-0 right-0 left-0 z-50 py-4 bg-background/80 backdrop-blur-sm overflow-hidden" >
                <div className="flex items-center justify-between">
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