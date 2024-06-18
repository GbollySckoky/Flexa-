import bigman from "../../assets/bigman.jpeg";
import lady1 from "../../assets/lady1.jpeg";
import lady2 from "../../assets/lady2.jpeg";
import gee from "../../assets/gee.jpeg";
import lady3 from "../../assets/lady3.jpeg";
import { Link } from "react-router-dom";
import Display from "./Display";

const Users = () => {
  return (
    <>
      <section id="container" className="text-lightblues">
        <div className="text-center my-[80px]">
          <h1 className="mb-[25px] text-3xl font-medium">
            See What Our Users Has To Say
          </h1>
          <p className="w-[890px] m-auto leading-[2rem] text-xl font-extralight">
            Every month, we bring the spotlight to the heart of Flexa`s dynamic
            financial ecosystem, unveiling the comprehensive stories of
            individuals who have harnessed the full spectrum of Flexa`s
            capabilities.
          </p>
        </div>

        {/* CARDS */}

        <div id="cards" className="grid grid-cols-3  gap-x-6 gap-y-[30px] ">
          {/*   className='text-end'CARD 1 */}
          <div className="bg-lightblues text-white p-[40px]">
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
          <div className="bg-lightblues text-white p-[40px]">
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
          <div className="row-span-2 bg-lightblues text-white p-[40px]">
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
          <div className="bg-lightblues text-white p-[40px]">
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
          <div className="bg-lightblues text-white p-[40px]">
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

        {/* GET STARTED */}
        <div className="text-white flex justify-between bg-lightblues py-[70px] px-[40px] rounded-2xl my-[70px]">
          <div className="text-4xl font-normal w-[50%]">
            <h1 className="w-[300px]">Get started today for better future finance </h1>
          </div>
          <div >
            <p className="pb-[20px] text-lg  leading-[2rem] font-extralight">
              Empowering 4 Million+ Customers on a Journey to Financial Triumph:
              Save Seamlessly, Invest Confidently, and Transact with Assurance.
            </p>
            <button className="bg-white text-lightBlue px-7 py-3 rounded-xl text-lg font-light">
              Get Started
            </button>
            <Link to={"#"} className="ml-5 text-lg font-thin">
              Learn More
            </Link>
          </div>
          <div></div>
        </div>
      </section>
      <Display />
    </>
  );
};

export default Users;
