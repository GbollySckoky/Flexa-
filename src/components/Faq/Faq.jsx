import React, {useRef, useState} from 'react'
import { TextField } from '@mui/material'
import { FiSearch } from 'react-icons/fi'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import styled from 'styled-components';
import faqData from './FaqData'
const Faq = () => {
    const [openPanel, setOpenPanel] = useState(null);
    const [query, setQuery] = useState('')
    const datas = faqData.filter((data) => {
        return data.question.toLowerCase().includes(query.toLowerCase())
    })
    const inputRef = useRef(null)
    const togglePanel = (panel) => {
        setOpenPanel(openPanel === panel ? null : panel);
    };

    const FAQContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const Question = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    // padding: 20px;
    background-color: #0B2960;
    color: white;
    border: 1px solid #0B2960;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const Answer = styled.p`
    // padding: 20px;
    // paddingBottom: 10px;
    background-color: #0B2960;
    color: #FFFFFF;
    // border: 1px solid #0B2960;
    border-radius: 10px;
    display: ${props => (props.isOpen ? 'block' : 'none')};
    margin-top: -10px;
`;


  return (
    <div className='pt-[80px]'>
        <div className='w-[85%] mx-auto'>
            <div className='text-center my-[50px]'>
                <h1 className='text-[50px] font-medium mb-2'>Frequently asked questions</h1>
                <p className='text-lg font-light'>Find answers to the most frequently asked questions.</p>
                <p className='text-lg font-light'>Can't find the answer you're looking for?</p>
                <p className='text-lg font-light'>Get in touch with our support team at 
                    <span className='text-[#0B2960] font-medium'> support@stitchvine.com</span>.
                </p>
            </div>
            <div className='relative mb-9'>
                <input
                ref={inputRef} 
                onChange={(e) => setQuery(e.target.value)}
                className='w-[60%] mx-auto rounded-4xl py-2  grid place-items-center pl-[40px]'/>
                <span> 
                    <FiSearch 
                        size={20} 
                        className='absolute left-[230px] top-3 cursor-pointer'
                        onClick={() => {
                          if(inputRef.current){
                            inputRef.current.focus();
                          } 
                        }}
                    /> 
                </span>
            </div>
        </div>
       
        <FAQContainer>
            {datas.map(faq => (
                <div key={faq.id} onClick={() => togglePanel(faq.panel)} className='mb-5 bg-[#0B2960] rounded-lg'>
                    <Question className='pt-[20px] pb-[10px] px-[20px]'>
                        {faq.question}
                        {openPanel === faq.panel ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </Question>
                    <Answer className='px-[20px] py-[20px]' isOpen={openPanel === faq.panel}>
                        {faq.answer}
                    </Answer>
                </div>
            ))}
        </FAQContainer>
    </div>
  )
}

export default Faq