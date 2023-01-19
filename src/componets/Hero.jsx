import React from "react";
import Tools from "./Tools";

const Hero = () => {
    return (
        <section className="w-full flex flex-col my-10">
            <h1 className="text-6xl  mb-5 tracking-tighter">
                Hi, I'm Jauhar Muhammed
            </h1>
            <p className="text-justify">
                A creative artist with a passion for combining the art of UI/UX designs and
                programming to create beautiful websites.
            </p>
            <h2 className="text-4xl mt-24 mb-5">About Me</h2>
            <div className="flex flex-col gap-5">
                <p>I am a self-taught Full Stack Developer based in Kerala, India</p>
                <p className="text-justify">
                    As a full-stack developer and artist, I bring a unique combination of technical
                    expertise and creative vision to the world of UI/UX design. With my background in
                    both programming and art, I have the ability to craft visually stunning websites
                    that are not only beautiful but also user-friendly.
                </p >
                <p className="text-justify">
                    In addition to my professional pursuits, I also have a love for photography and the
                    traditional art of Arabic calligraphy.
                </p>
                <p className="text-justify">
                    I am always experimenting with new technologies and design trends, as well as
                    finding inspiration from photography and Arabic calligraphy. I believe my diverse
                    background and experience make me stand out and deliver something new to the world.
                </p>
                <p className="text-justify">
                    Over the past year, I've been immersing myself in the world of web development,
                    learning Python, Django, and React JS. I've had the opportunity to work on a diverse
                    range of projects, allowing me to continually challenge myself and refine my craft.
                </p>
            </div>

            <h2 className="text-4xl mt-16 mb-5">Tools I Use.</h2>
            <Tools />
        </section>
    );
};

export default Hero;
