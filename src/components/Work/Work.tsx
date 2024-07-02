import React from 'react'
// import tx from '../../assets/Group.png'
const Work = () => {
  return (
    <div className='pt-[80px] '>
      <div className=' mb-[20px] mt-[40px]'>
        <h1 className='text-3xl text-center font-medium mb-[20px]'>
            How It Works
          </h1>
        <div className='w-[85%] mx-auto flex items-center'>
          <div>
            <p className='text-base font-light leading-7'>
              Welcome to our "How it Works" section! We aim to provide a clear and detailed overview of our process, 
              ensuring you have a transparent understanding of how we can assist you in achieving your financial goals. 
              Our comprehensive, step-by-step guide outlines each phase of our collaboration, making it easy for you to 
              navigate our services. Here's how we work:
            </p>
          </div>
        </div>
      </div>
      <ul className='list-disc w-[85%] mx-auto mb-[30px]'>
        {/* INITIAL CONSULTATION */}
        <p className='text-xl font-normal py-2'>
          Initial Consultation:
        </p>
        <li className='font-light py-2 leading-7'>
          Discovery Session: Start with a free, no-obligation consultation where we get to know you and your financial 
          situation. This session allows us to understand your current financial standing, challenges, and goals.
        </li>
        <li className='font-light py-2 leading-7'>
          Needs Assessment: We conduct a thorough needs assessment to identify your financial objectives, 
          risk tolerance, and preferences. This step helps us gather all the necessary information to 
          craft a tailored financial strategy.
        </li>
        {/* CUSTOMIZED PLAN */}
        <p className='text-xl font-normal py-2'>
          Customized Plan:
        </p>
        <li className='font-light py-2 leading-7'>
          Strategy Development: Based on the insights gained during the initial consultation, we develop a comprehensive 
          financial plan. This plan includes personalized strategies designed to meet your specific goals, whether 
          it's saving for retirement, investing, or managing debt.
        </li>
        <li className='font-light py-2 leading-7'>
          Detailed Proposal: We present you with a detailed proposal that outlines the recommended actions, investment 
          options, and timelines. This proposal ensures you understand each component of the plan and how it 
          contributes to your overall financial well-being.
        </li>
        {/* IMPLEMENTATION */}
        <p className='text-xl font-normal py-2'>
          Implementation:
        </p>
        <li className='font-light py-2 leading-7'>
          Action Plan: Once you approve the customized plan, we create an action plan that breaks down each 
          step into manageable tasks. Our team guides you through the process, ensuring all aspects of 
          the plan are implemented smoothly.
        </li>
        <li className='font-light py-2 leading-7'>
          Execution: We execute the plan with precision, leveraging our expertise and resources to set up 
          accounts, make investments, and manage transactions on your behalf.
        </li>
        {/* MONITORING AND SUPPORT */}
        <p className='text-xl font-normal py-2'>
          Monitoring and Support:
        </p>
        <li className='font-light py-2 leading-7'>
          Continuous Monitoring: Our job doesn't end with the implementation. We continuously monitor your financial 
          plan's performance, ensuring it remains aligned with your goals and market conditions.
        </li>
        <li className='font-light py-2 leading-7'>
          Ongoing Support: Our team is always available to provide support and answer any questions you may have. 
          We offer regular check-ins and updates, keeping you informed about your financial progress.
        </li>
          {/* REVIEW AND ADJUST */}
        <p className='text-xl font-normal py-2'>
          Review and Adjust:
        </p>
        <li className='font-light py-2 leading-7'>
          Regular Reviews: We conduct regular reviews of your financial plan to evaluate its effectiveness. 
          These reviews are an opportunity to discuss any changes in your financial situation or goals.
        </li>
        <li className='font-light py-2 leading-7'>
          Plan Adjustments: Based on the review findings, we make necessary adjustments to your plan. 
          This ensures your financial strategy remains flexible and responsive to your evolving needs 
          and any changes in the economic landscape.
        </li>
        {/* CLIENT EDUCATION */}
        <p className='text-xl font-normal py-2'>
          Client Education:
        </p>
        <li className='font-light py-2 leading-7'>
          Resource Center: We believe in empowering our clients with knowledge. Our resource center offers a
         wealth of information, including articles, webinars, and tutorials on various financial topics.
        </li>
        <li className='font-light py-2 leading-7'>
          Workshops and Seminars: We regularly host workshops and seminars to educate our clients on 
          financial literacy, investment strategies, and market trends. These events provide valuable 
          insights and help you make informed decisions.
        </li>
        {/* Technology Integration */}
        <p className='text-xl font-normal py-2'>
          Technology Integration:
        </p>
        <li className='font-light py-2 leading-7'>
          Advanced Tools: We leverage advanced financial tools and technologies to enhance our services. 
          These tools provide real-time insights, performance tracking, and secure online access to your 
          financial information.
        </li>
        <li className='font-light py-2 leading-7'>
          Client Portal: Our secure client portal offers 24/7 access to your financial data, 
          allowing you to track your progress, review documents, and communicate with our team 
          anytime, anywhere.
        </li>
        {/* Personalized Experience */}
        <p className='text-xl font-normal py-2'>
          Personalized Experience:
        </p>
        <li className='font-light py-2 leading-7'>
          Dedicated Advisor: You will have a dedicated financial advisor who will be your primary 
          point of contact. This advisor will get to know you personally, providing tailored 
          advice and support.
        </li>
        <li className='font-light py-2 leading-7'>
          Tailored Communication: We understand that every client has different preferences. 
          Whether you prefer regular emails, phone calls, or face-to-face meetings, we tailor 
          our communication to suit your needs.
        </li>
      </ul>
      <div className='w-[85%] mx-auto mb-[25px] rounded-lg bg-lightblues'>
        <p className='font-light text-white px-3 py-5 leading-7'>
          Our goal is to provide you with a seamless, transparent, and empowering experience. By 
          following our structured process, you can confidently navigate your financial journey and 
          achieve lasting success. Explore each step in detail to see how we can help you achieve 
          your financial aspirations.
        </p>
      </div>
    </div>
  )
}

export default Work