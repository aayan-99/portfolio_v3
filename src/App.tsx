import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/global-components/Navbar'
import ContactPage from './pages/ContactPage'
import Footer from './components/global-components/Footer'
import Sidebar from './components/global-components/Sidebar'
import ResumePage from './pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'
import AllBlogsPage from './pages/AllBlogsPage'
import SingleBlogPage from './pages/SingleBlogPage'

function App() {

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className='mt-[123px]'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/all-blogs' element={<AllBlogsPage />} />
          <Route path='/all-blogs/:id' element={<SingleBlogPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
