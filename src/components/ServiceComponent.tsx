import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import petHouse from "/pet-house.svg"
import petFoodCan from "/pet-food-can.svg"
import groomingPet from "/grooming-pet.svg"
import cat from "/cat.svg"
import dog from "/dog.svg"
import treatment from "/treatment.svg"

interface Cards {
  title: string;
  desc: string;
  icon: string;
}

export const ServiceComponent = () => {
  const cards: Cards[] = [
    { title: "PET BOARDING", desc: "", icon: petHouse },
    { title: "PET FEEDING", desc: "", icon: petFoodCan },
    { title: "PET GROOMING", desc: "", icon: groomingPet },
    { title: "PET TRAINING", desc: "", icon: cat },
    { title: "PET EXERCISE", desc: "", icon: dog },
    { title: "PET TREATMENT", desc: "", icon: treatment },
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
              <div key={i} className='bg-gray-200 p-6 flex items-center gap-10'>
                <div>
                  <img src={card.icon} alt="icon" className='w-32 h-32' style={{ filter: 'invert(50%) sepia(50%) saturate(547%) hue-rotate(45deg) brightness(102%) contrast(83%)' }}/>
                </div>
                <div>
                  <h1 className='font-extrabold text-xl mb-3'>
                    {card.title}
                  </h1>
                  <p className='text-gray-500 mb-3'>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                  <div className='group size-fit'>
                    <a className='text-primarycolor text-lg cursor-pointer'>
                      READ MORE
                    </a>
                    <FontAwesomeIcon icon={faArrowRight} className='pl-2 text-primarycolor cursor-pointer group-hover:translate-x-5 duration-200 '/>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}
