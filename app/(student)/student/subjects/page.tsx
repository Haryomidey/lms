import React from 'react'
import Header from '../components/Header'
import SubjectList from './SubjectList'

const page = () => {
    return (
        <div className='w-full h-full'>
            <Header headerName='Subjects' />
            <SubjectList />
        </div>
    )
}

export default page
