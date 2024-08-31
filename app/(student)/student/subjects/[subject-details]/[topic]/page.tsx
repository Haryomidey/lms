import React from 'react'
import Header from '../../../components/Header'
import TopicDetail from './TopicDetail'

    const page = () => {
    return (
        <div className='w-full min-h-full bg-secondary'>
            <Header headerName='Mathematics'/>
            <TopicDetail />
        </div>
    )
    }

export default page
