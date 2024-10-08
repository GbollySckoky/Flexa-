import React from 'react'
import OurAccounts from './OurAccounts'
import {motion} from 'framer-motion'
import { fadeIn } from "../Variant";

const Service = () => {
  return (
    <div>
        <div className='pt-[80px] '>
            <div className='text-center bg-lightblues text-white mb-[40px]'>
                <div 
                  // variants={fadeIn('up')}
                  // initial='hidden'
                  // whileInView={'show'}
                  // viewport={{once: false, amount: 0.2}}
                className='w-[85%] mx-auto py-[90px]'>
                    <h1 className='lg:text-3xl  text-xl lg:font-medium leading-[2rem] lg:leading-[2.8rem]'>
                        Explore Our Variety of Account <br /> Options to Meet All Your Financial Needs
                    </h1>
                    <p className='lg:text-base text-sm font-light  leading-[1.8rem] lg:leading-[2rem] 
                        lg:w-[40%] mx-auto mt-[15px] lg:mt-[20px]'>
                        Empower your business in the payment 
                        revolution with Flexa. Join over 200,000 merchants
                        shaping a secure, simple, and innovative financial future.
                    </p>
                    <button 
                        className="bg-white lg:px-[40px] p-2 text-sm lg:py-[15px] mt-[30px] 
                        rounded-md text-lightBlue lg:font-semibold"> 
                        Get Started
                    </button>
                </div>            
            </div>
            <div 
              // variants={fadeIn('up')}
              // initial='hidden'
              // whileInView={'show'}
              // viewport={{once: false, amount: 0.2}}
              >
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