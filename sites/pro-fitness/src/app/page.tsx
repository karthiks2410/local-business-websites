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
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { siteConfig, facilities, classes, reviews } from "@/lib/config";

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
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 border border-[#C9A962]/30 rounded-full mb-8"
          >
            <Star className="w-4 h-4 text-[#C9A962] fill-current" />
            <span className="text-[#C9A962] font-medium text-sm">
              {reviews.rating} Rating - {reviews.totalReviews} Google Reviews
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
          >
            <span className="text-[#E74C3C]">PRO</span>
            <span className="text-white"> </span>
            <span className="text-[#3498DB]">FITNESS</span>
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
            {siteConfig.features.description}
          </motion.p>

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
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-zinc-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "6000+", label: "Sq. Ft. Area", icon: Dumbbell },
              { value: "2", label: "Dedicated Floors", icon: Zap },
              { value: "238+", label: "Happy Members", icon: Users },
              { value: "4.9", label: "Google Rating", icon: Award },
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

      {/* World-Class Amenities Section */}
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
                <div
                  className="facility-card p-6 bg-zinc-900 rounded-2xl border border-zinc-800 text-center cursor-pointer hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="text-5xl mb-4">{facility.emoji}</div>
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {facility.name}
                  </h3>
                </div>
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

      {/* Reviews Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">What Our </span>
              <span className="text-[#C9A962]">Members Say</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-black text-white">{reviews.rating}</span>
              <span className="text-zinc-400">({reviews.totalReviews} reviews)</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {reviews.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.featured.slice(0, 6).map((review, index) => (
              <StaggerItem key={index}>
                <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-[#C9A962]/30 transition-colors h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#C9A962] to-[#B8960B] rounded-full flex items-center justify-center text-black font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <p className="text-zinc-500 text-sm">{review.timeAgo}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-[#C9A962]/30 mb-2" />
                  <p className="text-zinc-300 text-sm leading-relaxed flex-1">
                    {review.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3} className="text-center mt-10">
            <a
              href={siteConfig.contact.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9A962] hover:text-[#D4B876] transition-colors"
            >
              View all {reviews.totalReviews} reviews on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-24 bg-black">
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
                <div
                  className="relative group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#C9A962]/30 hover:-translate-y-2 transition-all duration-200"
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
                </div>
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
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#C9A962] to-[#B8960B] p-12 md:p-16">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-black mb-4">
                  Ready to Transform?
                </h2>
                <p className="text-black/70 text-lg max-w-2xl mx-auto mb-8">
                  Join Pro Fitness today and become part of a community that&apos;s dedicated to your success!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button href="/contact" variant="secondary" size="lg">
                    Join Now
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
      <section className="py-24 bg-black">
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
                    <p>Weekdays: {siteConfig.timings.weekdays.morning}, {siteConfig.timings.weekdays.evening}</p>
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
                  src={siteConfig.location.mapUrl}
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
