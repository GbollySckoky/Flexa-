import React, { useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styled from 'styled-components';
import faqData from './FaqData';

const FAQContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #0B2960;
  color: white;
  border: 1px solid #0B2960;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Answer = styled.p`
  background-color: #0B2960;
  color: #FFFFFF;
  border-radius: 10px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  margin-top: -10px;
`;

const Faq = () => {
  const [openPanel, setOpenPanel] = useState(null);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const datas = faqData.filter((data) => {
    return data.question.toLowerCase().includes(query.toLowerCase());
  });

  const togglePanel = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <div className='pt-[80px]'>
      <div className='w-[85%] mx-auto'>
        <div className='text-center mt-[50px] mb-[30px] lg:my-[50px]'>
          <h1 className='lg:text-[50px] text-2xl font-medium lg:mb-[20px]'>Frequently asked questions</h1>
          <p className='lg:text-lg text-base my-1 font-light'>Find answers to the most frequently asked questions.</p>
          <p className='lg:ext-lg my-1  font-light'>Can't find the answer you're looking for?</p>
          <p className='lg:text-lg font-light'>Get in touch with our support team at 
            <span className='text-[#0B2960] font-medium'> support@stitchvine.com</span>.
          </p>
        </div>
        <div className='relative mb-9 w-[75%] mx-auto'>
          <input
            ref={inputRef} 
            onChange={(e) => setQuery(e.target.value)}
            className='rounded-4xl py-2 w-full pl-[40px]'
          />
          <span> 
            <FiSearch 
              size={20} 
              className='absolute left-3 top-3 cursor-pointer'
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
            /> 
          </span>
        </div>
      </div>
      
      <FAQContainer>
        {datas.map(faq => (
          <div key={faq.id} onClick={() => togglePanel(faq.panel)} className='mb-5  bg-[#0B2960] rounded-lg'>
            <Question className='pt-[20px] pb-[10px] px-[20px] font-light lg:font-normal'>
              {faq.question}
              {openPanel === faq.panel ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </Question>
            <Answer className='px-[20px] py-[20px] font-light lg:font-normal' isOpen={openPanel === faq.panel}>
              {faq.answer}
            </Answer>
          </div>
        ))}
      </FAQContainer>
      
      {/* INFO */}
      <div className='bg-lightblues text-white my-[50px] lg:text-xl lg:font-normal font-light lg:w-[70%] mx-auto p-[50px] rounded-xl'>
        <p>Moniepoint provides over 2 million people and businesses across Nigeria with access to banking, 
          payments processing, loans and business management tools.
        </p>
      </div>
    </div>
  );
};

export default Faq;
