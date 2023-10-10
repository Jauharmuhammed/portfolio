import React from "react";
import bigProjects from "../data/big-projects";

const gradients = [
    "bg-gradient-to-r from-sky-500 to-violet-500 ",
    "bg-gradient-to-r from-slate-300 to-lime-600 ",
    "bg-gradient-to-r from-pink-500 via-yellow-400 to-yellow-500 ",
];

const BigProjects = () => {
    return (
        <div className="flex flex-col gap-5" id="projects">
            <h3 className="text-2xl md:text-4xl ">Big Projects</h3>
            {bigProjects.map((project, index) => (
                <a
                    key={project.title}
                    target="_blank"
                    href={project.url}
                    className="flex flex-col-reverse lg:flex-row lg:items-center group p-5 md:p-8 sm:-mx-8 rounded-md bg-neutral-100 dark:bg-neutral-800 text-white gap-4 cursor-alias">
                    <div className="w-full flex flex-col gap-5 ">
                        <div className="flex gap-3 justify-between md:justify-start items-center text-2xl md:text-3xl ">
                            <h4
                                className={`text-transparent bg-clip-text tracking-tighter ${gradients[index]}`}>
                                {project.title}
                            </h4>
                            <a className="mb-3" target="_blank" href={project.github_url}>
                                <span className="px-2 py-1 my-auto rounded-md text-xs font-mono bg-gray-300 text-stone-900">
                                    Code
                                </span>
                            </a>
                        </div>
                        <div className="w-full flex gap-5">
                            <div className=" w-full md:w-1/2">
                                <p className="md:text-lg">{project.description}</p>
                            </div>
                            <div className="w-full md:w-1/2 hidden md:block">
                                <img
                                    className="rounded-sm md:group-hover:scale-105 transition-transform duration-500 ease-out"
                                    src={project.banner}
                                    alt={project.title}
                                />
                            </div>
                        </div>
                        <p className="flex gap-1 text-sm md:text-base w-full whitespace-nowrap flex-wrap">
                            {project.tools.map((tool) => (
                                <span className="bg-stone-500/30 rounded-sm px-2" key={tool}>
                                    {tool}
                                </span>
                            ))}
                        </p>
                    </div>
                    <img
                        className="rounded-sm md:hidden md:group-hover:scale-105 transition-transform duration-500 ease-out"
                        src={project.banner}
                        alt={project.title}
                    />
                </a>
            ))}
        </div>
    );
};

export default BigProjects;
