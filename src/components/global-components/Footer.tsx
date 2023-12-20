import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import { footerData } from '../../mockapi/footerapi';


const Footer = () => {
    return (
        <div className='bg-[color:var(--cream-color)] md:p-8'>

            {/* desktop footer */}
            <div className='hidden md:flex w-full  justify-between items-center'>
                <div className='flex flex-col'>
                    <h1 className='text-[12px] font-[400]'>{footerData?.copyright}</h1>
                </div>
                <div className='w-fit flex gap-12'>
                    {
                        footerData?.contact?.map((contactData) => (
                            <div key={contactData?.id} className='flex flex-col justify-center items-center'>
                                <h1 className='text-[12px] font-[400]'>{contactData?.title}</h1>
                                <div className='text-[12px] font-[400] flex items-center gap-5'>
                                    {
                                        contactData?.links?.map((linkData) => {
                                            if (contactData?.id !== 2) {
                                                return (
                                                    <h1 className='text-[12px] font-[400] mt-[1px]'>{linkData?.link}</h1>
                                                )
                                            } else {
                                                return (
                                                    <a href={linkData?.link} target='blank' className='mt-[2px]'>
                                                        <img src={linkData?.id === 'github' ? github : linkData?.id === 'linkedin' ? linkedin : linkData?.id === 'instagram' ? instagram : ''} className='w-[18px]' alt="" />
                                                    </a>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* mobile footer */}
            <div className='md:hidden w-full p-8'>
                <div className='w-full grid grid-cols-2 gap-y-6'>
                    {
                        footerData?.contact?.map((contactData) => (
                            <div key={contactData?.id} className='flex flex-col justify-center items-start'>
                                <h1 className='text-[16px] font-[600]'>{contactData?.title}</h1>
                                <div className='text-[12px] font-[400] flex items-center gap-5'>
                                    {
                                        contactData?.links?.map((linkData) => {
                                            if (contactData?.id !== 2) {
                                                return (
                                                    <h1 className='text-[14px] font-[400] mt-[1px]'>{linkData?.link}</h1>
                                                )
                                            } else {
                                                return (
                                                    <a href={linkData?.link} target='blank' className='mt-[2px]'>
                                                        <img src={linkData?.id === 'github' ? github : linkData?.id === 'linkedin' ? linkedin : linkData?.id === 'instagram' ? instagram : ''} className='w-[19px]' alt="" />
                                                    </a>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='w-full flex flex-col items-center mt-10'>
                    <h1 className='text-[14px] font-[400]'>{footerData?.copyright}</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Footer