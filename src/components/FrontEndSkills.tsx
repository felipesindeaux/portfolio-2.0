import { SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiQuasar, SiTypescript } from "react-icons/si";
import { SlideIn } from "./SlideIn";

export function FrontEndSkills() {

  const skills = [{
    label: 'Typescript',
    icon: SiTypescript
  },
  {
    label: 'React',
    icon: SiReact
  },
  {
    label: 'Next',
    icon: SiNextdotjs
  },
  {
    label: 'Vue',
    icon: FaVuejs
  },
  {
    label: 'Quasar',
    icon: SiQuasar
  },
  {
    label: 'Tailwind CSS',
    icon: SiTailwindcss
  }]

  return (
    <>
      {skills.map((skill, i) => (
        <SlideIn key={skill.label} i={i}>
          <div className="bg-[var(--primary)] flex flex-col rounded-[8px] items-center justify-evenly w-[155px] h-[155px] lg:w-[200px] lg:h-[200px]" key={skill.label}>
            <skill.icon className="fill-white w-[100px] h-[100px] scale-90 hover:scale-100 transition-all animate-Slide-in duration-300 ease-in-out" />
            <span>{skill.label}</span>
          </div>
        </SlideIn>
      ))}
    </>
  );
}