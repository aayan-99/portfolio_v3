import ProjectCard from '../components/projectspage/ProjectCard'
import { projectsData } from '../mockapi/projectpageapi'

const ProjectsPage = () => {
    return (
        <div className='w-full py-16 md:py-[120px] bg-[color:var(--primary-color)] flex justify-center items-center'>
            <div className='w-full flex flex-col justify-center items-center gap-8 md:gap-14 px-5 md:px-0'>
                <span className="flex justify-center items-center gap-2">
                    <span className="w-4 h-4 mt-[3px] bg-[color:var(--secondary-color)]"></span>
                    <h1 className="text-[26px] lg:text-[30px] font-[700]">Projects</h1>
                </span>
                <div className='w-full max-w-[900px] mx-auto'>
                    <div className='w-full flex flex-col gap-14 md:px-5'>
                        {
                            projectsData?.map((project) => (
                                <ProjectCard key={project?.id} id={project?.id} name={project?.title} stack={project?.stack} desc={project?.desc} image={project?.image} type={project?.type} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage