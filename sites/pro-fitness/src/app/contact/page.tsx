"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/config";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "general",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in joining Pro Fitness gym. Can you share more details about membership?"
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Ready to start your fitness journey? Contact us today!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Have questions? We&apos;re here to help! Reach out via phone, WhatsApp, or visit us at our location.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#C9A962]/30 transition-colors">
                    <div className="w-12 h-12 bg-[#C9A962]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#C9A962]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <div className="space-y-1">
                        {siteConfig.contact.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone}`}
                            className="block text-gray-400 hover:text-white transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-green-500/10 rounded-xl border border-green-500/20 hover:bg-green-500/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                      <p className="text-gray-400">Chat with us instantly</p>
                      <span className="text-green-400 text-sm font-medium">Click to chat →</span>
                    </div>
                  </a>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#C9A962]/30 transition-colors">
                    <div className="w-12 h-12 bg-[#C9A962]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#C9A962]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#C9A962]/30 transition-colors">
                    <div className="w-12 h-12 bg-[#C9A962]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#C9A962]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">{siteConfig.location.landmark}</p>
                      <p className="text-gray-500 text-sm">{siteConfig.location.address}</p>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#C9A962]/30 transition-colors">
                    <div className="w-12 h-12 bg-[#C9A962]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#C9A962]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Gym Timings</h3>
                      <div className="text-gray-400 text-sm space-y-1">
                        {siteConfig.timings.schedule.map((item) => (
                          <p key={item.day}>
                            <span className="text-white">{item.day}:</span> {item.hours}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-400 mb-6">
                      We&apos;ve received your message. Our team will contact you shortly.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: "",
                          phone: "",
                          email: "",
                          interest: "general",
                          message: "",
                        });
                      }}
                      variant="secondary"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-400 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-400 mb-2"
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-400 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A962] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="interest"
                          className="block text-sm font-medium text-gray-400 mb-2"
                        >
                          I&apos;m Interested In
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formState.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C9A962] transition-colors"
                        >
                          <option value="general" className="bg-gray-900">General Inquiry</option>
                          <option value="membership" className="bg-gray-900">Membership</option>
                          <option value="personal-training" className="bg-gray-900">Personal Training</option>
                          <option value="classes" className="bg-gray-900">Group Classes</option>
                          <option value="corporate" className="bg-gray-900">Corporate Membership</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-400 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A962] transition-colors resize-none"
                          placeholder="Tell us about your fitness goals..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        isLoading={isSubmitting}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Find Us</h2>
            <p className="text-gray-400">
              {siteConfig.location.landmark}, {siteConfig.location.city}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="h-[400px] rounded-2xl overflow-hidden border border-white/10">
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

          <ScrollReveal className="text-center mt-8">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.location.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
