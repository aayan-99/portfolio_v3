import { useParams } from 'react-router-dom'
import { motion } from "framer-motion";
import { pageTransitions } from '../utils/framerAnimationsConstants';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { SingleBlogDetailsProps } from '../types/blogmodel';
import { allBlogsDetails } from '../mockapi/blogsapi';
import BackButton from '../components/global-components/BackButton';

const SingleBlogPage = () => {

    const params = useParams();

    const { initial, animate, transition } = pageTransitions;

    const [blogData, setBlogData] = useState<any>({
        id: '',
        title: '',
        content: [],
    });

    useEffect(() => {
        const foundBlog = allBlogsDetails.find(blog => blog.id === params.id);
        if (foundBlog) {
            setBlogData(foundBlog);
        }
    }, [])

    return (
        <motion.div initial={{ opacity: initial }} animate={{ opacity: animate }} transition={{ duration: transition }} className='relative w-full py-16 md:py-[120px] bg-[color:var(--primary-color)] flex flex-col justify-center items-center mt-20'>
            <BackButton />
            <div className='w-full flex flex-col justify-center items-center gap-6 md:gap-16 px-5 md:px-0'>
                <span className="flex justify-center items-center gap-2 lg:mb-[50px] mt-10 md:mt-5">
                    <span className="hidden 2xl:block w-4 h-4 mt-[3px] bg-[color:var(--secondary-color)]"></span>
                    <h1 className="text-[26px] lg:text-[30px] font-[700] underline">{blogData?.title}</h1>
                </span>
                <div className="w-full max-w-[1000px] mt-16">
                    {
                        blogData?.content?.map((blog: any) => (
                            <div key={blog?.id} className='w-full flex flex-col justify-center items-center mb-10'>
                                {
                                    blog?.type === 'text' ? (
                                        <div className='w-full flex flex-col mb-10'>
                                            <h1 className='text-[28px] font-[500] mb-3'>{blog?.title}</h1>
                                            <div className='w-full'>
                                                {
                                                    blog?.content?.map((text: string, i: number) => (
                                                        <p className='mb-1' key={i}>{text}</p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ) : blog?.type === 'code' ? (
                                        <div className='w-full flex flex-col mb-10'>
                                            <h1 className='text-[24px] font-[500] mb-8'>{blog?.title}</h1>
                                            <div className='w-full'>
                                                {
                                                    blog?.content?.map((codeData: any, i: number) => (
                                                        <div className='w-full' key={i}>
                                                            <h1 className='font-[500] text-[20px] mb-4'>{codeData?.title}</h1>
                                                            {
                                                                codeData?.content?.map((code: any, i: number) => (
                                                                    <div className='w-full' key={i}>
                                                                        <h1 className='font-[400] mb-2'>{codeData?.intro}</h1>
                                                                        <SyntaxHighlighter language="javascript" style={dark}>
                                                                            {code}
                                                                        </SyntaxHighlighter>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ) : blog?.type === 'points' ? (
                                        <div className='w-full mb-10'>
                                            <h1 className='text-[24px] font-[500] mb-5'>{blog?.title}</h1>
                                            <div className='w-full'>
                                                {
                                                    blog?.content?.map((text: string, i: number) => (
                                                        <p key={i}><span className='text-[15px] font-[500]'>{i + 1}.</span> {text}</p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='w-full mb-10'>
                                            <img src={blog?.content} className='rounded-[10px]' alt="" />
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