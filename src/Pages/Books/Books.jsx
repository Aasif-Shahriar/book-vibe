import React, { Suspense} from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {

  //   useEffect(() => {
  //     fetch("booksData.json")
  //     .then(res => res.json())
  //     .then(data=> console.log(data))
  //   }, []);

  // const bookPromise = fetch('./booksData.json').then(res => res.json())

  return (
    <div>
      <h1 className="text-4xl font-bold py-5 mt-20 text-center">
        Books: {data.length}
      </h1>

      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
