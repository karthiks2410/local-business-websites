import { Metadata } from "next";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/Button";
import { pricingPlans, siteConfig } from "@/lib/config";
import { Check, Gift, Users, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Membership Plans",
  description: "Affordable gym membership plans - Weight Training, Fitness, Personal Training, Student & Couple packages.",
};

export default function PlansPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 border border-[#C9A962]/30 rounded-full mb-6">
              <Gift className="w-4 h-4 text-[#C9A962]" />
              <span className="text-[#C9A962] font-medium text-sm">
                Grand Opening Offers - Limited Time!
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Membership Plans
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Choose the plan that fits your fitness goals and budget
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Regular Memberships</h2>
            <p className="text-gray-400">Monthly pricing shown. Save more with longer commitments!</p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <PricingCard
                name={pricingPlans.weightTraining.name}
                description={pricingPlans.weightTraining.description}
                price={pricingPlans.weightTraining.prices["1 Month"]}
                duration="month"
                features={pricingPlans.weightTraining.features}
              />
            </StaggerItem>
            <StaggerItem>
              <PricingCard
                name={pricingPlans.fitness.name}
                description={pricingPlans.fitness.description}
                price={pricingPlans.fitness.prices["1 Month"]}
                duration="month"
                features={pricingPlans.fitness.features}
                popular
              />
            </StaggerItem>
            <StaggerItem>
              <PricingCard
                name={pricingPlans.personalTraining.name}
                description={pricingPlans.personalTraining.description}
                price={pricingPlans.personalTraining.prices["1 Month"]}
                duration="month"
                features={pricingPlans.personalTraining.features}
                premium
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Complete Price List</h2>
            <p className="text-gray-400">All prices in INR (₹)</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Plan</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">1 Month</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">3 Months</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">6 Months</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">1 Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-white font-medium">Weight Training</td>
                    <td className="text-center py-4 px-4 text-gray-300">₹999</td>
                    <td className="text-center py-4 px-4 text-gray-300">₹2,499</td>
                    <td className="text-center py-4 px-4 text-gray-300">₹4,499</td>
                    <td className="text-center py-4 px-4 text-gray-300">₹7,999</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/5">
                    <td className="py-4 px-4 text-white font-medium flex items-center gap-2">
                      Fitness <span className="text-xs bg-white text-black px-2 py-0.5 rounded">Popular</span>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-300">₹1,499</td>
                    <td className="text-center py-4 px-4 text-gray-300">₹3,499</td>
                    <td className="text-center py-4 px-4 text-gray-300">₹6,299</td>
                    <td className="text-center py-4 px-4 text-gray-300">₹10,999</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-[#C9A962]/5">
                    <td className="py-4 px-4 text-white font-medium flex items-center gap-2">
                      Personal Training <span className="text-xs bg-[#C9A962] text-black px-2 py-0.5 rounded">Premium</span>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-300">₹5,799</td>
                    <td className="text-center py-4 px-4 text-gray-300">₹14,499</td>
                    <td className="text-center py-4 px-4 text-gray-300">₹23,999</td>
                    <td className="text-center py-4 px-4 text-gray-300">₹37,999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Special Packages</h2>
            <p className="text-gray-400">Exclusive discounts for students and couples</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Student Package */}
            <ScrollReveal delay={0.1}>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Student Package</h3>
                    <p className="text-gray-400 text-sm">Valid student ID required</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400">Weight Training (1 Month)</span>
                    <span className="text-white font-medium">₹999</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400">Fitness (1 Month)</span>
                    <span className="text-white font-medium">₹1,299</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400">Fitness (1 Year)</span>
                    <span className="text-white font-medium">₹9,999</span>
                  </div>
                </div>

                <Button href="/contact" variant="secondary" className="w-full">
                  Enquire Now
                </Button>
              </div>
            </ScrollReveal>

            {/* Couple Package */}
            <ScrollReveal delay={0.2}>
              <div className="p-8 bg-gradient-to-b from-[#C9A962]/10 to-transparent rounded-2xl border border-[#C9A962]/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#C9A962]/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#C9A962]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Couple Package</h3>
                    <p className="text-gray-400 text-sm">Train together, save together</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400">6 Months (2 members)</span>
                    <span className="text-white font-medium">₹10,999</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400">1 Year (2 members)</span>
                    <span className="text-white font-medium">₹17,999</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {["2 full memberships", "All classes included", "Best value for pairs"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#C9A962]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant="primary" className="w-full">
                  Get Couple Package
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">What&apos;s Included in All Plans</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Locker Facility",
              "Steam & Shower",
              "Stretching Zone",
              "CCTV Security",
              "Clean Washrooms",
              "Drinking Water",
              "Expert Guidance",
              "Flexible Timings",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-2 p-4 bg-white/5 rounded-lg">
                  <Check className="w-4 h-4 text-[#C9A962] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="p-8 md:p-12 bg-gradient-to-r from-[#C9A962] to-[#B8960B] rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
                Grand Opening Special!
              </h2>
              <p className="text-black/70 text-lg mb-8">
                {siteConfig.grandOpening.offer}
              </p>
              <Button href="/contact" variant="secondary" size="lg">
                Join Now & Save
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
