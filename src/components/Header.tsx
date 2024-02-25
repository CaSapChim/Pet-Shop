import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faArrowRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

interface Item {
    name: string;
    link: string;
}
interface ItemOfPage {
    name: string;
    link: string;
}

export const Header = () => {
    const items: Item[] = [
        { name: "HOME", link: "/"},
        { name: "ABOUT", link: "/about"},
        { name: "SERVICE", link: "/service"},
        { name: "PRODUCT", link: "/product"},
    ]

    const itemsOfPage: ItemOfPage[] = [
        { name: "Pricing Plan", link: "" },
        { name: "The Team", link: "" },
        { name: "Testimonial", link: "" },
        { name: "Blog Grid", link: "" },
        { name: "Blog Detail", link: "" },
    ]

    const [activeLink, setActiveLink] = useState<string>("Home");
    const [open, setOpen] = useState<boolean>(false);

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
                <li 
                    className={`relative ml-10 cursor-pointer`}
                    onClick={() => setOpen(!open)}
                >
                    <p className='flex items-center gap-2 hover:text-primarycolor duration-300 font-bold text-xl'>
                        PAGE <FontAwesomeIcon icon={faCaretDown} className='w-4 h-4'/>
                    </p>
                    <div className={`
                        absolute bg-white h-fit py-2 w-36 -bottom-[240px] -translate-x-5  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                        ${open ? "" : "hidden"}
                    `}>
                        {
                            itemsOfPage.map((item, i) => (
                                <div
                                    key={i}
                                    className='hover:bg-gray-300 p-2'
                                >
                                    {item.name}
                                </div>
                            ))
                        }
                    </div>
                </li>
            </ul>
            <div className='bg-primarycolor h-full w-64 flex justify-center items-center text-white font-bold text-xl ml-20 px-10'>
                <span className='w-full flex gap-2 items-center cursor-pointer'>CONTACT <FontAwesomeIcon icon={faArrowRight} className='text-sm'/></span>
            </div>
        </header>
    )
}
