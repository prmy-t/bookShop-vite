import BookCard from "./BookCard"

function NewRelease(){
    const newReleases = [
        {"title": "The Night Travelers", "author": "Armando Lucas Correa"},
        {"title": "The Covenant of Water", "author": "Abraham Verghese"},
        {"title": "Chain-Gang All-Stars", "author": "Nana Kwame Adjei-Brenyah"},
        {"title": "The House of Doors", "author": "Tan Twan Eng"},
        {"title": "Black Dove", "author": "Colin McAdam"},
        {"title": "The Deluge", "author": "Stephen Markley"},
        {"title": "The Guest", "author": "Emma Cline"},
        {"title": "A House for Alice", "author": "Diana Evans"},
        {"title": "Yellowface", "author": "R.F. Kuang"},
        {"title": "Birnam Wood", "author": "Eleanor Catton"}
    ]
    
    return(
        <div className="flex flex-col bg-slate-100">
            <div className="mt-3 ml-4">

            <div className="text-3xl font-thin grow px-2">New Release</div>
            <hr class="h-px my-2 bg-gray-400  border-0 " />
            <div className=" grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {newReleases && newReleases.map(book => <BookCard title={book.title} author={book.author} />)}
            </div>
            </div>
        </div>
    )
}

export default NewRelease