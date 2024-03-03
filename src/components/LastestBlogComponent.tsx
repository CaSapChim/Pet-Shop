import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Blog {
    cata: string;
    date: string;
    title: string;
    desc: string;
    imgUrl: string;
}

export const LastestBlogComponent = () => {
    const blogs: Blog[] = [
        {
            cata: "Web Design",
            date: "01 Jan, 2045",
            title: "How to take care of your dog ? (Part 1)",
            desc: "This blog post covers essential tips and techniques for taking care of your dog. Stay tuned for valuable insights!",
            imgUrl: "/blog-1.jpg"
        },
        {
            cata: "Web Design",
            date: "01 Jan, 2045",
            title: "How to take care of your dog ? (Part 2)",
            desc: "Continue learning about dog care in this second part of our series. Discover more helpful advice and recommendations!",
            imgUrl: "/blog-2.jpg"
        }
    ]

    return (
        <div className='px-3 py-12 mx-10 max-lg:mx-4'>
            <div className='border-l-4 border-primarycolor flex flex-col mb-10'>
                <p className='text-primarycolor font-bold text-md pl-10'>LASTEST BLOG</p>
                <p className='font-bold text-5xl max-lg:text-3xl pl-10'>LATEST ARTICLES FROM <br /> OUR BLOG POST</p>
            </div>
            <div className='w-full lg:flex'>
                {
                    blogs.map((blog, i) => (
                        <div key={i} className='bg-gray-200 lg:flex gap-5 lg:m-6 max-lg:my-10'> 
                            <img src={blog.imgUrl} alt="" className='lg:w-4/12 object-cover w-full'/>
                            <div className='w-full text-gray-600 p-6'>
                                <span className='mr-3 text-sm'><FontAwesomeIcon icon={faBookmark}/> {blog.cata}</span>
                                <span className='text-sm'><FontAwesomeIcon icon={faCalendar}/> {blog.date}</span>
                                <h1 className='my-4 font-extrabold text-black text-xl'>{blog.title}</h1>
                                <p className='mb-4'>{blog.desc}</p>
                                <p className='text-primarycolor font-bold cursor-pointer group'>
                                    READ MORE <FontAwesomeIcon icon={faArrowRight} className='pl-2 text-primarycolor cursor-pointer group-hover:translate-x-5 duration-200 '/>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
