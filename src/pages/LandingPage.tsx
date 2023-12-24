import PhotoCard from '../components/landingpage/PhotoCard';
import PrimaryButton from '../components/global-components/PrimaryButton';
import SecondaryButton from '../components/global-components/SecondaryButton';
import { LandingPageData, photoCardData } from '../mockapi/landingpageapi';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const LandingPage = () => {

    const { greeting, welcomeText, aboutMe, aboutMe_2 } = LandingPageData;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className={`flex flex-col md:flex-row md:h-screen pt-16 mt-20 md:mt-0 md:pt-24`}>
            <div className="w-full md:w-[40%] h-[30vh] md:h-full md:bg-[color:var(--primary-color)] relative">
                <div className="block md:hidden w-full max-w-[350px] absolute right-[3%] sm:top-[10%]">
                    <PhotoCard {...photoCardData} />
                </div>
                <div className="hidden md:block w-full max-w-[350px] absolute -right-[12%] md:-right-[15%] top-[20%]">
                    <PhotoCard {...photoCardData} />
                </div>
            </div>
            <div className="w-full md:w-[60%] md:h-full flex items-center bg-[color:var(--primary-color)] md:bg-[color:var(--cream-color)] pl-5 md:pl-[100px] lg:pl-[150px] pr-5">
                <div className="md:max-w-[500px] pt-[180px] pb-10 md:pb-0 px-4 md:px-0 md:pt-0 ">
                    <h1 className="text-[100px] font-[700]">{greeting}</h1>
                    <h1 className="text-[17px] font-[500] mb-5 md:mb-8 pl-2">{welcomeText}</h1>
                    <div className="w-full md:w-fit flex justify-start gap-6 mb-8">
                        <Link to={`/resume`}>
                            <PrimaryButton btnText='RESUME' />
                        </Link>
                        <Link to={`/projects`}>
                            <SecondaryButton btnText='Projects' />
                        </Link>
                    </div>
                    <h1 className="text-[16px] font-[400] mb-5">{aboutMe}</h1>
                    <h1 className="text-[16px] font-[400]">{aboutMe_2}</h1>
                </div>
            </div>
        </motion.div>
    )
}

export default LandingPage