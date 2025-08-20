import cmPhoto from "@/assets/cm-photo.jpg";

const CMSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* CM Photo */}
            <div className="text-center lg:text-left">
              <div className="inline-block relative">
                <img 
                  src={cmPhoto}
                  alt="Hon'ble CM of Telangana"
                  className="w-80 h-96 object-cover rounded-lg gov-shadow"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Shri A. Revanth Reddy
                </h3>
                <p className="text-muted-foreground">
                  Hon'ble CM of Telangana
                </p>
              </div>
            </div>

            {/* CM Message */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg italic text-muted-foreground">
                  "The difficult we must do immediately. The impossible may take a little longer."
                </p>
                
                <div className="text-primary font-semibold text-lg leading-relaxed">
                  <p className="mb-4">
                    EVERYBODY IN TELANGANA WILL HAVE ACCESS TO FREE EDUCATION AND HEALTHCARE, 
                    AND A PROMISE OF SUSTAINABLE LIVELIHOOD. NOBODY WILL BE LEFT BEHIND.
                  </p>
                  
                  <p className="mb-2">ONLY WHEN PEOPLE RISE,</p>
                  <p className="text-2xl font-bold">WILL TELANGANA TRULY RISE.</p>
                </div>
              </div>

              <div className="space-y-4 text-foreground leading-relaxed">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  No one will be left behind
                </h2>
                
                <p className="text-xl font-medium text-accent">
                  Shri A. Revanth Reddy promises progress with respect
                </p>
                
                <p>
                  Everybody in Telangana will have access to free education and healthcare, 
                  and a promise of sustainable livelihood. Nobody will be left behind.
                </p>
                
                <p>
                  Only when people rise, will Telangana truly rise.
                </p>
                
                <p>
                  Dreaming big is just the beginning; what matters is achieving those dreams 
                  within a foreseeable future, like the next decade.
                </p>
                
                <p>
                  It is possible to realise, with the support of all Telangana people, 
                  to achieve a world-class city of Hyderabad which will be the bluest, 
                  cleanest, safest, greenest and filled with opportunities for everybody.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CMSection;