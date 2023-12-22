import React from 'react'

interface DesktopImageProps {
    image: string;
    name: string;
}

const DesktopImageFrame: React.FC<DesktopImageProps> = ({ image, name }) => {
    return (
        <div className='bg-gray-700 rounded-[12px] p-[3px] sm:p-1 md:p-2 relative'>
            <img src={image} className='w-full rounded-[10px]' alt={name} />
            <span className='absolute w-[80px] h-[10px] md:h-[30px] bg-gray-700 top-[100%] left-0 right-0 mx-auto'>
                <div className='w-[130px] h-[4px] md:h-[8px] bg-gray-700 absolute top-[100%] -left-[30%] rounded-sm'></div>
            </span>
        </div>
    )
}

export default DesktopImageFrame