import React from 'react'

interface ExperienceCardProps {
    duration: string | (() => string),
    jobPosition: string,
    companyName: string,
    location: string,
    work?: string[],
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    duration,
    jobPosition,
    companyName,
    location,
    work,
}) => {
    
    return (
        <div className="w-full bg-[color:var(--cream-color)] shadow-xl rounded-[10px]">
            <div className="flex flex-col md:flex-row items-start p-10 py-14 gap-10 md:gap-8">
                <div className="flex flex-col w-full md:w-fit min-w-[230px] items-start justify-center">
                    <h1 className="text-[23px] font-[700] text-[color:var(--secondary-color)] mb-2">{typeof duration === 'string' ? duration : duration()}</h1>
                    <h1 className="text-[20px] leading-6 mb-1 font-bold">{companyName}</h1>
                    <h1 className="text-[16px] font-[500] mb-3">{jobPosition}</h1>
                    <h1 className="text-[16px] font-[400]">{location}</h1>
                </div>
                <div className="w-full flex flex-col gap-3">
                    {
                        work?.map((data, i) => (
                            <p key={i} className='font-[500] text-[15px]'><span className='mr-2'>•</span>{data}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard