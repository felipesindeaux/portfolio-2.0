import { CarBackground } from "@/components/CarBackground";
import { FadeIn } from "@/components/FadeIn";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="flex flex-col items-center justify-around w-[100vw] relative h-screen overflow-hidden">
      <CarBackground />
      <div className="radial-gradient flex flex-col items-center justify-around w-[100vw]">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-[290px] xs:max-w-[95vw] mb-4 text-[25px] xs:text-[32px] md:text-[36px] lg:text-[44px]">
            <FadeIn delay={0.2}>
              <h1>{t("headingLine1")}</h1>
            </FadeIn>
            <FadeIn delay={0.5}>
              <h1>
                {t.rich("headingLine2", {
                  highlight: (chunks) => (
                    <span className="text-orange-400">{chunks}</span>
                  ),
                })}
              </h1>
            </FadeIn>
          </div>
          <FadeIn className="flex items-center justify-center" delay={0.8}>
            <div className="flex flex-col gap-4 items-center justify-between text-justify max-w-[600px] xl:max-w-[900px] w-[90%] text-[13px] sm:text-[16px]">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p className="w-full">{t("paragraph3")}</p>
            </div>
          </FadeIn>
        </div>
        <ScrollIndicator />
      </div>
    </section>
  );
}
