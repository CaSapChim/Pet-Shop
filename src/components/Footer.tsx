import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import fbIcon from "/facebook.svg";
import ytIcon from "/youtube.svg";
import twitterIcon from "/twitter.svg";
import linkedinIcon from "/linkedin.svg";

interface Link {
    name: string;
    link: string;
}

export const Footer = () => {
    const links: Link[] = [
        { name: "Home", link: "" },
        { name: "About Us", link: "" },
        { name: "Our Services", link: "" },
        { name: "Meet the team", link: "" },
        { name: "Lastest Blog", link: "" },
        { name: "Contact Us", link: "" },
    ]

    return (
        <footer className='bg-gray-200 p-16 text-gray-600'>
            <div className='grid grid-cols-4 gap-12 size-fit'>
                <div>
                    <h1 className='text-black font-extrabold text-xl border-l-4 border-primarycolor mb-4'>
                        <p className='pl-4'>GET IN TOUCH</p>
                    </h1>
                    <p className='mb-4'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                    <p><FontAwesomeIcon icon={faLocationDot} className='text-primarycolor font-extrabold'/> Location, City, Country</p>
                    <p><FontAwesomeIcon icon={faEnvelopeOpen} className='text-primarycolor font-extrabold'/> info@example.com</p>
                    <p><FontAwesomeIcon icon={faPhone} className='text-primarycolor font-extrabold'/> +012 345 67890</p>
                </div>
                <div>
                    <h1 className='text-black font-extrabold text-xl border-l-4 border-primarycolor mb-4'>
                        <p className='pl-4'>QUICK LINKS</p>
                    </h1>
                    {
                        links.map((link, i) => (
                            <p key={i} className='cursor-pointer size-fit'>
                                <span className='text-primarycolor text-2xl'>&rarr; </span>
                                <span className='text-base'>{link.name}</span>
                            </p>
                        ))
                    }
                </div>
                <div>
                    <h1 className='text-black font-extrabold text-xl border-l-4 border-primarycolor mb-4'>
                        <p className='pl-4'>POPULAR LINKS</p>
                    </h1>
                    {
                        links.map((link, i) => (
                            <p key={i} className='cursor-pointer size-fit'>
                                <span className='text-primarycolor text-2xl'>&rarr; </span>
                                <span className='text-base'>{link.name}</span>
                            </p>
                        ))
                    }
                </div>
                <div>
                    <h1 className='text-black font-extrabold text-xl border-l-4 border-primarycolor mb-4'>
                        <p className='pl-4'>NEWSLETTER</p>
                    </h1>
                    <div className='flex'>
                        <input 
                            type="text" 
                            placeholder='Your Email'
                            className='p-4 w-2/3 focus:outline-none focus:ring-4 focus:ring-primarycolor focus:ring-opacity-35 duration-300'
                        />
                        <button className='text-white font-extrabold bg-primarycolor w-4/12 text-base'>SIGN UP</button>
                    </div>
                    <h1 className='my-5 text-black text-lg font-extrabold'>FOLLOW US</h1>
                    <div className='flex w-10 h-10 gap-3' style={{ filter: 'invert(50%) sepia(50%) saturate(547%) hue-rotate(45deg) brightness(102%) contrast(83%)' }}>
                        <img src={twitterIcon} alt="" className='border-primarycolor'/>
                        <img src={fbIcon} alt="" className='border-primarycolor'/>
                        <img src={linkedinIcon} alt="" className='border-primarycolor'/>
                        <img src={ytIcon} alt="" className='border-primarycolor'/>
                    </div>
                </div>     
            </div>
            <div className='mt-16 text-center text-base'>
                <a href="">Terms & Conditions |</a>
                <a href=""> Privacy Policy |</a>
                <a href=""> Customer Support |</a>
                <a href=""> Payments |</a>
                <a href=""> Help |</a>
                <a href=""> FAQs</a>
            </div>
        </footer>
    )
}
