import React from 'react'
import { CiBank } from "react-icons/ci";
import transaction from '../../assets/Transaction History.png';
import { RiUserLocationFill } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import Reviews from './Reviews';
const AboutUs = () => {
  return (
    <div className='pt-[80px]'>
    <div className=''>
        {/* ABOUT */}
        <div className=' bg-[#0B2960] text-white relative'>
            <div className=' w-[85%] mx-auto flex items-center py-[80px]'>
                <div className='w-full'>
                    <h1 className='text-2xl font-medium mb-2'>About Flexa</h1>
                    <p className='text-sm '>Flexa was established in response to a pressing need within the Nigerian banking sector: 
                        a need for reliable, affordable, and consistent banking services for SMBs. The Central 
                        Bank of Nigeria (CBN) has recognized the critical role that microfinance banks play in driving 
                        financial inclusion and supporting the growth of the economy. In line with CBN regulations and 
                        initiatives, Flexa is dedicated to providing transparent and efficient financial solutions.
                    </p>
                </div>
                <div className=' w-full ml-[50px] grid place-items-center'>
                    <img 
                    src={transaction} 
                    alt="" 
                    className='h-[200px]  rounded-lg'/>
                </div>
                
            </div>
        </div>
        {/* RATE */}
        <div className='my-[30px]'>
            <div 
                className='flex items-center justify-evenly bg-white 
                shadow-md py-[30px] w-[85%] mx-auto rounded-lg'>
                <div className='flex items-center'>
                    <span> <CiBank
                    size={30}
                    className='text-[#0B2960]' /> </span>
                    <div className='pl-3'>
                        <p> 1000+ </p>
                        <p>Bank accounts</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span> <RiUserLocationFill
                    size={30}
                    className='text-[#0B2960]' />  </span>
                    <div className='pl-3'>
                        <p>70</p>
                        <p>Local governments served</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span> <FaRegChartBar
                    size={30}
                    className='text-[#0B2960]'/> </span>
                    <div className='pl-3'>
                        <p>&#8358;100 Million</p>
                        <p>Processed monthly</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span> <IoBagHandleSharp
                    size={30}
                    className='text-[#0B2960]' /> </span>
                    <div className='pl-3'>
                        <p>&#8358;1B</p>
                        <p>In process</p>
                    </div>
                </div>
            </div>
        </div>
        {/* OUR MISSION */}
        <div className=' my-[40px]'>
            <div className='w-[85%] mx-auto bg-[#0B2960] text-white'>
                <h1 className='text-2xl font-medium'>Our Mission</h1>
                <p className='text-sm'>Flexa's mission is simple: to offer small and medium-sized businesses the banking solutions 
                    they need without the burden of excessive charges. We leverage technology to provide seamless, 
                    affordable, and accessible banking services, ensuring our customers can focus on what they do 
                    best—growing their businesses.
                </p>
                <p className='text-base'>At Flexa, we understand the unique challenges faced by SMBs in Nigeria. That's why our services are 
                    tailored to meet the specific needs of this vital sector. Our innovative banking solutions include:
                </p>
                <ol className='list-disc'>
                    <li >
                        Transparent and Fair Pricing: We believe in clear and straightforward pricing with no hidden fees,
                         allowing businesses to manage their finances with confidence.
                    </li>
                    <li>
                        Advanced Technology Integration: By incorporating the latest in fintech innovations, we ensure 
                        that our customers have access to fast, efficient, and secure banking services, from mobile banking 
                        to AI-powered customer support.
                    </li>
                    <li>
                        Customized Financial Products: Whether it's working capital loans, merchant services, or savings 
                        accounts, our products are designed to support the financial health and growth of SMBs.
                    </li>
                    <li>
                        Financial Literacy and Support: We provide resources and support to help business owners understand 
                        and manage their finances better, empowering them to make informed financial decisions.
                    </li>
                    <li>
                        Customer-Centric Approach: At Flexa, our customers are at the heart of everything we do. Our 
                        dedicated support team is always ready to assist with any banking needs, ensuring a smooth and 
                        satisfying experience.
                    </li>
                </ol>
                <div>
                    <p>By focusing on these core principles, Flexa Microfinance Bank is committed to driving financial inclusion and economic 
                        growth in Nigeria. We strive to be more than just a bank; we aim to be a trusted partner in the success of every small 
                        and medium-sized business we serve.
                    </p>
                </div>
            </div>
        </div>
        <Reviews />
    </div>
    </div>
  )
}

export default AboutUs