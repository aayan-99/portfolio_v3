import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';


interface PhotoCardProps {
    picture: string,
    firstName: string,
    lastName: string,
    job: string,
    githubAcc: string,
    linkedinAcc: string,
    instagramAcc: string,
}


const PhotoCard: React.FC<PhotoCardProps> = ({ picture, firstName, lastName, job, githubAcc, linkedinAcc, instagramAcc }) => {
    return (
        <div className="w-full bg-[color:var(--photo-color)] flex flex-col justify-center items-center gap-5 md:gap-10 pt-10 md:pt-14 shadow-lg md:shadow-2xl">
            <div className="bg-gray-300 rounded-full h-[160px] w-[160px]">
                <img src={picture} className='w-full rounded-full' alt="" />
            </div>
            <h1 className="text-[28px] font-[700] flex flex-col leading-none text-center"><span>{firstName}</span> <span>{lastName}</span></h1>
            <div className="h-1 w-[50px] rounded-full mx-auto bg-[color:var(--secondary-color)]"></div>
            <h1 className="text-[20px] font-[400] tracking-[1px]">{job}</h1>
            <div className="w-full flex justify-center items-center gap-10 bg-white  py-3">
                <a href={githubAcc} target='blank'>
                    <img src={github} className='w-[23px]' alt="" />
                </a>
                <a href={linkedinAcc} target='blank'>
                    <img src={linkedin} className='w-[20px]' alt="" />
                </a>
                <a href={instagramAcc} target='blank'>
                    <img src={instagram} className='w-[18px]' alt="" />
                </a>
            </div>
        </div>
    )
}

export default PhotoCard