import { ArrowRight, Github } from "lucide-react"

export const Hero = () => {
    return (
        <div className=" w-screen">
            <div className="flex flex-col justify-center h-screen mx-20">
                <div className="">
                    <h1 className="text-7xl text-primary font-semibold tracking-widest uppercase h-28">Sketch </h1>
                    <h1 className="text-7xl text-secondary font-semibold tracking-widest uppercase h-28">Create &</h1>
                    <h1 className="text-8xl text-primary font-semibold tracking-widest uppercase">Collaborate</h1>
                </div>
                <div className="h-20 mb-4 px-4">
                    <h3 className="text-2xl text-primary">No setup, no hassle—just open, draw, and share. Perfect for brainstorming, wireframing, or planning your next big idea. <br /> Whether you're solo or with a team, we’ve got you covered.</h3>
                </div>
                <div className="flex gap-4 px-4">
                    <div className="bg-primary rounded-full flex gap-2 items-center  justify-between px-2">
                        <button className="bg-primary text-background rounded-full text-2xl tracking-wider mx-4 outline-none py-2">Start Drawing </button>
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