import Features from "./Features";
import {motion} from 'framer-motion'
import { fadeIn } from "../Variant";
const Hero = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="pt-[80px] ">
        <section className="bg-lightblues text-center w-full text-white">
          <motion.div
           variants={fadeIn('up')}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.2}}
          >
            <div className="lg:text-5xl text-xl  lg:mb-[20px] mb-[15px] pt-[100px]">
              <h1 className="lg:font-semibold lg:leading-[4rem]">
                  Unleashing <br /> Financial Revolution With{" "}
                <span className="text-yellows">Flexa</span>{" "}
              </h1>
            </div>
            <div className="lg:w-[790px] w-[95%] mx-auto lg:mx-auto lg:text-xl text-sm lg:mb-[10px]">
              <p className="font-light ">
                Empowering 4 Million+ Customers on a Journey to Financial Triumph:
                Save Seamlessly, Invest Confidently, and Transact with Assurance.
              </p>
            </div>
            <div className="pb-[90px]">
              <button className="bg-white lg:px-[40px] p-2 text-sm lg:py-[15px] mt-[30px] rounded-md text-lightBlue lg:font-semibold">
                GET STARTED
              </button>
            </div>
          </motion.div>
   
        </section>
      </div>
      <Features />
    </>
  );
};

export default Hero;
