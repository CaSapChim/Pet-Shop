import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { AboutComponent } from "../components/AboutComponent";
import { ServiceComponent } from "../components/ServiceComponent";
import { ProductComponent } from "../components/ProductComponent";
import { OfferComponent } from "../components/OfferComponent";
import { PricingPlanComponent } from "../components/PricingPlanComponent";
import { TeamMembersComponent } from "../components/TeamMembersComponent";
import { TestimonialComponents } from "../components/TestimonialComponents";
import { LastestBlogComponent } from "../components/LastestBlogComponent";

export const Home = () => {
  return (
    <>
      <div className="relative mb-16">
        <img src="/hero.jpg" alt="hero image" className="w-full max-lg:h-[400px] object-cover"/>
        <div className="absolute top-20 left-20 max-lg:left-10 max-lg:text-center max-lg:top-10">
          <h1 className="text-8xl max-lg:text-4xl font-bold lg:mb-10">PET SHOP</h1>
          <h3 className="text-4xl max-lg:text-2xl font-extrabold lg:mb-10 text-[#F3F3F3]">MAKE YOUR PETS HAPPY</h3>
          <p className="text-2xl max-lg:text-xl text-[#F3F3F3]">
            Dolore tempor clita lorem rebum kasd eirmod
            <br />dolore diam eos kasd. Kasd clita ea justo est 
            <br />sed kasd erat clita sea
          </p>
          <div className="flex gap-16 lg:mt-20 max-lg:mt-3 w-full max-lg:justify-center">
            <button className='text-[#F3F3F3] border-2 border-white px-10 py-4 text-xl font-bold hover:bg-white hover:text-black duration-300'>
              READ MORE
            </button>
            <button className="bg-[#F3F3F3] rounded-[50%] w-16 h-16 text-center flex items-center justify-center before:bg-white before:w-16 before:h-16 before:absolute before:rounded-[50%] before:animate-ping before:duration-300 before:transition-all">
              <FontAwesomeIcon icon={faPlay} className="text-primarycolor text-2xl relative"/>
            </button>
          </div>
        </div>
      </div>
      <AboutComponent/>
      <ServiceComponent/>
      <ProductComponent/>
      <OfferComponent/>
      <PricingPlanComponent/>
      <TeamMembersComponent/>
      <TestimonialComponents/>
      <LastestBlogComponent/>
    </>
  );
};
