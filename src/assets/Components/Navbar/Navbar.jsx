import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 , HiX } from 'react-icons/hi';

const Navbar = () => {

    const [open , setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" },
    ];

    return (
        <nav className="px-6 md:px-12 lg:px-12 py-4 bg-base-200 shadow-sm">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <HiX className="text-2xl"></HiX> : <HiOutlineMenuAlt1 className="text-2xl"></HiOutlineMenuAlt1>
                }
            </div>
            <ul className={`md:flex gap-8 absolute md:static px-4 duration-1000 bg-base-200 ${open ? 'top-[50px]' : '-top-60'}`}>
                {
                    routes.map(route => <Link  key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
