import { faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TopBar = () => {
  return (
    <div className='bg-white w-full h-16 border-b-gray border-2 flex justify-between items-center py-4'>
        <div className='w-1/3 flex justify-center border-r-2'>
            <div className='flex gap-5'>
                <span className='flex items-center'>
                    <FontAwesomeIcon icon={faLocationDot} className='scale-150 text-[#7AB730] text-xl'/>
                </span>
                <span>
                    <p className='font-bold'>OUR OFFICE</p>
                    <p className='text-gray-600 font-light'>Location, City, Country</p>
                </span>
            </div>
        </div>
        <div className='w-1/3 flex justify-center border-r-2'>
            <div className='flex gap-5'>
                <span className='flex items-center'>
                    <FontAwesomeIcon icon={faEnvelopeOpen} className='scale-150 text-[#7AB730] text-xl'/>
                </span>
                <span>
                    <p  className='font-bold'>EMAIL US</p>
                    <p  className='text-gray-600 font-light'>info@example.com</p>
                </span>
            </div>
        </div>
        <div className='w-1/3 flex justify-center border-r-2'>
        <div className='flex gap-5'>
                <span className='flex items-center'>
                    <FontAwesomeIcon icon={faPhone} className='scale-150 text-[#7AB730] text-xl'/>
                </span>
                <span>
                    <p  className='font-bold'>CALL US</p>
                    <p  className='text-gray-600 font-light'>+012 345 6789</p>
                </span>
            </div>
        </div>
    </div>  
  )
}
