import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

export const Hero = () => {
    return (
        <div className=" w-screen">
            <div className="flex flex-col justify-center h-screen sm:mx-20 mx-4">
                <div className="conatainer">
                    <h1 
                        className="sm:text-7xl text-5xl text-primary font-semibold tracking-widest uppercase sm:h-28">Sketch </h1>
                    <h1 className="sm:text-7xl text-5xl text-secondary font-semibold tracking-widest uppercase sm:h-28">Create &</h1>
                    <h1 className="sm:text-7xl text-5xl text-primary font-semibold tracking-widest uppercase">Collaborate</h1>
                </div>
                <div className="mb-10 sm:mb-4 sm:px-4 mt-4">
                    <h3 className="sm:text-2xl text-md text-primary leading-tight">No setup, no hassle—just open, draw, and share. Perfect for brainstorming, wireframing, or planning your next big idea. <br /> Whether you&apos;re solo or with a team, we&apos;ve got you covered.</h3>
                </div>
                <div className="flex gap-4 sm:px-4 ">
                    <div className="bg-primary rounded-full flex gap-2 items-center justify-between px-2">
                        <Link href={'/canvas'}>
                            <button className="bg-primary text-background rounded-full text-2xl tracking-wider mx-4 outline-none py-2">Start Drawing </button>
                        </Link>
                        <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center"><ArrowRight /></div>
                    </div>
                    {/* <button className="border-4 border-primary w-16 h-16 rounded-full flex items-center justify-center "> <Github size={30} color="#4f4639"/></button> */}

                    <div className="bg-[#645846] w-16 h-16 rounded-full flex items-center justify-center ">
                        <div className="bg-[#7e6c53] w-12 h-12 rounded-full flex items-center justify-center">
                            <div className="bg-[#8a7961] w-8 h-8 rounded-full flex items-center justify-center">
                                <Github size={40} color="#f1ede9" strokeWidth={1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}