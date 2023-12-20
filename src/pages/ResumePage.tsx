import PrimaryButton from "../components/global-components/PrimaryButton"
import ExperienceCard from "../components/resumepage/ExperienceCard";
import SkillsCard from "../components/resumepage/SkillsCard";
import resume from '../assets/documents/MyResume.pdf'
import { educationData, experienceData, languagesData, skillData } from "../mockapi/resumepageapi";


const ResumePage = () => {
    return (
        <div className='w-full py-16 md:py-[120px] bg-[color:var(--primary-color)] flex justify-center items-center'>
            <div className='w-full flex flex-col justify-center items-center gap-6 md:gap-16 px-5'>
                <span className="flex justify-center items-center gap-2">
                    <span className="w-4 h-4 mt-[3px] bg-[color:var(--secondary-color)]"></span>
                    <h1 className="text-[26px] lg:text-[30px] font-[700]">Resume</h1>
                </span>
                <div className="w-full max-w-[1000px]">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-[20px] lg:text-[24px] font-[700] tracking-[0px]">Experience</h1>
                        <a href={resume} download="Aayanjit's Resume" target='_blank' rel="noopener noreferrer">
                            <PrimaryButton btnText="DOWNLOAD CV" />
                        </a>
                    </div>
                </div>
                <div className="w-full max-w-[1000px] flex flex-col gap-10">
                    {
                        experienceData?.map((data) => (
                            <ExperienceCard duration={data?.duration} jobPosition={data?.jobPosition} companyName={data?.companyName} location={data?.location} work={data?.work} />
                        ))
                    }
                </div>
                <div className="w-full max-w-[1000px]">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-[20px] lg:text-[24px] font-[700] tracking-[0px]">Education</h1>
                    </div>
                </div>
                <div className="w-full max-w-[1000px] flex flex-col gap-10">
                    {
                        educationData?.map((data) => (
                            <ExperienceCard duration={data?.duration} jobPosition={data?.jobPosition} companyName={data?.companyName} location={data?.location} />
                        ))
                    }
                </div>
                <div className="w-full max-w-[1000px]">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-[20px] lg:text-[24px] font-[700] tracking-[0px]">Skills</h1>
                    </div>
                </div>
                <div className="w-full max-w-[1000px] flex flex-col gap-10">
                    <SkillsCard {...skillData} />
                    <SkillsCard {...languagesData} />
                </div>
            </div>
        </div>
    )
}

export default ResumePage