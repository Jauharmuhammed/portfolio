import React from "react";
import miniProjects from "../data/mini-projects";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

const MiniProjects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 md:gap-y-14 ">
            {miniProjects.map((project) => (
                <div key={project.title} className="space-y-2 relative group p-5 md:p-0">
                    <div className="flex justify-between items-center">
                        <a target="_blank" href={project.url} className="flex gap-3 items-center">
                            <h4 className="text-2xl">{project.title}</h4>{" "}
                            {project.url && <FaExternalLinkAlt size={14} />}
                        </a>
                        <a target="_blank" href={project.github_url} className="">
                            <span className="px-2 py-1 rounded-md text-xs font-mono bg-gray-300 text-stone-900">
                                Code
                            </span>
                        </a>
                    </div>
                    <p className="text-lg">{project.desc}</p>
                    <p className="flex gap-1 text-sm md:text-base w-full whitespace-nowrap flex-wrap">
                        {project.tools.map((tool) => (
                            <span className="bg-stone-500/30 rounded-sm px-2" key={tool}>
                                {tool}
                            </span>
                        ))}
                    </p>
                    <div className="absolute md:hidden group-hover:block inset-0 md:-inset-5 border-[0.5px] rounded-md bg-transparent -z-10"></div>
                </div>
            ))}
        </div>
    );
};

export default MiniProjects;
