import React from 'react'

interface BlogCardProps {
    image: string;
    title: string;
    text: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, text }) => {
    return (
        <div className='w-full bg-[color:var(--cream-color)] shadow-xl flex flex-col md:flex-row cursor-pointer h-auto xl:h-[250px] rounded-[10px]'>
            <div className='w-full md:w-[40%]'>
                <img src={image} className='w-full h-full object-cover rounded-t-[10px] md:rounded-r-[0px] md:rounded-l-[10px]' alt="" />
            </div>
            <div className='w-full md:w-[60%] p-4'>
                <div className='flex flex-col w-fit gap-4'>
                    <h1 className='text-[color:var(--secondary-color)] leading-7 text-[23px] font-[500] hover:underline'>{title}</h1>
                    <p className='text-[14px] font-[400]'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard