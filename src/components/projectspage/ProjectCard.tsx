import React from 'react'
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    id: number;
    name: string;
    stack: string;
    desc: string;
    image: string;
    type: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, stack, desc, image }) => {
    return (
        <div className='w-full bg-[color:var(--cream-color)] flex flex-col md:flex-row shadow-xl cursor-pointer'>
            <div className='w-full md:w-[60%] xl:w-[55%] py-12 relative'>
                <div className='w-full flex flex-col border-l-[7px] px-6 border-[color:var(--secondary-color)] leading-7'>
                    <div className='w-full flex gap-5'>
                        <Link to={`/projects/${id}`}>
                            <h1 className='text-[23px] font-[700] text-[color:var(--secondary-color)] hover:underline'>{name}</h1>
                        </Link>
                        {/* <span className='bg-white px-4 rounded-full text-[14px] tracking-[1px] shadow-md'>{type}</span> */}
                    </div>
                    <div className='w-full mt-2'>
                        <p className='font-[500] leading-none'>{stack}</p>
                    </div>
                </div>
                <div className='w-full px-8 mt-6'>
                    <p>{desc}</p>
                </div>
            </div>
            <div className='w-full md:w-[40%] xl:w-[45%]'>
                <img src={image} className='w-full h-full aspect-video object-cover object-left' alt="" />
            </div>
        </div>
    )
}

export default ProjectCard