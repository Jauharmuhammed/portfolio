import React from "react";

const BigProjects = () => {
    return (
        <div className="flex flex-col gap-5" id="projects">
            <h3 className="text-2xl md:text-4xl ">Big Projects</h3>
            <a
                target="_blank"
                href="https://readablebookstore.online"
                className=" block p-8 sm:-mx-8 rounded-md bg-neutral-100 dark:bg-neutral-800 text-white gap-4 after:bg-transparent">
                <div className="w-full py-3 flex flex-col gap-5 after-content-none ">
                    <h4 className="text-2xl md:text-3xl text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-orange-500 tracking-tighter">
                        Readable Bookstore
                    </h4>
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                        <p>Fully functional e-commerce website for books</p>
                        <a
                            className="whitespace-pre text-sm md:text-base"
                            target="_blank"
                            href="https://github.com/Jauharmuhammed/readable-bookstore">
                            Github repo
                        </a>
                    </div>
                    <p className="flex gap-4 text-sm md:text-base">
                        <span>Django</span>
                        <span>PostgreSQL</span>
                        <span>Bootstrap5</span>
                    </p>
                </div>
            </a>
            <a
                target="_blank"
                href="https://showyourwork.Jauharmuhammed.com"
                className=" block p-8 sm:-mx-8 rounded-md bg-neutral-100 dark:bg-neutral-800 text-white gap-4 cur">
                <div className="w-full py-3 flex flex-col gap-5">
                    <h4 className="text-2xl md:text-3xl text-transparent bg-gradient-to-r bg-clip-text from-sky-500 to-violet-500 tracking-tighter">
                        Showyourwork
                    </h4>
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                        <p>Social network platform to showcase works.</p>
                        <a
                            className="whitespace-pre text-sm md:text-base"
                            target="_blank"
                            href="https://github.com/Jauharmuhammed/showyourwork">
                            Github repo
                        </a>
                    </div>
                    <p className="flex gap-2 md:gap-4 text-sm md:text-base w-full whitespace-pre-wrap">
                        ReactJs   Django REST  Tailwind CSS   PostgreSQL   Redux
                    </p>
                </div>
            </a>
        </div>
    );
};

export default BigProjects;
