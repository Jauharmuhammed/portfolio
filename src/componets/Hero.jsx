import React from "react";
import Tools from "./Tools";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
    return (
        <section className="w-full flex flex-col my-10 md:my-32">
            <h1 className="text-[2rem] md:text-[3.3rem]  md:mb-5 tracking-tighter">
                <span className="text-xl md:text-[2.2rem]">Hi, I'm</span> &nbsp;{" "}
                <span className="bg-gradient-to-r from-sky-500 via-violet-600 to-pink-600 text-transparent bg-clip-text">
                    Jauhar Muhammed
                </span>
            </h1>
            <p className="">
                Web dev & designer;
            </p>
            <a target="_blank" className="w-fit" href="https://www.linkedin.com/in/jauharmuhammed/">
                <button className="pl-4 pr-3 py-3 group flex gap-3 items-center rounded-md backdrop-blur-sm bg-transparent border mt-6 hover:bg-slate-100/5">
                    <span>Let's Connect</span>{" "}
                    <AiOutlineArrowRight
                        className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300"
                        size={16}
                    />
                </button>
            </a>
            <h2 className="text-2xl md:text-4xl mt-24 mb-5">About Me</h2>
            <div className="flex flex-col gap-5">
                <p>👨‍💻 I am a self-taught Full Stack Developer based in Kerala, India</p>
                <p className="">
                    💡 I primarily focus on Frontend and UI development as well as UI/UX design.
                    Proficient in React.js, Next.js, Python, Django, and many more, I am dedicated
                    to creating user-friendly interfaces that seamlessly blend design and
                    functionality.
                </p>
                <p className="">
                    🖋️ Beyond my technical pursuits, my passion for Traditional Arabic calligraphy
                    fuels my creativity. Also, I learn History and Philosophy in my free time.
                </p>
            </div>

            <h2 className="text-2xl md:text-4xl mt-16 mb-5">Tools I Use.</h2>
            <Tools />
        </section>
    );
};

export default Hero;
