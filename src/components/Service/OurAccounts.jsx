import React from 'react'
import tech from '../../assets/tech.jpg'
import firm from '../../assets/firm.jpg'
import flexa from '../../assets/flexa.png'
const OurAccounts = () => {
  return (
    <div>
        <div>
            <div className=' text-lightblues'>
                {/* SAVINGS ACCOUNT */}
                <div className='my-[50px]'>
                    <h1 className='text-3xl text-center mb-[50px]'>Savings Account</h1>
                    <div className='md:flex w-[85%] mx-auto'>
                        <div className='w-full'>
                            <h1 className='text-2xl mb-2'>Savings Account:</h1>
                            <p className='mb-2 text[20px] font-light leading-[2rem]'>Our Savings Accounts are designed to help you grow your savings securely while earning interest. 
                                They are ideal for individuals looking to save for the future with easy access to their funds. 
                            </p>
                            <p className='text-xl font-light my-2'>Features:</p>
                            <ul className='list-disc'>
                                <li className='text[20px] font-light leading-[2rem] mb-2'>
                                    Competitive Interest Rates: Enjoy higher returns on your savings with our competitive interest 
                                    rates. Your money works harder for you, helping you reach your financial goals faster.
                                </li>
                                <li className='text[20px] font-light leading-[2rem] mb-2'>
                                    No Monthly Maintenance Fees: Save without worrying about monthly fees eating into your balance. 
                                    Our savings accounts come with no hidden charges, ensuring that more of your money stays in your 
                                    account.
                                </li>
                                <li className='text[20px] font-light leading-[2rem] mb-2'>
                                    Easy Online Access and Mobile Banking: Manage your savings anytime, anywhere with our 
                                    user-friendly online and mobile banking platforms. Check your balance, transfer funds, 
                                    and monitor your transactions with just a few clicks. Our digital banking services provide 
                                    convenience and control at your fingertips.
                                </li>
                            </ul>
                        </div>
                        <div className='w-full ml-[35px]'>
                        <img src={tech} className='w-full h-full' alt="" />
                        </div>
                        
                    </div>
                </div>

                {/* CURRENT ACCOUNT */}
                <div className='my-[50px]'>
                    <h1 className='text-3xl text-center mb-[50px]'>Current Account</h1>
                    <div className='flex w-[85%] mx-auto'>
                    <div className='w-full'>
                        <h1 className='text-2xl mb-2'>Current Account</h1>
                        <p className='mb-2 text[20px] font-light leading-[2rem]'>
                            Our Current Accounts offer a seamless way to manage your daily transactions with unlimited 
                            withdrawals and deposits. They are perfect for individuals and businesses needing frequent 
                            access to their funds. With a focus on convenience and flexibility, our current accounts are 
                            designed to meet your everyday banking needs efficiently and securely. 
                        </p>
                        <p className='text-xl font-light my-2'>Features:</p>
                        <ul className='list-disc'>
                            <li className='text[20px] font-light leading-[2rem] mb-2'>
                                No Minimum Balance Requirement: Enjoy the freedom of banking without worrying about 
                                maintaining a minimum balance. Our current accounts have no minimum balance requirement, 
                                allowing you to use your funds as needed without penalties or fees.
                            </li>
                            <li className='text[20px] font-light leading-[2rem] mb-2'>
                                Overdraft Protection: Avoid the hassle and embarrassment of bounced checks or declined 
                                transactions. Our overdraft protection ensures that you have a safety net for those 
                                occasional shortfalls, providing peace of mind and financial stability.
                            </li>
                            <li className='text[20px] font-light leading-[2rem] mb-2'>
                                Free Debit Card and Checkbook: Access your money easily with a free debit card and checkbook 
                                provided with your account. Make purchases, pay bills, and manage your finances effortlessly,
                                whether you're at home or on the go.
                            </li>
                        </ul>
                    </div>
                    <div className='w-full ml-[35px]'>
                    <img src={firm} className='w-full h-full' alt="" />
                    </div>
                    </div>
                </div>

               {/* FIXED ACCOUNT */}
               <div className='my-[50px]'>
                    <h1 className='text-3xl text-center mb-[50px]'>Fixed Account</h1>
                    <div className='flex w-[85%] mx-auto'>
                    <div className='w-full'>
                        <h1 className='text-2xl mb-2'>Fixed Account</h1>
                        <p className='mb-2 text[20px] font-light leading-[2rem]'>
                            Fixed Deposits provide a secure investment option with guaranteed returns. Lock in your money 
                            for a fixed term and enjoy higher interest rates compared to regular savings accounts. Ideal 
                            for those looking to invest their funds without exposure to market risks, fixed deposits offer
                            a predictable and reliable way to grow your savings.
                        </p>
                        <p className='text-xl font-light my-2'>Features:</p>
                        <ul className='list-disc'>
                            <li className='text[20px] font-light leading-[2rem] mb-2'>
                                Higher Interest Rates Compared to Savings Accounts: Earn more with our competitive fixed 
                                deposit interest rates. The longer you lock in your funds, the higher the returns, allowing 
                                you to maximize your investment.
                            </li>
                            <li className='text[20px] font-light leading-[2rem] mb-2'>
                                Flexible Terms from 1 Month to 5 Years: Choose a term that suits your financial goals, ranging 
                                from short-term deposits of 1 month to long-term investments of up to 5 years. This flexibility 
                                allows you to plan your finances according to your needs.
                            </li>
                            <li className='text[20px] font-light leading-[2rem] mb-2'>
                                Premature Withdrawal Option: While fixed deposits are intended to be held until maturity, we 
                                understand that circumstances can change. Our premature withdrawal option allows you to access 
                                your funds before the end of the term, though penalties may apply.
                            </li>
                        </ul>
                    </div>
                    <div className='w-full ml-[35px]'>
                    <img src={flexa} className='w-full h-full' alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <div 
                className='flex items-center justify-between w-[85%] mx-auto
                bg-lightblues py-[40px] my-[25px] rounded-lg px-[80px]'>
                <h1 className='text-white text-2xl font-normal max-w-[500px]'>
                    Open an Account and Begin Your Investment Journey
                </h1>
                <div className='flex items-center flex-wrap relative'>
                    <input 
                        type="text" 
                        placeholder='Sign Up' 
                        className='py-[14px] w-[500px] outline-none pl-3 pr-[180px]'/>
                    <button 
                        className='text-white bg-lightblues py-3 mr-2 border-none outline-none rounded-lg px-5 absolute right-0'>
                        Sign Up For Free
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurAccounts