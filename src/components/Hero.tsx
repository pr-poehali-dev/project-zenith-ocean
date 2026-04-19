import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/3ac1b08c-8aa2-43ab-a27f-444fbb2a6fe3/files/3cec110f-8f6f-4548-9b48-ca6eff9a97f9.jpg"
          alt="Зона отчуждения"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-4 text-green-400 font-medium">
          DayZ · Roleplay · СТАЛКЕР Universe
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ДОБРО ПОЖАЛОВАТЬ<br />В ЗОНУ
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed">
          Иммерсивный RP-сервер в мире СТАЛКЕР. Выживай, торгуй, воюй за фракции — каждое решение имеет последствия.
        </p>
        <a
          href="#rules"
          className="inline-block mt-8 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 px-8 py-3 uppercase text-sm tracking-widest"
        >
          Читать правила
        </a>
      </div>
    </div>
  );
}