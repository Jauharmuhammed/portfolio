import React from "react";
import bigProjects from "../data/big-projects";
import { FaGithub } from "react-icons/fa";

const BigProjects = () => {
    return (
        <div className="flex flex-col gap-5" id="projects">
            <h3 className="text-2xl md:text-4xl ">Big Projects</h3>
            {bigProjects.map((project) => (
                <a
                    key={project.title}
                    target="_blank"
                    href={project.url}
                    className="flex flex-col-reverse lg:flex-row lg:items-center p-8 sm:-mx-8 rounded-md bg-neutral-100 dark:bg-neutral-800 text-white gap-4 cursor-alias">
                    <div className="w-full lg:w-1/2 flex flex-col gap-5 ">
                        <div className="flex gap-3 items-center text-2xl md:text-3xl ">
                            <h4 className="text-transparent bg-gradient-to-r bg-clip-text from-sky-500 to-violet-500 tracking-tighter">
                                {project.title}
                            </h4>
                            <a
                                className=" whitespace-pre text-sm md:text-base p-1 rounded-sm text-stone-900 bg-stone-50/80"
                                target="_blank"
                                href={project.github_url}>
                                <FaGithub/>
                            </a>
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                            <p className="text-base">{project.description}</p>
                        </div>
                        <p className="flex gap-1 text-sm md:text-base w-full whitespace-nowrap flex-wrap">
                            {project.tools.map((tool) => (
                                <span className="bg-stone-500/30 rounded-sm px-2" key={tool}>
                                    {tool}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <img className="rounded-sm" src={project.banner} alt={project.title} />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default BigProjects;
