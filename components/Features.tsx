import Image from 'next/image';
import React from 'react';

export const Features = () => {
    return (
        <div className="w-full bg-primary py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-background text-5xl uppercase italic mb-16 text-center">
                    Features
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:h-[750px]">
                    <div className="h-[400px] lg:h-full col-span-1 lg:col-start-1 lg:row-start-1 lg:col-span-1 lg:row-span-6 bg-background rounded-md flex flex-col">
                        <div className='p-10'>
                            <h1 className='text-4xl font-semibold text-primary'>Intuitive Design</h1>
                            <p className='text-lg mt-4 leading-snug'>Simple yet powerful tools for creating professional diagrams and sketches.</p>
                        </div>
                        <div className='relative flex-grow'>
                            <Image 
                                src='/Images/image-1.png'
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority
                                alt='Intuitive Design'
                                className='object-cover opacity-50 rounded-b-md'
                            />
                        </div>
                    </div>

                    <div className="h-[400px] lg:h-full col-span-1 lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:row-span-3 bg-background rounded-md flex flex-col">
                        <div className='p-10'>
                            <h1 className='text-4xl font-semibold text-primary'>Infinite Canvas</h1>
                            <p className='text-lg mt-4 leading-snug'>Never run out of space with our infinitely expandable canvas.</p>
                        </div>
                        <div className='relative flex-grow'>
                            <Image 
                                src='/Images/image-2.png'
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                alt='Infinite Canvas'
                                className='object-cover opacity-50 rounded-b-md'
                            />
                        </div>
                    </div>

                    <div className="h-[400px] lg:h-full col-span-1 lg:col-start-2 lg:row-start-4 lg:col-span-1 lg:row-span-3 bg-background rounded-md flex flex-col">
                        <div className='p-10'>
                            <h1 className='text-4xl font-semibold text-primary'>Team Workspace</h1>
                            <p className='text-lg mt-4 leading-snug'>Organize and manage all your projects in one place with your team.</p>
                        </div>
                        <div className='relative flex-grow'>
                            <Image 
                                src='/Images/image-3.png'
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                alt='Team Workspace'
                                className='object-cover opacity-50 rounded-b-md'
                            />
                        </div>
                    </div>

                    <div className="h-[400px] lg:h-full col-span-1 lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-6 bg-background rounded-md flex flex-col">
                        <div className='p-10'>
                            <h1 className='text-4xl font-semibold text-primary'>Real-time Collaboration</h1>
                            <p className='text-lg mt-4 leading-snug'>Work together with your team in real-time, anywhere in the world.</p>
                        </div>
                        <div className='relative flex-grow'>
                            <Image 
                                src='/Images/image-4.png'
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                alt='Real-time Collaboration'
                                className='object-cover opacity-50 rounded-b-md'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;