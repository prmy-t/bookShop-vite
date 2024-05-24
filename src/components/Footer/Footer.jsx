function Footer(){
    return(

        <footer className="absolute bottom-0 w-full rounded-md shadow bg-emerald-700 text-white">
            <div className="flex flex-col lg:flex-row justify-between p-4 py-3">
                <span className="flex text-sm justify-center sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Book Shop</a>. All Rights Reserved.
                </span>
                <ul className="flex items-center justify-center mt-3 text-sm font-medium  dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
        )
}

export default Footer