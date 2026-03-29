import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Calculator } from "@/components/calculator";
import { useToast } from "@/hooks/use-toast";
import { 
  Banknote, TimerOff, EyeOff, LightbulbOff, 
  Target, ShieldCheck, Zap, TrendingUp,
  Brain, Repeat, MonitorPlay, GraduationCap,
  MonitorSmartphone, Sliders, PlayCircle, BarChart3,
  CheckCircle2, Star
} from "lucide-react";

export function Landing() {
  const { toast } = useToast();

  const handleBookDemo = () => {
    toast({
      title: "Opening scheduling calendar...",
      description: "In a production environment, this would open Calendly or your booking tool.",
    });
  };

  return (
    <div className="w-full bg-background overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-azure/30 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center">
            
            <FadeIn direction="up" className="max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-azure animate-pulse"></span>
                The #1 Waiting Room Revenue System
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                Turn Your Waiting Room Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure to-lightblue font-bold" style={{fontWeight: 700}}>Revenue Engine</span>
              </h1>
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg mx-auto">
                You're already paying for customers to sit in your space. Start monetising their attention before the consultation even begins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleBookDemo}
                  size="lg" 
                  className="rounded-xl px-8 py-6 text-lg font-semibold bg-azure hover:bg-azure-hover text-white shadow-azure"
                >
                  Book a Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-xl px-8 py-6 text-lg font-semibold border-white/20 text-white hover:bg-white/10"
                  onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See How It Works
                </Button>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section id="problem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                Your Waiting Room Is <em>Wasting</em> Money
              </h2>
              <p className="text-lg text-muted-foreground">
                While you treat patients or clients, your reception area is leaking potential revenue every single day.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Banknote, title: "Acquisition Cost", desc: "You spend massive amounts of money to acquire customers and get them through the door." },
              { icon: TimerOff, title: "Idle Waiting", desc: "They sit idle on their phones or staring at walls while waiting for their appointment." },
              { icon: EyeOff, title: "Uninformed", desc: "They remain completely uninformed about your high-margin, premium services." },
              { icon: LightbulbOff, title: "Zero Influence", desc: "No system exists to plant seeds and influence their buying decisions before consulting." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-platinum/40 rounded-3xl p-8 h-full border border-border hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPPORTUNITY SECTION */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                A Captive Audience You're Not Using
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                The waiting room is the most under-utilised asset in your business. It's time to transform idle time into active education and desire.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Attentive Audience", desc: "Customers are already present, seated, and looking for distraction." },
                { icon: ShieldCheck, title: "High Trust", desc: "They are in your physical environment, where trust is already established." },
                { icon: Zap, title: "Perfect Timing", desc: "The exact moment to influence decisions right before you speak with them." },
                { icon: TrendingUp, title: "Missed Revenue", desc: "Every un-monetised day equals permanent lost revenue for your practice." }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up">
                  <div className="glass-dark rounded-2xl p-6">
                    <item.icon className="w-8 h-8 text-azure mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PSYCHOLOGY SECTION */}
      <section className="py-24 bg-alice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-azure/10 text-azure text-sm font-bold mb-4 uppercase tracking-wider">
                <Brain className="w-4 h-4" />
                The Science
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                Why This Works So Well
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "Increased Suggestibility", desc: "Psychological studies show people in waiting states are more open to external suggestions." },
              { icon: Repeat, title: "Mere Exposure Effect", desc: "Repetition builds familiarity and trust automatically." },
              { icon: MonitorPlay, title: "Visual Understanding", desc: "Visual content improves comprehension of complex or expensive procedures dramatically." },
              { icon: GraduationCap, title: "Pre-Educated", desc: "Educated customers ask better questions and say 'yes' significantly more often." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-6 text-azure">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOLUTION SECTION */}
      <section id="solution" className="py-24 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right" className="order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-azure/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}assets/waiting-room-1.png`} 
                  alt="LobbyLogic in waiting room" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative float element */}
              <div className="absolute -bottom-8 -right-8 glass-dark p-6 rounded-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-azure flex items-center justify-center text-white font-bold text-xl">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Average Upsell Increase</p>
                    <p className="text-2xl font-bold text-white">+34%</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Meet LobbyLogic.
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  "Commercial-grade screens + smart content system",
                  "Control exactly what your customers see from anywhere",
                  "Strategic content loops proven to influence decisions",
                  "Purpose-built to increase revenue per customer"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 mt-1 rounded-full bg-azure/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-azure" />
                    </div>
                    <p className="text-lg text-white/80">{point}</p>
                  </div>
                ))}
              </div>
              <Button 
                onClick={handleBookDemo}
                size="lg" 
                className="rounded-xl px-8 py-6 text-lg font-semibold bg-white text-navy hover:bg-white/90"
              >
                See How It Works
              </Button>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                Plug In. Play. Profit.
              </h2>
              <p className="text-lg text-muted-foreground">
                We've removed all the friction. Setting up a revenue-generating content network in your clinic takes minutes.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-platinum z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { 
                  step: "01", 
                  title: "We Install", 
                  desc: "Premium, sleek screens placed strategically in your waiting areas for maximum visibility.",
                  icon: MonitorSmartphone
                },
                { 
                  step: "02", 
                  title: "You Control", 
                  desc: "Upload your own assets or choose from our library of high-converting content. Geared towards your specific aim — premium services, meet the team, our story. It's all in your control.",
                  icon: Sliders
                },
                { 
                  step: "03", 
                  title: "You Profit", 
                  desc: "Customers arrive in the consultation chair already informed and desiring your premium services.",
                  icon: PlayCircle
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.2} className="text-center">
                  <div className="w-24 h-24 mx-auto bg-navy rounded-3xl flex items-center justify-center text-white mb-8 relative shadow-xl shadow-navy/20">
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-azure text-white text-sm font-bold rounded-full flex items-center justify-center border-4 border-white">
                      {item.step}
                    </span>
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed px-4">{item.desc}</p>
                </FadeIn>
              ))}
            </div>

            {/* Experiment callout */}
            <FadeIn delay={0.4}>
              <div className="mt-16 bg-navy rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-azure/20 flex items-center justify-center">
                  <Sliders className="w-8 h-8 text-azure" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Experiment with just the click of a button</h4>
                  <p className="text-white/70 leading-relaxed">Control which procedures or products you'd like to market and change your content loop on demand — no tech skills required, no waiting around.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES */}
      <section id="industries" className="py-24 bg-platinum/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                Built for Every Service Business
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { emoji: "🦷", title: "Dentists", items: ["Whitening", "Aligners", "Implants"] },
              { emoji: "🩺", title: "Medical", items: ["Procedures", "Screenings", "Checkups"] },
              { emoji: "✂️", title: "Salons", items: ["Treatments", "Packages", "Products"] },
              { emoji: "💆‍♀️", title: "Spas", items: ["Premium Services", "Memberships"] },
              { emoji: "🏥", title: "Clinics", items: ["Add-ons", "Upgrades", "Aesthetics"] },
            ].map((ind, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="text-4xl mb-4">{ind.emoji}</div>
                  <h3 className="text-xl font-bold text-navy mb-4">{ind.title}</h3>
                  <ul className="space-y-2">
                    {ind.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-azure"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALCULATOR SECTION */}
      <Calculator />

      {/* 9. WHY LOBBYLOGIC */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8">
                Not Just Screens. <br/>A Revenue System.
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Psychology-driven content", desc: "Our templates are designed using consumer psychology to drive action." },
                  { title: "Built for service businesses", desc: "Not generic digital signage. Built specifically for waiting room environments." },
                  { title: "Simple to use", desc: "Update a screen across the country from your phone in 30 seconds." },
                  { title: "Scalable across locations", desc: "Manage 1 clinic or 1,000 from a single, unified dashboard." },
                  { title: "Future: ROI tracking", desc: "Coming soon: integrated analytics to track exactly how screens impact revenue." }
                ].map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-azure text-white flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy">{point.title}</h4>
                      <p className="text-muted-foreground">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/waiting-room-2.png`} 
                  alt="Clinic waiting room with LobbyLogic" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating overlay card */}
              <div className="absolute -left-6 top-1/4 bg-white p-4 rounded-xl shadow-lg border border-border hidden md:flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
                <BarChart3 className="w-8 h-8 text-azure" />
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Campaign Active</div>
                  <div className="text-sm font-semibold text-navy">Premium Whitening Loop</div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 10. SOCIAL PROOF */}
      <section className="py-24 bg-lightblue relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC41KSIvPjwvc3ZnPg==')] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                Imagine Every Customer Walking In Already Sold
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                quote: "Within a month of installing LobbyLogic, our inquiries for Invisalign jumped 40%. Patients were literally pointing at the screen when they walked into the room.",
                name: "Dr. Sarah M.",
                role: "Orthodontist"
              },
              { 
                quote: "It pays for itself in the first few days of the month. The rest is pure profit. It's the easiest marketing decision we've ever made.",
                name: "Emma T.",
                role: "MedSpa Owner"
              },
              { 
                quote: "We used to have daytime TV on. Switching to LobbyLogic meant we finally took control of our own narrative. Premium aesthetic treatments are up significantly.",
                name: "James K.",
                role: "Aesthetic Clinic Director"
              }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col shadow-sm">
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="fill-current w-5 h-5" />)}
                  </div>
                  <p className="text-navy text-lg font-medium italic mb-8 grow">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">
                      {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1][0]}
                    </div>
                    <div>
                      <div className="font-bold text-navy">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PRICING */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                Simple Monthly Investment.<br/>Ongoing Returns.
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                No complex tiers. Choose the plan that fits your business scale.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Starter Plan */}
            <FadeIn direction="right">
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col h-full">
                <h3 className="text-2xl font-bold text-navy mb-2">Starter</h3>
                <p className="text-muted-foreground mb-6">Perfect for single-location clinics.</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-navy">R1,499</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-xs text-muted-foreground mb-6">Excl. set-up fees · 24-month contract</p>
                <ul className="space-y-4 mb-8 grow">
                  {["Hardware + Software included", "Standard Content Library", "Basic Analytics", "Email Support", "1 Location"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-navy">
                      <CheckCircle2 className="w-5 h-5 text-azure" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleBookDemo}
                  variant="outline" 
                  className="w-full py-6 text-lg rounded-xl border-border text-navy hover:bg-platinum/50"
                >
                  Book Demo
                </Button>
              </div>
            </FadeIn>

            {/* Growth Plan */}
            <FadeIn direction="left">
              <div className="bg-navy rounded-3xl p-8 border border-navy shadow-xl flex flex-col h-full relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-azure text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
                <p className="text-white/70 mb-6">For multi-location or high-volume practices.</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-white">R2,299</span>
                  <span className="text-white/70">/mo</span>
                </div>
                <p className="text-xs text-white/50 mb-6">Excl. set-up fees · 24-month contract</p>
                <ul className="space-y-4 mb-8 grow">
                  {["Everything in Starter", "Premium Content Packs", "Advanced Analytics & ROI tracking", "Priority 24/7 Support", "Multi-location management"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-azure" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleBookDemo}
                  className="w-full py-6 text-lg rounded-xl bg-azure hover:bg-azure-hover text-white shadow-azure"
                >
                  Book Demo
                </Button>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-azure/20 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8">
              Stop Letting Customers Sit Idle.
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Start converting them before the consultation even begins. Book a demo today to see how much revenue you're leaving in the waiting room.
            </p>
            <Button 
              onClick={handleBookDemo}
              size="lg" 
              className="rounded-full px-12 py-8 text-xl font-bold bg-azure hover:bg-azure-hover text-white shadow-[0_0_40px_rgba(58,123,213,0.4)] hover:shadow-[0_0_60px_rgba(58,123,213,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Your Free Demo
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
