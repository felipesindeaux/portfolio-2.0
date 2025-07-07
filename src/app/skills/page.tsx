'use client';
import { BackEndSkills } from '@/components/BackEndSkills';
import { FrontEndSkills } from '@/components/FrontEndSkills';
import { OthersSkills } from '@/components/OthersSkills';
import Image from 'next/image';
import { useState } from 'react';


export default function Skills() {
  type TabKey = "front" | "back" | "others";


  const [activeTab, setActiveTab] = useState<TabKey>("front");

  const tabsIcons: { id: TabKey, icon: string, label: string }[] = [
    { id: "front", icon: "/images/wheel.png", label: 'Front-End' },
    { id: "back", icon: "/images/piston.png", label: 'Back-End' },
    { id: "others", icon: "/images/suspension.png", label: 'Outras' },
  ]

  const tabsContent = {
    front: FrontEndSkills,
    back: BackEndSkills,
    others: OthersSkills
  }

  const SkillsToRender = tabsContent[activeTab];

  const renderSkillsContent = () => {
    return (
      <div className="grid gap-6 md:gap-7 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <SkillsToRender />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-around w-[100vw] h-screen bg-(--primary)">
      <h1>Habilidades</h1>
      <div className="flex h-[75%] w-[92%] md:w-[100%] justify-center 2xl:w-[70%]">
        <div className="flex flex-col h-[100%]">
          {tabsIcons.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`skill-section-tab select-none w-[120px] sm:w-[160px] md:w-[200px] lg:w-[228px] transition flex flex-col items-center justify-center ${activeTab === tab.id
                ? "bg-[var(--background-primary)]"
                : "bg-[#1d1d1d] opacity-50 hover:opacity-100 cursor-pointer"
                }`}
            >
              <Image
                src={tab.icon}
                alt={`${tab.id} icon`}
                width={180}
                height={180}
                className='w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[170px] lg:h-[170px]'
              />
              <h3 className='font-bold text-[20px]'>{tab.label}</h3>
            </button>
          ))}
        </div>
        <div className="skills-tab-container overflow-y-auto p-10 sm:p-0 items-center justify-evenly flex flex-col items-center h-[100%] w-[70%] bg-(--background-primary)">
            {renderSkillsContent()}
        </div>
      </div>

    </div >
  );
};