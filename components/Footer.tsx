import { Github, Linkedin, Youtube } from "lucide-react"
import { Logo } from "./ui/Logo"

export const Footer = () => {
    return (
        <div className="w-full absolute z-20 bg-background">
            <h1 className="text-gray-500/20 text-4xl text-center font-semibold h-16 flex items-center justify-center w-full absolute z-0">Made with ❤️ by 100xDevs</h1>
            <div className="flex items-center px-20 h-16 justify-between absolute z-10 w-full">
                <Logo />
                <div className="flex gap-10 items-center ">
                    <Youtube size={30} strokeWidth={1.5} color="#4f4639"/>
                    <Linkedin size={30} strokeWidth={1.5} color="#4f4639"/>
                    <Github size={30} strokeWidth={1.5} color="#4f4639"/>
                </div>
            </div>
        </div>
    )
}