import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import logoElement from "@/assets/logo-element.png";

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Logo Element */}
          <div className="mb-8">
            <img 
              src={logoElement} 
              alt="Telangana Rising Logo" 
              className="h-24 w-24 mx-auto mb-4"
            />
          </div>

          {/* Main Heading */}
          <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight">
            TELANGANA RISING
          </h1>
          <div className="hero-text text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight flex items-center justify-center">
            <span>2</span>
            <img 
              src={logoElement} 
              alt="Logo" 
              className="h-16 md:h-24 lg:h-32 mx-4"
            />
            <span>47</span>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 leading-relaxed">
              A Promise Of Sustainable Livelihood And Growth For All
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4 text-lg smooth-transition"
            onClick={() => alert('Read More clicked')}
          >
            Read More <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;