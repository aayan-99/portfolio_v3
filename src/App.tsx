import ScrollToTop from './utils/ScrollToTop'
import Preloader from './components/global-components/Preloader'
import AnimatedRoutes from './index/AnimatedRoutes'

function App() {
  return (
    <div className='relative'>
      <Preloader />
      <ScrollToTop />
      <AnimatedRoutes />
    </div>
  )
}

export default App
