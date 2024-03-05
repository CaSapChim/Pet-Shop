import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faArrowRight, faCaretDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

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
        { name: "Pricing Plan", link: "/page/pricingplan" },
        { name: "The Team", link: "/page/theteam" },
        { name: "Testimonial", link: "/page/testimonial" },
    ]

    const [activeLink, setActiveLink] = useState<string | null>("Home");
    const [open, setOpen] = useState<boolean>(false);
    const [activeLinkDropDown, setActiveLinkDropDown] = useState<boolean>(false);
    const [isClickBars, setIsClickBars] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        const linkWebsite = location.pathname.split("/")[1].toLowerCase();
        if (linkWebsite == "page") 
            setActiveLinkDropDown(true);
        else
            setActiveLink(linkWebsite || "home");
        window.scrollTo(0, 0); // scroll đến top khi chuyển trang
    }, [location]);

    // Ẩn dropdown khi click ra ngoài phạm vi

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.dropdown-container')) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Ẩn dropdown menu khi click ra ngoài phạm vi

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.dropdownbars-container')) {
                setIsClickBars(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setIsClickBars(false);
    }, [activeLink])

    return (
        <>
            <header className='h-20 w-full flex items-center bg-white border-b fixed z-50 top-0'>
                <Link to="/" onClick={() => setActiveLinkDropDown(false)} className='flex items-center gap-4 ml-20 max-lg:ml-6 max-lg:w-full lg:w-full'>
                    <FontAwesomeIcon icon={faShop} className='scale-150 text-2xl text-primarycolor'/>
                    <h1 className='text-4xl max-lg:text-2xl font-bold'>PET SHOP</h1>
                </Link>
                <ul className='flex w-full justify-center max-lg:hidden'>
                    {
                        items.map((item, i) => (
                            <li 
                                key={i} 
                                className={`ml-10 font-bold text-xl hover:text-primarycolor duration-300 ${item.name.toLowerCase() == activeLink?.toLowerCase() ? "text-primarycolor" : ""}`}
                                onClick={() => {
                                    setActiveLink(item.name);
                                    setActiveLinkDropDown(false);
                                }}
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
                        onBlur={() => setOpen(open)}
                    >
                        <p className={`flex items-center gap-2 hover:text-primarycolor duration-300 font-bold text-xl ${activeLinkDropDown ? "text-primarycolor" : "" }`}>
                            PAGE <FontAwesomeIcon icon={faCaretDown} className='w-4 h-4'/>
                        </p>
                        <div className={`
                            dropdown-container
                            absolute bg-white h-fit py-2 w-36 -bottom-[163px] -translate-x-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                            ${open ? "" : "hidden"}
                        `}>
                            {
                                itemsOfPage.map((item, i) => (
                                    <Link key={i} to={item.link}>
                                        <div
                                            onClick={() => {
                                                    setActiveLink(item.name);
                                                    setActiveLinkDropDown(true);
                                                }
                                            }
                                            className={`hover:bg-gray-300 p-2 ${item.name.toLowerCase() == activeLink?.toLowerCase() ? "bg-primarycolor text-white" : ""}`}
                                        >
                                            {item.name}
                                        </div> 
                                    </Link>
                                ))
                            }
                        </div>
                    </li>
                </ul>
                <Link onClick={() => setActiveLink(null)} to="/contact" className='max-lg:hidden bg-primarycolor h-full w-64 flex justify-center items-center text-white font-bold text-xl ml-20 px-10'>
                    <div>
                        <span className='w-full flex gap-2 items-center cursor-pointer'>CONTACT <FontAwesomeIcon icon={faArrowRight} className='text-sm'/></span>
                    </div>
                </Link>
                <div 
                    className='text-right mr-12 lg:hidden max-lg:w-full'
                >
                    <FontAwesomeIcon 
                        icon={isClickBars ? faXmark : faBars} 
                        className='text-3xl'
                        onClick={() => {
                            setIsClickBars(!isClickBars);
                        }}
                    />
                </div>
            </header>
            {
                isClickBars && <header className={`dropdownbars-container bg-white w-full pb-2 border-b-2 border-gray-400 fixed z-50 ${isClickBars ? "translate-y-0" : " -translate-y-full"} transition-transform ease-in-out`}>
                    <ul className='w-full'>
                            {
                                items.map((item, i) => (
                                    <li 
                                        key={i} 
                                        className={`ml-3 py-3 font-bold text-xl hover:text-primarycolor duration-300 ${item.name.toLowerCase() == activeLink?.toLowerCase() ? "text-primarycolor" : ""}`}
                                        onClick={() => {
                                            setActiveLink(item.name);
                                        }}
                                    >
                                        <Link to={item.link}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        <li 
                            className={`relative ml-3 cursor-pointer`}
                            onClick={() => setOpen(!open)}
                            onBlur={() => setOpen(open)}
                        >
                            <p className={`py-3 hover:text-primarycolor duration-300 font-bold text-xl ${activeLinkDropDown ? "text-primarycolor" : "" }`}>
                                PAGE <FontAwesomeIcon icon={faCaretDown} className='w-4 h-4'/>
                            </p>
                            <div className={`
                                dropdown-container border-black p-2 mr-2
                                font-bold
                                ${open ? "" : "hidden"}
                            `}>
                                {
                                    itemsOfPage.map((item, i) => (
                                        <Link key={i} to={item.link}>
                                            <div
                                                onClick={() => {
                                                        setActiveLink(item.name);
                                                        setActiveLinkDropDown(!activeLinkDropDown);
                                                    }
                                                }
                                                className={`hover:bg-gray-300 p-2 ${item.name.toLowerCase() == activeLink?.toLowerCase() ? "bg-primarycolor text-white" : ""}`}
                                            >
                                                {item.name}
                                            </div> 
                                        </Link>
                                    ))
                                }
                            </div>
                        </li>    
                        <Link onClick={() => setActiveLink(null)} to="/contact" className='bg-primarycolor py-2 flex items-center text-white font-bold text-xl my-6 ml-3 mr-6'>
                            <div>
                                <span className='flex gap-2 items-center cursor-pointer ml-3'>CONTACT <FontAwesomeIcon icon={faArrowRight} className='text-sm'/></span>
                            </div>
                        </Link>
                    </ul>
                </header>
            }
        </>
    )
}
