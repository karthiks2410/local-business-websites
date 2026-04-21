"use client";

import { cn } from "@/lib/utils";
import { Check, Star, Crown } from "lucide-react";
import { Button } from "./Button";

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  duration: string;
  features: readonly string[];
  popular?: boolean;
  premium?: boolean;
  className?: string;
}

export function PricingCard({
  name,
  description,
  price,
  duration,
  features,
  popular,
  premium,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-2 hover:scale-[1.01]",
        popular
          ? "bg-white/5 border-white/30 shadow-xl shadow-white/5"
          : premium
          ? "bg-zinc-900/50 border-[#C9A962]/30 shadow-xl shadow-[#C9A962]/10"
          : "bg-white/5 border-white/10 hover:border-white/20",
        className
      )}
    >
      {/* Badge */}
      {(popular || premium) && (
        <div
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1",
            popular
              ? "bg-white text-black"
              : "bg-gradient-to-r from-[#C9A962] to-[#B8960B] text-black"
          )}
        >
          {popular ? (
            <>
              <Star className="w-3 h-3 fill-current" /> POPULAR
            </>
          ) : (
            <>
              <Crown className="w-3 h-3" /> PREMIUM
            </>
          )}
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6 pt-2">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl text-gray-400">₹</span>
          <span
            className={cn(
              "text-5xl font-black",
              popular
                ? "text-white"
                : premium
                ? "text-[#C9A962]"
                : "text-white"
            )}
          >
            {price.toLocaleString("en-IN")}
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-1">/{duration}</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={cn(
                "w-5 h-5 flex-shrink-0 mt-0.5",
                popular
                  ? "text-white"
                  : premium
                  ? "text-[#C9A962]"
                  : "text-zinc-400"
              )}
            />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        href="/contact"
        variant={popular ? "primary" : premium ? "gold" : "secondary"}
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
}
