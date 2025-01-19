import Image from "next/image"

interface tweetCard {
    icon: string 
    name: string
    handle: string
    content: string
    className: string
}



export const Tweets = ({icon, name, handle, content, className}: tweetCard) => {
    return (
        <div className={`${"container mx-auto bg-white rounded-2xl p-6"} ${className}`}>
            <div className=" flex justify-between w-full">
                <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full">
                        <Image 
                            src={icon}
                            width={50}
                            height={50}
                            alt="avatar"
                            className='bg-cover rounded-full'
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-black text-lg ">{name}</h1>
                        <h3 className="text-gray-500/40 text-md">{handle}</h3>
                    </div>
                </div>
                <div className="size-12 flex items-center justify-center">
                    <Image 
                        src={'/twitter.svg' }
                        width={25}
                        height={25}
                        alt="twitter_icon"
                        className=""
                    />
                </div>
            </div>
            <div className="mt-3">
                <p className="text-black">{content}</p>
            </div>
        </div>
    )
}