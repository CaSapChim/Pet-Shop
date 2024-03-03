import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCartShopping } from '@fortawesome/free-solid-svg-icons';

interface Product {
  name: string;
  price: number;
  image: string;
}

export const ProductComponent = () => {
  const products: Product[] = [
    {
      name: "QUALITY PET FOODS 1",
      price: 100000,
      image: "/product-1.png",
    },
    {
      name: "QUALITY PET FOODS 2",
      price: 200000,
      image: "/product-2.png",
    },
    {
      name: "QUALITY PET FOODS 3",
      price: 300000,
      image: "/product-3.png",
    },
    {
      name: "QUALITY PET FOODS 4",
      price: 400000,
      image: "/product-4.png",
    },
  ];

  const settings = {
    dots: true,
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
          dots: true
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
    <div className='px-3 py-12 mx-10'>
        <div className='border-l-4 border-primarycolor h-32 flex flex-col mb-10'>
          <p className='text-primarycolor font-bold text-md pl-10'>PRODUCTS</p>
          <p className='font-bold text-5xl max-lg:text-3xl pl-10'>PRODUCTS FOR YOUR <br />BEST FRIENDS</p>
        </div>
        <div className='w-full m-auto'>
          <Slider {...settings}>
            {products.map((product, i) => (
              <div 
                key={i} 
                className='group'
              >
                <div className='bg-gray-200 py-4 flex flex-col justify-center items-center'>
                  <div className='flex justify-center'>
                    <img src={product.image} alt="food image" className='w-2/3 h-full'/>  
                  </div>
                  <div className='text-center py-5'>
                    <p className='font-extrabold text-lg'>{product.name}</p>
                    <p className='text-primarycolor text-lg font-extrabold'>${product.price.toLocaleString("Us")}</p>
                  </div>
                </div>
                <div className={`text-center flex justify-center invisible group-hover:visible group-hover:animate-fadeUp group-hover:transition-transform transform translate-y-[-20px]`}>
                  <div className='bg-primarycolor py-2 px-5 hover:bg-opacity-80 cursor-pointer hover:text-black text-white'>
                    <FontAwesomeIcon icon={faCartShopping}/>
                  </div>
                  <div className='bg-primarycolor py-2 px-5 hover:bg-opacity-80 cursor-pointer hover:text-black text-white'>
                    <FontAwesomeIcon icon={faEye}/>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
    </div>
  );
};
