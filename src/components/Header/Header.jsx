import { Link, NavLink } from "react-router-dom"

function Header(){
    return(
        <header className="shadow sticky z-50 top-0 p-1">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mx-auto px-2">

                    <Link to="/" className="flex items-center py-2 sm:p-0">
                        <h1 className="font-mono text-2xl font-normal tracking-wider">Book</h1>
                        <img src="./assets/mark_t.png" className="h-16 w-16" />
                        <h1 className="font-mono text-2xl font-normal tracking-wider">Shop</h1>
                    </Link>

                    <NavLink className="mx-auto py-2 sm:p-0">
                        <div class="relative flex items-center w-full h-10 rounded-lg  bg-slate-100 overflow-hidden">
                            <div class="grid place-items-center h-full w-12 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input
                            class="bg-slate-100 peer h-full w-full outline-none text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search for Books.." /> 
                        </div>
                    </NavLink>

                    <NavLink to="/login" type="button" className="bg-emerald-700 text-white font-light tracking-wider rounded-lg px-4 py-1 mx-2">
                    Login
                    </NavLink>
                    <NavLink to="/login" type="button" className="border-emerald-700 text-emerald-700 border-2 font-light tracking-wider rounded-lg px-4 py-1">
                    Create Account
                    </NavLink>

            </div>
        </header>
    )
}

export default Header