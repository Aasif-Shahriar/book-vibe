import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoBook } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router";


const ReadBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="border border-[#13131315] p-6 my-5 rounded-3xl flex gap-10">
      <div className="w-[230px] bg-[#13131310] rounded-lg py-8 flex items-center justify-center">
        <img className="h-[172px] shadow-2xl" src={image} alt="" />
      </div>
      <div className="flex-1/2 space-y-4">
        <h1 className="font-bold text-2xl">{bookName}</h1>
        <p className="font-semibold">By: {author}</p>
        <div className="flex items-center gap-5">
          <p className="font-semibold">Tags:</p>
          <div >
            {tags.map((tag) => (
              <span className="mr-3 font-semibold text-sm text-[#23BE0A] bg-[#23BE0A10] py-2 px-3 rounded-full">#{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2">
          <FaLocationDot />
          <p className="text-gray-400  text-sm">Year Of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 border-b border-[#13131315] pb-5">
            <div className="flex items-center gap-3">
            <IoIosPeople size={20}/>
            <p className="text-gray-400  text-sm">Publisher: {publisher}</p>
            </div>
            <div className="flex items-center gap-3">
              <GoBook/>
              <p className="text-gray-400 text-sm" >Number Of Pages: {totalPages}</p>
            </div>
        </div>
        <div>
          <span className="mr-4 bg-[#328EFF15] text-[#328EFF] py-2 px-3 rounded-full">Category: {category}</span>
          <span className="mr-4 bg-[#FFAC3315] text-[#FFAC33] py-2 px-3 rounded-full">Rating: {rating}</span>
          <Link to={`bookDetails/${bookId}`}>
          <button className="bg-[#23BE0A] text-white py-2 px-3 rounded-full cursor-pointer">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
