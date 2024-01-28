import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    const [abierto, setAbierto] = useState(false);
    const status = () => {
        setAbierto(!abierto);
    };

    let Links = [
        { name: "Nosotros", section: "quienesSomos" },
        { name: "Áreas", section: "areas" },
        { name: "Tecnologías", section: "tecnologias" },
        { name: "Proyectos", section: "proyectos" },
        { name: "Equipo", section: "equipo" },
        { name: "Ubicanos", section: "ubicanos" }
    ]

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className='fixed top-0 left-0 z-50 w-full'>
            <nav className='flex flex-col justify-between w-full bg-blue-600 fixed pb-3 lg:pb-0 lg:h-12 px-6 sm:px-8 md:px-10 lg:flex-row lg:px-16 xl:px-24 2xl:px-64 lg:items-center dark:bg-gray-800'>
                <section className='flex flex-col lg:flex-row'>
                    <div className='flex items-center justify-between w-full h-10 lg:w-auto'>
                        <div className='flex gap-2 font-bold text-2xl pr-9 dark:text-white'>
                            <div className='flex lg:hidden'>
                                <button onClick={status} className='text-white'>
                                    <svg className='h-7 w-7' fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'>
                                        {abierto ? (
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                        ) : (
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                        )}
                                    </svg>
                                </button>
                            </div>
                            <a href='/' className='flex gap-3'>
                                <span className='text-white first-letter:text-3xl first-letter:text-cyan-400 cursor-pointer'>TITULO</span>
                            </a>
                        </div>
                    </div>
                    <ul className={`${abierto ? 'block' : 'hidden'} pt-2 lg:pt-0 lg:flex lg:items-center lg:w-auto`}>
                        <li className='flex flex-col gap-3 lg:gap-7 lg:flex-row h-full lg:items-center'>
                            {
                                Links.map((link) => (
                                    <a href='/' className='text-white hover:text-gray-400 duration-200'>{link.name}</a>
                                ))
                            }
                        </li>
                        <div className='flex pt-4 gap-2 lg:ml-4 lg:pt-0 lg:pl-4'>
                            <li className='list-none hover:scale-125 duration-200 hover:cursor-pointer' onClick={handleThemeSwitch}>
                                <div className='lg:flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white hover:scale-105 duration-200 dark:hidden">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hidden w-6 h-6 hover:scale-105 duration-200 dark:flex dark:stroke-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                </div>
                            </li>
                        </div>
                    </ul>
                </section>
            </nav>
        </div>
    );
};
export default Navbar;