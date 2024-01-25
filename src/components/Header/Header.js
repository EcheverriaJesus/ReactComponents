import React from 'react'

export default function Header() {
    return (
        <header class="flex flex-col lg:flex-row w-full h-screen items-center">
            <section class="flex flex-col space-y-4 pt-14 lg:pt-0 lg:justify-center px-6 lg:pl-14 2xl:pl-40 w-full lg:w-1/2 h-full">
                <h1 class="text-4xl font-bold sm:text-[42px] lg:text-[40px] xl:text-5xl">PlaTaxco</h1>
                <span class="text-gray-900 text-3xl font-bold sm:text-[37px] lg:text-[35px] xl:text-4xl">Las joyas que mereces</span>
                <p class="max-w-[480px] text-base text-gray-700">
                    PlaTaxco: Donde la magia de Taxco se funde con la elegancia de la plata, creando las joyas que mereces.
                </p>
                <div class="flex justify-between lg:justify-start gap-10 pt-3">
                    <button
                        class="flex gap-3 bg-blue-500 text-white font-semibold py-3 px-5 rounded-lg hover:bg-blue-400 duration-300"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>Comprar</button>
                    <button
                        class="flex gap-3 bg-slate-300 font-semibold py-3 px-5 rounded-lg hover:bg-slate-200 duration-300"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Vender</button>
                </div>

                <div class="pt-5">
                    <div class="flex items-center gap-4 xl:gap-[50px]">
                        <a href="/" class="block py-3">
                            <img src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg" alt="oracle" />
                        </a>
                        <a href="/" class="block py-3">
                            <img src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg" alt="intel" />
                        </a>
                        <a href="/" class="block py-3">
                            <img src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg" alt="logitech" />
                        </a>
                    </div>
                </div>
            </section>

            <section class="w-full lg:w-1/2 h-4/6 px-6 lg:px-20 2xl:px-40">
                <img class="w-full h-full rounded-2xl object-cover"
                    src="https://images.pexels.com/photos/10733207/pexels-photo-10733207.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="" />
            </section>
        </header>
    )
}
