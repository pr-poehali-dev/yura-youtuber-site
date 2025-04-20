import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Youtube } from "lucide-react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ href, children, active = false }: NavLinkProps) => (
  <a href={href} className={`nav-link ${active ? "active" : ""}`}>
    {children}
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-youtuber-dark/90 backdrop-blur-sm border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Youtube className="h-6 w-6 text-youtuber-red" />
            <span className="font-bold text-white text-xl">SLYEED</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-1">
              <NavLink href="#home" active>Главная</NavLink>
              <NavLink href="#about">О канале</NavLink>
              <NavLink href="#videos">Видео</NavLink>
              <NavLink href="#subscribe">Подписаться</NavLink>
            </nav>
            
            <Button className="bg-youtuber-red hover:bg-youtuber-red/90 text-white">
              Смотреть на YouTube
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-youtuber-dark/95 border-b border-white/10 backdrop-blur-sm">
          <div className="container py-4">
            <nav className="flex flex-col gap-2">
              <NavLink href="#home" active>Главная</NavLink>
              <NavLink href="#about">О канале</NavLink>
              <NavLink href="#videos">Видео</NavLink>
              <NavLink href="#subscribe">Подписаться</NavLink>
            </nav>
            
            <div className="mt-4">
              <Button className="w-full bg-youtuber-red hover:bg-youtuber-red/90 text-white">
                Смотреть на YouTube
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
