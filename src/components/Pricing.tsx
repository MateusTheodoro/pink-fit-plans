import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "89",
    description: "Ideal para quem está começando",
    features: [
      "Acesso à academia",
      "Avaliação física mensal",
      "App de treinos",
      "Armário individual",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "149",
    description: "O mais escolhido pelos nossos alunos",
    features: [
      "Tudo do plano Básico",
      "Aulas coletivas ilimitadas",
      "2 sessões de personal/mês",
      "Acompanhamento nutricional",
      "Acesso 24 horas",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "249",
    description: "Para quem busca resultados máximos",
    features: [
      "Tudo do plano Pro",
      "Personal trainer dedicado",
      "Plano alimentar personalizado",
      "Suplementação inclusa",
      "Área VIP exclusiva",
      "Estacionamento gratuito",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 relative" id="planos">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Escolha seu <span className="text-gradient">Plano</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Planos flexíveis para todos os objetivos. Sem taxa de matrícula.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "bg-card border-2 border-primary shadow-[0_0_40px_hsl(340_100%_50%/0.2)] scale-105"
                  : "bg-card border border-border hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  Mais Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground">R$</span>
                  <span className="text-5xl font-black text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
              >
                Começar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
