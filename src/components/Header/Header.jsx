import { Link } from "react-router-dom"
import Nav from "./Nav.jsx"
function NewHeader(){
    return(
        <header className="mx-auto sticky top-0 z-20 bg-white shadow-sm flex flex-wrap items-center justify-between p-3">
            <Link to="/" className="flex items-center px-2 hover:bg-slate-100 active:bg-slate-200 rounded-lg">
                <h1 className="font-mono text-2xl font-normal tracking-wider">Book</h1>
                <img src="./assets/mark_t.png" className="h-16 w-16" />
                <h1 className="font-mono text-2xl font-normal tracking-wider">Shop</h1>
            </Link>
            <Nav />

        </header>
    )
}
export default NewHeader