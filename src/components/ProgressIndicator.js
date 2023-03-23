import React from 'react'

const ProgressIndicator = () => {
    return (
        <section className='progressIndicatorBg min-w-full bg-cover h-[172px]'>
            {/* steps */}
            <div className='flex justify-center'>
                <ul className='grid grid-cols-4 justify-items-center w-48 mt-8'>
                    <li className='progressStep text-marineBlue bg-lightBlue'><span>1</span></li>
                    <li className='progressStep'><span>2</span></li>
                    <li className='progressStep'><span>3</span></li>
                    <li className='progressStep'><span>4</span></li>
                </ul>
            </div>
        </section>
    )
}

export default ProgressIndicator