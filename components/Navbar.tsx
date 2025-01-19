
import Link from "next/link"
import { Logo } from "./ui/Logo"

export const Navbar = () => {
    return (
        <div className=" w-full px-20 absolute z-10 py-4">
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