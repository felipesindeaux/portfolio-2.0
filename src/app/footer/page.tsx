import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-(--background-primary) flex justify-center items-center h-[200px]">
      <div className="flex flex-col items-center justify-evenly h-full w-full sm:flex-row md:max-w-[1000px]">
        <div className="flex items-center gap-6">
          <Image
            src={'https://avatars.githubusercontent.com/u/89540255?v=4'}
            alt="Profile Photo"
            height={60}
            width={60}
            className="rounded-full"
          />
          <div className="flex flex-col items-center justify-between h-[67px]">
            <p className="text-white text-[24px] font-bold">Obrigado</p>
            <p className="text-(--text-secondary) text-[16px]">
              Links importantes
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/felipesindeaux/"
            target="_blank"
            rel="noreferrer"
            className="group w-12 h-12 bg-[#0E76A8] rounded-full flex items-center justify-center hover:bg-transparent border-2 border-transparent hover:border-[#0E76A8] transition-all duration-300"
          >
            <FaLinkedinIn className="text-white w-5 h-5 group-hover:text-[#0E76A8] transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/felipesindeaux"
            target="_blank"
            rel="noreferrer"
            className="group w-12 h-12 bg-[white] rounded-full flex items-center justify-center hover:bg-transparent border-2 border-transparent hover:border-white transition-all duration-300"
          >
            <FaGithub className="text-black w-5 h-5 group-hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="https://drive.google.com/file/d/1I9-hEOvJg9W82ivoGRpgyEqxFBIcNqNW/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-400 text-(--background-primary) font-semi-bold rounded-full px-5 py-3 text-[16px] border-2 border-transparent hover:bg-transparent hover:border-orange-400 hover:text-white transition-all duration-300"
          >
            Currículo
          </a>
        </div>
      </div>
    </footer>
  );
}
