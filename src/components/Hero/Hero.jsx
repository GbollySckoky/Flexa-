const Hero = () => {
  return (
    <div className="relative">
      <section className="bg-Blue h-[60vh] ">
        <div className="bg-lightblues w-[65%] m-auto h-[60vh] rounded-b-full">
          <div className="bg-lightBlue h-[49vh] w-[75%] m-auto rounded-b-full"></div>
        </div>
      </section>
      <div className="absolute top-[110px] text-center w-full text-white">
          <div className="text-4xl mb-[40px] ">
            <h1>Unleashing</h1>
            <h1> Financial Revolution With Flexa</h1>
          </div>
          <div className="w-[800px] m-auto text-xl mb-[50px]">
            <p>
              Empowering 4 Million+ Customers on a Journey to Financial Triumph:
              Save Seamlessly, Invest Confidently, and Transact with Assurance.
            </p>
          </div>
          <button className="bg-white px-[40px] py-[15px] rounded-md text-lightBlue mt-[30px]">GET STARTED</button>
        </div>
    </div>
  );
};

export default Hero;
