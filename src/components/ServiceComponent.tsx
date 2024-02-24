import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import petHouse from "../../public/pet-house.svg"
import petFoodCan from "../../public/pet-food-can.svg"
import groomingPet from "../../public/grooming-pet.svg"

interface Cards {
  title: string;
  desc: string;
  icon: string;
}

export const ServiceComponent = () => {
  const cards: Cards[] = [
    { title: "PET BOARDING", desc: "", icon: petHouse },
    { title: "PET FEEDING", desc: "", icon: petFoodCan },
    { title: "PET GROOMING", desc: "", icon: petFoodCan },
    { title: "PET TRAINING", desc: "", icon: petFoodCan },
    { title: "PET EXERCISE", desc: "", icon: petFoodCan },
    { title: "PET TREATMENT", desc: "", icon: petFoodCan },
  ]

  return (
    <div className='px-3 py-12 mx-10'>
        <div className='border-l-4 border-primarycolor h-32 flex flex-col mb-10'>
          <p className='text-primarycolor font-bold text-md pl-10'>SERVICES</p>
          <p className='font-bold text-5xl pl-10'>OUR EXCELLENT PET <br />CARE SERVICES</p>
        </div>
        <div className='grid grid-cols-2 gap-10'>
          {
            cards.map((card, i) => (
              <div className='bg-gray-200 p-6 flex items-center gap-10'>
                <div>
                  <img src={card.icon} alt="icon" className='w-32 h-32 filter invert-73 sepia-14 saturate-2019 hue-rotate-43 brightness-87 contrast-87'/>
                </div>
                <div>
                  <h1 className='font-extrabold text-xl mb-3'>
                    {card.title}
                  </h1>
                  <p className='text-gray-500 mb-3'>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                  <p className='text-primarycolor text-lg cursor-pointer'>READ MORE <FontAwesomeIcon icon={faArrowRight}/></p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}
