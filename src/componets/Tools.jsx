import {
    FaReact,
    FaAws,
    FaBootstrap,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaPython,
    FaSass,
    FaGitlab,
} from "react-icons/fa";
import {
    SiDjango,
    SiCanva,
    SiHtml5,
    SiJavascript,
    SiMacos,
    SiMaterialui,
    SiNetlify,
    SiPostgresql,
    SiRedis,
    SiRedux,
    SiTailwindcss,
    SiVisualstudiocode,
    SiNextdotjs,
    SiTypescript,
    SiJirasoftware,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5";

export const tools = [
    {
        name: "React.js",
        icon: <FaReact />,
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs/>,
    },
    {
        name: "Python",
        icon: <FaPython />,
    },
    {
        name: "Django",
        icon: <SiDjango />,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />,
    },
    {
        name: "Typecript",
        icon: <SiTypescript />,
    },
    {
        name: "HTML",
        icon: <SiHtml5 />,
    },
    {
        name: "CSS",
        icon: <IoLogoCss3 />,
    },
    {
        name: "Redux.js",
        icon: <SiRedux />,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
    },
    {
        name: "Bootstrap",
        icon: <FaBootstrap />,
    },
    {
        name: "SASS",
        icon: <FaSass />,
    },
    {
        name: "Material UI",
        icon: <SiMaterialui />,
    },
    {
        name: "Figma",
        icon: <IoLogoFigma />,
    },
    {
        name: "Git",
        icon: <FaGitAlt />,
    },
    {
        name: "Github",
        icon: <FaGithub />,
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
    },
    {
        name: "Firebase",
        icon: <IoLogoFirebase />,
    },
    {
        name: "Gitlab",
        icon: <FaGitlab />,
    },
    {
        name: "VS Code",
        icon: <SiVisualstudiocode />,
    },
    {
        name: "Jira",
        icon: <SiJirasoftware />,
    },
    {
        name: "AWS",
        icon: <FaAws />,
    },
    {
        name: "Docker",
        icon: <FaDocker />,
    },
    {
        name: "Redis",
        icon: <SiRedis />,
    },
];

import React from "react";

const Tools = () => {
    return (
        <ul className="list-none list-column">
            {tools.map((obj) => (
                <li key={obj.name} className='flex gap-2 mb-1.5'>
                    <span className="w-6">
                        {obj.icon}
                    </span>
                    <span>{obj.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default Tools;
