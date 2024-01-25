import React from 'react'

export default function Card1() {
    return (
        <article className="relative w-full h-56 2xl:h-96 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full relative h-full hover:scale-110 duration-700">
                <div className="bg-gradient-to-t from-gray-900 from-10% to-transparent to-50% absolute inset-0"></div>
                <img src="https://images.pexels.com/photos/14509640/pexels-photo-14509640.jpeg" alt="Imagen" className="w-full h-full object-cover inset-0" />
            </div>
            <h6 className="absolute bottom-3 text-white text-center w-full mb-4 text-xl font-bold">PULSERAS</h6>
        </article>
    )
}
