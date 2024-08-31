import React from 'react'
import Header from '../../components/Header'
import DetailsHead from './DetailsHead'
import Topics from './Topics'

const page = () => {
    return (
        <div className='w-full h-full bg-secondary'>
            <Header headerName='Mathematics'/>
            <DetailsHead />
            <Topics />
        </div>
    )
}

export default page
