import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons';
import petHouse from "../../public/pet-house.svg"
import petFoodCan from "../../public/pet-food-can.svg"
import groomingPet from "../../public/grooming-pet.svg"

interface Cards {
  title: string;
  desc: string;
  icon: ReactElement<{ icon: IconDefinition }> | string;
}

export const ServiceComponent = () => {
  const cards: Cards[] = [
    { title: "PET BOARDING", desc: "", icon: petHouse },
    { title: "PET FEEDING", desc: "", icon: <FontAwesomeIcon icon={faCat}/> },
    { title: "PET GROOMING", desc: "", icon: <FontAwesomeIcon icon={faCat}/> },
    { title: "PET TRAINING", desc: "", icon: <FontAwesomeIcon icon={faCat}/> },
    { title: "PET EXERCISE", desc: "", icon: <FontAwesomeIcon icon={faCat}/> },
    { title: "PET TREATMENT", desc: "", icon: <FontAwesomeIcon icon={faCat}/> },
  ]

  return (
    <div className='px-3 py-12 mx-10'>
        <div className='border-l-4 border-[#7AB730] h-32 flex flex-col mb-10'>
          <p className='text-[#7AB730] font-bold text-md pl-10'>SERVICES</p>
          <p className='font-bold text-5xl pl-10'>OUR EXCELLENT PET <br />CARE SERVICES</p>
        </div>
        <div className='grid grid-cols-2 gap-10'>
          {
            cards.map((card, i) => (
              <div className='bg-gray-200 p-6 flex'>
                <div>
                  
                </div>
                <h1>
                  {card.title}
                </h1>
              </div>
            ))
          }
        </div>
    </div>
  )
}
