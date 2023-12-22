import React from 'react'

interface SkillsCardProps {
    title: string,
    skills: string[],
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, skills }) => {
    return (
        <div className="w-full bg-[color:var(--cream-color)] shadow-xl p-10 py-14 gap-16 rounded-[10px]">
            <div className="flex flex-col items-start">
                <h1 className="text-[24px] font-[700] mb-12">{title}</h1>
                <div className="w-full md:w-[80%] grid grid-cols-2 md:grid-cols-4 justify-items-start gap-y-5">
                    {
                        skills?.map((skill, i) => (
                            <span key={i} className="flex justify-center items-center gap-2">
                                <span className="w-4 h-4 mt-[3px] bg-[color:var(--secondary-color)]"></span>
                                <h1 className="text-[14px] font-[500]">{skill}</h1>
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillsCard