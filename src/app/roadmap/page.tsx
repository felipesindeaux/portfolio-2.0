'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { TbShieldLockFilled } from 'react-icons/tb';
import { FaLaptopCode } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import { FadeInOnScreen } from '@/components/FadeInOnScreen';
import { useTranslations } from 'next-intl';

const TIMELINE = [
  { id: 'securityStart', year: '2020', icon: TbShieldLockFilled },
  { id: 'fullstackStart', year: '2021', icon: FaCode },
  { id: 'peerCoach', year: '2021', icon: GiTeacher },
  { id: 'fullstackEnd', year: '2022', icon: FaCode },
  { id: 'umodeStart', year: '2022', icon: FaLaptopCode },
  { id: 'securityEnd', year: '2024', icon: TbShieldLockFilled },
] as const;

export default function RoadMap() {
  const t = useTranslations('roadmap');
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const carRef = useRef(null);
  const isCarInView = useInView(carRef, { once: true });

  const activeItem = TIMELINE[activeMilestone];
  const ActiveIcon = useMemo(() => activeItem.icon, [activeItem]);

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
        current === TIMELINE.length - 1 ? 0 : current + 1,
      );
    }, 12000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAutoPlaying(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex flex-col items-center justify-around py-10 bg-(--background-primary)"
    >
      <FadeInOnScreen delay={0.2} className="flex flex-col items-center">
        <h1 className="text-[44px]">{t('title')}</h1>
      </FadeInOnScreen>
      <div className="w-full h-full flex flex-col items-center justify-around">
        <FadeInOnScreen delay={0.4}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            key={activeItem.id}
            className="flex flex-col items-center text-white"
          >
            <div className="flex flex-col max-w-[90%] md:max-w-none items-center md:flex-row">
              <ActiveIcon className="mr-2 mb-[9px] w-[32px] h-[32px]" />
              <h2 className="text-2xl font-semibold text-center">
                {t(`milestones.${activeItem.id}.label`)}
              </h2>
            </div>
            <span>{t(`milestones.${activeItem.id}.date`)}</span>
            <p className="text-lg mt-2 max-w-[90%] md:max-w-xl text-center text-gray-300 leading-relaxed">
              {t(`milestones.${activeItem.id}.description`)}
            </p>
          </motion.div>
        </FadeInOnScreen>

        <FadeInOnScreen
          delay={0.2}
          className="relative w-[85%] md:w-[90%] h-1 bg-gray-300 rounded-full"
        >
          <div ref={carRef}>
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
                      ? 'bg-orange-500  animate-ping'
                      : 'bg-gray-300'
                  }`}
                />
              </button>
            ))}

            <motion.img
              src="/images/roadmap_car.png"
              alt="Roadmap Car"
              className="absolute -top-13 w-20 h-auto translate-x-[-26%] md:translate-x-[-50%]"
              initial={{ left: '-15%' }}
              animate={{
                left: isCarInView
                  ? `${(activeMilestone / (TIMELINE.length - 1)) * 100}%`
                  : '-15%',
                transition: {
                  duration: isCarInView && activeMilestone === 0 ? 2 : 1,
                  ease: 'easeInOut',
                },
              }}
            />
          </div>
        </FadeInOnScreen>
      </div>
    </section>
  );
}
