function Footer(){
    return(

        <footer className=" rounded-lg shadow bg-emerald-700 text-white">
            <div className="flex justify-between mx-auto p-4">
              <span className="text-sm sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Book Shop</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium  dark:text-gray-400 sm:mt-0">
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