import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
    clientName: string;
    desc: string;
    review: string;
    imgUrl: string;
}

export const TestimonialComponents = () => {
    const settings = {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        useCSS: true,
        useTransform: true,
    }; 
    
    const testimonials: Testimonial[] = [
        { 
            clientName: "John", 
            desc: "Profession", 
            review: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.",
            imgUrl: "/testimonial-2.jpg"
        },
        { 
            clientName: "May", 
            desc: "Profession", 
            review: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.",
            imgUrl: "/testimonial-1.jpg"
        },
    ] 

    return (
        <div className='bg-[url("/testimonial.jpg")] bg-cover bg-no-repeat my-5 py-10 flex lg:justify-end max-lg:justify-center'>
            <div className="bg-white lg:w-6/12 max-lg:w-3/4 max-lg:h-1/2 p-10 lg:m-10">
                <Slider {...settings}>
                    {
                        testimonials.map((testimonial, i) => (
                            <div key={i}>
                                <div className='flex w-full justify-center items-center flex-col'>
                                    <img src={testimonial.imgUrl} alt="" className='lg:w-1/6 lg:h-1/6 mb-10'/>
                                    <div className='text-center'>
                                        <p className='text-gray-500 lg:text-md my-2'>{testimonial.review}</p>
                                        <div className='w-4/12 m-auto border border-gray-300 my-4'></div>
                                        <h1 className='font-extrabold text-2xl my-2'>{testimonial.clientName}</h1>
                                        <p className='text-gray-500 lg:text-md my-2'>{testimonial.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
