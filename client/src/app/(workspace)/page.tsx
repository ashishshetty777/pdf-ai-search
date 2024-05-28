import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full rounded-2xl bg-cover text-black'>
            <div className="backdrop-blur-sm bg-white/30 border-dotted rounded-lg border-2 border-gray-300 p-1 sm:p-5 md:p-12 md:max-w-[90%]">
                <h1 className="text-sm sm:text-xl md:text-4xl font-medium sm:font-normal mb-10">Welcome to iotric Notes!</h1>
                <p className="text-xs md:text-base text-gray-700 text-pretty text-center justify-center">
                    A simple AI based PDF QA application.
                </p>
                <div className='flex flex-row items-center justify-center'>
                    <Link href='/workspace/new' className="text-xs bg-[#002e5d] p-2 px-4 rounded-md md:text-base text-white hover:opacity-65 focus:outline-none flex items-center justify-center mt-10">
                        Create a workspace
                    </Link>
                </div>
                <div className="text-xs md:text-base text-[#002e5d] flex items-center justify-center mt-10">
                        Else select one on the menu and start chatting
                </div>
            </div>
        </div>
    );
};

export default Page;
