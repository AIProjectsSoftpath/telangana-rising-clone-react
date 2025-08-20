import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      category: "HyderabadRising",
      title: "Hyderabad's real estate boom: CM Revanth Reddy unveils vision to transform city into global hub",
      date: "19-08-2025",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop&q=80",
      action: () => alert('Real estate boom article')
    },
    {
      category: "HyderabadRising", 
      title: "Momentum meets vision: Revanth Reddy's masterplan for Hyderabad",
      date: "19-08-2025",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=250&fit=crop&q=80",
      action: () => alert('Masterplan article')
    },
    {
      category: "TelanganaRising",
      title: "CM's growth vision: Hyderabad at the core, Telangana at the heart of progress",
      date: "19-08-2025", 
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&q=80",
      action: () => alert('Growth vision article')
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Stay connected: Blog posts, key updates & more
            </h2>
            <p className="text-xl text-muted-foreground">
              Latest news and updates from Telangana Rising 2047
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden border-none gov-shadow hover:scale-105 smooth-transition group cursor-pointer" onClick={post.action}>
                <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg leading-tight group-hover:text-accent smooth-transition">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground smooth-transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      post.action();
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;