import React from 'react'

const StepTitle = ({title, desc}) => {
    return (
        <div className='mb-6'>
            <h1 className='text-2xl font-bold text-marineBlue mb-4'>{title}</h1>
            <p className='text-coolGray font-normal'>{desc}</p>
        </div>
    )
}

export default StepTitle