import { NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";


const NavLinks = ()=>{
    return(
<>

            <NavLink to="/new-releases" className=" text-emerald-700 active:bg-emerald-100 hover:bg-emerald-50 font-semibold  rounded-lg px-4 py-2 mx-2">
                        New Releases
            </NavLink>

            <NavLink to="/" className=" text-emerald-700 active:bg-emerald-100 hover:bg-emerald-50 font-semibold  rounded-lg px-4 py-2 mx-2">
                        Best Sellers
            </NavLink>
            <NavLink to="/" className=" text-emerald-700 active:bg-emerald-100 hover:bg-emerald-50 font-semibold  rounded-lg px-4 py-2 mx-2">
                        e-Books
            </NavLink>
            <NavLink to="/" className=" text-emerald-700 active:bg-emerald-100 hover:bg-emerald-50 font-semibold  rounded-lg px-4 py-2 mx-2">
                        Gift Cards
            </NavLink>

         

</>
    )
}

const UserUI = () =>{
    return(
        <div className="flex items-center">
            <NavLink to="/" type="button" className="flex items-center bg-emerald-700 text-white font-light tracking-wider rounded-lg px-4 py-1 mx-2">
            <FiLogIn className="mr-2" />

                        Login

            </NavLink>
            <NavLink to="/" type="button" className="flex items-center border-emerald-700 text-emerald-700 border-2 font-light tracking-wider rounded-lg px-4 py-1">
            <IoPersonAddOutline className="mr-2"/>
                    Create Account
            </NavLink>
        </div>
    )
}
function Nav(){
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <>
        <nav className="flex justify-between lg:grow lg:pl-4">
            <div className="hidden justify-between lg:flex">
                <NavLinks />
            </div>
            <div className="hidden justify-between lg:flex">
                <UserUI />
            </div>
            <div className="lg:hidden">
                <button className="button" onClick={toggleNavbar}>
                    {isOpen ? <RiCloseLargeFill size={26} /> :<RxHamburgerMenu size={26} />}
                </button>
            </div>
        </nav>

        {isOpen && (<div className="flex flex-col items-start bg-slate-50 rounded-lg p-3 mt-1 basis-full gap-3 lg:hidden">

                <NavLinks />


                <UserUI />

            </div>
        )}
        </>
    )
}

export default Nav