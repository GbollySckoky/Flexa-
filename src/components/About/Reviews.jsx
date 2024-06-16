import React from 'react'
import bigman from "../../assets/bigman.jpeg";
import lady1 from "../../assets/lady1.jpeg";
import lady2 from "../../assets/lady2.jpeg";
import gee from "../../assets/gee.jpeg";
import lady3 from "../../assets/lady3.jpeg";

const Reviews = () => {
  return (
    <div>
        {/* REVEIWS */}
        <div className=''>
            <div>
                <h1 className='text-2xl font-medium text-center text-lightblues my-[40px]'>
                    Don't just take our word for it
                </h1>
            </div>
            <div>
                <div className="media flex  gap-x-6 gap-y-[30px] ">
                    <div className='flex'>
                    {/*   className='text-end'CARD 1 */}
                    <div className="bg-lightblues text-white p-[40px] w-full">
                        <div className="flex items-center ">
                        <img
                            className="w-[70px] h-[70px] rounded-[50%]"
                            src={bigman}
                            alt=""
                        />
                        <h1 className="text-xl font-medium ">John Doe</h1>
                        </div>
                        <p className="py-3 pt-[20px] text-xl  leading-[2rem] font-light">
                        Helpful responsive customer support has been a standout feature
                        for me.
                        </p>
                        <p className="text-end font-light mt-[42px]">7.30am, 23rd March 2023</p>
                    </div>
                    {/* CARD 2 */}
                    <div className="bg-Blue text-white p-[40px]">
                        <div className="flex items-center ">
                        <img
                            className="w-[80px] h-[80px] rounded-[50%]"
                            src={lady1}
                            alt=""
                        />
                        <h1 className="text-xl font-medium ">Oluwatobi Magret.O</h1>
                        </div>
                        <p className="py-3 pt-[20px] text-xl  leading-[2rem] font-light">
                        Flexa`s commitment to innovation is evident. The platform
                        consantly envolves to meet the ever-changing needs of users.
                        </p>
                        <p className="text-end font-light">7.30am, 23rd March 2023</p>
                    </div>
                    {/* CARD 3 */}
                    <div className="row-span-2 bg-Blue text-white p-[40px]">
                        <div className="flex items-center ">
                        <img
                            className="w-[70px] h-[70px] rounded-[50%]"
                            src={lady2}
                            alt=""
                        />
                        <h1 className="text-xl font-medium ">Aamira Fareeda.M</h1>
                        </div>
                        <p className="py-3 pt-[20px] text-xl  leading-[2rem] font-light">
                        The flexible loans have been a game-changer for me. Being able to
                        customize my repayment plan and having no hidden fees makes Flexa
                        my go-to choice for financial support, Highly recommended!.
                        </p>
                        <p className="text-end font-light mt-[90px]">7.30am, 23rd March 2023</p>
                    </div>
                    {/* CARD 4 */}
                    <div className="bg-Blue text-white p-[40px]">
                        <div className="flex items-center ">
                        <img
                            className="w-[70px] h-[70px] rounded-[50%]"
                            src={gee}
                            alt=""
                        />
                        <h1 className="text-xl font-medium">Oluwajuwon Abdullateef.O</h1>
                        </div>
                        <p className="py-3 pt-[20px] text-xl leading-[2rem] font-light ">
                        Flexa has revolutionised the way i manage my finances. The
                        flexibility in loans and the intuitive dashboard make it a
                        standout platform for me. instant approvals and transparent
                        terms--couldn`t ask for more.
                        </p>
                        <p className="text-end font-light">7.30am, 23rd March 2023</p>
                    </div>
                    {/* CARD 5 */}
                    <div className="bg-Blue text-white p-[40px]">
                        <div className="flex items-center ">
                        <img
                            className="w-[70px] h-[70px] rounded-[50%]"
                            src={lady3}
                            alt=""
                        />
                        <h1 className="text-xl font-medium ">Oluwakemi Omolara.A</h1>
                        </div>
                        <p className="pt-[20px] pb-3 text-xl leading-[2rem] font-light">
                        Flexa has made my finance management a breeze
                        </p>
                        <p className="text-end font-light mt-[90px]">7.30am, 23rd March 2023</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews