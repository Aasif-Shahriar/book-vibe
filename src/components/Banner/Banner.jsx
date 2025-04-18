import React from 'react';

import banner from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className='flex justify-around items-center bg-[#13131305] py-20'>
            <div className='space-y-12'>
                <h1 className='font-bold text-6xl'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-success text-white'>View The List</button>
            </div>
            <div>
               <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;