import {
  SiNodedotjs,
  SiPython,
  SiServerless,
  SiAdonisjs,
  SiNestjs
} from "react-icons/si";
import { DiRubyRough } from "react-icons/di";
import { SlideIn } from "./SlideIn";

export function BackEndSkills() {
  const skills = [
    {
      label: "Node",
      icon: SiNodedotjs,
    },
    {
      label: "Adonis",
      icon: SiAdonisjs,
    },
    {
      label: "Serverless",
      icon: SiServerless,
    },
    {
      label: "Python",
      icon: SiPython,
    },
    {
      label: "Nest",
      icon: SiNestjs,
    },
    {
      label: "Ruby",
      icon: DiRubyRough,
    },
  ];

  return (
    <>
      {skills.map((skill, i) => (
        <SlideIn key={skill.label} i={i}>
          <div
            className="bg-[var(--primary)] flex flex-col rounded-[8px] items-center justify-evenly w-[155px] h-[155px] lg:w-[200px] lg:h-[200px]"
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
