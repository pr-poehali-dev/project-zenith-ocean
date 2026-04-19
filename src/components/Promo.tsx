import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/3ac1b08c-8aa2-43ab-a27f-444fbb2a6fe3/files/c6819170-6509-4727-9d23-d679cdcb7986.jpg"
            alt="Аномалия Зоны"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 left-6 text-green-400 uppercase z-10 text-sm md:text-base lg:text-lg tracking-[0.3em]">
        ☢ Аномальная активность
      </h3>

      <p className="absolute bottom-12 left-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl z-10 leading-tight font-bold">
        Зона меняется каждый день. Аномалии смещаются, артефакты появляются, фракции воюют за контроль над периметром.
      </p>
    </div>
  );
}