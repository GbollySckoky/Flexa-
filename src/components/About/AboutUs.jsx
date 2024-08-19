import React from 'react'
import { CiBank } from "react-icons/ci";
import transaction from '../../assets/Transaction History.png';
import { RiUserLocationFill } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import Reviews from './Reviews';
import {motion} from 'framer-motion'
import { fadeIn } from "../Variant";
import Display from '../Home/Display';
const AboutUs = () => {
  return (
    <div className='pt-[80px]'>
    <div className=''>
        {/* ABOUT */}
        <div className=' bg-[#0B2960] text-white'>
            <div className=' w-[85%] mx-auto lg:flex items-center lg:py-[120px] pt-[40px]'>
                <motion.div 
                     variants={fadeIn('left')}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{once: false, amount: 0.2}}
                    className='w-full'>
                    <h1 className='lg:text-4xl text-2xl font-medium mb-3'>About Flexa</h1>
                    <p className='text-base font-light leading-[2rem]'>Flexa was established in response to a pressing need within the Nigerian banking sector: 
                        a need for reliable, affordable, and consistent banking services for SMBs. The Central 
                        Bank of Nigeria (CBN) has recognized the critical role that microfinance banks play in driving 
                        financial inclusion and supporting the growth of the economy. In line with CBN regulations and 
                        initiatives, Flexa is dedicated to providing transparent and efficient financial solutions.
                    </p>
                </motion.div>
                <motion.div 
                     variants={fadeIn('right')}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{once: false, amount: 0.2}}
                    className=' w-full  grid place-items-center'>
                    <img 
                    src={transaction} 
                    alt="" 
                    className='lg:h-[200px] my-[30px] lg:my-0 rounded-lg'/>
                </motion.div>
                
            </div>
        </div>
        {/* RATE */}
        <div className='mt-[60px]'>
            <motion.div
                 variants={fadeIn('up')}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once: false, amount: 0.2}} 
                className='lg:flex items-center justify-evenly bg-white 
                shadow-lg py-[30px] w-[85%] mx-auto rounded-lg space-y-7 lg:space-y-0 pl-[30px] lg:pl-0'>
                <div className='flex items-center'>
                    <span> <CiBank
                    size={30}
                    className='text-[#0B2960]' /> </span>
                    <div className='pl-3 text-lightblues'>
                        <p className='text-xl font-medium'> 1000+ </p>
                        <p className='text-sm'>Bank accounts</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span> <RiUserLocationFill
                    size={30}
                    className='text-[#0B2960]' />  </span>
                    <div className='pl-3 text-lightblues'>
                        <p className='text-xl font-medium'>70</p>
                        <p className='text-sm'>Local governments served</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span> <FaRegChartBar
                    size={27}
                    className='text-[#0B2960]'/> </span>
                    <div className='pl-3 text-lightblues'>
                        <p className='text-xl font-medium'>&#8358;100 Million</p>
                        <p className='text-sm'>Processed monthly</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span> <IoBagHandleSharp
                    size={30}
                    className='text-[#0B2960]' /> </span>
                    <div className='pl-3 text-lightblues'>
                        <p className='text-xl font-medium'>&#8358;1B</p>
                        <p className='text-sm'>In process</p>
                    </div>
                </div>
            </motion.div>
        </div>
        {/* OUR MISSION */}
        <div className=' mt-[60px] bg-[#0B2960] text-white'>
            <motion.div 
                 variants={fadeIn('left')}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once: false, amount: 0.2}}
                className='w-[85%] mx-auto  p-[20px]'>
                <h1 className='text-3xl font-medium py-[20px]'>Our Mission</h1>
                <p className='text-base lg:font-light font-extralight pb-3 leading-[2rem]'>Flexa's mission is simple: to offer small 
                    and medium-sized businesses the banking solutions 
                    they need without the burden of excessive charges. We leverage technology to provide seamless, 
                    affordable, and accessible banking services, ensuring our customers can focus on what they do 
                    best—growing their businesses.
                </p>
                <p className='text-base lg:font-light font-extralight pb-3 leading-[2rem]'>At Flexa, we understand the unique challenges
                     faced by SMBs in Nigeria. That's why our services are 
                    tailored to meet the specific needs of this vital sector. Our innovative banking solutions include:
                </p>
                <ol className='list-disc'>
                    <li className='lg:font-light font-extralight font-base pb-5 leading-[2rem]'>
                        Transparent and Fair Pricing: We believe in clear and straightforward pricing with no hidden fees,
                         allowing businesses to manage their finances with confidence.
                    </li>
                    <li className='lg:font-light font-extralight font-base pb-5 leading-[2rem]'>
                        Advanced Technology Integration: By incorporating the latest in fintech innovations, we ensure 
                        that our customers have access to fast, efficient, and secure banking services, from mobile banking 
                        to AI-powered customer support.
                    </li>
                    <li className='lg:font-light font-extralight font-base pb-5 leading-[2rem]'>
                        Customized Financial Products: Whether it's working capital loans, merchant services, or savings 
                        accounts, our products are designed to support the financial health and growth of SMBs.
                    </li>
                    <li className='lg:font-light font-extralight font-base pb-5 leading-[2rem]'>
                        Financial Literacy and Support: We provide resources and support to help business owners understand 
                        and manage their finances better, empowering them to make informed financial decisions.
                    </li>
                    <li className='lg:font-light font-extralight font-base pb-5 leading-[2rem]'>
                        Customer-Centric Approach: At Flexa, our customers are at the heart of everything we do. Our 
                        dedicated support team is always ready to assist with any banking needs, ensuring a smooth and 
                        satisfying experience.
                    </li>
                </ol>
                <div>
                    <p className='g:font-light font-extralight font-base pb-5 leading-[2rem]'>By focusing on these core principles, Flexa 
                        Microfinance Bank is committed to driving financial inclusion and economic 
                        growth in Nigeria. We strive to be more than just a bank; we aim to be a trusted partner 
                        in the success of every small 
                        and medium-sized business we serve.
                    </p>
                </div>
            </motion.div>
        </div>
        <Reviews />
        {/* <Sponsors /> */}
        <Display />
    </div>
    </div>
  )
}

export default AboutUs