import logoElement from "/telangana-rising-logo.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative flex items-end justify-start bg-black overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {" "}
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/slide1.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          minWidth: "100%",
          minHeight: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pb-8 text-left text-primary-foreground flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-0">
        {/* Logo + Title + Button Wrapper */}
        <div className="flex flex-col md:flex-row md:items-center">
          <img
            src={logoElement}
            alt="Telangana Rising Logo"
            className="h-10 w-10 mr-3 mb-3 md:mb-0"
          />
          <h1 className="hero-text text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 md:mb-0 md:mr-4">
            TELANGANA RISING 2047
          </h1>
          <button
            className="bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400 text-primary font-bold px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:from-green-600 hover:to-lime-500 transition-all duration-300 ease-in-out animate-bounce-slow text-base md:text-lg border-2 border-white/70"
            style={{ boxShadow: "0 4px 24px 0 rgba(34,197,94,0.25)" }}
            onClick={() => navigate("/survey")}
          >
            Take Survey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

/* Add custom animation to global CSS if not present */
/*
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}
*/
