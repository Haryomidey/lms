"use client"
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

import { FaHome, FaBookOpen } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePowerSettingsNew, MdOutlinePayment } from "react-icons/md";

const Sidebar = () => {

    const comps = [
        {
            name: 'Home',
            icon: <FaHome />,
            url: '/student'
        },
        {
            name: 'Subjects',
            icon: <FaBookOpen />,
            url: '/student/subjects'
        },
        {
            name: 'Payment',
            icon: <MdOutlinePayment />,
            url: '/student/payment'
        },
        {
            name: 'Settings',
            icon: <IoSettingsOutline />,
            url: '/student/settings'
        },
    ]

    const pathname = usePathname();
    const router = useRouter()

    const handleRouter = (route: any) => {
        router.push(route)
    }

    return (
        <aside className='fixed top-0 left-0 w-[20%] h-screen bg-secondary p-5 shadow-md'>
            <h1 className='text-center text-main text-3xl font-bold italic'>LMS</h1>
            <ul className='w-full mt-12 flex flex-col gap-4'>
                {comps.map((comp, index) => (
                    <li key={index}
                        onClick={() => handleRouter(comp.url)}
                        className={
                            clsx('h-[40px] flex items-center gap-3 px-2 rounded-md cursor-pointer', 
                                {
                                    'bg-main text-white': comp.url === pathname
                                }
                            )}
                        >
                        <p>{comp.icon}</p>
                        <p>{comp.name}</p>
                    </li>
                ))}
            </ul>
            <div className='absolute bottom-[10%] w-[80%]'>
                <div className='border-destructive text-destructive hover:bg-[#00000023] transition-colors ease duration-300 w-full h-[40px] border rounded-sm flex items-center justify-center cursor-pointer'>
                    <p>Logout</p>
                    <MdOutlinePowerSettingsNew />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
