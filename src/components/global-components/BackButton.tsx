import { useNavigate } from 'react-router';
import back from '../../assets/icons/back.svg'

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full flex justify-normal items-center mb-14 fixed top-[120px] md:top-[180px] -left-5 md:left-2'>
            <p className='ml-10'><img src={back} className='w-[30px] cursor-pointer' onClick={() => navigate(-1)} alt="" /></p>
        </div>
    )
}

export default BackButton