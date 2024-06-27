import React from 'react'
import bigman from "../../assets/bigman.jpeg";
import lady1 from "../../assets/lady1.jpeg";
import lady2 from "../../assets/lady2.jpeg";
import Avatar from '@mui/material/Avatar';
const Reviews = () => {
  return (
    <div>
        {/* REVEIWS */}
        <div className=''>
            <div>
                <h1 className='text-2xl font-medium text-center text-lightblues my-[45px]'>
                    Don't just take our word for it
                </h1>
            </div>
            <div>
                <div className="flex  gap-x-6  ">
                    <div className='grid grid-cols-3 space-x-7 w-[85%] mx-auto'>
                        {/*   className='text-end'CARD 1 */}
                        <div className="bg-lightblues text-white p-[40px]">
                            <div className="flex items-center ">
                            <Avatar src={bigman} alt="hello"/>
                            <h1 className="text-xl font-normal pl-5">John Doe</h1>
                            </div>
                            <p className="pt-[20px]  text[25px] leading-[2rem] font-light">
                            Helpful responsive customer support has been a standout feature
                            for me.
                            </p>
                            <p className="text-end font-light mt-[95px]">7.30am, 23rd March 2023</p>
                        </div>
                        {/* CARD 2 */}
                        <div className="bg-lightblues text-white p-[40px]">
                            <div className="flex items-center ">
                            <Avatar src={lady1} alt="hello"/>
                            <h1 className="text-xl font-normal pl-5">Oluwatobi Magret.O</h1>
                            </div>
                            <p className=" pt-[20px] text-[17px] leading-[2rem] font-light">
                            Flexa`s commitment to innovation is evident. The platform
                            consantly envolves to meet the ever-changing needs of users.
                            </p>
                            <p className="text-end font-light mt-[55px]">7.30am, 23rd March 2023</p>
                        </div>
                        {/* CARD 3 */}
                        <div className="bg-lightblues text-white p-[40px]">
                            <div className="flex items-center ">
                            <Avatar src={lady2} alt="hello"/>
                            <h1 className="text-xl font-normal pl-5">Aamira Fareeda.M</h1>
                            </div>
                            <p className="py-3 pt-[20px] text-[17px]  leading-[2rem] font-light">
                            The flexible loans have been a game-changer for me. Being able to
                            customize my repayment plan and having no hidden fees makes Flexa
                            {/* my go-to choice for financial support, Highly recommended!. */}
                            </p>
                            <p className="text-end font-light mt-[55px] ">7.30am, 23rd March 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews