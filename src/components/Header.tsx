interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold" style={{letterSpacing: '0.3em', color: '#f5a329'}}>☢ ЗОНА</div>
        <nav className="flex gap-8">
          <a
            href="#rules"
            className="text-white transition-colors duration-300 uppercase text-sm tracking-wide hover:opacity-80"
            style={{color: 'white'}}
            onMouseEnter={e => (e.currentTarget.style.color = '#f5a329')}
            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
          >
            Правила
          </a>
          <a
            href="#factions"
            className="text-white transition-colors duration-300 uppercase text-sm tracking-wide"
            onMouseEnter={e => (e.currentTarget.style.color = '#f5a329')}
            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
          >
            Фракции
          </a>
          <a
            href="#join"
            className="text-white transition-colors duration-300 uppercase text-sm tracking-wide"
            onMouseEnter={e => (e.currentTarget.style.color = '#f5a329')}
            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
          >
            Вступить
          </a>
        </nav>
      </div>
    </header>
  );
}