import { useEffect, useState } from 'react'
import ScrollToTop from '../../utils/ScrollToTop';
import loadingImg from '../../assets/loaders/ghost.gif'


const Preloader = () => {

  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(false);
    }, 2000);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className={`w-full min-h-[100dvh] bg-[color:var(--cream-color)] left-0 z-[250] flex justify-center items-center fixed top-0 transition-all duration-700 ease-in-out ${firstLoad ? '' : '-translate-y-[120vh]'}`}>
        <img src={loadingImg} className='w-full max-w-[370px]' alt="" />
      </div>
    </>
  )
}

export default Preloader