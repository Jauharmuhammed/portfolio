import React from "react";
import "./Hero.css";
import Tools from "../Tools";

const Hero = () => {
    return (
        <section className="hero">
            <h1>Hi, I'm Jauhar Muhammed</h1>
            <p>
                A creative artist with a passion for combining the art of UI/UX designs and
                programming to create beautiful websites. In addition to my professional pursuits, I
                also have a love for photography and the traditional art of Arabic calligraphy.
            </p>
            <h2>About Me</h2>
            <p>
                A motivated Physics graduate and self-taught full stack developer based in Kerala,
                India
            </p>
            <p>
                As a full-stack developer and artist, I bring a unique combination of technical
                expertise and creative vision to the world of UI/UX design. With my background in
                both programming and art, I have the ability to craft visually stunning websites
                that are not only beautiful but also user-friendly.
            </p>
            <p>
                I am always experimenting with new technologies and design trends, as well as
                finding inspiration from my other passions like photography and Arabic calligraphy.
                I believe my diverse background and experience make me stand out and deliver
                something new to the world.
            </p>
            <p>
                Over the past year, I've been immersing myself in the world of web development,
                learning Python, Django, and React JS. I've had the opportunity to work on a diverse
                range of projects, allowing me to continually challenge myself and refine my craft.
            </p>

            <h2>Tools I Use.</h2>
            <Tools/>
        </section>
    );
};

export default Hero;
