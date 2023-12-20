import BlogCard from '../components/allblogspage/BlogCard';
import { Link } from 'react-router-dom';
import { allBlogsData } from '../mockapi/blogsapi';


const AllBlogsPage = () => {
    return (
        <div className='w-full py-16 md:py-[120px] bg-[color:var(--primary-color)] flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col justify-center items-center gap-6 md:gap-16 px-5 md:px-0'>
                <span className="flex justify-center items-center gap-2">
                    <span className="w-4 h-4 mt-[3px] bg-[color:var(--secondary-color)]"></span>
                    <h1 className="text-[26px] lg:text-[30px] font-[700]">Blogs</h1>
                </span>
            </div>
            <div className='w-full max-w-[80vw] 2xl:max-w-[60vw] mx-auto flex flex-col lg:grid grid-cols-2 gap-10 lg:gap-[80px] my-14'>
                {
                    allBlogsData?.map((blog) => (
                        <Link key={blog?.id} to={`/all-blogs/${blog?.id}`}>
                            <BlogCard title={blog?.title} text={blog?.text} image={blog?.image} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default AllBlogsPage