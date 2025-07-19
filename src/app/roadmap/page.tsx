"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { TbShieldLockFilled } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";

const TIMELINE = [
  {
    year: "2020",
    date: "Fevereiro de 2020",
    label: "Início do curso de Segurança da Informação",
    icon: TbShieldLockFilled,
    description:
      "Foi aqui que dei meus primeiros passos na tecnologia e tive o meu primeiro contato com programação básica. Logo nas primeiras disciplinas, como algoritmos e lógica de programação eu descobri minha paixão pela área e fui buscar outros cursos e aprofundar meu conhecimento fora da faculdade.",
  },
  {
    year: "2021",
    date: "Outubro de 2021",
    label: "Início do curso de FullStack",
    icon: FaCode,
    description:
      "Após explorar conteúdos por conta própria, decidi dar um passo maior e ingressei no curso profissionalizante da Kenzie Academy. Essa experiência foi essencial para consolidar minha base e iniciar uma jornada completa no desenvolvimento FullStack.",
  },
  {
    year: "2021",
    date: "Novembro de 2021",
    label: "Início do trabalho de Peer Coach(Monitoria)",
    icon: GiTeacher,
    description:
      "Meu desempenho se destacou no curso e tive a oportunidade de atuar como Peer Coach, auxiliando novos alunos. Essa experiência me proporcionou aprimorar habilidades de comunicação, liderança e mentoria, além de reforçar meu conhecimento técnico ao ensinar.",
  },
  {
    year: "2022",
    date: "Setembro de 2022",
    label: "Conclusão do curso de FullStack",
    icon: FaCode,
    description:
      "Finalizei o curso de FullStack com sólida experiência em projetos práticos e pronto para enfrentar os desafios do mercado. A jornada consolidou meu domínio em diversas tecnologias e reforçou minha confiança para atuar profissionalmente.",
  },
  {
    year: "2022",
    date: "Outubro de 2022",
    label: "Início do trabalho de Desenvolvedor FullStack na uMode",
    icon: FaLaptopCode,
    description:
      "Na uMode tive minha primeira oportunidade profissional, onde eu aprendi muito e onde tive meus maiores desafios, tendo a possibilidade de trabalhar com diversas tecnologias em diversas soluções no mercado da moda.",
  },
  {
    year: "2024",
    date: "Maio de 2024",
    label: "Conclusão do curso de Segurança da Informação",
    icon: TbShieldLockFilled,
    description:
      "Concluí a graduação em Segurança da Informação, ampliando meu conhecimento em proteção de dados, redes e práticas de cibersegurança. Essa base, aliada à experiência em desenvolvimento, me tornou um profissional completo, capaz de unir performance e segurança em soluções digitais.",
  },
];

export default function RoadMap() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const ActiveIcon = useMemo(
    () => TIMELINE[activeMilestone].icon,
    [activeMilestone]
  );

  const handleMilestoneClick = (index: number) => {
    setActiveMilestone(index);
    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 18000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveMilestone((current) => 
        current === TIMELINE.length - 1 ? 0 : current + 1
      );
    }, 12000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAutoPlaying(true);
        } else {
          setIsAutoPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="w-full h-screen flex flex-col items-center justify-around py-10 bg-(--background-primary)">
      <h1>Trajetória</h1>
      <div className="w-full h-full flex flex-col items-center justify-around">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          key={TIMELINE[activeMilestone].label}
          className="flex flex-col items-center text-white"
        >
          <div className="flex flex-col max-w-[90%] md:max-w-none items-center md:flex-row">
            <ActiveIcon className="mr-2 mb-[9px] w-[32px] h-[32px]" />
            <h2 className="text-2xl font-semibold text-center">
              {TIMELINE[activeMilestone].label}
            </h2>
          </div>
          <span>{TIMELINE[activeMilestone].date}</span>
          <p className="text-lg mt-2 max-w-[90%] md:max-w-xl text-center text-gray-300 leading-relaxed">
            {TIMELINE[activeMilestone].description}
          </p>
        </motion.div>

        <div className="relative w-[85%] md:w-[90%] h-1 bg-gray-300 rounded-full">
          {TIMELINE.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMilestoneClick(index)}
              className="absolute top-3 transform -translate-x-1/2 flex flex-col items-center cursor-pointer hover:scale-120"
              style={{
                left: `${(index / (TIMELINE.length - 1)) * 100}%`,
              }}
            >
              <span className="text-xs font-bold mb-2 text-white whitespace-nowrap">
                {item.year}
              </span>
              <div
                className={`w-1 h-4 rounded-xs ${
                  index === activeMilestone
                    ? "bg-orange-500  animate-ping"
                    : "bg-gray-300"
                }`}
              />
            </button>
          ))}

          <motion.img
            src="/images/roadmap_car.png"
            alt="Roadmap Car"
            className="absolute -top-13 w-20 h-auto translate-x-[-26%] md:translate-x-[-50%]"
            animate={{
              left: `${(activeMilestone / (TIMELINE.length - 1)) * 100}%`,
              transition: { duration: 1, ease: "easeInOut" },
            }}
          />
        </div>
      </div>
    </section>
  );
}
