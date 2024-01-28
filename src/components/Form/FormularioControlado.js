import React, { useState } from 'react'

export default function FormularioControlado() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Formulario enviado');
    }
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }


    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-96 px-5 py-3 justify-center items-center bg-white shadow-lg space-y-5'>
            <h3 class="text-center text-2xl font-bold tracking-tight text-gray-900">Sign in to your account</h3>
            <div className='w-full'>
                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                <input className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                    type='text'
                    placeholder='Ingresar Nombre'
                    value={name}
                    required
                    onChange={ev => setName(ev.target.value)} />
            </div>
            <div className='w-full'>
                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                <input className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                    type='password'
                    placeholder='Ingresar Correo Electronico'
                    value={password}
                    required
                    onChange={ev => setPassword(ev.target.value)} />
            </div>

            <div className='w-full'>
                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                <input className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                    type='email'
                    placeholder='Ingresar Correo Electronico'
                    value={email}
                    required
                    onChange={ev => setEmail(ev.target.value)} />
            </div>
           <div className='w-full'>
             <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none'>
                 <input
                     type='checkbox'
                     name='autoSaver'
                     className='sr-only'
                     checked={isChecked}
                     onChange={handleCheckboxChange}
                 />
                 <span
                     className={`slider mr-3 flex h-[20px] w-[38px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-blue-400' : 'bg-[#dbdbde]'
                         }`}
                 >
                     <span
                         className={` h-[12px] w-[12px] rounded-full bg-white duration-200 ${isChecked ? 'translate-x-4' : ''
                             }`}
                     ></span>
                 </span>
                 <span className='label flex items-center text-sm font-medium text-gray-700'>
                     Auto Saver <span className='pl-1'> {isChecked ? 'On' : 'Off'} </span>
                 </span>
             </label>
           </div>

            <button type='submit' className="flex items-center gap-2 bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-400 duration-300">
                Enviar
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
        </form>
    )
}
