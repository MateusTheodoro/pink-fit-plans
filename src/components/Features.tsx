import { Dumbbell, Users, Trophy, Clock } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Equipamentos Premium",
    description: "Aparelhos de última geração para maximizar seus resultados.",
  },
  {
    icon: Users,
    title: "Personal Trainers",
    description: "Profissionais certificados para guiar sua jornada fitness.",
  },
  {
    icon: Trophy,
    title: "Resultados Garantidos",
    description: "Metodologia comprovada com acompanhamento constante.",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Aberto 24h para se adaptar à sua rotina.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Por que escolher a <span className="text-gradient">Skill Business</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma experiência completa para você alcançar seus objetivos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(340_100%_50%/0.15)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
