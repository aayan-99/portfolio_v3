import Sidebar from '../components/global-components/Sidebar'
import Navbar from '../components/global-components/Navbar'
import ScrollToTop from '../utils/ScrollToTop'
import { Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import ResumePage from '../pages/ResumePage'
import ProjectsPage from '../pages/ProjectsPage'
import SingleProjectPage from '../pages/SingleProjectPage'
import ContactPage from '../pages/ContactPage'
import AllBlogsPage from '../pages/AllBlogsPage'
import SingleBlogPage from '../pages/SingleBlogPage'
import Footer from '../components/global-components/Footer'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import Preloader from '../components/global-components/Preloader'

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence mode='sync'>
            <Preloader />
            <div className='relative'>
                <Sidebar />
                <Navbar />
                <ScrollToTop />
                <div className=''>
                    <Routes key={location.pathname} location={location}>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/resume' element={<ResumePage />} />
                        <Route path='/projects' element={<ProjectsPage />} />
                        <Route path='/projects/:id' element={<SingleProjectPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/all-blogs' element={<AllBlogsPage />} />
                        <Route path='/all-blogs/:id' element={<SingleBlogPage />} />
                    </Routes>
                </div>
                {
                    location?.pathname == '/' ? null : (<Footer />)
                }
            </div>
            <Toaster />
        </AnimatePresence>
    )
}

export default AnimatedRoutes