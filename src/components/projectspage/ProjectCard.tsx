import React from 'react'
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    id: number;
    name: string;
    stack: string;
    desc: string;
    image: string;
    type: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, stack, desc, image }) => {
    return (
        <Link to={`/projects/${id}`}>
            <div className='w-full bg-[color:var(--cream-color)] flex flex-col md:flex-row shadow-xl cursor-pointer rounded-[10px]'>
                <div className='w-full md:w-[60%] xl:w-[55%] py-12 relative'>
                    <div className='w-full flex flex-col border-l-[7px] px-6 border-[color:var(--secondary-color)] leading-7'>
                        <div className='w-full flex gap-5'>
                            <h1 className='text-[23px] font-[700] text-[color:var(--secondary-color)] hover:underline'>{name}</h1>
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
                    <img src={image} className='w-full h-full aspect-video object-cover object-left rounded-b-[10px] md:rounded-l-none md:rounded-r-[10px] border-l md:border-l-0 border-r md:border-t border-b border-[color:(var--cream-color)]' alt="" />
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard