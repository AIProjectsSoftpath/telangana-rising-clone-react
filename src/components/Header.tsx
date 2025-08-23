import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import logoElement from "/telangana-rising-logo.png";
import govtLogo from "/telangana-govt-logo.png"; // Adjust the path as necessary

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // ✅ Check if current page is Survey Page
  const isSurveyPage = location.pathname === "/survey";
  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 border-none shadow-none transition-colors duration-300 ${
        isSurveyPage || isDashboardPage ? "bg-primary" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src={govtLogo}
              alt="Telangana Rising Logo"
              className="h-20 w-auto object-contain" // 👈 bigger, keeps aspect ratio
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() =>
                (window.location.href =
                  "https://softpathtechnologies.com/rising/")
              }
            >
              Home
            </Button>

            {/* <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() =>
                (window.location.href =
                  "https://aiprojectssoftpath.github.io/telangana-rising-clone-react/dashboard")
              }
            >
              Dashboard
            </Button> */}

            {/* <div className="relative">
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 flex items-center"
                onClick={() => toggleDropdown("rising")}
              >
                The Rising <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              {activeDropdown === "rising" && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-card shadow-lg rounded-md py-2 z-10">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => alert("TelanganaRising page")}
                  >
                    TelanganaRising
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => alert("HyderabadRising page")}
                  >
                    HyderabadRising
                  </Button>
                </div>
              )}
            </div>

            <div className="relative">
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 flex items-center"
                onClick={() => toggleDropdown("economy")}
              >
                Building Economy <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              {activeDropdown === "economy" && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-card shadow-lg rounded-md py-2 z-10">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => alert("$3 Trillion Goal page")}
                  >
                    $3 Trillion Goal
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => alert("Investment page")}
                  >
                    Investment
                  </Button>
                </div>
              )}
            </div>

            <div className="relative">
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 flex items-center"
                onClick={() => toggleDropdown("lives")}
              >
                Changing People's Lives <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              {activeDropdown === "lives" && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-card shadow-lg rounded-md py-2 z-10">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => alert("Healthcare page")}
                  >
                    Healthcare
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => alert("Education page")}
                  >
                    Education
                  </Button>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => alert("Stories page")}
            >
              Stories
            </Button> */}
          </nav>

          {/* Language Toggle & Profile */}
          <div className="hidden lg:flex items-center space-x-4 lg:visible">
            {/* <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                EN
              </Button>
              <span className="text-primary-foreground">|</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                TE
              </Button>
            </div> */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center bg-white rounded-full h-20 w-20 shadow">
                <img
                  src={logoElement}
                  alt="Telangana Govt Logo"
                  className="h-14 w-14 object-contain"
                />
              </div>
            </div>
          </div>
          {/* Mobile Telangana Logo */}
          <div className="flex lg:hidden items-center space-x-4">
            <img
              src={logoElement}
              alt="Telangana Govt Logo"
              className="h-10 max-h-10 w-auto object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-dark/20">
            <nav className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                onClick={() => (window.location.href = "/")}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                onClick={() => alert("The Rising page")}
              >
                The Rising
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                onClick={() => alert("Building Economy page")}
              >
                Building Economy
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                onClick={() => alert("Changing People's Lives page")}
              >
                Changing People's Lives
              </Button>
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
                onClick={() => alert("Stories page")}
              >
                Stories
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
