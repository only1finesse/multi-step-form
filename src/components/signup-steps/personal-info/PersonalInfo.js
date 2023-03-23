import React from 'react'
import StepTitle from '../StepTitle'
import PersonalInfoInput from './PersonalInfoInput';

const TITLE = 'Personal Info';
const DESC = 'Please provide your name, email address, and phone number.'

const PersonalInfo = () => {
  return (
    <div className='flex flex-col '>
      {/* title and decription */}
      <StepTitle title={TITLE} desc={DESC} />

      <div className='flex flex-col gap-4'>
        {/* name input */}
        <PersonalInfoInput label={'Name'} placeholder={'e.g Stephen King'} />

        {/* email input */}
        <PersonalInfoInput label={'Email'} placeholder={'e.g stephenking@lorem.com'} />

        {/* phone number input */}
        <PersonalInfoInput inputType={'phone'} label={'Phone Number'} placeholder={'e.g. +1 234 567 890'} />
      </div>
    </div>
  )
}

export default PersonalInfo