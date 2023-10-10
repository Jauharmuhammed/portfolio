import React from "react";
import Tools from "./Tools";

const Hero = () => {
    return (
        <section className="w-full flex flex-col my-10 md:my-32">
            <h1 className="text-3xl md:text-[3.3rem]  mb-5 tracking-tighter">
                <span className="text-xl md:text-[2.2rem]">Hi, I'm</span> &nbsp;{" "}
                <span className="bg-gradient-to-r from-sky-500 via-violet-600 to-pink-600 text-transparent bg-clip-text">
                    Jauhar Muhammed
                </span>
            </h1>
            <p className="">
                Web dev & Designer, &nbsp; currently{" "}
                <a className="underline underline-offset-4" href="https://farmsio.com">
                    @ Farms.io
                </a>
            </p>
            <a target="_blank" className="w-fit" href="https://www.linkedin.com/in/jauharmuhammed/">
                <button className="px-4 py-2 rounded-md backdrop-blur-sm bg-transparent border mt-6 hover:bg-slate-100/5">
                    Let Connect
                </button>
            </a>
            <h2 className="text-2xl md:text-4xl mt-24 mb-5">About Me</h2>
            <div className="flex flex-col gap-5">
                <p>I am a self-taught Full Stack Developer based in Kerala, India</p>
                <p className="">
                    As a full-stack developer, designer and artist, I blend design and code to
                    create visually stunning, user-friendly websites. With a passion for both
                    programming and art, I craft engaging online experiences. Beyond my professional
                    work, I'm a photography enthusiast and skilled in Traditional Arabic
                    calligraphy.
                </p>
                <p className="">
                    My dedication to exploring cutting-edge technologies and design trends, combined
                    with my inspiration from photography and Arabic calligraphy, sets me apart and
                    allows me to deliver fresh, captivating experiences to the world.
                </p>
                {/* <p className="">
                    Over the past year, I've been immersing myself in the world of web development,
                    learning Python, Django, and React JS. I've had the opportunity to work on a diverse
                    range of projects, allowing me to continually challenge myself and refine my craft.
                </p> */}
            </div>

            <h2 className="text-2xl md:text-4xl mt-16 mb-5">Tools I Use.</h2>
            <Tools />
        </section>
    );
};

export default Hero;
