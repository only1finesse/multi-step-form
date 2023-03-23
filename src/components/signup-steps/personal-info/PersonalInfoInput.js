import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'

const PersonalInfoInput = ({ label, placeholder, inputType }) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setValue(e.target.value)
    };

    return (
        <div className='flex flex-col gap-[2px]'>
            <span className='text-xs'>{label}</span>
            {inputType === 'phone' ?
                <PhoneInput
                    className='infoInput'
                    placeholder={placeholder}
                /> :
                <input className='infoInput' type="text" placeholder={placeholder} onChange={handleChange} value={value} />}
        </div>
    )
}

export default PersonalInfoInput