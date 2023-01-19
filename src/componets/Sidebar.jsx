import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

const Sidebar = () => {
    return (
        <>
            <section className="text-white fixed p-12 top-1/2 -translate-y-1/2 hidden sm:block">
                <ul className="list-none">
                    <li className="h-28 ">
                        <a
                            className="relative after-content-none  after:bg-white after:absolute after:h-16 after:w-[.5px] after:left-1/2 after:top-8"
                            target="_blank"
                            href="https://github.com/Jauharmuhammed">
                            <img className="text-white w-5" src={github} alt="github" />
                        </a>
                    </li>
                    <li className="h-28">
                        <a
                            className="relative after-content-none after:bg-white after:absolute after:h-16 after:w-[.5px] after:left-1/2 after:top-8"
                            target="_blank"
                            href="https://linkedin.com/in/Jauharmuhammed">
                            <img className="text-white w-5" src={linkedin} alt="github" />
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative"
                            target="_blank"
                            href="https://twitter.com/Jauharmuhammed_">
                            <img className="text-white w-5" src={twitter} alt="github" />
                        </a>
                    </li>
                </ul>
            </section>
            {/* <section className="fixed right-0 p-12 top-1/2 -translate-y-1/2 hidden sm:block rotate-90">
                <a className="" href="mailto:jauharmuhammedk@gmail.com">jauharmuhammedk@gmail.com</a>
            </section> */}
        </>
    );
};

export default Sidebar;
