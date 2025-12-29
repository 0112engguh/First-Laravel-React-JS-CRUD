import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductCarousel from '@/components/ProductCarousel';
import { CategoryItem } from "@/components/CategoryItems"




export default function Welcome({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage<SharedData>().props;
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
        })
    }, [])

    return (
        <>
            <Head title="Jersey Bekas">
                
            </Head>
            

            <div className="flex min-h-screen flex-col bg-[#FDFDFC] font-sans-custom  text-[#1b1b18] dark:bg-[#0a0a0a] font-jakarta">
                <Navbar/>

                <section className="hero w-full">
                    <div className="">
                        <div className="relative overflow-hidden h-[450px] lg:h-[450px] group">
                            <img
                                src="/img/bg-jer.jpg"
                                alt="Hero"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/25"></div>
                            <div data-aos="fade-up" data-aos-duration="1500" className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6">
                                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                    Color of Summer ‘26
                                </h1>
                                <Link>
                                    <button className="bg-green-900 px-3 py-3 text-sm font-semibold rounded-full hover:bg-green-800 transition">
                                        VIEW COLLECTIONS
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 gap-2" data-aos="fade-up" data-aos-duration="1500">
                            <Link>
                                <div className="relative h-[300px] overflow-hidden group">
                                    <img
                                        src="/img/leverkusen-1-min.jpg"
                                        alt="Current Season"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/15" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                        <h2 className="text-3xl font-semibold leading-tight">
                                            Current <br /> Season
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                            <Link>
                                <div className="relative h-[300px] overflow-hidden group">
                                    <img
                                        src="/img/mu.jpg"
                                        alt="Classic Jersey"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-black/20" />

                                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                        <h2 className="text-3xl font-semibold leading-tight">
                                            Classic <br /> Jersey
                                        </h2>
                                    </div>
                                </div>                            
                            </Link>

                        </div>
                    </div>
                </section>

                <section className='recommendation my-10 w-full lg:mt-10 px-4 lg:px-8'>
                    <div className="rec-title">
                        <h1 className='font-semibold text-2xl'>New Arrivals</h1>
                        <hr className='bg-green-800 h-0.5 border-0 w-40 my-2'/>
                    </div>
                    <div className="px-6">
                        <ProductCarousel/>
                    </div>
                </section>

                <section className='lg:mt-10 w-full px-4 lg:px-8'>
                    {/* <div className="rec-title mb-5">
                        <h1 className='font-semibold text-2xl'>Popular Leagues</h1>
                        <hr className='bg-green-800 h-0.5 border-0 w-50 my-2'/>
                    </div> */}

                    <CategoryItem title="Premier League" />
                    <CategoryItem title="La Liga" />
                    <CategoryItem title="Bundesliga" />
                    <CategoryItem title="Serie A" />
                </section>


                {/* FOOTER */}
                {/* <footer className="mt-20 text-center text-sm text-[#555] dark:text-[#A8A8A8]">
                    © 2025 MyApp — All Rights Reserved.
                </footer> */}
            </div>
        </>
    );
}
