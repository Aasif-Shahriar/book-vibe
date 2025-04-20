import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/addToDB";

const handleMarkRead = (id) => {

    addToStoredDB(id)
};

const BookDetails = () => {
  const { id } = useParams();

  const bookId = parseInt(id);

  const data = useLoaderData();

  const bookData = data.find((book) => book.bookId === bookId);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = bookData;

  return (
    <div className="flex gap-10 my-12 ">
      <div className="bg-[#13131305] p-16 rounded-2xl w-[50%] flex justify-center items-center">
        <img src={image} alt="" className="w-[425px] h-[565px] shadow-2xl" />
      </div>

      <div className="w-[50%] space-y-5">
        <h1 className="font-bold text-4xl">{bookName}</h1>
        <h3 className="font-medium text-xl">By: {author}</h3>
        <p className="border-t border-b font-semibold py-4 border-[#13131315]">
          {category}
        </p>
        <p className="text-[#13131370]">
          <span className="font-bold text-black">Review: </span>
          {review}
        </p>
        <div className="flex items-center gap-4 border-b border-[#13131315] pb-4">
          <span className="font-bold">Tags:</span>
          <div className="flex items-center gap-3 ">
            {tags.map((tag,index) => (
              <span key={index} className="text-[#23BE0A] bg-[#23BE0A10] px-3 py-2 rounded-4xl font-semibold">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-[500px] flex gap-20 ">
          <div className="space-y-3">
            <p className="text-[#13131370]">Number of Pages:</p>
            <p className="text-[#13131370]">Publisher:</p>
            <p className="text-[#13131370]">Year of Publishing:</p>
            <p className="text-[#13131370]">Rating:</p>
          </div>
          <div className="space-y-3">
            <p className="font-semibold">{totalPages}</p>
            <p className="font-semibold">{publisher}</p>
            <p className="font-semibold">{yearOfPublishing}</p>
            <p className="font-semibold">{rating}</p>
          </div>
        </div>

        <div>
          <button
            onClick={() => handleMarkRead(id)}
            className="btn btn-outline mr-5"
          >
            Mark As Read
          </button>
          <button className="btn btn-info text-white">Add To Wish List</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
