import { CarBackground } from '@/components/CarBackground';
import { FadeIn } from '@/components/FadeIn'
import ScrollIndicator from '@/components/ScrollIndicator';

export default function About() {

  return (
    <div className="section-container relative h-screen overflow-hidden">
      <CarBackground />
      <div className="radial-gradient section-container">
        <div className="about-container flex flex-col items-center">
          <FadeIn delay={0.2}>
            <h1 className="about-title">Ajuste os cintos e prepare-se para</h1>
          </FadeIn>

          <FadeIn delay={0.5}>
            <h1 className="about-title mb-4">conhecer minha <span className="text-orange-400">trajetória.</span></h1>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className="about-text-container flex flex-col items-center justify-between text-justify">
              <p className="about-text">
                Sou Felipe, tenho 24 anos e sou Desenvolvedor Full Stack com mais de 3 anos de experiência na estrada do desenvolvimento. Assim como um carro bem ajustado, busco entregar performance, estilo e precisão em cada projeto que desenvolvo.
              </p>
              <p className="about-text">
                Minha paixão por tecnologia anda lado a lado com meu entusiasmo por carros. Aqui, cada linha de código carrega um pouco de quem eu sou — direto, criativo e sempre pronto para acelerar rumo a novos desafios.
              </p>
              <p className="w-full about-text">
                Este portfólio é a minha garagem digital. Sinta-se à vontade para explorar.
              </p>
            </div>
          </FadeIn>
        </div>
        <ScrollIndicator />
      </div>
    </div >
  );
};