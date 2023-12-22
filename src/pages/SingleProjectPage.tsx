import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { projectDetails } from '../mockapi/projectpageapi';
import { SingleProjectProps } from '../types/projectmodel';
import { motion } from "framer-motion";
import { pageTransitions } from '../utils/framerAnimationsConstants';
import DesktopImageFrame from '../components/projectspage/DesktopImageFrame';
import MobileImageFrame from '../components/projectspage/MobileImageFrame';
import BackButton from '../components/global-components/BackButton';

const SingleProjectPage = () => {

    const params = useParams();

    const [projectData, setProjectData] = useState<SingleProjectProps>({
        id: '',
        title: '',
        projectname: '',
        image_1: '',
        image_2: '',
        intro: [],
        responsive: {
            title: '',
            content: [],
        },
        execution: {
            title: '',
            content: [],
        },
        deployment: {
            title: '',
            content: [],
        },
        testing: {
            title: '',
            content: [],
        },
        conclusion: {
            title: '',
            content: [],
        },
    });

    const { initial, animate, transition } = pageTransitions;

    useEffect(() => {
        projectDetails?.map((project) => {
            if (project?.id == params?.id) {
                setProjectData(project);
            }
        })
    }, []);


    return (
        <motion.div initial={{ opacity: initial }} animate={{ opacity: animate }} transition={{ duration: transition }} className='relative w-full py-16 md:py-[120px] bg-[color:var(--primary-color)] flex flex-col justify-center items-center mt-20'>
            <BackButton />
            <div className='w-full flex flex-col justify-center items-center px-5 md:px-0'>
                <span className="flex justify-center items-center gap-2 lg:mb-[50px] mt-10 md:mt-5">
                    <span className="hidden 2xl:block w-4 h-4 mt-[3px] bg-[color:var(--secondary-color)]"></span>
                    <h1 className="text-[26px] lg:text-[38px] text-center font-[700] underline">{projectData?.title}</h1>
                </span>
                <div className="w-full max-w-[80vw] flex flex-col">
                    <div className='w-fit my-[30px] md:my-[100px]'>
                        <DesktopImageFrame image={projectData?.image_1} name='Desktop View' />
                    </div>
                    <div className='w-full flex flex-col mt-10 md:mt-0'>
                        {
                            projectData?.intro?.map((data) => (
                                <div key={data?.id} className='flex flex-col mb-[80px]'>
                                    <h1 className='font-[700] text-[23px] mb-3 md:mb-10 md:text-[30px] underline'>{data?.title}</h1>
                                    <p className='text-[15px]'>{data?.content}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full flex flex-col'>
                        <h1 className='font-[700] text-[23px] mb-3 md:mb-10 md:text-[30px] underline'>{projectData?.execution?.title}</h1>
                        {
                            projectData?.execution?.content?.map((data) => (
                                <div key={data?.id} className='flex flex-col mb-20'>
                                    <h1 className='font-[600] text-[23px] mb-8 italic'>{data?.title}</h1>
                                    {
                                        data?.content?.map((sub_data) => (
                                            <div key={sub_data?.id} className='mb-7'>
                                                <h1 className='font-[500] text-[17px] mb-1'>{sub_data?.title}</h1>
                                                <p className='text-[15px]'>{sub_data?.content}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full my-[30px] mb-[100px] lg:my-[100px]'>
                        <DesktopImageFrame image={projectData?.image_2} name='Desktop View 2' />
                    </div>
                    <div className='w-full flex flex-col mb-[30px] md:mb-[60px]'>
                        <h1 className='font-[700] text-[23px] md:text-[30px] mb-3 md:mb-10 underline'>{projectData?.deployment?.title}</h1>
                        {
                            projectData?.deployment?.content?.map((data, i) => (
                                <div key={i} className='flex flex-col mb-20'>
                                    <p className='text-[15px]'>{data}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full flex flex-col mb-[30px] md:mb-[60px]'>
                        <h1 className='font-[700] text-[23px] md:text-[30px] mb-3 md:mb-10 underline'>{projectData?.testing?.title}</h1>
                        {
                            projectData?.testing?.content?.map((data, i) => (
                                <div key={i} className='flex flex-col mb-20'>
                                    <p className='text-[15px]'>{data}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full flex flex-col mb-[30px] md:mb-[100px]'>
                        <h1 className='font-[700] text-[23px] md:text-[30px] mb-20 underline'>{projectData?.responsive?.title}</h1>
                        <div className='w-full flex flex-col md:flex-row justify-center gap-10 md:gap-20 mb-20'>
                            {
                                projectData?.responsive?.content?.map((data,) => (
                                    <React.Fragment key={data?.id}>
                                        <MobileImageFrame image={data?.image} name='Mobile & Tab Screens' />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full flex flex-col mb-[30px] md:mb-[100px]'>
                        <h1 className='font-[700] text-[23px] md:text-[30px] mb-3 md:mb-10 underline'>{projectData?.conclusion?.title}</h1>
                        {
                            projectData?.conclusion?.content?.map((data, i) => (
                                <div key={i} className='flex flex-col mb-20'>
                                    <p className='text-[15px]'>{data}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SingleProjectPage