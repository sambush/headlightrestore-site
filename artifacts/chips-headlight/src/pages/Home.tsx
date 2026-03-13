import { useState, useEffect } from "react";
import { 
  Phone, CheckCircle, Star, MapPin, Clock, Shield, 
  Zap, Truck, Car, Menu, X, ArrowRight, ChevronRight,
  Droplets, Layers, Gauge, Sparkles, ShieldCheck, Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Reveal } from "@/components/reveal";
import { Logo } from "@/components/Logo";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const PHONE_NUMBER = "502-905-5192";
  const TEL_LINK = "tel:5029055192";

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      
      {/* 1. STICKY HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-white/10 py-3 shadow-lg" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#home" className="z-50 relative hover:opacity-90 transition-opacity">
            <Logo size="sm" id="header" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {["Services", "Gallery", "Pricing", "About"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors hover:glow"
              >
                {item}
              </a>
            ))}
            <Button asChild className="rounded-full px-6 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
              <a href={TEL_LINK}>
                <Phone className="w-4 h-4 mr-2" />
                {PHONE_NUMBER}
              </a>
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden z-50">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-background/95 backdrop-blur-xl border-white/10 pt-20">
                <nav className="flex flex-col gap-6">
                  {["Home", "Services", "Gallery", "Pricing", "About"].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`}
                      onClick={closeMenu}
                      className="text-2xl font-display font-bold text-white border-b border-white/5 pb-4"
                    >
                      {item}
                    </a>
                  ))}
                  <Button asChild size="lg" className="w-full mt-4 rounded-xl text-lg">
                    <a href={TEL_LINK}>
                      <Phone className="w-5 h-5 mr-2" />
                      Call {PHONE_NUMBER}
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* 2. FLOATING MOBILE CALL BUTTON */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <Button asChild size="icon" className="h-16 w-16 rounded-full shadow-2xl shadow-primary/40 bg-primary hover:bg-primary/90 border-4 border-background">
          <a href={TEL_LINK}>
            <Phone className="h-7 w-7 text-white" fill="currentColor" />
          </a>
        </Button>
      </div>

      {/* 3. HERO SECTION */}
      <section id="home" className="relative flex items-start pt-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 pt-12 pb-12">
          <div className="max-w-3xl">
            <Reveal direction="up" delay={0.1}>
              <Badge className="bg-white/10 text-white hover:bg-white/20 border-white/20 mb-6 backdrop-blur-md px-4 py-1.5 text-sm">
                <MapPin className="w-3.5 h-3.5 mr-2 text-primary" />
                Mobile Service • We Come To You
              </Badge>
            </Reveal>
            
            <Reveal direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6">
                Restore Cloudy Headlights in <span className="text-gradient-primary">Under an Hour</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
                Professional mobile headlight restoration that comes directly to your home or workplace. Dramatically improve your nighttime visibility and vehicle appearance.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="rounded-xl h-14 px-8 text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                  <a href={TEL_LINK}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl h-14 px-8 text-lg font-semibold bg-white/5 border-white/20 hover:bg-white/10 text-white backdrop-blur-sm">
                  <a href="#gallery">
                    See the Difference
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {[
                  "Safer Night Driving",
                  "Save 100s vs Replacement",
                  "Done in 60 Minutes"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. BEFORE/AFTER SECTION */}
      <section id="gallery" className="py-12 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">See the <span className="text-primary">Difference</span></h2>
              <p className="text-white/60 text-lg">Our professional restoration removes severe oxidation and restores crystal-clear visibility.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { before: "images/before.png", after: "images/after.png", beforeAlt: "Headlight before — heavy oxidation and scratching", afterAlt: "Headlight after — crystal clear", delay: 0.1 },
              { before: "images/before2.png", after: "images/after2.png", beforeAlt: "Headlight before — heavy fogging and oxidation", afterAlt: "Headlight after — fully restored clarity", delay: 0.2 },
            ].map(({ before, after, beforeAlt, afterAlt, delay }) => (
              <Reveal key={before} direction="up" delay={delay}>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:border-primary/40 transition-colors duration-500">
                  <div className="flex" style={{ aspectRatio: "4/3" }}>
                    {/* Before Half */}
                    <div className="w-1/2 relative overflow-hidden border-r border-white/20">
                      <img src={`${import.meta.env.BASE_URL}${before}`} alt={beforeAlt} className="absolute inset-0 w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-black/20" />
                      <Badge variant="destructive" className="absolute top-3 left-3 z-10 font-bold tracking-widest text-xs shadow-lg">BEFORE</Badge>
                    </div>
                    {/* After Half */}
                    <div className="w-1/2 relative overflow-hidden">
                      <img src={`${import.meta.env.BASE_URL}${after}`} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-black/10" />
                      <Badge className="absolute top-3 right-3 z-10 bg-primary font-bold tracking-widest text-xs shadow-lg">AFTER</Badge>
                    </div>
                  </div>
                  {/* Center divider */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/70 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center text-background shrink-0">
                      <ChevronRight className="w-3 h-3 -mr-0.5" />
                      <ChevronRight className="w-3 h-3 rotate-180 -ml-0.5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={0.3}>
            <div className="text-center">
              <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white group">
                Call for a Free Assessment 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 bg-card border-y border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary uppercase tracking-widest font-bold">The Process</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Professional Restoration</h2>
              <p className="text-white/60 text-lg">We don't use cheap wipe-on gimmicks. We use a multi-step mechanical process that guarantees lasting results.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 z-0"></div>

            {[
              { title: "Deep Cleaning", desc: "Thorough removal of surface dirt and grime to prep the lens.", icon: Droplets },
              { title: "Surface Sanding", desc: "Removal of the dead, oxidized factory clear coat layer.", icon: Layers },
              { title: "Progressive Refinement", desc: "Multiple stages of wet sanding to smooth the plastic surface.", icon: Gauge },
              { title: "Polishing", desc: "High-speed machine compounding to restore perfect optical clarity.", icon: Sparkles },
              { title: "UV Protection", desc: "Application of a professional-grade ceramic UV sealant.", icon: ShieldCheck },
              { title: "Final Inspection", desc: "Quality check to ensure 100% satisfaction before you pay.", icon: Eye }
            ].map((step, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <Card className="bg-background/50 border-white/5 relative z-10 h-full group hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="relative w-16 h-16 rounded-2xl bg-card border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                      <step.icon className="w-7 h-7 text-white/50 group-hover:text-primary transition-colors" />
                      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-black flex items-center justify-center shadow-md">
                        {i + 1}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/60">{step.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section id="services" className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal direction="up">
            <div className="mb-16 md:flex justify-between items-end">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Mobile Service <span className="text-primary">Options</span></h2>
                <p className="text-white/60 text-lg">We come directly to your home or workplace, saving you time and hassle.</p>
              </div>
              <Button asChild className="hidden md:flex mt-6 md:mt-0 rounded-full">
                <a href={TEL_LINK}>Schedule Service</a>
              </Button>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Car className="w-8 h-8 text-primary" />,
                title: "Personal Vehicles",
                desc: "Complete restoration for cars, trucks, and SUVs at your home or office."
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Fleet Service",
                desc: "Volume discounts and scheduled maintenance for corporate vehicle fleets."
              },
              {
                icon: <Truck className="w-8 h-8 text-primary" />,
                title: "Commercial Trucks",
                desc: "Heavy-duty restoration for semi-trucks, delivery vans, and work vehicles."
              }
            ].map((service, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <Card className="bg-card border-white/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4 bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/60">{service.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRICING SECTION */}
      <section id="pricing" className="py-24 bg-card border-y border-white/5 relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <Reveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Simple, Transparent <span className="text-primary">Pricing</span></h2>
              <p className="text-white/60 text-lg">No hidden fees. Just professional results at a fraction of replacement cost.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Standard Pricing */}
            <Reveal direction="up" delay={0.1}>
              <Card className="bg-background border-white/10 relative">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-white/80">Single Headlight</CardTitle>
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-5xl font-black tracking-tight">$25</span>
                  </div>
                  <CardDescription className="text-white/50 mt-2">Perfect for minor damage or replacements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Mobile Service", "Complete Restoration", "UV Protective Finish"].map((item, i) => (
                      <li key={i} className="flex items-center text-white/70 text-sm">
                        <CheckCircle className="w-4 h-4 mr-3 text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">
                    <a href={TEL_LINK}>Book Now</a>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>

            {/* Popular Pricing */}
            <Reveal direction="up" delay={0.2}>
              <Card className="bg-gradient-to-b from-card to-background border-primary shadow-2xl shadow-primary/20 relative md:-my-4 scale-105 z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground uppercase tracking-widest font-bold px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="pb-4 pt-8">
                  <CardTitle className="text-2xl text-white">Two Headlights</CardTitle>
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-6xl font-black tracking-tight text-primary">$50</span>
                    <span className="text-white/50 ml-2 font-medium">total</span>
                  </div>
                  <CardDescription className="text-white/60 mt-2">Complete front-end clarity restoration</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {["Mobile Service to You", "Complete Mechanical Restoration", "Premium Ceramic UV Sealant", "100% Satisfaction Guarantee"].map((item, i) => (
                      <li key={i} className="flex items-center text-white/90 font-medium">
                        <CheckCircle className="w-5 h-5 mr-3 text-primary fill-primary/20" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild size="lg" className="w-full text-lg h-14 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
                    <a href={TEL_LINK}>Book Appointment</a>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>

            {/* Commercial Pricing */}
            <Reveal direction="up" delay={0.3}>
              <Card className="bg-background border-white/10 relative">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-white/80">Commercial / Fleet</CardTitle>
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-3xl font-black tracking-tight">Custom Quote</span>
                  </div>
                  <CardDescription className="text-white/50 mt-2">For semis, vans, and business fleets</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Volume Discounts", "Scheduled Maintenance", "Heavy Duty Protection"].map((item, i) => (
                      <li key={i} className="flex items-center text-white/70 text-sm">
                        <CheckCircle className="w-4 h-4 mr-3 text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">
                    <a href={TEL_LINK}>Call for Quote</a>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center">Why Drivers Choose <span className="text-primary">Chip's</span></h2>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MapPin />, title: "Convenient", desc: "We come directly to your location." },
              { icon: <Zap />, title: "Fast", desc: "Most jobs completed in under 60 minutes." },
              { icon: <Shield />, title: "Guaranteed", desc: "100% satisfaction or you don't pay." },
              { icon: <CheckCircle />, title: "Affordable", desc: "Save hundreds compared to replacement." }
            ].map((feature, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-card border border-white/5 hover:bg-white/5 transition-colors">
                  <div className="w-14 h-14 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. REVIEWS */}
      <section className="py-24 bg-card border-y border-white/5 relative z-10 overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <Reveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/20 border-amber-500/30 mb-4">
                <Star className="w-3.5 h-3.5 mr-2 fill-amber-500" /> 5-Star Rated Service
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black text-white">What Customers Are Saying</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "My headlights look brand new! Chip was professional and punctual. Came right to my driveway and had both headlights done in 45 minutes. Incredible value!",
                author: "Sarah M.",
                loc: "Louisville, KY"
              },
              {
                text: "I was skeptical at first but the results are amazing. Could not believe the difference. Way cheaper than buying new headlights. Highly recommend!",
                author: "Mike T.",
                loc: "Jeffersonville, IN"
              },
              {
                text: "Chip did a fantastic job on my truck headlights. Very professional service. Will definitely use again and recommend to all my friends.",
                author: "James R.",
                loc: "New Albany, IN"
              }
            ].map((review, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <Card className="bg-background/80 backdrop-blur-sm border-white/10 h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-amber-500 text-amber-500" />)}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-white/80 italic leading-relaxed">"{review.text}"</p>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-white/5">
                    <div>
                      <p className="font-bold text-white">{review.author}</p>
                      <p className="text-sm text-white/50">{review.loc}</p>
                    </div>
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SERVICE AREA & ABOUT */}
      <section id="about" className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <Reveal direction="left">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">About <span className="text-primary">Chip's</span></h2>
                <div className="space-y-4 text-lg text-white/70 mb-8">
                  <p>
                    At Chip's Mobile Headlight Restoration, we specialize in one thing: making your vehicle safer to drive at night while dramatically improving its appearance.
                  </p>
                  <p>
                    Cloudy, yellowed headlights restrict up to 80% of your light output. Instead of spending hundreds on replacement housings, our professional mechanical restoration process permanently removes oxidation and seals the lens for lasting clarity.
                  </p>
                </div>

                <div className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-white/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-red-900 flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <span className="font-display font-bold text-3xl text-white">CB</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Chip Bush</h4>
                    <p className="text-white/60">Owner & Lead Technician</p>
                    <div className="flex gap-4 mt-3">
                      <Badge variant="secondary" className="bg-white/5 text-white/80 hover:bg-white/10">500+ Restored</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-white/80 hover:bg-white/10">Local Business</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <Card className="bg-card border-white/10 overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-white/5">
                  <CardTitle className="flex items-center text-2xl text-white">
                    <MapPin className="w-6 h-6 mr-3 text-primary" />
                    Mobile Service Near You
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-white/70 mb-8 text-lg">
                    We bring the shop to your driveway. Serving drivers throughout the local metro area with fully equipped mobile units.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Louisville, KY", "Southern Indiana", "Jeffersonville, IN", "New Albany, IN", "Clarksville, IN", "Surrounding Area"].map(area => (
                      <Badge key={area} variant="outline" className="px-4 py-2 text-sm border-white/20 text-white/90 bg-background/50">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-black/20 p-6">
                  <Button asChild className="w-full text-lg h-12">
                    <a href={TEL_LINK}>Call to Check Availability</a>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 11. FINAL CTA BANNER */}
      <section className="relative py-32 overflow-hidden border-t border-primary/20">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/cta-bg.png`} 
            alt="Abstract Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Drive Safer Tonight</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-light">
              Don't compromise your safety. Restore your headlights today and dramatically improve nighttime visibility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-xl h-16 px-10 text-xl font-bold shadow-2xl shadow-primary/30 hover:-translate-y-1 transition-all">
                <a href={TEL_LINK}>
                  <Phone className="w-6 h-6 mr-3" />
                  Call {PHONE_NUMBER}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-card pt-20 pb-10 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-2">
              <a href="#home" className="inline-flex mb-6 hover:opacity-90 transition-opacity">
                <Logo size="md" id="footer" />
              </a>
              <p className="text-white/60 max-w-md leading-relaxed mb-6">
                Professional, mobile headlight restoration bringing safety and clarity right to your driveway. We restore what others tell you to replace.
              </p>
              <div className="flex items-center gap-4 text-white/80">
                <Clock className="w-5 h-5 text-primary" />
                <span>Most jobs completed in 60 minutes</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {["Home", "Services", "Pricing", "Gallery", "About"].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-white mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href={TEL_LINK} className="flex items-center text-white/80 hover:text-primary transition-colors group text-lg font-medium">
                    <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                    {PHONE_NUMBER}
                  </a>
                </li>
                <li className="flex items-start text-white/60 mt-4">
                  <MapPin className="w-5 h-5 mr-3 mt-1 shrink-0 text-primary" />
                  <span>Mobile Service across Louisville Metro & Southern Indiana</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Chip's Mobile Headlight Restoration. All rights reserved.
            </p>
            <p className="text-white/30 text-xs">
              Designed for performance and local visibility.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
