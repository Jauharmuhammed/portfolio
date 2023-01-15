import {
    FaReact,
    FaAws,
    FaBootstrap,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaPython,
    FaSass,
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
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5";
import DjangoREST from '../assets/DjangoREST.svg'

export const tools = [
    {
        name: "ReactJs",
        icon: <FaReact />,
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
        name: "Django REST",
        icon: <img className="djangoREST" src={DjangoREST} alt="" />,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />,
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
        name: "Redux",
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
        name: "Netlify",
        icon: <SiNetlify />,
    },
    {
        name: "VS Code",
        icon: <SiVisualstudiocode />,
    },
    {
        name: "macOS",
        icon: <SiMacos />,
    },
    {
        name: "AWS",
        icon: <FaAws />,
    },
    {
        name: "Canva",
        icon: <SiCanva />,
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
        <ul className="tools">
            {tools.map((obj) => (
                <li key={obj.name}>
                    <span>
                        {obj.icon}
                    </span>
                    <span>{obj.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default Tools;
