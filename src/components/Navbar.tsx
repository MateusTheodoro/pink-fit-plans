import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center glow-effect-sm">
            <span className="text-xl font-black text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-bold">Skill Business</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Início
          </a>
          <a href="#planos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Planos
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
        </div>
        
        <Button variant="default" size="sm">
          Agendar Visita
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
