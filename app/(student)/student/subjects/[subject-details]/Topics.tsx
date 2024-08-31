"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

import { IoIosArrowForward } from "react-icons/io";

const Topics = () => {

    const router = useRouter();

    const handleRouter = (route: any) => {
        router.push(`/student/subjects/Mathematics/${route}`)
    }

    return (
        <div className='mt-8 w-full'>
            <h1 className='text-2xl font-semibold'>Topics</h1>
            <div className='w-full flex flex-col mt-4'>
                {
                    [1,1,1,1,1,1,1,1,1,1,1,1,1].map((_, index) => (
                        <li className='w-full h-[65px] px-3 flex items-center justify-between border-b bg-white cursor-pointer hover:bg-secondary transition-colors ease duration-300' onClick={() => handleRouter('linear-algebra')}>
                            <p>Week 1 <span className='ml-3'>Linear Algebra</span></p>
                            <p><IoIosArrowForward /></p>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default Topics
