interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold" style={{letterSpacing: '0.3em'}}>☢ ЗОНА</div>
        <nav className="flex gap-8">
          <a
            href="#rules"
            className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Правила
          </a>
          <a
            href="#factions"
            className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Фракции
          </a>
          <a
            href="#join"
            className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Вступить
          </a>
        </nav>
      </div>
    </header>
  );
}