import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[96px]" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Transforme seu corpo</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Eleve seu
            <span className="text-gradient block">Potencial Fitness</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A Skill Business oferece treinos personalizados, acompanhamento profissional e a estrutura que você precisa para alcançar resultados extraordinários.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg">
              Comece Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Conhecer Planos
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl md:text-4xl font-black text-gradient">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Alunos Ativos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-gradient">15+</p>
              <p className="text-sm text-muted-foreground mt-1">Modalidades</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-gradient">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
