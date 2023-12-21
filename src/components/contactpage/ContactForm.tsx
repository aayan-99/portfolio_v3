import { useEffect, useRef, useState } from 'react'
import PrimaryButton from '../global-components/PrimaryButton';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {

    const [contactLoader, setContactLoader] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.SyntheticEvent) => {
        setContactLoader(true);
        e.preventDefault();
        if (formRef?.current) {
            emailjs.sendForm(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    if (formRef.current) {
                        formRef.current.reset();
                        toast.success('Message sent sucessfully!', {
                            position: 'top-center',
                        });
                        setContactLoader(false);
                    }
                }, (error) => {
                    console.log(error.text);
                    toast.error('Something went wrong!', {
                        position: 'top-center',
                    });
                    setContactLoader(false);
                });
        }
    };

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
    }, [])

    return (
        <form ref={formRef} onSubmit={handleSubmit} className='w-full bg-[color:var(--cream-color)] px-6 md:px-16 py-10 md:py-20 shadow-xl'>
            <div className='w-full flex items-center gap-10 md:gap-20'>
                <div className='w-full flex flex-col'>
                    <label htmlFor="firstname" className='text-[14px] font-[700]'>First Name <span className='text-[color:var(--secondary-color)] pl-1 text-[20px] font-[500]'>*</span></label>
                    <input name='firstname' type="text" className='w-full bg-transparent px-3 py-2 outline-none border-b-2 border-gray-700' />
                </div>
                <div className='w-full flex flex-col'>
                    <label htmlFor="lastname" className='text-[14px] font-[700]'>Last Name <span className='text-[color:var(--secondary-color)] pl-1 text-[20px] font-[500]'>*</span></label>
                    <input name='lastname' type="text" className='w-full bg-transparent px-3 py-2 outline-none border-b-2 border-gray-700' />
                </div>
            </div>
            <div className='w-full flex flex-col mt-16'>
                <label htmlFor="email" className='text-[14px] font-[700]'>Email <span className='text-[color:var(--secondary-color)] pl-1 text-[20px] font-[500]'>*</span></label>
                <input name='email' type="text" className='w-full bg-transparent px-3 py-2 outline-none border-b-2 border-gray-700' />
            </div>
            <div className='w-full flex flex-col mt-16'>
                <label htmlFor="subject" className='text-[14px] font-[700]'>Subject <span className='text-[color:var(--secondary-color)] pl-1 text-[20px] font-[500]'>*</span></label>
                <input name='subject' type="text" className='w-full bg-transparent px-3 py-2 outline-none border-b-2 border-gray-700' />
            </div>
            <div className='w-full flex flex-col mt-16'>
                <label htmlFor="message" className='text-[14px] font-[700]'>Message <span className='text-[color:var(--secondary-color)] pl-1 text-[20px] font-[500]'>*</span></label>
                <textarea name='message' rows={4} className='w-full bg-transparent px-3 py-2 outline-none border-b-2 border-gray-700' />
            </div>
            <div className='w-full flex justify-between mt-8 relative'>
                {/* <PrimaryButton btnText="CONNECT" /> */}
                {
                    contactLoader ? (
                        <button className="px-8 py-1.5 rounded-[20px] bg-[color:var(--secondary-color)] text-white active:scale-95 transition-all duration-100 ease-in-out opacity-70" disabled>
                            <div
                                className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent mt-[2px] mx-4 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span>
                                
                            </div>
                        </button>
                    ) : (
                        <PrimaryButton btnText="CONNECT" />
                    )
                }
            </div>
        </form>
    )
}

export default ContactForm