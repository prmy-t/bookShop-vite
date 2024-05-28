function BookCard({title, author}){
    return(
        <>
            <div className="w-4/5 flex flex-col items-center bg-white rounded-lg p-6 mt-6 shadow-md hover:cursor-pointer hover:bg-slate-50">
                <img src="./assets/book.jpg" className="rounded-lg h-32 w-30" />
                <hr class="h-px my-2 bg-gray-300 w-32 border-0" />
                <div className="font-semibold">{title}</div>
                <div className="font-light">{author}</div>
            </div>
        </>
    )
}

export default BookCard