import React from 'react'

const Category = ({ item }) => {
    return (
        <div className='flex-1 m-2 rounded-md shadow-lg overflow-hidden 
        relative'>
            <img src={item.src} alt={item.titlle} className='w-[100%]' />
            <div className='flex absolute w-[100%] h-[100%] left-0 top-0 
            items-center 
            justify-center flex-col bg-[rgba(0,0,0,0.6)]'>
                <h2 className='text-white font-medium text-[30px]'>
                    {item.title}
                </h2>
                <button className='btn'>See more</button>
            </div>
        </div>
    )
}

export default Category