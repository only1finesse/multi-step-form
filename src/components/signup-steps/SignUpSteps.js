import React from 'react'
import PersonalInfo from './personal-info/PersonalInfo'

const SignUpSteps = () => {
    return (
        <section className='relative flex justify-center bottom-[74px] mb-6'>
            <div className='min-h-full bg-white rounded-lg w-11/12 mx-4 py-8 px-6'>
                <PersonalInfo />
            </div>
        </section>
    )
}

export default SignUpSteps