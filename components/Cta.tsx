import Link from "next/link"

export const Cta = () => {
    return (
        <div className="sm:h-screen w-screen bg-background sm:px-20 px-4 flex items-center p-10">
            <div className="sm:h-[650px] w-full bg-primary rounded-3xl text-center flex flex-col items-center justify-center gap-6 px-2 py-6">
                <h5 className="text-background  sm:text-6xl text-4xl font-semibold leading-tight">Boost your productivity. <br /> Start using 100xCanvas today.</h5>
                <p className="text-lg sm:text-2xl text-background sm:mt-4 ">Join thousands of teams already collaborating <br /> more effectively with 100xCanvas.</p>
                
                <Link href={'/signup'}>
                    <button className="py-2 px-6 mt-4 bg-background border border-background rounded-full h-14 text-xl font-semibold hover:bg-transparent hover:border-background hover:border hover:text-background transition-all duration-150"> Sign up for free</button>
                </Link>  
            </div>
        </div>
    )
}