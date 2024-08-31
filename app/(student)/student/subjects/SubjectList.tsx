"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

import { FaBook } from "react-icons/fa6";

const SubjectList = () => {

    const subjects = [
        {
            subject: 'Mathematics',
            url: ''
        },
        {
            subject: 'Home Economics',
            url: ''
        },
        {
            subject: 'Basic Science',
            url: ''
        },
        {
            subject: 'Basic Technology',
            url: ''
        },
        {
            subject: 'English',
            url: ''
        },
        {
            subject: 'Agriculture',
            url: ''
        },
        {
            subject: 'Business Studies',
            url: ''
        },
        {
            subject: 'Computer Science',
            url: ''
        },
        {
            subject: 'Yoruba',
            url: ''
        },
        {
            subject: 'Social Studies',
            url: ''
        },
        {
            subject: 'Christain Religious Knowledge',
            url: ''
        },
        {
            subject: 'Fishery',
            url: ''
        },
    ]

    const router = useRouter();

    const handleRouter = (route: any) => {
        router.push(`/student/subjects/${route}`)
    }

    return (
        <div className='py-6 px-5 grid grid-cols-4 gap-6'>
            {subjects.map((subject, index) => (
                <div key={index} className='h-[150px] bg-secondary shadow-md rounded-md p-5 cursor-pointer' onClick={() => handleRouter(subject.subject)}>
                    <FaBook className='text-4xl text-main mb-4' />
                    <p>{subject.subject}</p>
                </div>
            ))}
        </div>
    )
}

export default SubjectList
