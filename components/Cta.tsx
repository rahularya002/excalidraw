import Link from "next/link"

export const Cta = () => {
    return (
        <div className="h-screen w-screen bg-background px-20 flex items-center ">
            <div className="h-[650px] w-full bg-primary rounded-3xl text-center flex flex-col items-center justify-center gap-6">
                <h5 className="text-background  text-6xl font-semibold leading-tight">Boost your productivity. <br /> Start using 100xCanvas today.</h5>
                <p className=" text-2xl text-background mt-4 ">Join thousands of teams already collaborating <br /> more effectively with 100xCanvas.</p>
                
                <Link href={'/signup'}>
                    <button className="py-2 px-6 mt-4 bg-background border border-background rounded-full h-14 text-xl font-semibold hover:bg-transparent hover:border-background hover:border hover:text-background transition-all duration-150"> Sign up for free</button>
                </Link>  
            </div>
        </div>
    )
}