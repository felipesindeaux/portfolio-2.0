'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { TbShieldLockFilled } from 'react-icons/tb';
import { FaLaptopCode } from 'react-icons/fa';
import { FaCode, FaRobot } from 'react-icons/fa6';
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
  { id: 'dataCamposStart', year: '2026', icon: FaRobot },
] as const;

const shortDate = (date: string) => {
  const parts = date.split(' ');
  return `${parts[0].slice(0, 3)} ${parts[parts.length - 1]}`;
};

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
            <div className="flex flex-col max-w-[90%] md:max-w-none items-center md:flex-row mb-3.5">
              <ActiveIcon className="mr-2 mb-[12px] w-[32px] h-[32px]" />
              <h2 className="text-2xl font-semibold text-center">
                {t(`milestones.${activeItem.id}.label`)}
              </h2>
            </div>
            <p className="text-lg mt-2 max-w-[90%] md:max-w-xl text-center text-gray-300 leading-relaxed">
              {t(`milestones.${activeItem.id}.description`)}
            </p>
          </motion.div>
        </FadeInOnScreen>

        <FadeInOnScreen delay={0.2} className="w-[88%] mx-auto pt-[70px]">
          <div
            ref={carRef}
            className="relative h-0.5 bg-(--cards-outline) rounded-full"
          >
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, rgba(249,115,22,.35), #f97316)',
              }}
              animate={{
                width: `${(activeMilestone / (TIMELINE.length - 1)) * 100}%`,
              }}
              transition={{ duration: 1.1, ease: [0.34, 1.1, 0.5, 1] }}
            />

            <motion.div
              className="absolute w-[56px] sm:w-[72px] md:w-[92px] mb-[-20px] sm:mb-[-26px] md:mb-[-33px] pointer-events-none"
              style={{ bottom: '100%', zIndex: 999 }}
              initial={{ left: '-15%' }}
              animate={{
                left: isCarInView
                  ? `${(activeMilestone / (TIMELINE.length - 1)) * 100}%`
                  : '-15%',
                x: activeMilestone === 0 ? '0%' : '-100%',
              }}
              transition={{
                duration:
                  isCarInView && activeMilestone === 0 ? 1.8 : 1.15,
                ease: [0.34, 1.3, 0.5, 1],
              }}
            >
              <div className="relative w-full">
                <div
                  key={activeMilestone}
                  className="absolute right-[78%] top-[46%] flex flex-col items-end gap-[5px]"
                >
                  {[34, 24, 16].map((w, i) => (
                    <span
                      key={i}
                      className="block h-0.5 rounded-[2px]"
                      style={{
                        width: w,
                        background:
                          'linear-gradient(90deg, transparent, #f97316)',
                        animation: `trail .6s ${i * 0.08}s ease-out`,
                      }}
                    />
                  ))}
                </div>

                <motion.img
                  src="/images/roadmap_car.png"
                  alt="Roadmap Car"
                  className="block w-full h-auto"
                  style={{
                    filter: 'drop-shadow(0 6px 6px rgba(0,0,0,.55))',
                  }}
                />

                <div
                  className="absolute left-1/2 -translate-x-1/2 w-[74%] h-[7px] rounded-[50%]"
                  style={{
                    bottom: -7,
                    background:
                      'radial-gradient(ellipse, rgba(0,0,0,.6), transparent 72%)',
                  }}
                />
              </div>
            </motion.div>

            {TIMELINE.map((item, index) => {
              const on = index === activeMilestone;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMilestoneClick(index)}
                  title={item.year}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 p-1.5 cursor-pointer"
                  style={{ left: `${(index / (TIMELINE.length - 1)) * 100}%` }}
                >
                  <span
                    className="block rounded-full transition-all duration-[250ms]"
                    style={{
                      width: on ? 14 : 10,
                      height: on ? 14 : 10,
                      background: on ? '#f97316' : 'var(--background-primary)',
                      border: `2px solid ${on ? '#f97316' : 'var(--secondary)'}`,
                      boxShadow: on ? '0 0 0 5px rgba(249,115,22,.18)' : 'none',
                    }}
                  />
                </button>
              );
            })}
          </div>

          <div className="relative h-6 mt-4">
            {TIMELINE.map((item, index) => {
              const on = index === activeMilestone;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMilestoneClick(index)}
                  className="absolute -translate-x-1/2 px-1.5 py-0.5 cursor-pointer"
                  style={{ left: `${(index / (TIMELINE.length - 1)) * 100}%` }}
                >
                  <span
                    className="text-[13px] font-bold font-(family-name:--title-font) whitespace-nowrap transition-all duration-200"
                    style={{
                      color: on ? '#fff' : 'var(--secondary)',
                      opacity: on ? 1 : 0.6,
                    }}
                  >
                    {shortDate(t(`milestones.${item.id}.date`))}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeInOnScreen>
      </div>
    </section>
  );
}
