export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date?: string;
  location?: string;
  avatarUrl?: string;
  googleVerified?: boolean;
}

export const siteConfig = {
  // Brand Identity
  brand: {
    name: "J & G MOTOR CLUB",
    tagline: "PREMIUM AUTO CARE IN CHATHAM, NJ",
    phone: "201 989 6811",
    displayPhone: "201 989 6811",
    callUrl: "tel:2019896811",
    email: "jgmotorclub@gmail.com",
    address: "Chatham, NJ",
    addressSubtitle: "Local. Reliable. Community Driven.",
    hours: "Mon – Fri: 8AM – 6PM | Sat: 8AM – 4PM",
    techniciansInfo: "All Makes & Models — Experienced Technicians",
    qualityInfo: "Quality Service — Honest Pricing",
    logoUrl: "/logo.png",
    heroBgUrl: "/hero-bg.jpg",
    carfaxBadgeUrl: "/carfax-badge.jpg",
    njInspectionStickerUrl: "/nj-inspection-sticker.jpg",
    smsUrl: "sms:2019896811",
    whatsappUrl: "https://wa.me/12019896811?text=Hi%20J%26G%20Motor%20Club%2C%20I%20have%20a%20question%20about%20auto%20service.",
  },

  // Google Reviews Configuration
  googleReviews: {
    overallRating: 4.9,
    totalCount: "140+",
    googlePlaceUrl: "https://www.google.com/maps/search/?api=1&query=J%26G+Motor+Club+Chatham+NJ",
    reviews: [
      {
        id: "g1",
        name: "Mike R.",
        location: "Chatham, NJ",
        rating: 5,
        comment: "Great service, honest pricing and very professional. My car runs like new. Highly recommend J & G Motor Club!",
        date: "2 days ago",
        googleVerified: true,
      },
      {
        id: "g2",
        name: "Sarah L.",
        location: "Summit, NJ",
        rating: 5,
        comment: "The team is knowledgeable and friendly. They explained everything and got me back on the road quickly.",
        date: "1 week ago",
        googleVerified: true,
      },
      {
        id: "g3",
        name: "James T.",
        location: "Morristown, NJ",
        rating: 5,
        comment: "Best auto shop in Chatham! Reliable, fair prices and excellent service every time.",
        date: "2 weeks ago",
        googleVerified: true,
      },
      {
        id: "g4",
        name: "David K.",
        location: "Chatham, NJ",
        rating: 5,
        comment: "Outstanding diagnostic work on my BMW M4. They identified the issue immediately and had it fixed same day.",
        date: "3 weeks ago",
        googleVerified: true,
      },
    ] as TestimonialItem[],
  },

  // Navigation Links
  navLinks: [
    { name: "Home", href: "#home", tabId: "home" },
    { name: "Services", href: "#services", tabId: "services" },
    { name: "About", href: "#about", tabId: "about" },
    { name: "Gallery", href: "#gallery", tabId: "gallery" },
    { name: "Reviews", href: "#reviews", tabId: "reviews" },
    { name: "Contact", href: "#contact", tabId: "contact" },
  ],

  // Hero Section Copy
  hero: {
    topTagline: "DRIVEN BY TRUST",
    titleLine1: "J & G",
    titleLine2: "MOTOR CLUB",
    subtitle: "PREMIUM AUTO CARE IN CHATHAM, NJ",
    description: "Expert service. Honest pricing. Keeping you on the road.",
    primaryCta: "Book Appointment",
    secondaryCta: "Call 201 989 6811",
    cursiveOverlay: "More Than a Garage",
  },

  // About Section Copy
  about: {
    label: "ABOUT J & G MOTOR CLUB",
    title: "LOCAL CARS. STRONGER COMMUNITY.",
    description: "At J & G Motor Club, we're passionate about cars and committed to providing honest, reliable, and high-quality auto repair services. Located in Chatham, NJ, our experienced team treats every vehicle like our own — because your safety and satisfaction matter to us.",
    stats: [
      { value: "10+", label: "Years of Experience" },
      { value: "2000+", label: "Happy Customers" },
      { value: "All Makes", label: "& Models" },
      { value: "Community", label: "Focused" },
    ],
    cursiveOverlay: "GOOD CARS GREAT PEOPLE",
    pageTitle: "MORE THAN A GARAGE A COMMUNITY",
    pageDescription: "J & G Motor Club was built on a simple belief — honest work, reliable service, and a stronger community. Located in Chatham, NJ, we're proud to keep our customers on the road with expert care and a personal touch.",
    values: [
      { title: "Honesty", subtitle: "Always upfront", iconName: "Tag" },
      { title: "Quality", subtitle: "No shortcuts", iconName: "Cog" },
      { title: "Experienced Technicians", subtitle: "Skilled & certified", iconName: "Wrench" },
      { title: "Local Business", subtitle: "Proudly serving Chatham, NJ", iconName: "MapPin" },
      { title: "Customer Focused", subtitle: "Your satisfaction matters", iconName: "Heart" },
    ],
  },

  // 10 Detailed Services
  allServices: [
    {
      id: "state-inspection",
      title: "NJ State Inspection",
      subtitle: "Done in under 10 minutes!",
      description: "Official NJ vehicle state inspection & emissions check. Drive-in fast service completed in under 10 minutes by certified technicians.",
      iconName: "ShieldCheck",
      highlights: ["Takes less than 10 minutes", "Official NJ State Certified", "Emissions & Safety Check", "All Makes & Models"],
    },
    {
      id: "oil-change",
      title: "Oil Change",
      subtitle: "Clean engine. Longer life.",
      description: "Synthetic & conventional oil changes, filter replacement, and multi-point vehicle inspection.",
      iconName: "OilCan",
    },
    {
      id: "brakes",
      title: "Brake Service",
      subtitle: "Safety you can count on.",
      description: "Brake pad replacement, rotor resurfacing, brake fluid flush, and ABS diagnostics.",
      iconName: "CircleDot",
    },
    {
      id: "engine",
      title: "Engine Repair",
      subtitle: "Expert diagnostics & repair.",
      description: "Engine light diagnostics, timing belt replacement, spark plugs, and engine rebuilds.",
      iconName: "Cog",
    },
    {
      id: "tires",
      title: "Tires & Alignment",
      subtitle: "Better performance.",
      description: "4-wheel laser alignment, tire mounting, computerized balancing, and puncture repair.",
      iconName: "Disc",
    },
    {
      id: "battery",
      title: "Battery Service",
      subtitle: "Stay powered on the road.",
      description: "Battery health testing, alternator diagnostics, and fresh battery installation.",
      iconName: "Zap",
    },
    {
      id: "ac",
      title: "A/C & Heating",
      subtitle: "Comfort in every season.",
      description: "Refrigerant recharge, leak detection, climate control, and heater core service.",
      iconName: "Snowflake",
    },
    {
      id: "transmission",
      title: "Transmission Service",
      subtitle: "Smooth performance.",
      description: "Transmission fluid flush, clutch replacement, and automatic/manual gearbox repair.",
      iconName: "Activity",
    },
    {
      id: "check-engine",
      title: "Check Engine Light",
      subtitle: "Fast & accurate diagnostics.",
      description: "OBD-II computer scan, sensor replacement, emissions diagnostics, and fault clearing.",
      iconName: "CheckCircle",
    },
    {
      id: "general-repair",
      title: "General Repair",
      subtitle: "All makes & models.",
      description: "Suspension, steering, exhaust, radiators, power steering, and electrical repair.",
      iconName: "Wrench",
    },
    {
      id: "pre-purchase",
      title: "Pre-Purchase Inspection",
      subtitle: "Buy with confidence.",
      description: "150-point comprehensive vehicle inspection report before buying a used vehicle.",
      iconName: "ShieldCheck",
    },
  ] as ServiceItem[],

  // Quick 6 Services for Hero Bar
  quickServices: [
    { id: "maintenance", title: "Maintenance", subtitle: "Keep it running", iconName: "Wrench" },
    { id: "brakes", title: "Brake Service", subtitle: "Drive with confidence", iconName: "CircleDot" },
    { id: "engine", title: "Engine Repair", subtitle: "Expert diagnostics", iconName: "Cog" },
    { id: "tires", title: "Tires & Alignment", subtitle: "A smoother ride", iconName: "Disc" },
    { id: "battery", title: "Battery Service", subtitle: "Stay powered", iconName: "Zap" },
    { id: "ac", title: "A/C & Heating", subtitle: "Comfort all year", iconName: "Snowflake" },
  ],

  // Gallery Photos
  galleryPhotos: [
    { title: "BMW M4 Garage Bay", category: "Shop", url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80" },
    { title: "Brake Rotor Service", category: "Brakes", url: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80" },
    { title: "Engine Diagnostic", category: "Engine", url: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80" },
    { title: "Laser Wheel Alignment", category: "Alignment", url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80" },
    { title: "Garage Service Bay", category: "Shop", url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" },
    { title: "BMW Vehicle Lift Inspection", category: "Inspection", url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80" },
  ],

  // Testimonials
  testimonials: [
    {
      id: "t1",
      name: "Mike R.",
      comment: "Great service, honest pricing and very professional. My car runs like new. Highly recommend J & G Motor Club!",
      rating: 5,
    },
    {
      id: "t2",
      name: "Sarah L.",
      comment: "The team is knowledgeable and friendly. They explained everything and got me back on the road quickly.",
      rating: 5,
    },
    {
      id: "t3",
      name: "James T.",
      comment: "Best auto shop in Chatham! Reliable, fair prices and excellent service every time.",
      rating: 5,
    },
  ],

  // FAQs
  faqs: [
    {
      question: "Where is J&G Motor Club located?",
      answer: "We are located in Chatham, NJ. Call us anytime at 201 989 6811 or email jgmotorclub@gmail.com.",
    },
    {
      question: "What are your operating hours?",
      answer: "Monday – Friday: 8:00 AM – 6:00 PM | Saturday: 8:00 AM – 4:00 PM | Sunday: Closed.",
    },
    {
      question: "Do you service all vehicle makes and models?",
      answer: "Yes! Our experienced technicians service all domestic, European, and Asian makes and models.",
    },
  ],
};
