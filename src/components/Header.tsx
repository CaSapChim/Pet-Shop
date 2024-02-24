import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Item {
    name: string;
    link: string;
}

export const Header = () => {
    const items: Item[] = [
        { name: "HOME", link: "/"},
        { name: "ABOUT", link: "/about"},
        { name: "SERVICE", link: "/service"},
        { name: "PRODUCT", link: "/product"},
        { name: "PAGE", link: ""},
    ]

    const [activeLink, setActiveLink] = useState<string>("Home");

    return (
        <header className='h-20 w-full flex items-center bg-white border-b'>
            <div className='flex items-center gap-4 ml-20 w-full'>
                <FontAwesomeIcon icon={faShop} className='scale-150 text-2xl text-primarycolor'/>
                <h1 className='text-4xl font-bold'>PET SHOP</h1>
            </div>
            <ul className='flex w-full justify-center'>
                {
                    items.map((item, i) => (
                        <li 
                            key={i} 
                            className={`ml-10 font-bold text-xl hover:text-primarycolor duration-300 ${item.name.toLowerCase() == activeLink.toLowerCase() ? "text-primarycolor" : ""}`}
                            onClick={() => setActiveLink(item.name)}
                        >
                            <Link to={item.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className='bg-primarycolor h-full w-64 flex justify-center items-center text-white font-bold text-xl ml-20 px-10'>
                <span className='w-full flex gap-2 items-center cursor-pointer'>CONTACT <FontAwesomeIcon icon={faArrowRight} className='text-sm'/></span>
            </div>
        </header>
    )
}
