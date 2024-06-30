import React from 'react'
import OurAccounts from './OurAccounts'

const Service = () => {
  return (
    <div>
        <div className='pt-[80px] '>
            <div className='text-center bg-lightblues text-white mb-[40px]'>
                <div className='w-[85%] mx-auto py-[70px]'>
                    <h1 className='lg:text-[30px] text-xl font-medium lg:w-[50%] mx-auto leading-5rem'>
                        Explore Our Variety of Account Options to Meet All Your Financial Needs
                    </h1>
                    <p className='lg:text-base text-sm lg:leading-[2rem] leading-[1.5rem] 
                        lg:w-[60%] mx-auto mt-[10px] lg:mt-[30px]'>
                        Empower your business in the payment 
                        revolution with Flexa. Join over 200,000 merchants
                        shaping a secure, simple, and innovative financial future.
                    </p>
                    <button 
                        className='bg-white text-lightblues lg:font-medium lg:text-xl mt-[30px] 
                        lg:px- px-5 py-2 lg:py-3 rounded-lg'> 
                        Get Started
                    </button>
                </div>            
            </div>
            <div>
                <div className='text-center text-lightblues'>
                    <h1 className='lg:text-3xl text-xl font-medium'>Accounts</h1>
                    <p className='lg:text[25px] text-[15px] font-light pt-2'>Choose the right account for your needs.</p>
                </div>
            </div>
            <OurAccounts />
        </div>
    </div>
  )
}

export default Service