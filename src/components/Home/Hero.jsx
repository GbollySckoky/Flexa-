import Features from "./Features";
import Header from "../../components/Header/Header";
const Hero = () => {
  return (
    <>
      <Header />
      <div className="relative pt-[20px]">
        <section className="bg-Blue mt-[60px]">
          <div className="bg-lightblues w-[65%] m-auto h-[60vh] rounded-b-full">
            <div className="bg-lightBlue h-[50vh] w-[80%] m-auto rounded-b-full"></div>
          </div>
        </section>
        <div className="absolute top-[110px] text-center w-full text-white">
          <div className="text-5xl mt-[90px] mb-[30px] font-semibold leading-[3rem]">
            <h1 className="pb-3">Unleashing</h1>
            <h1> Financial Revolution With <span className="text-yellows">Flexa</span> </h1>
          </div>
          <div className="w-[790px] m-auto text-xl mb-[30px]">
            <p className="font-light">
              Empowering 4 Million+ Customers on a Journey to Financial Triumph:
              Save Seamlessly, Invest Confidently, and Transact with Assurance.
            </p>
          </div>
          <button className="bg-white px-[40px] py-[15px] rounded-md text-lightBlue mt-[30px] font-semibold">
            GET STARTED
          </button>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Hero;
