"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Dumbbell,
  Award,
  Zap,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { siteConfig, facilities, classes } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />

        {/* Decorative elements - Muted gold glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A962]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B8960B]/5 rounded-full blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Grand Opening Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 border border-[#C9A962]/30 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-[#C9A962] rounded-full animate-pulse" />
            <span className="text-[#C9A962] font-medium text-sm">
              Grand Opening - {siteConfig.grandOpening.date}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
          >
            <span className="text-white">SWEAT</span>
            <span className="text-[#C9A962]"> AND </span>
            <span className="text-white">FIT</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-gradient font-semibold mb-4"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Anekal&apos;s Premium Fitness Destination. World-class equipment, certified trainers,
            and a community that pushes you to be your best.
          </motion.p>

          {/* Offer Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block px-6 py-3 bg-[#C9A962]/10 border border-[#C9A962]/20 rounded-xl mb-10"
          >
            <p className="text-[#C9A962] font-medium">
              {siteConfig.grandOpening.offer}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Join Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/plans" variant="secondary" size="lg">
              View Plans
            </Button>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-2 mt-12 text-zinc-500"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{siteConfig.location.city}</span>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-zinc-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5000+", label: "Sq. Ft. Area", icon: Dumbbell },
              { value: "50+", label: "Equipment", icon: Zap },
              { value: "10+", label: "Classes/Week", icon: Users },
              { value: "5+", label: "Certified Trainers", icon: Award },
            ].map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-[#C9A962] mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-black text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* World-Class Amenities Section - Matching Reference Design */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">World-Class </span>
              <span className="text-[#C9A962]">Amenities</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Everything you need to achieve your fitness goals, all in one place
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilities.map((facility) => (
              <StaggerItem key={facility.name}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="facility-card p-6 bg-zinc-900 rounded-2xl border border-zinc-800 text-center cursor-pointer"
                >
                  <div className="text-5xl mb-4">{facility.emoji}</div>
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {facility.name}
                  </h3>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3} className="text-center mt-12">
            <Button href="/facilities" variant="primary" size="lg">
              Experience Our Facilities
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">Group </span>
              <span className="text-[#C9A962]">Classes</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Join our energizing group sessions led by expert instructors
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((classItem) => (
              <StaggerItem key={classItem.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#C9A962]/30 transition-all"
                >
                  {/* Placeholder Image */}
                  <div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <Dumbbell className="w-16 h-16 text-zinc-700 group-hover:text-[#C9A962]/30 transition-colors" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {classItem.name}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-3">
                      {classItem.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {classItem.duration}
                      </span>
                      <span>{classItem.level}</span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3} className="text-center mt-10">
            <Button href="/classes" variant="outline">
              View Class Schedule
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#C9A962] to-[#B8960B] p-12 md:p-16">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-black mb-4">
                  Ready to Transform?
                </h2>
                <p className="text-black/70 text-lg max-w-2xl mx-auto mb-8">
                  Join us at the grand opening on {siteConfig.grandOpening.date}.
                  Be among the first 100 members and unlock exclusive benefits!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button href="/contact" variant="secondary" size="lg">
                    Claim Your Spot
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button href="/plans" variant="outline" size="lg">
                    See Pricing
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Find Us
              </h2>
              <div className="space-y-4 text-zinc-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-zinc-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">{siteConfig.location.landmark}</p>
                    <p>{siteConfig.location.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-zinc-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Gym Timings</p>
                    <p>Morning: {siteConfig.timings.morning}</p>
                    <p>Evening: {siteConfig.timings.evening}</p>
                    <p>Sunday: {siteConfig.timings.sunday}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Get Directions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-[400px] rounded-2xl overflow-hidden border border-zinc-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5!2d77.7!3d12.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQyJzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
