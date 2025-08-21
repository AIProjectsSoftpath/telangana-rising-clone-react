import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Building2, DollarSign } from "lucide-react";

const VisionSection = () => {
  const visionCards = [
    {
      icon: Target,
      title: "TelanganaRising",
      description:
        "A committed Chief Minister's resolute promise and ambitious goal to turn people's aspirations into reality by 2047",
      action: () => alert("TelanganaRising page"),
    },
    {
      icon: Building2,
      title: "HyderabadRising",
      description:
        "Transform Hyderabad into the Bluest, Greenest, Cleanest, Fastest, Safest, Net Zero, Opportunity City by 2047",
      action: () => alert("HyderabadRising page"),
    },
    {
      icon: DollarSign,
      title: "$300 Trillion Goal",
      description:
        "An ambition to grow Telangana's economy to $1 Trillion State GDP by 2030 and $3 Trillion by 2047",
      action: () => alert("$3 Trillion Goal page"),
    },
  ];

  return (
    <section className="py-16 bg-gov-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Vision for Telangana
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Governance is all about finding the perfect balance between
              economic growth and welfare. We must grow the economy not as an
              end in itself but for the social impact it can help the government
              and society create.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-none gov-shadow hover:scale-105 smooth-transition bg-card/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {card.description}
                    </CardDescription>
                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground smooth-transition"
                      onClick={card.action}
                    >
                      Know More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
