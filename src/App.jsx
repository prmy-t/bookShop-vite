import BookCard from "./components/BookCard.jsx"

function App() {
  const books = [
    {"title": "To Kill a Mockingbird", "author": "Harper Lee"},
    {"title": "1984", "author": "George Orwell"},
    {"title": "Pride and Prejudice", "author": "Jane Austen"},
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"},
    {"title": "Moby Dick", "author": "Herman Melville"},
    {"title": "War and Peace", "author": "Leo Tolstoy"},
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger"},
    {"title": "The Hobbit", "author": "J.R.R. Tolkien"},
    {"title": "Jane Eyre", "author": "Charlotte Brontë"},
    {"title": "Crime and Punishment", "author": "Fyodor Dostoevsky"}
]

  return (
    <>
    <div className=" py-4 bg-slate-100 grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {books && books.map(book => <BookCard title={book.title} author={book.author} />)}
    </div>
    </>)
}

export default App
