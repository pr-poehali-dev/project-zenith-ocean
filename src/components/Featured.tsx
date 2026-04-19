export default function Featured() {
  const rules = [
    {
      number: "01",
      title: "Уважение и атмосфера",
      text: "Проект построен на принципах честной игры и уважения к другим. Оскорбления, токсичное поведение и намеренное разрушение атмосферы — повод для бана без предупреждения. Ты в Зоне, а не на дискотеке.",
    },
    {
      number: "02",
      title: "Roleplay — прежде всего",
      text: "Мы — RP-сервер. Это значит, что твой персонаж живёт, дышит и имеет историю. Выход из роли без причины (OOC без тега), метагейминг и PowerPlay строго запрещены. Твои действия в игре — это действия твоего персонажа.",
    },
    {
      number: "03",
      title: "Фракции и нейтралы",
      text: "На сервере действуют несколько крупных фракций: Долг, Свобода, Военные сталкеры, Учёные и Одиночки. Каждая фракция имеет свои правила поведения, территории и цели. Присоединение к фракции — через вайтлист и собеседование.",
    },
    {
      number: "04",
      title: "Смерть и пермадес",
      text: "Смерть в Зоне — это серьёзно. При гибели персонаж теряет весь лут. Пермадес (постоянная смерть персонажа) назначается за грубые нарушения правил или по решению судьи в ходе сюжета. Новый персонаж — новая история.",
    },
  ];

  return (
    <div id="rules" className="min-h-screen bg-neutral-950 px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <p className="text-green-400 uppercase text-xs tracking-[0.4em] mb-4">Кодекс выживших</p>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
              ПРАВИЛА<br />ЗОНЫ
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              Зона живёт по своим законам. Здесь нет случайностей — только последствия твоих выборов. Ознакомься с правилами перед тем, как шагнуть за периметр.
            </p>
            <div className="h-px bg-green-400/30 mb-10" />
            <img
              src="https://cdn.poehali.dev/projects/3ac1b08c-8aa2-43ab-a27f-444fbb2a6fe3/files/daa0a475-224a-4228-b23b-ffb84d407067.jpg"
              alt="Сталкер в Зоне"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-10">
            {rules.map((rule) => (
              <div key={rule.number} className="border-l-2 border-green-400/40 pl-6 hover:border-green-400 transition-colors duration-300">
                <span className="text-green-400/60 text-xs uppercase tracking-widest mb-2 block">{rule.number}</span>
                <h3 className="text-white text-xl font-bold mb-3">{rule.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
