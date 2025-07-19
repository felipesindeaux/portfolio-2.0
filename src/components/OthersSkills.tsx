import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiGooglecloud,
  SiFigma,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { SlideIn } from "./SlideIn";

export function OthersSkills() {
  const skills = [
    {
      label: "AWS",
      icon: FaAws,
    },
    {
      label: "GoogleCloud",
      icon: SiGooglecloud,
    },
    {
      label: "Docker",
      icon: SiDocker,
    },
    {
      label: "Figma",
      icon: SiFigma,
    },
    {
      label: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      label: "MySQL",
      icon: SiMysql,
    },
  ];

  return (
    <>
      {skills.map((skill, i) => (
        <SlideIn key={skill.label} i={i}>
          <div
            className="skill-card bg-[var(--primary)] flex flex-col rounded-[8px] items-center justify-evenly w-[155px] h-[155px] lg:w-[200px] lg:h-[200px]"
            key={skill.label}
          >
            <skill.icon className="fill-white w-[100px] h-[100px] scale-90 hover:scale-100 transition-all animate-fade-in duration-300 ease-in-out" />
            <span>{skill.label}</span>
          </div>
        </SlideIn>
      ))}
    </>
  );
}
