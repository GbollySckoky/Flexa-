import Features from "./Features";
import Header from "../../components/Header/Header";
const Hero = () => {
  return (
    <>
      <Header />
      <div className="pt-[80px]">
        <section className="bg-Blue text-center w-full text-white">
          <div className="text-5xl  mb-[30px] font-semibold leading-[3rem] pt-[100px]">
            <h1 className="pb-3">Unleashing</h1>
            <h1>
              {" "}
              Financial Revolution With{" "}
              <span className="text-yellows">Flexa</span>{" "}
            </h1>
          </div>
          <div className="w-[790px] m-auto text-xl mb-[30px]">
            <p className="font-light">
              Empowering 4 Million+ Customers on a Journey to Financial Triumph:
              Save Seamlessly, Invest Confidently, and Transact with Assurance.
            </p>
          </div>
          <div className="pb-[90px]">
            <button className="bg-white px-[40px] py-[15px] rounded-md text-lightBlue mt-[30px] font-semibold">
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
