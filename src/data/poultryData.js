export const companyData = {
  name: "Aamir Al Wagan Poultry Farm L.L.C",
  tradeName: "Baraka Al Ain",
  arabicName: "مزرعة عامر الوقن للدواجن ذ.م.م - بركة العين",
  tagline: "FRESH CHICKEN · QUALITY · TRUST",
  subTagline: "Freshness You Trust. Quality You Deserve.",
  establishedYear: 2026,
  location: "Al Wagan, Al Ain, Abu Dhabi, United Arab Emirates",
  phone: "+971 3 780 4422",
  mobile: "+971 50 829 1199",
  email: "info@barakaalain.ae",
  salesEmail: "sales@barakaalain.ae",
  workingHours: "Saturday - Thursday: 6:00 AM - 6:00 PM (Farm Operations: 24/7)",
  
  images: {
    hero: "/images/white-broiler-chicken.png", // White broiler chicken — user uploaded
    heroFarm: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?auto=format&fit=crop&w=1400&q=80", // White broiler chickens on farm
    aboutFarm: "https://images.unsplash.com/photo-1786119445014-6a0cedbdfd69?auto=format&fit=crop&w=1200&q=80", // White broiler chicken on farm
    slaughterhouse: "/images/white-broiler-chicken.png", // White broiler chicken
    feedMill: "https://images.unsplash.com/photo-1780105200761-6511f3a2ee3a?auto=format&fit=crop&w=1200&q=80", // White chicken
    coldLogistics: "https://images.unsplash.com/photo-1770993158197-bfe844a3885d?auto=format&fit=crop&w=1200&q=80", // White chicken
  },

  licenses: [
    {
      id: "added",
      authority: "ADDED",
      fullName: "Abu Dhabi Department of Economic Development",
      docType: "Commercial Trade Licence",
      description: "Fully licensed for poultry trading, integrated poultry activities, and wholesale commercial supply across the UAE."
    },
    {
      id: "adafsa",
      authority: "ADAFSA",
      fullName: "Abu Dhabi Agriculture and Food Safety Authority",
      docType: "No Objection Certificate (NOC)",
      description: "Strictly verified for biosecurity standards, animal health security, humane welfare, and food safety hygiene compliance."
    }
  ],

  stats: [
    { label: "Farm Locations", value: "25", unit: "Hubs across Al Ain", icon: "MapPin" },
    { label: "Poultry Sheds", value: "100", unit: "Modern Bio-Secure Sheds", icon: "Home" },
    { label: "Production Capacity", value: "2M+", unit: "Birds Total Capacity", icon: "Feather" },
    { label: "Annual Feed Capacity", value: "10,000", unit: "Tonnes In-House Feed", icon: "Wheat" },
    { label: "Processing Speed", value: "4,000", unit: "Birds / Hour In-House", icon: "Zap" },
  ],

  pillars: [
    {
      id: "efficiency",
      title: "Operational Efficiency",
      desc: "Streamlining our production processes, utilizing modern agritech and optimizing supply-chain logistics to maximize productivity while minimizing waste.",
      icon: "TrendingUp"
    },
    {
      id: "sustainability",
      title: "Environmental Sustainability",
      desc: "Practising resource-conscious farming — reducing carbon footprints, conserving water and implementing eco-friendly waste management to protect our land for future generations.",
      icon: "Leaf"
    },
    {
      id: "quality",
      title: "Uncompromising Quality & Safety",
      desc: "Setting the benchmark for excellence from farm to table, ensuring every single poultry product is safe, highly nutritious, and fully traceable.",
      icon: "ShieldCheck"
    },
    {
      id: "trust",
      title: "Customer Trust & Satisfaction",
      desc: "Anticipating market demand, listening closely to customer feedback, and reliably delivering fresh, premium poultry products on scheduled time.",
      icon: "HeartHandshake"
    }
  ],

  commitments: [
    {
      title: "Animal Welfare",
      desc: "Ensuring high standards of humane treatment, comfort, and health for all birds in our care, promoting natural behaviour and low-stress environments.",
      icon: "Heart"
    },
    {
      title: "Biosecurity & Health Security",
      desc: "Implementing rigorous, multi-layered biosecurity protocols across all 25 locations to safeguard flock health, prevent disease outbreaks, and ensure a secure production chain.",
      icon: "ShieldAlert"
    },
    {
      title: "Hygiene & Food Safety",
      desc: "Maintaining immaculate standards of sanitation across all facilities, equipment, and processing stages to deliver wholesome, fresh products to consumers.",
      icon: "Sparkles"
    },
    {
      title: "Responsible Resource Use",
      desc: "Practising sustainable agriculture by optimizing water management, reducing energy consumption, minimizing waste, and protecting local desert ecosystems.",
      icon: "Droplets"
    },
    {
      title: "Continuous Improvement",
      desc: "Embracing technology innovation, ongoing staff training, data-driven flock monitoring, and best-practice veterinary research to raise industry standards.",
      icon: "Cpu"
    }
  ],

  values: [
    {
      title: "Integrity",
      meaning: "Maintaining honest, transparent relationships with customers, employees, and suppliers at every stage of business.",
      icon: "CheckCircle2"
    },
    {
      title: "Animal Welfare",
      meaning: "Handling and caring for our birds in accordance with the highest national and international welfare standards.",
      icon: "Heart"
    },
    {
      title: "Biosecurity",
      meaning: "Applying proactive preventive measures, strict quarantine barriers, and hygienic controls to protect flock health.",
      icon: "ShieldCheck"
    },
    {
      title: "Continuous Improvement",
      meaning: "Reviewing operational processes and adopting better agritech practices, automated climate systems, and veterinary science.",
      icon: "RefreshCw"
    },
    {
      title: "Quality",
      meaning: "Delivering products and services that consistently exceed defined quality, freshness, and culinary expectations.",
      icon: "Award"
    },
    {
      title: "Responsibility",
      meaning: "Managing natural resources, biological waste, and farm activities with utmost environmental and social care.",
      icon: "Globe"
    }
  ],

  products: [
    {
      id: "fresh-whole",
      name: "Fresh Whole Chickens",
      tagline: "Farm-Fresh, Plump & Hygienically Graded",
      image: "/images/white-broiler-chicken.png", // Fresh whole white broiler
      description: "Fresh chicken supplied with hygienic handling, strict temperature control, and premium packaging designed for supermarkets, butcheries, and culinary kitchens.",
      segments: ["Wholesalers", "Retailers", "Supermarkets", "Hypermarkets"],
      features: [
        "Chilled between 0°C and 4°C at all times",
        "Graded by weight: 800g, 900g, 1000g, 1100g, 1200g, 1300g, 1400g+",
        "Hygienic tray-wrap or eco-friendly bulk food crates",
        "100% Halal slaughtered according to Islamic rites",
        "Zero added hormones or harmful additives"
      ],
      badge: "Flagship Product",
      minOrder: "50 Birds / Day"
    },
    {
      id: "bulk-supply",
      name: "Bulk Fresh Chicken Supply",
      tagline: "Contract Supply for Commercial Kitchens & Catering",
      image: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?auto=format&fit=crop&w=800&q=80", // White broiler chickens in shed — bulk supply
      description: "High-volume fresh chicken supplied in bulk quantities according to custom schedule requirements. Guaranteed freshness delivered in refrigerated logistics.",
      segments: ["Hotels", "Restaurants", "Catering Companies (HORECA)", "Institutional Kitchens"],
      features: [
        "Reliable daily or scheduled delivery windows across the UAE",
        "Standardized weights and consistent sizing for portion control",
        "Temperature-logged cold chain transport",
        "Competitive tiered commercial wholesale pricing",
        "Dedicated sales executive and account manager"
      ],
      badge: "Commercial / HORECA",
      minOrder: "200 kg / Order"
    },
    {
      id: "custom-supply",
      name: "Customised Chicken Supply",
      tagline: "Tailored Cuts, Specific Weights & Custom Packaging",
      image: "https://images.unsplash.com/photo-1786119445014-6a0cedbdfd69?auto=format&fit=crop&w=800&q=80", // White broiler chicken
      description: "Custom supply arrangements based on requested cut specifications, precise weight bands, vacuum or modified atmosphere packaging (MAP), and private labeling.",
      segments: ["Food Distributors", "Commercial Food Processors", "Specialty Food Chains"],
      features: [
        "Custom portioning options (whole, pre-cut portions, calibrated weights)",
        "Modified atmosphere packaging (MAP) or vacuum sealing available",
        "Flexible packaging dimensions and barcoded labeling",
        "Custom batch tracking and quality assurance certificates per batch",
        "Long-term guaranteed price supply contracts"
      ],
      badge: "Tailored Contracts",
      minOrder: "Custom Contract"
    }
  ],

  processStages: [
    {
      step: 1,
      title: "Flock Planning",
      desc: "Flock placement cycles, production scheduling, and market demand coordination across all 25 farm locations in Al Ain.",
      image: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?auto=format&fit=crop&w=700&q=80",
      icon: "Calendar"
    },
    {
      step: 2,
      title: "Feed & Grain Nutrition",
      desc: "Rigorous procurement of high-grade raw grains, veterinary supplies, climate equipment, and essential farm inputs.",
      image: "https://images.unsplash.com/photo-1780105200761-6511f3a2ee3a?auto=format&fit=crop&w=700&q=80",
      icon: "ShoppingBag"
    },
    {
      step: 3,
      title: "Shed Climate & Rearing",
      desc: "Routine shed climate monitoring, balanced feeding, pure water supply, biometrics tracking, and real-time record keeping.",
      image: "https://images.unsplash.com/photo-1786119445014-6a0cedbdfd69?auto=format&fit=crop&w=700&q=80",
      icon: "Activity"
    },
    {
      step: 4,
      title: "Health & Biosecurity",
      desc: "Close avian veterinary surveillance, preventative sanitization gates, and adherence to ADAFSA biosecurity protocols.",
      image: "/images/white-broiler-chicken.png",
      icon: "ShieldAlert"
    },
    {
      step: 5,
      title: "Halal Processing",
      desc: "Careful handling and preparation in our in-house slaughterhouse (4,000 birds/hr) adhering to highest hygiene standards.",
      image: "https://images.unsplash.com/photo-1770993158197-bfe844a3885d?auto=format&fit=crop&w=700&q=80",
      icon: "CheckCircle"
    },
    {
      step: 6,
      title: "0°C - 4°C Cold Dispatch",
      desc: "Refrigerated cold-chain fleet dispatch, timely route planning, and guaranteed fresh delivery across Abu Dhabi, Dubai, and UAE.",
      image: "https://images.unsplash.com/photo-1788860175608-eb26d18f437c?auto=format&fit=crop&w=700&q=80",
      icon: "Truck"
    }
  ],

  facilities: [
    {
      title: "100 Poultry Sheds",
      desc: "State-of-the-art poultry sheds across 25 strategic locations in Al Ain with climate control, automated feeding, and 2 million bird capacity.",
      stat: "100 Sheds",
      image: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?auto=format&fit=crop&w=700&q=80",
      icon: "Building"
    },
    {
      title: "Feed Production Facility",
      desc: "Dedicated feed manufacturing mill producing tailored, balanced, nutritious poultry feed to support continuous, self-sufficient farm growth.",
      stat: "10,000 t / Year",
      image: "https://images.unsplash.com/photo-1786119445014-6a0cedbdfd69?auto=format&fit=crop&w=700&q=80",
      icon: "Wheat"
    },
    {
      title: "Feed Storage Silos",
      desc: "Modern climate-protected storage silos for the safe storage and pest-free handling of grain and poultry feed reserves.",
      stat: "Continuous Reserve",
      image: "https://images.unsplash.com/photo-1780105200761-6511f3a2ee3a?auto=format&fit=crop&w=700&q=80",
      icon: "Database"
    },
    {
      title: "Water Supply & Filtration",
      desc: "Comprehensive deep water well testing, reverse osmosis purification, and distribution network providing pure water to every shed.",
      stat: "24/7 Pure Flow",
      image: "https://images.unsplash.com/photo-1770993158197-bfe844a3885d?auto=format&fit=crop&w=700&q=80",
      icon: "Droplets"
    },
    {
      title: "Modern Farm Machinery",
      desc: "Dedicated equipment rooms, backup generators, temperature monitoring sensors, and automated ventilation machinery.",
      stat: "Automated Agritech",
      image: "https://images.unsplash.com/photo-1788860175608-eb26d18f437c?auto=format&fit=crop&w=700&q=80",
      icon: "Wrench"
    },
    {
      title: "In-house Slaughterhouse",
      desc: "Modern processing facility capable of hygienically processing 4,000 birds per hour under strict veterinary and Halal inspection.",
      stat: "4,000 Birds / Hr",
      image: "/images/white-broiler-chicken.png",
      icon: "Zap"
    },
    {
      title: "Cold Chain Logistics Fleet",
      desc: "Refrigerated transport fleet maintaining unbroken cold chains from processing directly to customer facilities across the UAE.",
      stat: "0°C - 4°C Maintained",
      image: "https://images.unsplash.com/photo-1790334812445-97a6adb7af45?auto=format&fit=crop&w=700&q=80",
      icon: "Truck"
    },
    {
      title: "Supporting Infrastructure",
      desc: "Administrative offices, staff quarters, veterinary diagnostic laboratory, and biosecurity sanitation vehicle wash bays.",
      stat: "25 Locations",
      image: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?auto=format&fit=crop&w=700&q=80",
      icon: "ShieldCheck"
    }
  ],

  hubs: [
    {
      id: "al-wagan",
      name: "Al Wagan Hub",
      role: "Central Operations & Primary Production",
      shedCount: "35 Sheds",
      locationDesc: "Southern Al Ain agricultural belt",
      specialty: "Primary Broiler Operations & Main In-House Processing",
      image: "/images/white-broiler-chicken.png",
      highlights: ["Central Veterinary Lab", "Main Slaughterhouse (4k/hr)", "Central Dispatch Fleet"]
    },
    {
      id: "abu-samrah",
      name: "Abu Samrah Hub",
      role: "High-Capacity Growing Center",
      shedCount: "25 Sheds",
      locationDesc: "North-West Al Ain corridor",
      specialty: "Controlled Environment Broiler Rearing",
      image: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?auto=format&fit=crop&w=800&q=80",
      highlights: ["Automated Climate Controls", "Dual Biosecurity Gates", "Independent Water RO Plant"]
    },
    {
      id: "al-arad",
      name: "Al Arad Hub",
      role: "Feed Production & Sustainable Operations",
      shedCount: "20 Sheds",
      locationDesc: "Eastern Al Ain pastoral zone",
      specialty: "Feed Milling & Dedicated Broiler Infrastructure",
      image: "https://images.unsplash.com/photo-1786119445014-6a0cedbdfd69?auto=format&fit=crop&w=800&q=80",
      highlights: ["10,000t Feed Mill Facility", "Grain Storage Silos", "Solar Energy Pilot Sheds"]
    },
    {
      id: "al-jazeera",
      name: "Al Jazeera Hub",
      role: "Bio-Protected Rearing Center",
      shedCount: "20 Sheds",
      locationDesc: "Strategic Al Ain green perimeter",
      specialty: "High-Biosecurity Quarantine & Raising Facilities",
      image: "https://images.unsplash.com/photo-1780105200761-6511f3a2ee3a?auto=format&fit=crop&w=800&q=80",
      highlights: ["Ultra-low Density Rearing", "ADAFSA Priority Audited", "Strict Perimeter Isolation"]
    }
  ],

  futureInitiatives: [
    {
      number: "01",
      title: "GCC Export Market Expansion",
      desc: "Scaling our premium fresh broiler supply into GCC export markets, targeting Saudi Arabia, Oman, Qatar, and Bahrain through certified cold-chain logistics and compliant international packaging.",
      image: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Obtaining GCC cross-border food export certifications and permits.",
        "Establishing temperature-logged refrigerated logistics routes across GCC borders.",
        "Building dedicated export packaging lines with multilingual labeling and barcoding."
      ],
      icon: "Globe",
      badge: "2025 Roadmap"
    },
    {
      number: "02",
      title: "New Processing Line Expansion",
      desc: "Doubling our in-house slaughterhouse processing capacity to 8,000 birds per hour with a second modern Halal processing line, advanced portioning, and packaging automation.",
      image: "/images/white-broiler-chicken.png",
      bulletPoints: [
        "Installing a second automated Halal slaughter and processing line.",
        "Integrating robotic portioning, vacuum sealing, and portion control systems.",
        "Achieving 8,000 birds per hour total processing throughput with full ADAFSA compliance."
      ],
      icon: "Zap",
      badge: "Capacity Growth"
    },
    {
      number: "03",
      title: "Smart Poultry Farm Technology",
      desc: "Implementing AI-powered flock monitoring, IoT climate controls, and data-driven feed management across all 100 sheds to maximize bird performance and biosecurity.",
      image: "https://images.unsplash.com/photo-1786119445014-6a0cedbdfd69?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Deploying IoT sensors for real-time shed temperature, humidity, and ammonia monitoring.",
        "Integrating AI-driven flock weight tracking and feed optimization algorithms.",
        "Connecting all 25 farm locations to a centralised digital operations dashboard."
      ],
      icon: "Cpu",
      badge: "Smart Farming"
    }
  ],

  gallery: [
    {
      title: "Healthy White Broiler Flocks",
      category: "Al Wagan Sheds",
      image: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?auto=format&fit=crop&w=900&q=80",
      description: "Active, healthy white broiler chickens reared in climate-controlled, stress-free sheds in Al Ain."
    },
    {
      title: "White Broiler Shed Environment",
      category: "100 Modern Sheds",
      image: "https://images.unsplash.com/photo-1786119445014-6a0cedbdfd69?auto=format&fit=crop&w=900&q=80",
      description: "Bio-secure, spacious sheds designed for healthy white broiler welfare and growth."
    },
    {
      title: "Prime White Broiler Showcase",
      category: "Flagship Broilers",
      image: "/images/white-broiler-chicken.png",
      description: "Uniform, healthy white broilers bred for tenderness, natural nutrition, and optimal meat yield."
    },
    {
      title: "Pure White Broiler Health",
      category: "Daily Care",
      image: "https://images.unsplash.com/photo-1780105200761-6511f3a2ee3a?auto=format&fit=crop&w=900&q=80",
      description: "Balanced vegetarian corn and soy nutrition, free from animal by-products and artificial hormones."
    },
    {
      title: "White Broiler Vitality",
      category: "Al Ain Farms",
      image: "https://images.unsplash.com/photo-1770993158197-bfe844a3885d?auto=format&fit=crop&w=900&q=80",
      description: "Monitored round the clock under ADAFSA regulations and avian veterinary supervision."
    },
    {
      title: "White Broiler Flock Management",
      category: "25 Farm Hubs",
      image: "https://images.unsplash.com/photo-1788860175608-eb26d18f437c?auto=format&fit=crop&w=900&q=80",
      description: "Clean, humane desert farming providing fresh white broiler chicken across the UAE."
    }
  ],

  team: [
    {
      role: "Managing Director",
      responsibility: "Overall leadership, business strategy, commercial vision, and executive management oversight.",
      icon: "Briefcase"
    },
    {
      role: "Farm Manager",
      responsibility: "Supervision and seamless coordination of daily farm operations across all 25 farm locations in Al Ain.",
      icon: "ShieldCheck"
    },
    {
      role: "Veterinary Support",
      responsibility: "Poultry health monitoring, disease prevention, nutritional balance, and veterinary guidance for flock care.",
      icon: "Stethoscope"
    },
    {
      role: "Accountant",
      responsibility: "Accounting records, financial transactions, compliance reporting, and administrative governance.",
      icon: "Calculator"
    },
    {
      role: "Sales Executive",
      responsibility: "Customer communication, sales coordination, order fulfillment, and B2B commercial partnership development.",
      icon: "Users"
    }
  ],

  faqs: [
    {
      q: "Where is Aamir Al Wagan Poultry Farm located?",
      a: "Our central operations and farms are based in Al Wagan, Al Ain, Abu Dhabi, United Arab Emirates. We operate across 25 dedicated farm locations centred around Al Wagan, Abu Samrah, Al Arad, and Al Jazeera."
    },
    {
      q: "Is your chicken 100% Halal certified?",
      a: "Yes, absolutely. All processing is carried out in our state-of-the-art in-house slaughterhouse strictly following Islamic Halal slaughter guidelines and supervised under ADAFSA food safety regulations."
    },
    {
      q: "What regulatory certifications do you hold?",
      a: "We hold a Commercial Trade Licence issued by the Abu Dhabi Department of Economic Development (ADDED) and a No Objection Certificate (NOC) issued by the Abu Dhabi Agriculture and Food Safety Authority (ADAFSA)."
    },
    {
      q: "What is your daily production and processing capacity?",
      a: "Our 100 poultry sheds have an aggregate capacity of over 2,000,000 birds. Our modern in-house processing line has a capacity of 4,000 birds per hour, backed by an annual feed manufacturing capacity of 10,000 tonnes."
    },
    {
      q: "Can businesses request customized cuts and packaging?",
      a: "Yes. In addition to whole fresh chilled chickens, we offer tailored B2B contracts including specific weight-graded birds, portioned cuts, modified atmosphere packaging (MAP), and custom labeling for food distributors and HORECA clients."
    },
    {
      q: "How do you guarantee cold-chain freshness?",
      a: "From the in-house slaughterhouse to customer delivery, our poultry is maintained between 0°C and 4°C in temperature-monitored refrigerated trucks, guaranteeing farm-to-table freshness within hours of processing."
    }
  ]
};
