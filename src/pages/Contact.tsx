import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    const animateFocus: string = "focus:outline-none focus:ring-4 focus:ring-primarycolor focus:ring-opacity-35 delay-200 duration-200";

    return (
        <div className='px-3 py-12 mx-10 max-lg:mx-3'>
            <div className='border-l-4 border-primarycolor h-32 flex flex-col mb-10'>
                <p className='text-primarycolor font-bold text-md pl-10'>CONTACT US</p>
                <p className='font-bold text-5xl max-lg:text-3xl pl-10'>PLEASE FEEL FREE TO<br />CONTACT US</p>
            </div>
            <div className='grid lg:grid-cols-[6fr,4fr] gap-10'>
                <div className='flex flex-col gap-3'>
                    <input type="text" className={`bg-gray-200 p-4 placeholder:text-gray-500 ${animateFocus}`} placeholder='Your Name'/>
                    <input type="text" className={`bg-gray-200 p-4 placeholder:text-gray-500 ${animateFocus}`} placeholder="Your Email"/>
                    <input type="text" className={`bg-gray-200 p-4 placeholder:text-gray-500 ${animateFocus}`} placeholder='Subject'/>
                    <textarea rows={8} className={`bg-gray-200 p-4 placeholder:text-gray-500 ${animateFocus}`} placeholder='Message'></textarea>
                    <button className="text-white bg-primarycolor p-4 mt-2 hover:text-black duration-300 text-lg font-extrabold">SEND MESSAGE</button>
                </div>
                <div className='bg-gray-200 lg:p-10 max-lg:p-4 flex flex-col gap-y-5'>
                    <div className='flex gap-5'>
                        <span className='flex items-center'>
                            <FontAwesomeIcon icon={faLocationDot} className='scale-150 text-primarycolor text-xl'/>
                        </span>
                        <span>
                            <p className='font-bold'>OUR OFFICE</p>
                            <p className='text-gray-600 font-light'>Location, City, Country</p>
                        </span>
                    </div>
                    <div className='flex gap-5'>
                        <span className='flex items-center'>
                            <FontAwesomeIcon icon={faEnvelopeOpen} className='scale-150 text-primarycolor text-xl'/>
                        </span>
                        <span>
                            <p  className='font-bold'>EMAIL US</p>
                            <p  className='text-gray-600 font-light'>info@example.com</p>
                        </span>
                    </div>
                    <div className='flex gap-5'>
                        <span className='flex items-center'>
                            <FontAwesomeIcon icon={faPhone} className='scale-150 text-primarycolor text-xl'/>
                        </span>
                        <span>
                            <p  className='font-bold'>CALL US</p>
                            <p  className='text-gray-600 font-light'>+012 345 6789</p>
                        </span>
                    </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.067226855165!2d106.62608107484404!3d10.806163158644903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be27d8b4f4d%3A0x92dcba2950430867!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBUaMawxqFuZyBUUC4gSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1709254672739!5m2!1svi!2s" allowFullScreen={true} className="w-full h-full"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};
