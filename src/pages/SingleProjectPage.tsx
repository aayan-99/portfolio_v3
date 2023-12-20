import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import back from '../assets/icons/back.svg'
import { projectDetails } from '../mockapi/projectpageapi';
import { SingleProjectProps } from '../types/projectmodel';

const SingleProjectPage = () => {

    const navigate = useNavigate();

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

    useEffect(() => {
        projectDetails?.map((project) => {
            if (project?.id == params?.id) {
                setProjectData(project);
            }
        })
    }, []);

    useEffect(() => {
        console.log(projectData)
    }, [projectData])


    return (
        <div className='w-full py-16 md:py-[120px] bg-[color:var(--primary-color)] flex flex-col justify-center items-center'>
            <div className='w-full flex justify-normal items-center mb-14'>
                <p className='ml-10'><img src={back} className='w-[30px] cursor-pointer' onClick={() => navigate(-1)} alt="" /></p>
            </div>
            <div className='w-full flex flex-col justify-center items-center px-5 md:px-0'>
                <span className="flex justify-center items-center gap-2 mb-[40px] lg:mb-[120px]">
                    <span className="hidden 2xl:block w-4 h-4 mt-[3px] bg-[color:var(--secondary-color)]"></span>
                    <h1 className="text-[26px] lg:text-[38px] text-center font-[700] underline">{projectData?.title}</h1>
                </span>
                {/* <h1 className='text-[35px] underline font-[700] mb-14'>{projectData?.title}</h1> */}
                <div className="w-full max-w-[80vw] flex flex-col">
                    <img src={projectData?.image_1} className='w-full my-[30px] md:my-[100px]' alt="" />
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
                    <img src={projectData?.image_2} className='w-full my-[30px] mb-[100px] lg:my-[100px]' alt="" />
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
                                projectData?.responsive?.content?.map((data, ) => (
                                    <div key={data?.id} className='w-fit'>
                                        <img src={data?.image} className='w-fit' alt="" />
                                    </div>
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
        </div>
    )
}

export default SingleProjectPage