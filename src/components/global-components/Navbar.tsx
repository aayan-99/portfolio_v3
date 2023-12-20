import { Link, useLocation } from "react-router-dom";
import { Squeeze as Hamburger } from 'hamburger-react'
import { useRecoilState } from "recoil";
import sidebarToggleAtom from "../../atoms/sidebarToggleAtom";
import { navData } from "../../mockapi/navbarapi";

const Navbar = () => {

    const [sidebarToggle, setSideBarToggle] = useRecoilState(sidebarToggleAtom);

    const location = useLocation();

    return (
        <div className="w-full relative">

            {/* desktop navbar */}
            <div className="hidden md:flex w-full justify-between items-center fixed z-[200] bg-[color:var(--cream-color)] top-0 p-10">
                <Link to={`/`}>
                    <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-center mb-2">
                        <span className="flex justify-center items-center gap-2">
                            <span className="w-4 h-4 mt-[3px] bg-[color:var(--secondary-color)]"></span>
                            <h1 className="text-[24px] lg:text-[28px] font-[700]">{navData?.name}</h1>
                        </span>
                        <span className="flex justify-start items-center gap-2">
                            <h1 className="hidden lg:block text-[17px] lg:text-[20px] font-[400] pt-[6px]">/</h1>
                            <h1 className="text-[17px] lg:text-[20px] font-[400] lg:pt-[6px]">{navData?.job}</h1>
                        </span>
                    </div>
                </Link>
                <div className="flex gap-3 lg:gap-5">
                    {
                        navData?.routes?.map((data) => (
                            <Link to={data?.route} key={data?.id}>
                                <h1 className={`text-[16px] font-[400] hover:text-[color:var(--secondary-color)] ${location?.pathname.includes(data?.route) ? 'text-[color:var(--secondary-color)]' : ''}`}>{data?.title}</h1>
                            </Link>
                        ))
                    }
                </div>
            </div>

            {/* mobile navbar */}
            <div className="w-full flex md:hidden justify-between items-center fixed z-[200] bg-[color:var(--cream-color)] top-0 px-6 pb-3 pt-6">
                <Link to={`/`}>
                    <div className="flex flex-col">
                        <span className="flex gap-2 items-center">
                            <span className="w-3 h-3 mt-[3px] bg-[color:var(--secondary-color)]"></span>
                            <h1 className="text-[26px] font-[700]">{navData?.name}</h1>
                        </span>
                        <h1 className="text-[18px] font-[400] pt-[3px]">{navData?.job}</h1>
                    </div>
                </Link>
                <div className="relative">
                    <span className="absolute -top-[25px] right-[5%] z-[350]">
                        <Hamburger toggled={sidebarToggle} toggle={setSideBarToggle} size={28} color="#0050ff" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar