"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-black/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962] to-[#B8960B] rounded-lg transform rotate-45" />
              <span className="absolute inset-0 flex items-center justify-center text-black font-black text-sm">
                S&F
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white tracking-tight">
                SWEAT <span className="text-[#C9A962]">AND</span> FIT
              </h1>
              <p className="text-xs text-gray-400 -mt-1">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === link.href
                    ? "text-black bg-[#C9A962]"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phones[0]}`}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">{siteConfig.contact.phones[0]}</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#C9A962] to-[#B8960B] text-black font-semibold rounded-lg hover:from-[#D4B876] hover:to-[#C9A962] transition-all duration-200 shadow-lg shadow-[#C9A962]/20"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg font-medium transition-colors",
                    pathname === link.href
                      ? "bg-[#C9A962] text-black"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 bg-gradient-to-r from-[#C9A962] to-[#B8960B] text-black font-semibold text-center rounded-lg"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
