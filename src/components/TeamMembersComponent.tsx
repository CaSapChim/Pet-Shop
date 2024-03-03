import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TeamMembers {
    name: string;
    desc: string;
    image: string;
}

export const TeamMembersComponent = () => {
    const members: TeamMembers[] = [
        {
            name: "Anna",
            desc: "caring staff",
            image: "/team-1.jpg",
        },
        {
            name: "Anna",
            desc: "caring staff",
            image: "/team-2.jpg",
        },
        {
            name: "Anna",
            desc: "caring staff",
            image: "/team-3.jpg",
        },
        {
            name: "Anna",
            desc: "caring staff",
            image: "/team-4.jpg",
        },
        {
            name: "Anna",
            desc: "caring staff",
            image: "/team-5.jpg",
        },
    ]

    const settings = {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        useCSS: true,
        useTransform: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };  

    return (
        <div className='px-3 py-12 mx-10 max-lg:mx-4'>
            <div className='border-l-4 border-primarycolor h-32 flex flex-col'>
                <p className='text-primarycolor font-bold text-md pl-10'>TEAM MEMBERS</p>
                <p className='font-bold text-5xl max-lg:text-3xl pl-10'>QUALIFIED PETS CARE <br />PROFESSIONALS</p>
            </div>
            <div className='w-full m-auto'>
                <Slider {...settings} className='mt-10 mx-10 max-lg:'>
                    {
                        members.map((mem, i) => (
                            <div key={i} className='bg-gray-200'>
                                <img src={mem.image} alt=""/>
                                <div className='text-center py-4'>
                                    <h1 className='font-extrabold text-2xl'>
                                        {mem.name}
                                    </h1>
                                    <p className='text-lg text-gray-500'>{mem.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
