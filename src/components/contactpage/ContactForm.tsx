import { useEffect, useRef } from 'react'
import PrimaryButton from '../global-components/PrimaryButton';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (formRef?.current) {
            emailjs.sendForm(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    useEffect(() => emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY), [])

    return (
        <form ref={formRef} onSubmit={() => handleSubmit} className='w-full bg-[color:var(--cream-color)] px-6 md:px-16 py-10 md:py-20 shadow-xl'>
            <div className='w-full flex items-center gap-10 md:gap-20'>
                <div className='w-full flex flex-col'>
                    <label htmlFor="name" className='text-[14px] font-[700]'>First Name <span className='text-[color:var(--secondary-color)] pl-1 text-[20px] font-[500]'>*</span></label>
                    <input type="text" className='w-full bg-transparent px-3 py-2 outline-none border-b-2 border-gray-700' />
                </div>
                <div className='w-full flex flex-col'>
                    <label htmlFor="name" className='text-[14px] font-[700]'>Last Name <span className='text-[color:var(--secondary-color)] pl-1 text-[20px] font-[500]'>*</span></label>
                    <input type="text" className='w-full bg-transparent px-3 py-2 outline-none border-b-2 border-gray-700' />
                </div>
            </div>
            <div className='w-full flex flex-col mt-16'>
                <label htmlFor="name" className='text-[14px] font-[700]'>Email <span className='text-[color:var(--secondary-color)] pl-1 text-[20px] font-[500]'>*</span></label>
                <input type="text" className='w-full bg-transparent px-3 py-2 outline-none border-b-2 border-gray-700' />
            </div>
            <div className='w-full flex flex-col mt-16'>
                <label htmlFor="name" className='text-[14px] font-[700]'>Subject <span className='text-[color:var(--secondary-color)] pl-1 text-[20px] font-[500]'>*</span></label>
                <input type="text" className='w-full bg-transparent px-3 py-2 outline-none border-b-2 border-gray-700' />
            </div>
            <div className='w-full flex flex-col mt-16'>
                <label htmlFor="name" className='text-[14px] font-[700]'>Message <span className='text-[color:var(--secondary-color)] pl-1 text-[20px] font-[500]'>*</span></label>
                <textarea rows={4} className='w-full bg-transparent px-3 py-2 outline-none border-b-2 border-gray-700' />
            </div>
            <div className='w-full flex justify-between mt-8 relative'>
                <PrimaryButton btnText="SAVE" />
            </div>
        </form>
    )
}

export default ContactForm