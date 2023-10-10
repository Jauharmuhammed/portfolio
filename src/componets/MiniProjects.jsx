import React, { useEffect, useState } from "react";
import miniProjects from "../data/mini-projects";
import { BsChevronDown } from "react-icons/bs";
import MiniProject from "./MiniProject";

const MiniProjects = () => {
    const [show, setShow] = useState(false);
    const [projects, setProjects] = useState(miniProjects.slice(0, 6));

    useEffect(() => {
        if (show) {
            setProjects(miniProjects);
        } else {
            setProjects(miniProjects.slice(0, 6));
        }
    }, [show]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 md:gap-y-14 ">
            {miniProjects.slice(0, 6).map((project) => (
                <MiniProject project={project} />
            ))}
            <div
                className={`md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 md:gap-y-14 transition-all duration-500 ${
                    !show ? " opacity-0 -z-10 h-0" : "opacity-100 z-0 h-auto"
                }`}>
                {miniProjects.slice(6, 12).map((project) => (
                    <MiniProject project={project} />
                ))}
            </div>
            <button
                onClick={() => setShow((prev) => !prev)}
                className={`flex gap-2 md:col-span-2 items-center mx-auto w-fit transition-all duration-300 ${!show && 'md:-mt-20'}`}>
                <span>{show ? "Show less" : "Show more"}</span>
                <BsChevronDown
                    className={`transition-transform duration-300  ${show ? "rotate-180" : ""}`}
                    size={12}
                />
            </button>
        </div>
    );
};

export default MiniProjects;
