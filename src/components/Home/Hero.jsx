import Features from "./Features";
// import Header from "../../components/Header/Header";
const Hero = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="pt-[80px]">
        <section className="bg-lightblues text-center w-full text-white">
          <div className="lg:text-5xl text-xl  lg:mb-[30px] mb-[15px]  pt-[100px]">
            <h1 className="lg:font-semibold lg:leading-[3rem]">
                Unleashing <br /> Financial Revolution With{" "}
              <span className="text-yellows">Flexa</span>{" "}
            </h1>
          </div>
          <div className="lg:w-[790px] w-[95%] mx-auto lg:mx-auto lg:text-xl text-sm lg:mb-[30px]">
            <p className="font-light">
              Empowering 4 Million+ Customers on a Journey to Financial Triumph:
              Save Seamlessly, Invest Confidently, and Transact with Assurance.
            </p>
          </div>
          <div className="pb-[90px]">
            <button className="bg-white lg:px-[40px] p-2 text-sm lg:py-[15px] rounded-md text-lightBlue mt-[30px] lg:font-semibold">
              GET STARTED
            </button>
          </div>
        </section>
      </div>
      <Features />
    </>
  );
};

export default Hero;
