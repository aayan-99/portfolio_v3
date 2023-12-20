import React from 'react'

interface ProjectCardProps {
    name: string;
    stack: string;
    desc: string;
    image: string;
    type: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ name, stack, desc, image }) => {
    return (
        <div className='w-full bg-[color:var(--cream-color)] flex flex-col md:flex-row shadow-xl'>
            <div className='w-full md:w-[60%] py-12 relative'>
                <div className='w-full flex flex-col border-l-[7px] px-6 border-[color:var(--secondary-color)] leading-7'>
                    <div className='w-full flex gap-5'>
                        <h1 className='text-[23px] font-[700] text-[color:var(--secondary-color)]'>{name}</h1>
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
            <div className='w-full md:w-[40%]'>
                <img src={image} className='w-full h-full aspect-video object-cover object-left' alt="" />
            </div>
        </div>
    )
}

export default ProjectCard