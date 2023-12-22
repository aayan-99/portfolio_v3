import React from 'react'

interface MobileImageFrameProps {
    image: string;
    name: string;
}

const MobileImageFrame: React.FC<MobileImageFrameProps> = ({ image, name }) => {
    return (
        <div className='w-fit bg-gray-700 rounded-[15px] p-2 pb-3 h-fit'>
            <img src={image} className='w-full rounded-[10px]' alt={name} />
        </div>
    )
}

export default MobileImageFrame