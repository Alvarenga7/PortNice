"use client";

import { Sobre_Mim } from "../constants"
import HaProfile from "../assets/HaProfile.jpeg"
import Image from 'next/image'
import { useEffect, useState } from "react";

const Hero = () => {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        setVisivel(true); // A animação começa após o componente ser montado
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-44 lg:mb-44 overflow-hidden">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        {/* Título */}
                        <h1 className={`pb-2 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl 
                            transition-all duration-[1500ms] ease-in-out ${visivel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'} `}>
                            Henrique Alvarenga
                        </h1>

                        {/* Front End Developer */}
                        <span className={`bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent
                            transition-all duration-[1500ms] ease-in-out delay-[500ms] ${visivel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'} `}>
                            Front End Developer
                        </span>

                        {/* Descrição */}
                        <p className={`my-2 max-w-xl py-6 font-light tracking-tighter 
                            transition-all duration-[1500ms] ease-in-out delay-[1000ms] ${visivel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'} `}>
                            {Sobre_Mim}
                        </p>
                    </div>
                </div>

                {/* Imagem */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <Image
                            className={`transition-all duration-[1500ms] ease-in-out delay-[1500ms] ${visivel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} absolute`}
                            src={HaProfile}
                            width={400}
                            height={400}
                            alt="Henrique Alvarenga"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
