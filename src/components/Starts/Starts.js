import React, { useState } from 'react'

export default function Starts() {
    const [rating, setRating] = useState(5);
    const handleClick = (value) => {
        setRating(value);
    };
    return (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((value) => (
                <button
                    key={value}
                    onClick={() => handleClick(value)}
                    className={`text-3xl focus:outline-none ${value <= rating ? 'text-yellow-400' : 'text-gray-300'
                        }`} >
                    ★
                </button>
            ))}
        </div>
    )
}
