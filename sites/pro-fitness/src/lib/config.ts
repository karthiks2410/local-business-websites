// Pro Fitness - Site Configuration
export const siteConfig = {
  name: "Pro Fitness",
  tagline: "Transform Your Limits",
  description: "Anekal's Premium Fitness Destination - 6000sqft Indoor Multi Gym with Dedicated Weight Training & Cardio Sections",

  // Contact
  contact: {
    phones: ["+91 90362 86830"],
    whatsapp: "+919036286830",
    email: "profitness.anekal@gmail.com",
    instagram: "https://www.instagram.com/profitness_anekal/",
    googleMaps: "https://www.google.com/maps/place/PRO+FITNESS/@12.7131265,77.6967345,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae6f398ac0c3a3:0xd7c92bd30df17b50!8m2!3d12.7131265!4d77.6993094!16s%2Fg%2F11q2xybqk7",
    googleReviews: "https://www.google.com/search?sca_esv=c0203a4e5d3b1bdc&rlz=1C5GCEM_enDE1205DE1205&sxsrf=ANbL-n46Yh8iXWlW5a5EzQtcKL6MvKAn9A:1777215017133&q=pro+fitness+anekal&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOa2QtHFcLJ8qV9aNm80XsWBZFydpOjcPsKCrwmmFjBc26F6sXjfsXni05GG_-8_D7a1r2eXdYSiH7fjCcuZq1uQPvcxg&sa=X&ved=2ahUKEwjhqqTu4YuUAxX5nK8BHXCMEbwQrrQLegQIGRAB&biw=1920&bih=958&dpr=1",
  },

  // Location
  location: {
    address: "Opp, Police Quarters Rd, Vinayaka Nagar, Anekal, Karnataka 562106",
    landmark: "Opposite Police Quarters",
    city: "Anekal, Bangalore",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3!2d77.6967345!3d12.7131265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6f398ac0c3a3%3A0xd7c92bd30df17b50!2sPRO%20FITNESS!5e0!3m2!1sen!2sin!4v1714147200000",
  },

  // Gym Timings
  timings: {
    weekdays: {
      morning: "5:00 AM - 12:00 PM",
      evening: "3:30 PM - 10:00 PM",
    },
    sunday: "Open 24 hours",
    schedule: [
      { day: "Sunday", hours: "Open 24 hours" },
      { day: "Monday", hours: "5 AM - 12 PM, 3:30 - 10 PM" },
      { day: "Tuesday", hours: "5 AM - 12 PM, 3:30 - 10 PM" },
      { day: "Wednesday", hours: "5 AM - 12 PM, 3:30 - 10 PM" },
      { day: "Thursday", hours: "5 AM - 12 PM, 3:30 - 10 PM" },
      { day: "Friday", hours: "5 AM - 12 PM, 3:30 - 10 PM" },
      { day: "Saturday", hours: "5 AM - 12 PM, 3:30 - 10 PM" },
    ],
  },

  // Gym Features
  features: {
    area: "6000 sqft",
    floors: 2,
    description: "6000sqft Indoor multi gym with a dedicated weight training area, cardio section and floor.",
  },

  // Owner/Trainer
  owner: {
    name: "Pavi",
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
      "Stretching zone",
      "Two dedicated floors",
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
  buddy: {
    name: "Buddy Package",
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

// Facilities List with Emoji icons (removed Steam & Shower)
export const facilities = [
  {
    name: "Cardio Zone",
    description: "Treadmills, cycles, and ellipticals on the upper floor",
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
    name: "Weight Training Floor",
    description: "Dedicated floor for weight training",
    emoji: "🏋️",
  },
  {
    name: "Free Weights",
    description: "Dumbbells, barbells and weight plates",
    emoji: "💪",
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

// Google Reviews
export const reviews = {
  rating: 4.9,
  totalReviews: 238,
  highlights: [
    "friendly coach",
    "motivating atmosphere",
    "loyal trainers",
    "diet plan",
  ],
  featured: [
    {
      name: "Meghana Raj",
      rating: 5,
      timeAgo: "5 months ago",
      text: "The equipment and the space is very good they even have a separate floors for weight training and fitness training, the trainers here help every client so they work out without any problems or injuries.",
      hasPhoto: true,
    },
    {
      name: "MoHaN 124",
      rating: 5,
      timeAgo: "a year ago",
      text: "Pro Fitness Gym in Anekal offers a clean, well-equipped space with modern machines, expert trainers, and a motivating atmosphere. The staff is friendly, and the gym is well-maintained, making it a great place for all fitness levels.",
      hasPhoto: true,
    },
    {
      name: "Appu Melodies",
      rating: 5,
      timeAgo: "3 years ago",
      text: "One of the best fitness center in anekal! Trainers are sooo good and training is fully professional. All professionals workouts has been teached for us.. and they will give good diet plan also!",
      hasPhoto: true,
    },
    {
      name: "Suman M",
      rating: 5,
      timeAgo: "8 months ago",
      text: "I really appreciate how they make me feel welcome and supported. If you're looking to get in shape and have a good time while you do it, I definitely recommend Pro Fitness. The trainers are the best and will help you every step of the way.",
      hasPhoto: false,
    },
    {
      name: "Hariharan Vinayagam",
      rating: 5,
      timeAgo: "a year ago",
      text: "A good gym provides a well-equipped and comfortable environment for fitness training. It should have a variety of equipment, including cardio machines, free weights, and resistance machines. Cleanliness, hygiene, and proper ventilation are essential.",
      hasPhoto: false,
    },
    {
      name: "Preetham Prasad",
      rating: 5,
      timeAgo: "a year ago",
      text: "I've been working out at this pro fitness gym for a few weeks now, and I absolutely love it! The facility is always clean, well-equipped, and the atmosphere is super motivating. My personal trainer, Pavi anna has been amazing!",
      hasPhoto: false,
    },
    {
      name: "Sachin Katoch",
      rating: 5,
      timeAgo: "5 months ago",
      text: "Nice place for workout, good gym weight & equipment, decent crowd.",
      hasPhoto: false,
    },
    {
      name: "Musugu Sreeram",
      rating: 5,
      timeAgo: "a year ago",
      text: "Always clean, and well-maintained. The range of equipment available to all types of workouts, from cardio to strength training. The staffs Pavi bro, Satish and Harshith are incredibly friendly and always willing to help.",
      hasPhoto: false,
    },
    {
      name: "Abhilash Raj Gopal",
      rating: 5,
      timeAgo: "3 years ago",
      text: "Best gym in the town. Pavi and Bavi are best trainers you could ask for, they make gym feel like home. Trainers are always happy to help with workouts and doubts. Place is hygienic and equipments are sanitised regularly. And awesome music!",
      hasPhoto: false,
    },
    {
      name: "Siva ganesh Ganesh",
      rating: 5,
      timeAgo: "a year ago",
      text: "The best gym for the Alliance students than the Alliance University gym. The equipment is also good. Overall gym is spacious you can do your workout freely.",
      hasPhoto: false,
    },
  ],
} as const;

// Colors - Cyan/Blue theme to match Pro Fitness logo
export const colors = {
  primary: "#0A0A0A",       // Rich Black
  secondary: "#3498DB",     // Bright Blue (from logo)
  accent: "#2980B9",        // Darker Blue
  highlight: "#E74C3C",     // Red (PRO text in logo)
  background: "#000000",    // Pure Black Background
  card: "#18181B",          // Dark Zinc Card Background
  cardBorder: "#27272A",    // Subtle border
  text: "#FFFFFF",          // White Text
  textMuted: "#A1A1AA",     // Muted Text (zinc-400)
} as const;
