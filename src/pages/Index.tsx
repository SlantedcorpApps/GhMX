import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 overflow-hidden relative bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div 
        className={`relative z-10 max-w-md w-full space-y-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Loading spinner animation */}
        <div className="flex justify-center mb-8">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
            <div className="absolute inset-3 rounded-full border-4 border-transparent border-t-accent animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight animate-fade-in">
            Please wait till closer to the event
          </h1>
          
          {/* Subheading with delay */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)"
            }}
          >
            We are warming up the app to ensure you get the best experience
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 pt-4">
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>

        {/* Bottom glow effect */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-primary/5 to-transparent blur-2xl" />
      </div>
    </div>
  );
};

export default Index;
