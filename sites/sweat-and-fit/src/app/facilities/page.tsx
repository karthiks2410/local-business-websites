import { Metadata } from "next";
import { Shield } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { facilities } from "@/lib/config";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Explore our world-class gym facilities - premium equipment, steam room, certified trainers, and more.",
};

export default function FacilitiesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our Facilities
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              State-of-the-art equipment and amenities designed to help you achieve your fitness goals
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <StaggerItem key={facility.name}>
                <div className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#C9A962]/30 hover:bg-white/[0.07] transition-all duration-300">
                  <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[#C9A962] to-[#B8960B] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform text-3xl">
                    {facility.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Premium Equipment
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We&apos;ve invested in the best equipment to give you a premium workout experience
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="text-center p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-[#C9A962]/30 transition-colors">
                <div className="text-5xl mb-4">🏋️</div>
                <h3 className="text-xl font-bold text-white mb-2">Strength Zone</h3>
                <p className="text-gray-400 text-sm">
                  Free weights, power racks, Smith machines, cable systems, and more
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-[#C9A962]/30 transition-colors">
                <div className="text-5xl mb-4">🚴</div>
                <h3 className="text-xl font-bold text-white mb-2">Cardio Area</h3>
                <p className="text-gray-400 text-sm">
                  Treadmills, ellipticals, stationary bikes, rowing machines
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-[#C9A962]/30 transition-colors">
                <div className="text-5xl mb-4">🧘</div>
                <h3 className="text-xl font-bold text-white mb-2">Functional Area</h3>
                <p className="text-gray-400 text-sm">
                  Battle ropes, kettlebells, TRX, medicine balls, and more
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Safety & Hygiene */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Your Safety is Our Priority
              </h2>
              <ul className="space-y-4">
                {[
                  "24/7 CCTV surveillance throughout the facility",
                  "Regular equipment maintenance and sanitization",
                  "Separate changing rooms for men and women",
                  "First-aid trained staff always on duty",
                  "Emergency protocols in place",
                  "Clean and hygienic washrooms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#C9A962] mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-[400px] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center border border-[#C9A962]/20">
                <Shield className="w-32 h-32 text-[#C9A962]/30" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-zinc-900/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Experience It?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Visit us at our grand opening and see our facilities firsthand
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Book a Visit
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
