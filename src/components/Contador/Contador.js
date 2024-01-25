import React, { useState } from 'react'

export default function Contador() {
    const [contador, setContador] = useState(1)
    const sumar = () => setContador(contador + 1)
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
    return (
        <div className='flex items-center gap-3'>
            <button onClick={restar} className='font-bold text-3xl text-gray-600 hover:text-red-500'>-</button>
            <span className='py-1 px-4 border border-gray-300 rounded-lg font-semibold'>{contador}</span>
            <button onClick={sumar} className='font-bold text-2xl text-gray-600 hover:text-blue-500'>+</button>
        </div>
    )
}
