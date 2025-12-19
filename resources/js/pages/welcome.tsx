import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductCarousel from '@/components/ProductCarousel';




export default function Welcome({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Jersey Bekas">
                
            </Head>
            

            <div className="flex min-h-screen flex-col bg-[#FDFDFC] font-sans-custom  text-[#1b1b18] dark:bg-[#0a0a0a] font-jakarta">
                <Navbar/>

                <section className="hero mt-10 w-full lg:mt-10 px-4 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                        <div className="lg:col-span-3 relative rounded-3xl overflow-hidden h-[450px] lg:h-[650px] group">
                            <img
                                src="/img/bg-jer.jpg"
                                alt="Hero"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30"></div>
                            <div className="absolute lg:bottom-50 bottom-25 left-8 text-white space-y-4 max-w-md">
                                <h1 className="lg:text-7xl text-5xl font-medium leading-tight">
                                    Color of <br /> Summer ‘26
                                </h1>
                                <p className="opacity-90 font-extralight">
                                    The Three Stripes are rewriting the playbook <br /> and reimagining football culture, fusing legacy <br /> with a new kind of energy.
                                </p>
                                <button className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
                                    VIEW COLLECTIONS
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <Link>
                                <div className="relative rounded-3xl overflow-hidden h-[313px] group">
                                    <img
                                        src="/img/image 4.png"
                                        alt="Current Season"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/5"></div>

                                    <h2 className="absolute top-6 left-6 text-white text-3xl font-light">
                                        Current <br/>Season
                                    </h2>
                                </div>
                            </Link>
                            <Link>
                                <div className="relative rounded-3xl overflow-hidden h-[313px] group">
                                    <img
                                        src="/img/clher.png"
                                        alt="Classic"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/5"></div>

                                    <h2 className="absolute top-6 left-6 text-white text-3xl font-light">
                                        Classic
                                    </h2>
                                </div>
                            </Link>

                        </div>
                    </div>
                </section>

                <section className='recommendation my-10 w-full lg:mt-10 px-4 lg:px-20'>
                    <div className="rec-title">
                        <h1 className='font-bold text-2xl'>Best Looking For</h1>
                        <hr className='bg-green-800 h-1 border-0 w-50 my-2'/>
                    </div>

                    <ProductCarousel/>
                </section>


                {/* FOOTER */}
                {/* <footer className="mt-20 text-center text-sm text-[#555] dark:text-[#A8A8A8]">
                    © 2025 MyApp — All Rights Reserved.
                </footer> */}
            </div>
        </>
    );
}
