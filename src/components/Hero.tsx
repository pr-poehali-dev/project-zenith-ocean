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
          src="https://cdn.poehali.dev/projects/3ac1b08c-8aa2-43ab-a27f-444fbb2a6fe3/files/0e923deb-515f-4e69-85d4-8b417f35a1a1.jpg"
          alt="Зона отчуждения"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-9xl tracking-tight leading-none" style={{fontFamily: '"Russo One", sans-serif'}}>
          FRONTIER<br />STALKER RP
        </h1>
      </div>
    </div>
  );
}