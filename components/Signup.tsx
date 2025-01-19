import { Github } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";


export default function Login (){
    return (
        <div className="w-full">
            <div className="flex items-center justify-around h-screen">
                <div className="flex items-center justify-center h-screen ">
                    <div className=" h-[600px] w-full rounded-2xl">
                        <h1 className="text-3xl font-semibold text-primary">Get Started Now </h1>
                        <p className="text-primary text-lg">Sign up with 100xCanvas and save your work</p>
                        <div className="flex gap-4 w-full mt-10">
                            <button className="flex gap-2 items-center rounded-full text-background bg-primary px-6 py-3"> <FcGoogle size={20}/> Login with Google </button>
                            <button className="flex gap-2 items-center rounded-full text-background bg-primary px-6 py-3"> <Github size={20} /> Login with Github </button>
                        </div>                      
                        <div className="flex gap-6 mt-10 items-center text-primary text-lg">
                            <div className="h-[1px] w-[180px] bg-primary/40 my-4"></div>
                            or
                            <div className="h-[1px] w-[180px] bg-primary/40 my-4"></div>
                        </div>

                        <div className="flex gap-3 mt-10">
                            <input type="text" placeholder="First Name" required className="w-full outline-none py-3 text-primary border border-primary rounded-2xl px-3"/>
                            <input type="text" placeholder="Last Name" required className="w-full outline-none py-3 text-primary border border-primary rounded-2xl px-3" />
                        </div>
                        <div className="mt-3">
                            <input type="email" placeholder="your@email.com" required className="w-full outline-none py-3 text-primary border border-primary rounded-2xl px-3"/>
                        </div>
                        
                        <div className="mt-3">
                            <input type="password" placeholder="min 8 chars" required className="w-full outline-none py-3 text-primary border border-primary rounded-2xl px-3" />
                        </div>

                        <div className="mt-3">
                            <button className="bg-primary rounded-2xl text-background w-full py-3 text-xl">Sign up</button>
                        </div>

                        <div className="flex gap-2 mt-7 justify-center w-full">
                            <p>Already have an Account ?</p>
                            <Link href={'/'}>
                                <p className="underline">Sign in</p>
                            </Link>
                        </div>
                       
                    </div>
                </div>
                
                <div>

                </div>
            </div>
        </div>
    )
}