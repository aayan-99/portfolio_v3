import { useRecoilState } from "recoil"
import sidebarToggleAtom from "../../atoms/sidebarToggleAtom"
import { Squeeze as Hamburger } from 'hamburger-react'
import { Link, useLocation } from "react-router-dom";
import { sidebarData } from "../../mockapi/sidebarapi";


const Sidebar = () => {

    const location = useLocation();

    const [sidebarToggle, setSideBarToggle] = useRecoilState(sidebarToggleAtom);

    return (
        <div className={`w-full fixed h-screen top-0 z-[250] bg-[color:var(--primary-color)] transition-all duration-300 ease-in-out ${sidebarToggle ? 'translate-y-0' : '-translate-y-[100vh]'}`}>
            <div className="w-full flex justify-end mt-8 pr-5 md:hidden">
                <Hamburger toggled={sidebarToggle} toggle={setSideBarToggle} size={28} color="#0050ff" />
            </div>
            <div className={`w-[60%] mx-auto flex flex-col justify-center items-center gap-5 mt-[250px] ${sidebarToggle ? '' : ''}`}>
                <Link onClick={() => setSideBarToggle(false)} to={`/`}><h1 className={`text-[28px] font-[700] hover:text-[color:var(--secondary-color)]`}>HOME</h1></Link>
                {
                    sidebarData?.map((data) => (
                        <Link key={data?.id} onClick={() => setSideBarToggle(false)} to={data?.route}><h1 className={`text-[28px] font-[700] hover:text-[color:var(--secondary-color)] ${location?.pathname.includes(data?.route) ? 'text-[color:var(--secondary-color)]' : ''}`}>{data?.title}</h1></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar