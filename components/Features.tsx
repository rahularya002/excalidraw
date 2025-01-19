import Image from 'next/image';
import React from 'react';

export const Features = () => {
    
    return (
        <div className="min-h-screen w-full bg-primary py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-background text-5xl uppercase italic mb-16">
                    Features
                </h1>
                
                <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-6 md:grid-rows-6 gap-3 md:gap-3 m-4 h-[750px]">
                    <div className="col-start-1 row-start-1 row-span-6 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-6 bg-background rounded-md ">
                        <div className='p-10'>
                            <h1 className='text-4xl font-semibold text-primary '>Intiutive Design</h1>
                            <p className='text-lg mt-4 leading-snug'>Simple yet powerful tools for creating professional diagrams and sketches</p>
                        </div>
                        <div className='bg-contain'>
                            <Image 
                                src='/Images/image-1.png'
                                height={600}
                                width={600}
                                alt='Initiutive design'
                                className='bg-cover -bottom-10 relative opacity-50'
                            />
                        </div>
                    </div>
                    <div className="col-start-2 row-start-1 row-span-3 md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-3 bg-background rounded-md">
                        <div className='px-10 pt-10'>
                            <h1 className='text-4xl font-semibold text-primary '>Infinite Canvas </h1>
                            <p className='text-lg mt-4 leading-snug'>Never run out of space with our infinitely expandable canvas.</p>
                        </div>
                        <div className='bg-cover relative'>
                            <Image 
                                src='/Images/image-2.png'
                                height={600}
                                width={600}
                                alt='Initiutive design'
                                className='object-cover bottom-20 relative opacity-15'
                            />
                        </div>
                        
                    </div>

                    <div className="col-start-2 row-start-4 row-span-3 md:col-start-2 md:row-start-4 md:col-span-1 md:row-span-3 bg-background rounded-md">
                        <div className='p-10'>
                            <h1 className='text-4xl font-semibold text-primary'>Team Workspace </h1>
                            <p className='text-lg mt-4 leading-snug'>Organize and manage all your projects in one place with your team.</p>
                        </div>
                        <div className='bg-cover'>
                            <Image 
                                src='/Images/image-3.png'
                                height={600}
                                width={600}
                                alt='Initiutive design'
                                className='object-cover bottom-10 relative opacity-50'
                            />
                        </div>

                    </div>

                    <div className="col-start-3 row-start-1 row-span-6 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-6 bg-background rounded-md ">
                        <div className='p-10'>
                            <h1 className='text-4xl font-semibold text-primary'>Real-time Collaboration </h1>
                            <p className='text-lg mt-4 leading-snug'>Work together with your team in real-time, anywhere in the world.</p>
                        </div>
                        <div className='bg-cover'>
                            <Image 
                                src='/Images/image-4.png'
                                height={600}
                                width={600}
                                alt='Initiutive design'
                                className='object-cover -bottom-10 relative opacity-50'
                            />
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Features;