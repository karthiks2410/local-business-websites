// Sweat & Fit - Site Configuration
export const siteConfig = {
  name: "Sweat & Fit",
  tagline: "Transform Your Limits",
  description: "Anekal's Premium Fitness Destination - CrossFit, Weight Training, Yoga, Zumba & More",

  // Grand Opening
  grandOpening: {
    date: "19th April 2026",
    day: "Sunday",
    time: "11:00 AM onwards",
    offer: "First 100 members get special packages + attractive goodies!",
  },

  // Contact
  contact: {
    phones: ["+91 6262-686361", "+91 99642 07240"],
    whatsapp: "+916262686361",
    email: "sweatandfit.anekal@gmail.com",
    instagram: "https://www.instagram.com/sweat_and_fit_anekal/",
  },

  // Location
  location: {
    address: "Chandapura-Anekal Rd, Vinayaka Nagar, Anekal, Karnataka 562106",
    landmark: "Opposite To More Grocery, Next to Ramaraj Showroom",
    city: "Anekal, Bangalore",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5!2d77.7!3d12.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQyJzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },

  // Gym Timings
  timings: {
    morning: "5:00 AM - 10:00 AM",
    evening: "4:00 PM - 10:00 PM",
    sunday: "6:00 AM - 12:00 PM",
  },

  // Owner/Trainer
  owner: {
    name: "Satish",
    title: "Founder & Head Trainer",
  },
} as const;

// Navigation Links
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Facilities", href: "/facilities" },
  { name: "Plans", href: "/plans" },
  { name: "Classes", href: "/classes" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
] as const;

// Pricing Plans
export const pricingPlans = {
  weightTraining: {
    name: "Weight Training",
    description: "Access to all gym equipment and weight training area",
    prices: {
      "1 Month": 999,
      "3 Months": 2499,
      "6 Months": 4499,
      "1 Year": 7999,
    },
    features: [
      "Full equipment access",
      "Locker facility",
      "Steam & shower",
      "Stretching zone",
    ],
  },
  fitness: {
    name: "Fitness",
    description: "Complete fitness package with classes and equipment",
    popular: true,
    prices: {
      "1 Month": 1499,
      "3 Months": 3499,
      "6 Months": 6299,
      "1 Year": 10999,
    },
    features: [
      "Everything in Weight Training",
      "Yoga classes",
      "Zumba sessions",
      "Group classes",
      "HIIT workouts",
    ],
  },
  personalTraining: {
    name: "Personal Training",
    description: "1-on-1 training with diet and nutrition planning",
    premium: true,
    prices: {
      "1 Month": 5799,
      "3 Months": 14499,
      "6 Months": 23999,
      "1 Year": 37999,
    },
    features: [
      "Personal trainer",
      "Custom diet plan",
      "Certified nutritionist",
      "Progress tracking",
      "Priority scheduling",
    ],
  },
  student: {
    name: "Student Package",
    description: "Special discounts for students (ID required)",
    prices: {
      "1 Month (WT)": 999,
      "3 Months (WT)": 2499,
      "6 Months (WT)": 4499,
      "1 Year (WT)": 7999,
      "1 Month (Fitness)": 1299,
      "3 Months (Fitness)": 2999,
      "6 Months (Fitness)": 5499,
      "1 Year (Fitness)": 9999,
    },
    features: [
      "Valid student ID required",
      "Same facilities as regular",
      "Discounted rates",
    ],
  },
  couple: {
    name: "Couple Package",
    description: "Train together, save together",
    prices: {
      "6 Months": 10999,
      "1 Year": 17999,
    },
    features: [
      "2 memberships",
      "Full fitness access",
      "All classes included",
      "Best value for pairs",
    ],
  },
} as const;

// Facilities List with Emoji icons
export const facilities = [
  {
    name: "Cardio Zone",
    description: "Treadmills, cycles, and ellipticals",
    emoji: "🏃",
  },
  {
    name: "Fitness Consultant",
    description: "Expert guidance for your fitness journey",
    emoji: "📋",
  },
  {
    name: "HIIT Training",
    description: "High-intensity interval training",
    emoji: "⚡",
  },
  {
    name: "Group Exercise",
    description: "Motivating group workout sessions",
    emoji: "👥",
  },
  {
    name: "Steam & Shower",
    description: "Relax and recover after your workout",
    emoji: "🚿",
  },
  {
    name: "Free Weights",
    description: "Dumbbells, barbells and weight plates",
    emoji: "🏋️",
  },
  {
    name: "Lockers",
    description: "Secure storage for your belongings",
    emoji: "🔐",
  },
  {
    name: "Personal Training",
    description: "1-on-1 sessions with certified trainers",
    emoji: "🎯",
  },
] as const;

// Classes
export const classes = [
  {
    name: "Yoga",
    description: "Find balance, flexibility, and inner peace",
    schedule: "Mon, Wed, Fri - 6:00 AM",
    duration: "60 min",
    level: "All Levels",
    image: "/images/yoga.jpg",
  },
  {
    name: "Zumba",
    description: "Dance your way to fitness with high-energy moves",
    schedule: "Tue, Thu, Sat - 6:00 PM",
    duration: "45 min",
    level: "All Levels",
    image: "/images/zumba.jpg",
  },
  {
    name: "HIIT",
    description: "High-intensity interval training for maximum burn",
    schedule: "Mon, Wed, Fri - 5:00 PM",
    duration: "30 min",
    level: "Intermediate",
    image: "/images/hiit.jpg",
  },
  {
    name: "Group Classes",
    description: "Motivating group workouts with expert trainers",
    schedule: "Daily - Various times",
    duration: "45 min",
    level: "All Levels",
    image: "/images/group.jpg",
  },
] as const;

// Colors - Muted Gold/Bronze accent theme (premium feel)
export const colors = {
  primary: "#0A0A0A",       // Rich Black
  secondary: "#C9A962",     // Muted Gold
  accent: "#B8960B",        // Bronze/Dark Gold
  background: "#000000",    // Pure Black Background
  card: "#18181B",          // Dark Zinc Card Background
  cardBorder: "#27272A",    // Subtle border
  text: "#FFFFFF",          // White Text
  textMuted: "#A1A1AA",     // Muted Text (zinc-400)
} as const;
