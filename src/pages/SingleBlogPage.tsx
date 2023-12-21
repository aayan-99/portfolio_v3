// import soon from '../assets/images/comming_soon.webp'
import back from '../assets/icons/back.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from "framer-motion";
import { pageTransitions } from '../utils/framerAnimationsConstants';
import { useEffect, useState } from 'react';
// import { SingleBlogDetailsProps } from '../types/blogmodel';
import { allBlogsDetails } from '../mockapi/blogsapi';

const SingleBlogPage = () => {

    const navigate = useNavigate();

    const params = useParams();

    const { initial, animate, transition } = pageTransitions;

    const [blogData, setBlogData] = useState<any>({
        id: '',
        title: '',
        content: [],
    });

    useEffect(() => {
        allBlogsDetails?.map((blog) => {
            if (blog?.id == params?.id) {
                setBlogData(blog);
            }
        });
    }, [])

    return (
        <motion.div initial={{ opacity: initial }} animate={{ opacity: animate }} transition={{ duration: transition }} className='w-full py-16 md:py-[120px] bg-[color:var(--primary-color)] flex flex-col justify-center items-center mt-20'>
            <div className='w-full flex justify-normal items-center'>
                <p className='ml-10'><img src={back} className='w-[30px] cursor-pointer' onClick={() => navigate(-1)} alt="" /></p>
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-6 md:gap-16 px-5 md:px-0'>
                <span className="flex justify-center items-center gap-2">
                    <span className="w-4 h-4 mt-[3px] bg-[color:var(--secondary-color)]"></span>
                    <h1 className="text-[26px] lg:text-[30px] font-[700] underline">Blog Title</h1>
                </span>
                <div className="w-full max-w-[1000px]">
                    {
                        blogData?.content?.map((blogData: any) => (
                            <div key={blogData?.id} className='w-full flex flex-col justify-center items-center mb-10'>
                                {
                                    blogData?.type === 'text' ? (
                                        <div className='w-full flex flex-col bg-red-300 border border-blue-400'>
                                            <h1 className='text-[24px] font-[500] mb-3'>{blogData?.title}</h1>
                                            <div className='w-full'>
                                                {
                                                    blogData?.content?.map((text: string, i: number) => (
                                                        <p key={i}>{text}</p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ) : blogData?.type === 'code' ? (
                                        <p>{blogData?.type}</p>
                                    ) : blogData?.type === 'points' ? (
                                        <div className='bg-yellow-400'>
                                            <h1 className='text-[24px] font-[500] mb-3'>{blogData?.title}</h1>
                                            <div className='w-full'>
                                                {
                                                    blogData?.content?.map((text: string, i: number) => (
                                                        <p key={i}>{i + 1}. {text}</p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='bg-pink-400'>
                                            <img src={blogData?.content} alt="" />
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default SingleBlogPage