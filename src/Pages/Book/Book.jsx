import React from "react";
import { IoIosStarOutline } from "react-icons/io";

const Book = ({ book }) => {
  const { bookName, author, image, rating, tags, category } = book;

  // const data = use(bookPromise)
  // console.log(data);

  return (
    <div className="card bg-base-100 border border-[#13131315] p-6">
      <figure className="bg-[#F3F3F3] py-24 rounded-2xl">
        <img className="w-[144px] h-[200px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body space-y-4 border-b border-dashed border-[#13131325]">
        <div>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[#23BE0A] bg-[#23BE0A10] mr-3 px-4 py-2 font-semibold rounded-4xl"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
        <p className="font-medium">Author: {author}</p>
      </div>
      <div className="flex items-center justify-between mt-5">
        <span className="font-medium">{category}</span>
        <div className="flex items-center gap-2">
          <span className="font-medium">{rating}</span>
          <span>
            <IoIosStarOutline />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Book;
