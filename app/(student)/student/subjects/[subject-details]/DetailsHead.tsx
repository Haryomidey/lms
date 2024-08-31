import React from 'react'

import SubjectImage from '@/public/assets/images/subject-image.png'
import Image from 'next/image'

const DetailsHead = () => {
    return (
        <div className='w-full h-[300px] bg-secondary grid grid-cols-5 gap-6 mt-6'>
            <div className='col-span-2'>
                <Image 
                    src={SubjectImage} 
                    alt=''
                    className='w-full'
                />
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Mathematics</h1>
                <p>Class: JSS 3</p>
                <p>Instructor: <span className='text-main'>Mr Aregbesola</span></p>
            </div>
        </div>
    )
}

export default DetailsHead
