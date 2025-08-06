import { CarBackground } from "@/components/CarBackground";
import { FadeIn } from "@/components/FadeIn";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-around w-[100vw] relative h-screen overflow-hidden">
      <CarBackground />
      <div className="radial-gradient flex flex-col items-center justify-around w-[100vw]">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-[290px] xs:max-w-[95vw] mb-4 text-[25px] xs:text-[32px] md:text-[36px] lg:text-[44px]">
            <FadeIn delay={0.2}>
              <h1>Ajuste os cintos e prepare-se para</h1>
            </FadeIn>
            <FadeIn delay={0.5}>
              <h1>
                conhecer minha{" "}
                <span className="text-orange-400">trajetória</span>
              </h1>
            </FadeIn>
          </div>
          <FadeIn className="flex items-center justify-center" delay={0.8}>
            <div className="flex flex-col gap-4 items-center justify-between text-justify max-w-[600px] xl:max-w-[900px] w-[90%] text-[13px] sm:text-[16px]">
              <p>
                Sou Felipe, tenho 24 anos e sou Desenvolvedor Full Stack com
                mais de 3 anos de experiência na estrada do desenvolvimento.
                Assim como um carro bem ajustado, busco entregar performance,
                estilo e precisão em cada projeto que desenvolvo.
              </p>
              <p>
                Minha paixão por tecnologia anda lado a lado com meu entusiasmo
                por carros. Aqui, cada linha de código carrega um pouco de quem
                eu sou, criativo e sempre pronto para acelerar rumo a
                novos desafios.
              </p>
              <p className="w-full">
                Este portfólio é a minha garagem digital. Sinta-se à vontade
                para explorar.
              </p>
            </div>
          </FadeIn>
        </div>
        <ScrollIndicator />
      </div>
    </section>
  );
}
