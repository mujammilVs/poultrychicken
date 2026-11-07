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
    hero: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1600&q=80", // Modern bio-secure flock
    heroFarm: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80", // Al Ain agricultural landscape
    aboutFarm: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80", // Modern farm sheds & infrastructure
    slaughterhouse: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80", // Ultra-clean hygienic processing & testing
    feedMill: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=1200&q=80", // Feed grain & nutrition
    coldLogistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80", // Temperature-controlled transport
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
      image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80",
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
      title: "Planning",
      desc: "Flock placement cycles, production scheduling, and market demand coordination across all 25 farm locations in Al Ain.",
      icon: "Calendar"
    },
    {
      step: 2,
      title: "Procurement",
      desc: "Rigorous procurement of high-grade raw grains, veterinary supplies, climate equipment, and essential farm inputs.",
      icon: "ShoppingBag"
    },
    {
      step: 3,
      title: "Daily Management",
      desc: "Routine shed climate monitoring, balanced feeding, pure water supply, biometrics tracking, and real-time record keeping.",
      icon: "Activity"
    },
    {
      step: 4,
      title: "Health & Biosecurity",
      desc: "Close avian veterinary surveillance, preventative sanitization gates, and adherence to ADAFSA biosecurity protocols.",
      icon: "ShieldAlert"
    },
    {
      step: 5,
      title: "Processing & Handling",
      desc: "Careful handling and preparation in our in-house slaughterhouse (4,000 birds/hr) adhering to highest hygiene standards.",
      icon: "CheckCircle"
    },
    {
      step: 6,
      title: "Dispatch",
      desc: "Refrigerated cold-chain fleet dispatch, timely route planning, and guaranteed fresh delivery across Abu Dhabi, Dubai, and UAE.",
      icon: "Truck"
    }
  ],

  facilities: [
    {
      title: "100 Poultry Sheds",
      desc: "State-of-the-art poultry sheds across 25 strategic locations in Al Ain with climate control, automated feeding, and 2 million bird capacity.",
      stat: "100 Sheds",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=700&q=80",
      icon: "Building"
    },
    {
      title: "Feed Production Facility",
      desc: "Dedicated feed manufacturing mill producing tailored, balanced, nutritious poultry feed to support continuous, self-sufficient farm growth.",
      stat: "10,000 t / Year",
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=700&q=80",
      icon: "Wheat"
    },
    {
      title: "Feed Storage Silos",
      desc: "Modern climate-protected storage silos for the safe storage and pest-free handling of grain and poultry feed reserves.",
      stat: "Continuous Reserve",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=700&q=80",
      icon: "Database"
    },
    {
      title: "Water Supply & Filtration",
      desc: "Comprehensive deep water well testing, reverse osmosis purification, and distribution network providing pure water to every shed.",
      stat: "24/7 Pure Flow",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=700&q=80",
      icon: "Droplets"
    },
    {
      title: "Modern Farm Machinery",
      desc: "Dedicated equipment rooms, backup generators, temperature monitoring sensors, and automated ventilation machinery.",
      stat: "Automated Agritech",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=700&q=80",
      icon: "Wrench"
    },
    {
      title: "In-house Slaughterhouse",
      desc: "Modern processing facility capable of hygienically processing 4,000 birds per hour under strict veterinary and Halal inspection.",
      stat: "4,000 Birds / Hr",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
      icon: "Zap"
    },
    {
      title: "Cold Chain Logistics Fleet",
      desc: "Refrigerated transport fleet maintaining unbroken cold chains from processing directly to customer facilities across the UAE.",
      stat: "0°C - 4°C Maintained",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
      icon: "Truck"
    },
    {
      title: "Supporting Infrastructure",
      desc: "Administrative offices, staff quarters, veterinary diagnostic laboratory, and biosecurity sanitation vehicle wash bays.",
      stat: "25 Locations",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=700&q=80",
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
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
      highlights: ["Central Veterinary Lab", "Main Slaughterhouse (4k/hr)", "Central Dispatch Fleet"]
    },
    {
      id: "abu-samrah",
      name: "Abu Samrah Hub",
      role: "High-Capacity Growing Center",
      shedCount: "25 Sheds",
      locationDesc: "North-West Al Ain corridor",
      specialty: "Controlled Environment Broiler Rearing",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
      highlights: ["Automated Climate Controls", "Dual Biosecurity Gates", "Independent Water RO Plant"]
    },
    {
      id: "al-arad",
      name: "Al Arad Hub",
      role: "Feed Production & Sustainable Operations",
      shedCount: "20 Sheds",
      locationDesc: "Eastern Al Ain pastoral zone",
      specialty: "Feed Milling & Dedicated Broiler Infrastructure",
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80",
      highlights: ["10,000t Feed Mill Facility", "Grain Storage Silos", "Solar Energy Pilot Sheds"]
    },
    {
      id: "al-jazeera",
      name: "Al Jazeera Hub",
      role: "Bio-Protected Rearing Center",
      shedCount: "20 Sheds",
      locationDesc: "Strategic Al Ain green perimeter",
      specialty: "High-Biosecurity Quarantine & Raising Facilities",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80",
      highlights: ["Ultra-low Density Rearing", "ADAFSA Priority Audited", "Strict Perimeter Isolation"]
    }
  ],

  futureInitiatives: [
    {
      number: "01",
      title: "Goat Farming",
      desc: "Establishing goat farming operations focused on breeding, rearing, and supplying healthy goats for quality meat and related products.",
      image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Developing dedicated modern facilities for goat breeding and ethical rearing.",
        "Maintaining proper animal health, organic nutrition, and dedicated veterinary care.",
        "Ensuring hygienic handling and adherence to national quality standards."
      ],
      icon: "Compass",
      badge: "Upcoming Expansion"
    },
    {
      number: "02",
      title: "Fish Farming (Aquaculture)",
      desc: "Developing sustainable fish farming and aquaculture operations to produce and supply fresh, high-quality fish for UAE consumers.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Establishing suitable freshwater fish farming facilities and recirculating systems.",
        "Implementing advanced water quality management and bio-secure fish health systems.",
        "Developing rapid harvesting and cold-distribution channels."
      ],
      icon: "Fish",
      badge: "Upcoming Expansion"
    },
    {
      number: "03",
      title: "Agricultural Farming",
      desc: "Expanding into the cultivation of fresh vegetables and fruits using sustainable agricultural practices to support UAE food security.",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Cultivating a wide variety of seasonal fresh vegetables and orchard fruits.",
        "Adopting modern drip irrigation and hyper-efficient water conservation systems.",
        "Following integrated pest management (IPM) and residue-free crop protection.",
        "Maintaining peak nutritional quality throughout harvesting and distribution."
      ],
      icon: "Sprout",
      badge: "Upcoming Expansion"
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
