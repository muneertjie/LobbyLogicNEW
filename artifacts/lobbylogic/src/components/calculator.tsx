import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/ui/fade-in";
import { PoundSterling, Users, Percent, TrendingUp } from "lucide-react";

export function Calculator() {
  const [dailyCustomers, setDailyCustomers] = useState(20);
  const [avgUpsell, setAvgUpsell] = useState<number | "">(200);
  const [conversionRate, setConversionRate] = useState(5);

  // Calculate monthly extra revenue assuming 22 working days
  const safeUpsell = typeof avgUpsell === "number" ? avgUpsell : 0;
  const monthlyRevenue = Math.round(dailyCustomers * (conversionRate / 100) * safeUpsell * 22);
  const yearlyRevenue = monthlyRevenue * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 bg-navy relative overflow-hidden" id="calculator">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-azure/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-azure/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Turn Attention Into Revenue
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Calculate exactly how much revenue your waiting room is currently leaving on the table.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <FadeIn direction="right" className="lg:col-span-7">
            <div className="glass-dark rounded-3xl p-6 md:p-10 space-y-10">
              
              {/* Daily Customers */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium flex items-center gap-2">
                    <Users className="w-5 h-5 text-azure" />
                    Daily Customers
                  </label>
                  <span className="text-2xl font-bold text-white">{dailyCustomers}</span>
                </div>
                <Slider
                  value={[dailyCustomers]}
                  onValueChange={(val) => setDailyCustomers(val[0])}
                  max={100}
                  step={1}
                  className="[&_[role=slider]]:bg-azure [&_[role=slider]]:border-none"
                />
              </div>

              {/* Avg Upsell Value */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium flex items-center gap-2">
                    <PoundSterling className="w-5 h-5 text-azure" />
                    Avg Upsell Value (£)
                  </label>
                </div>
                <Input
                  type="number"
                  value={avgUpsell}
                  onChange={(e) => setAvgUpsell(e.target.value === "" ? "" : Number(e.target.value))}
                  className="bg-white/10 border-white/20 text-white text-xl py-6 rounded-xl focus-visible:ring-azure focus-visible:ring-2"
                  placeholder="e.g. 200"
                />
              </div>

              {/* Conversion Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium flex items-center gap-2">
                    <Percent className="w-5 h-5 text-azure" />
                    Screen Conversion Rate
                  </label>
                  <span className="text-2xl font-bold text-white">{conversionRate}%</span>
                </div>
                <Slider
                  value={[conversionRate]}
                  onValueChange={(val) => setConversionRate(val[0])}
                  max={20}
                  step={0.5}
                  className="[&_[role=slider]]:bg-azure [&_[role=slider]]:border-none"
                />
                <p className="text-sm text-white/50 text-right">Industry average: 3-8%</p>
              </div>

            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn direction="left" className="lg:col-span-5 h-full">
            <div className="bg-azure rounded-3xl p-8 md:p-10 h-full flex flex-col justify-center relative overflow-hidden shadow-navy">
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 text-white/10 pointer-events-none">
                <TrendingUp size={240} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <h3 className="text-white/90 text-lg font-medium mb-2 uppercase tracking-wider">Estimated Impact</h3>
                
                <div className="mt-8 mb-10">
                  <div className="text-white/80 text-sm font-medium mb-1">Monthly Extra Revenue</div>
                  <div className="text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
                    {formatCurrency(monthlyRevenue)}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/20">
                  <div className="text-white/80 text-sm font-medium mb-1">Yearly Extra Revenue</div>
                  <div className="text-3xl font-display font-bold text-white">
                    {formatCurrency(yearlyRevenue)}
                  </div>
                </div>

                <ul className="mt-10 space-y-4">
                  {[
                    "Zero additional customer acquisition cost",
                    "Requires no extra staff time",
                    "Pays for itself in days"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinelinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
