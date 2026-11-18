/* SEN Global Group — site content (sourced from data/site-content.md) */
window.SEN = {
  contact: {
    address: "No 450/1 Arcot Road, Porur, Chennai, Tamil Nadu, India – 600116",
    phone: "+91 98416 76853",
    phoneHref: "tel:+919841676853",
    email: "contactus.sengroup@yahoo.com"
  },

  packaging: [
    { name: "50 Kg Bags", desc: "Standard packaging for medium-scale applications" },
    { name: "1 Ton Jumbo Bags", desc: "Best for bulk industrial use" },
    { name: "Customized Packaging", desc: "Available upon request" }
  ],

  industries: ["Refractory", "Cement", "Glass", "Tiles", "Sanitary Ware", "Ceramics"],

  clients: [
    { name: "CUMI", sector: "Abrasives & refractories", img: "images/clients/cumi.png" },
    { name: "Chettinad Cement", sector: "Cement", img: "images/clients/chettinad.png" },
    { name: "Jyothy Labs", sector: "Consumer goods", img: "images/clients/jyothy.png" },
    { name: "ANUJ Tiles", sector: "Ceramic tiles", img: "images/clients/anuj.png" },
    { name: "BHEL", sector: "Power equipment", img: "images/clients/bhel.png" },
    { name: "Dalmia Refractories", sector: "Refractories", img: "images/clients/dalmia.png" }
  ],

  companies: [
    {
      id: "sri-venkateswara-minerals",
      name: "Sri Venkateswara Minerals",
      place: "Chennai · Gummudipoondi · Amaramedu",
      since: 1973,
      capacity: 40000,
      machinery: ["1 Rotary Kiln (Chamotte manufacturing)", "2 Ball Mills", "3 Mesh Plants"],
      img: "images/graded/plant-8583.webp",
      text: [
        "A proud member of the SEN Group of Companies and its pioneering minerals grinding and manufacturing unit. Established in 1973, the company has shaped the Group’s legacy as a trusted leader in the South Indian minerals industry.",
        "Its new state-of-the-art Chamotte plant in Gummudipoondi features a rotary kiln for high-temperature processing, strengthening the supply of high-quality refractory raw materials."
      ],
      products: ["Feldspar", "Quartz", "Chamotte", "High Alumina Grog", "Kyanite", "Manganese", "Porcelain Insulators", "Sanitary Ware Chips", "Silicon Carbide", "Cordierite", "Limestone"]
    },
    {
      id: "sri-devi-minerals",
      name: "Sri Devi Minerals",
      place: "Ambattur, Chennai · Salem",
      since: 1981,
      capacity: 24000,
      machinery: ["1 Ball Mill", "2 Three-Roller Mills"],
      img: "images/graded/plant-8566.webp",
      text: [
        "A reputed division of the SEN Group, founded in 1981 and headquartered at No. 94-C/3, 3rd Cross Street, Industrial Estate, Ambattur, Chennai – 600 058, with operations extending to Salem.",
        "Advanced manufacturing processes and strict quality checks ensure every product meets industry standards and customer expectations."
      ],
      products: ["Feldspar", "Bentonite", "Talc"]
    },
    {
      id: "sri-rajalakshmi-minerals",
      name: "Sri Rajalakshmi Minerals",
      place: "Salem",
      since: 1990,
      capacity: 6000,
      machinery: ["1 Ball Mill"],
      img: "images/graded/plant-9593.webp",
      text: [
        "Contributing to the mineral manufacturing sector since 1990. Located in Salem, the company has steadily built a reputation for reliability, precision and consistent quality in mineral processing, with a focus on operational efficiency and product integrity."
      ]
    },
    {
      id: "sri-kalaivani-minerals",
      name: "Sri Kalaivani Minerals",
      place: "Salem",
      since: 2009,
      capacity: 15000,
      machinery: ["2 Ball Mills"],
      img: "images/graded/plant-9592.webp",
      text: [
        "Serving the mineral processing industry since 2009. Its modern production setup and streamlined operations ensure efficiency, precision manufacturing, timely delivery and adherence to strict quality standards."
      ]
    },
    {
      id: "s-e-n-minerals",
      name: "S.E.N Minerals",
      place: "Salem",
      since: 1992,
      capacity: 6000,
      machinery: ["1 Ball Mill"],
      img: "images/graded/plant-9591.webp",
      text: [
        "A key subsidiary since 1992, strategically located in Salem and focused on precision grinding and mineral processing tailored to industrial standards — supporting clients with consistent output and timely service."
      ]
    }
  ],

  products: [
    {
      id: "feldspar", name: "Feldspar", hue: "#d9a48f",
      short: "A vital raw material in ceramics and glass manufacturing, feldspar enhances durability and resistance.",
      title: "High-Quality Industrial Mineral",
      img: "images/home_potassium-feldspar.webp",
      hero: "images/feldspar-2_feldspar.webp",
      intro: [
        "Feldspar is one of the most abundant minerals on Earth. It improves durability, strength and thermal resistance, making it an essential raw material in various industries.",
        "We supply premium-grade feldspar with high purity and consistent quality, carefully processed for manufacturers of tiles, glass, coatings and industrial applications — in customized grades for your industry."
      ],
      specs: [
        ["Chemical Composition", "Al₂O₃, SiO₂, K₂O/Na₂O"], ["Purity", "High-grade, minimal impurities"],
        ["Color", "White, Pink, Light Grey"], ["Physical Form", "Lumps, Granules, Powder"],
        ["Moisture Content", "≤ 1%"], ["Density", "2.55 – 2.76 g/cm³"],
        ["Hardness", "6 – 6.5 (Mohs)"], ["Melting Point", "1150°C – 1250°C"]
      ],
      types: [
        { name: "Potassium Feldspar", img: "images/home_potassium-feldspar.webp" },
        { name: "Sodium Feldspar", desc: "Higher sodium content, commonly used in coatings and paints", img: "images/feldspar-2_soda.webp" }
      ],
      apps: [
        ["Ceramics & Tiles", "Enhances strength, durability and glossiness in tiles and sanitaryware"],
        ["Glass Manufacturing", "Improves clarity, strength and melting properties"],
        ["Paints & Coatings", "Functional filler enhancing durability and weather resistance"],
        ["Refractory Industry", "Thermal resistance in high-temperature applications"],
        ["Electronics & Insulators", "Used in electrical insulators and semi-conductors"],
        ["Abrasives & Polishing", "Essential for polishing materials and industrial abrasives"]
      ],
      process: ["Mining & Extraction", "Crushing & Grinding", "Screening & Sorting", "Removing Impurities", "Quality Testing", "Packaging & Delivery"],
      why: ["High Thermal Stability", "Excellent Chemical Resistance", "Enhances Strength & Gloss", "Low Impurities", "Eco-Friendly & Non-Toxic", "Customized Solutions"]
    },
    {
      id: "quartz", name: "Quartz", hue: "#cfd3d6",
      short: "High-purity mineral widely used in glass, electronics and engineered stone surfaces for its strength.",
      title: "High-Purity Mineral for Multiple Industries",
      img: "images/products_quartz-grits.webp",
      hero: "images/quartz_quartz.jpg",
      intro: [
        "We supply high-quality quartz that meets industry standards for strength, durability and purity — carefully processed for glass, electronics, ceramics and more.",
        "Available in different and customized grades to suit your application."
      ],
      specs: [["Purity", "Up to 99.5% SiO₂"], ["Color", "White, milky, translucent or clear"], ["Form", "Lumps, grits and powder"], ["Size", "Custom sizes as per requirement"], ["Hardness", "7 (Mohs)"]],
      types: [
        { name: "Quartz Grits", desc: "Crushed and screened quartz for uniform size", img: "images/quartz_quartz-grits.png" },
        { name: "Quartz Lumps", desc: "Raw and naturally extracted quartz", img: "images/quartz_quartz-lumps.webp" },
        { name: "Quartz Powder", desc: "Finely ground quartz for industrial use", img: "images/quartz_quartz-powder.webp" }
      ],
      apps: [
        ["Glass Manufacturing", "For clear and durable glass"], ["Ceramics", "Added strength and heat resistance"],
        ["Paints & Coatings", "As a filler and for smooth texture"], ["Electronics", "Used in semiconductor components"],
        ["Construction", "Flooring, tiles and countertops"], ["Refractories", "Improves thermal resistance in furnaces"]
      ],
      process: ["Mining", "Washing & Drying", "Crushing & Grinding", "Screening", "Magnetic Separation", "Quality Testing & Packaging"],
      why: ["High purity and consistent quality", "Custom sizes available", "Reliable and timely delivery", "Processed with advanced machinery", "Eco-Friendly & Non-Toxic", "Strict quality control at every step"]
    },
    {
      id: "chamotte", name: "Chamotte", hue: "#a99a86", badge: "SEN MOTTE",
      short: "Essential for high-temperature applications, ensuring superior heat resistance in industrial processes.",
      title: "Premium Refractory Material",
      img: "images/home_sen-motte-2.webp",
      hero: "images/chamotte_sen-motte.webp",
      intro: [
        "High-quality Chamotte, also known as calcined clay, widely used in the refractory, ceramic and steel & metallurgy industries. We named our product SEN MOTTE to reflect its trusted performance and consistency.",
        "Our high-alumina chamotte is produced in our own rotary kiln at 1450°C, ensuring superior thermal resistance and mechanical strength."
      ],
      table: { head: ["Parameter", "Test Method", "Value (%)"], rows: [["Al₂O₃ (min)", "XRF", "45"], ["Fe₂O₃ (max)", "XRF", "1.5"], ["SiO₂", "XRF", "51.30"], ["CaO", "XRF", "0.38"], ["TiO₂ (max)", "XRF", "2.0"]] },
      types: [
        { name: "SEN MOTTE · Coarse", img: "images/chamotte_sen-motte-1.webp" },
        { name: "SEN MOTTE · Medium", img: "images/chamotte_sen-motte.webp" },
        { name: "SEN MOTTE · Fine", img: "images/chamotte_sen-motte-3.webp" }
      ],
      apps: [["Refractories", "Bricks, castables and furnace linings"], ["Steel & Metallurgy", "Ladles, kilns and foundry molds"], ["Ceramics", "Floor tiles and fireclay products"]],
      process: ["Raw Clay Selection", "Calcination in Rotary Kiln", "Crushing & Grinding", "Screening", "Lab Testing", "Moisture-Proof Packaging"],
      why: ["Processed in our own rotary kiln plant", "Tested for strength, durability and heat resistance", "Flexible supply in different grades and sizes", "Over 50 years of manufacturing experience", "Eco-Friendly & Non-Toxic", "Used by top refractory brands in India and abroad"]
    },
    {
      id: "bentonite", name: "Bentonite", hue: "#c2a77f",
      short: "A versatile clay mineral known for its excellent binding, absorbent and sealing properties.",
      title: "High-Quality Industrial Clay",
      img: "images/home_sodium-bentonite.webp",
      hero: "images/bentonite_bentonitesecondimage.webp",
      intro: [
        "Premium-grade bentonite — a natural clay with excellent absorption, swelling and binding properties, processed to international quality standards.",
        "Widely used in foundries, drilling, construction, agriculture and more; available in customized grades."
      ],
      specs: [["Type", "Sodium / Calcium Bentonite"], ["Swelling Capacity", "High (Sodium type)"], ["Moisture Content", "Below 12%"], ["pH Level", "8.5 – 10"], ["Form", "Powder / Granules"], ["Color", "Cream to light brown"]],
      types: [{ name: "Sodium Bentonite", img: "images/bentonite_sodium-bentonite.webp" }],
      apps: [
        ["Construction", "Waterproofing, piling and tunneling"], ["Oil & Gas", "Drilling mud for lubricating drill bits"],
        ["Foundry", "Binding agent in mold making"], ["Agriculture", "Soil conditioner and animal feed binder"],
        ["Water Treatment", "Absorbs impurities in water"], ["Cosmetics", "Face packs and creams"], ["Paper & Detergents", "Filler and absorbent"]
      ],
      process: ["Mining", "Drying & Crushing", "Grinding", "Activation", "Lab Testing", "Packaging"],
      why: ["Over 50 years of experience in mineral supply", "In-house production & quality control", "Customized grades and particle sizes", "Trusted by foundries, drilling and construction brands", "Eco-Friendly & Non-Toxic", "Timely delivery across India & exports"]
    },
    {
      id: "talc", name: "Talc", hue: "#e4e1da",
      short: "A soft mineral used in plastics, cosmetics and coatings for its smooth texture and moisture resistance.",
      title: "Soft Mineral for Industrial and Cosmetic Use",
      img: "images/home_talc.webp",
      hero: "images/talc_talc-1.webp",
      intro: [
        "Premium-grade talc — a soft, natural mineral known for its smooth texture, moisture resistance and chemical stability.",
        "Processed for plastics, paints, ceramics, paper, cosmetics and pharmaceuticals, in customized grades."
      ],
      specs: [["Form", "Powder"], ["Color", "White to off-white"], ["Purity", "Up to 98%"], ["Particle Size", "200 mesh available"], ["Moisture Content", "Below 0.8%"], ["pH Value", "8 – 10"], ["Oil Absorption", "30 – 60%"]],
      apps: [
        ["Cosmetics & Personal Care", "Face powders, body powders, deodorants"], ["Plastics & Rubber", "Filler for strength and flexibility"],
        ["Paints & Coatings", "Improves smoothness and coverage"], ["Ceramics", "Glaze, tiles and sanitaryware"],
        ["Paper Industry", "Adds smoothness and printability"], ["Pharmaceuticals", "Binding agent and lubricant"]
      ],
      process: ["Careful Mining", "Drying & Crushing", "Fine Grinding", "Purification", "Lab Testing", "Safe Packaging"],
      why: ["Sourced from trusted mines with high purity", "Customized grades and mesh sizes", "Export-quality packaging", "In-house quality testing", "Over 50 years of manufacturing experience", "Serving top cosmetics, paint and ceramic brands"]
    },
    {
      id: "limestone", name: "Limestone", hue: "#ebe7df",
      short: "A key ingredient in cement, construction and chemical industries, offering strength and versatility.",
      title: "Versatile Mineral for Multiple Industries",
      img: "images/products_agricultural-limestone.webp",
      hero: "images/home_limestone-1.png",
      intro: [
        "High-quality limestone — a naturally occurring sedimentary rock rich in calcium carbonate (CaCO₃), known for its durability, whiteness and chemical stability.",
        "Ideal for cement, construction, steel, agriculture and chemicals, in customized grades."
      ],
      specs: [["Purity", "Up to 98% CaCO₃"], ["Form", "Lumps / Powder"], ["Color", "White to light grey"], ["Moisture Content", "< 1%"], ["Mesh Size", "100 to 500 mesh"], ["Hardness", "3 (Mohs)"]],
      apps: [
        ["Cement & Construction", "Key raw material in cement and concrete"], ["Steel Manufacturing", "Flux for removing impurities"],
        ["Agriculture", "Enhances soil health and crop productivity"], ["Chemical Industry", "Lime production and water treatment"],
        ["Paint & Plastic", "Filler and pigment extender"], ["Glass & Ceramics", "Improves durability and texture"]
      ],
      process: ["Mining", "Crushing & Screening", "Grinding", "Purity Testing", "Moisture Control", "Packaging"],
      why: ["Direct sourcing from trusted quarries", "Wide range of grades and mesh sizes", "In-house purity and particle-size testing", "Suitable for domestic and export markets", "Over 50 years of manufacturing experience", "Used by top steel, cement and agro companies"]
    },
    {
      id: "cordierite", name: "Cordierite", hue: "#b9b2a6",
      short: "A heat-resistant mineral for ceramics and kiln furniture, known for low thermal expansion and durability.",
      title: "High-Performance Mineral for Thermal & Ceramic Applications",
      img: "images/cordierite_cordierite.png",
      hero: "images/cordierite_cordierite-why.png",
      intro: [
        "Cordierite is a high-temperature ceramic mineral valued for excellent thermal shock resistance, low thermal expansion and high refractoriness.",
        "We mine and process cordierite for refractories, ceramics, foundries and automotive — in customized grades."
      ],
      specs: [["Chemical Formula", "Mg₂Al₄Si₅O₁₈"], ["Color", "Greyish-blue to white"], ["Form", "Lumps, granules or powder"], ["Refractoriness", "Up to 1400 – 1450°C"], ["Thermal Expansion", "Very low"], ["Packaging", "50 kg, 1-ton jumbo, custom"]],
      apps: [
        ["Refractory Linings", "Kilns, furnaces and insulation bricks"], ["Ceramic Honeycomb Substrates", "Automotive catalytic converters"],
        ["Electrical Insulators", "High-voltage components"], ["Foundry", "Mold and core components"],
        ["Heat Shields & Radiant Panels", "Industrial burners"], ["Cookware & Ovenware", "Resistance to cracking"]
      ],
      process: ["Selective Mining", "Crushing & Screening", "Washing & Drying", "Magnetic Separation", "Particle Grading", "Quality Testing & Packaging"],
      why: ["Excellent thermal shock resistance", "Low thermal expansion", "Sourced from pure mineral zones", "Processed with advanced machinery", "Custom sizing available", "Trusted by top ceramic and refractory makers"]
    },
    {
      id: "sanitary-ware-chips", name: "Sanitary Ware Chips", hue: "#d6d3cc",
      short: "Processed ceramic chips used in manufacturing sanitary products, offering high strength and smooth finishes.",
      title: "Raw Material for Ceramics & Sanitary Products",
      img: "images/home_sanitary-ware-chips-3.webp",
      hero: "images/sanitary-ware-chips_sanitary-ware-chips.webp",
      intro: [
        "A vital raw material for ceramic sanitary products like wash basins, toilets and bathroom fittings — known for high refractoriness, strength and whiteness.",
        "Processed from selected minerals under strict quality control, in customized grades."
      ],
      specs: [["Composition", "Feldspar, quartz, kaolin & ceramic-grade minerals"], ["Color", "White to off-white"], ["Size", "0–3 mm, 3–8 mm, custom"], ["Form", "Chips / granules"]],
      types: [
        { name: "Fine Chips", img: "images/sanitary-ware-chips_sanitary-ware-chips-1.webp" },
        { name: "Coarse Chips", img: "images/sanitary-ware-chips_sanitary-ware-chips-2.webp" }
      ],
      apps: [
        ["Sanitary Ware Manufacturing", "Toilets, basins, urinals and bidets"], ["Tiles & Flooring", "Fluxing agent to improve strength"],
        ["Glaze Preparation", "Adds body and thermal resistance"], ["Porcelain Production", "Enhances whiteness and vitrification"],
        ["Bathroom Fittings", "Durability and aesthetics"]
      ],
      process: ["Raw Material Selection", "Crushing & Screening", "Washing & Drying", "Magnetic Separation", "Grading & Testing", "Quality Testing & Packaging"],
      why: ["High whiteness and purity", "Optimized chip size distribution", "Low iron content for cleaner finish", "Over 50 years of manufacturing experience", "Custom blending on request", "Trusted by top sanitary ware makers"]
    },
    {
      id: "porcelain-insulator", name: "Porcelain Insulator", hue: "#dcd8d0",
      short: "High-performance insulator material valued for mechanical strength and thermal resistance.",
      title: "High-Strength Components for Power Systems",
      img: "images/home_porcelain-insulator-3.webp",
      hero: "images/porcelain-insulator_porcelain-insulator.webp",
      intro: [
        "High-grade porcelain insulators known for mechanical strength, electrical insulation and weather resistance — essential for power transmission, distribution and substations.",
        "Designed to perform reliably even in harsh outdoor conditions; customized grades available."
      ],
      specs: [["Material", "High-quality vitrified porcelain"], ["Dielectric Strength", "≥ 60 kV/mm"], ["Mechanical Strength", "High tensile & compressive"], ["Color", "Brown, white or grey glaze"], ["Type", "Pin, disc, post & strain"], ["Temperature Resistance", "Up to 1000°C"], ["Packaging", "Export-safe crates or cartons"]],
      types: [
        { name: "Insulator Grog · Fine", img: "images/porcelain-insulator_porcelain-insulator-1.webp" },
        { name: "Insulator Grog · Coarse", img: "images/products_porcelain-insulator-2.webp" }
      ],
      apps: [
        ["Power Transmission & Distribution", "Isolating conductors on utility poles"], ["Substations", "Supporting switchgear and busbars"],
        ["Railway Electrification", "Ensuring safe current flow"], ["Industrial Plants", "Insulation in harsh environments"],
        ["Renewable Energy", "Solar and wind infrastructure"]
      ],
      process: ["Raw Material Selection", "Molding & Shaping", "Drying & Firing", "Glazing", "Quality Testing", "Packaging & Delivery"],
      why: ["High mechanical & dielectric strength", "Weatherproof, UV-resistant glaze", "For low and high voltage systems", "Over 50 years of manufacturing experience", "Custom types and sizes", "Domestic & international power projects"]
    },
    {
      id: "kyanite", name: "Kyanite", hue: "#a7aeb6",
      short: "A refractory mineral used in ceramics and foundry molds, recognized for expanding when heated.",
      title: "High-Performance Mineral for Refractory & Ceramic Applications",
      img: "images/home_kyanite.webp",
      hero: "images/kyanite_kyanite-2.webp",
      intro: [
        "Premium-grade kyanite — known for thermal stability, high alumina content and strength at high temperatures.",
        "Ideal for refractories, ceramics, foundries and other high-heat applications; customized grades available."
      ],
      specs: [["Al₂O₃ Content", "Up to 58%"], ["Color", "Blue, light blue or bluish-grey"], ["Form", "Lumps, grits and powder"], ["Size", "Customized particle sizes"], ["Bulk Density", "2.9 – 3.6 g/cm³"], ["Refractoriness", "Up to 1750°C"], ["Packaging", "50 kg, 1-ton jumbo, custom"]],
      types: [{ name: "Kyanite Grits", img: "images/products_kyanite-1.webp" }, { name: "Kyanite Fines", img: "images/kyanite_kyanite-2.webp" }],
      apps: [
        ["Refractory Industry", "Bricks, kiln linings and furnace components"], ["Ceramics", "Strength and thermal shock resistance"],
        ["Foundries", "Molds and cores resisting thermal expansion"], ["Glass Manufacturing", "High-alumina component"],
        ["Insulators", "Electrical ceramics with high dielectric strength"]
      ],
      process: ["Mining", "Crushing & Screening", "Washing & Drying", "Magnetic Separation", "Grading & Testing", "Packaging"],
      why: ["High alumina, excellent thermal stability", "Custom sizing and purity grades", "In-house testing and assurance", "Over 50 years of manufacturing experience", "Reliable global supply", "Trusted in refractories, ceramics and glass"]
    },
    {
      id: "silicon-carbide", name: "Silicon Carbide", hue: "#55585c",
      short: "A hard synthetic material ideal for abrasives and high-temperature applications.",
      title: "Superior Hardness & High-Temperature Performance",
      img: "images/home_silicon-carbide-2.webp",
      hero: "images/silicon-carbide_silicon-carbide.webp",
      intro: [
        "Silicon Carbide (SiC) is a synthetic material known for extreme hardness, high thermal conductivity and exceptional resistance to wear, corrosion and heat.",
        "Premium-grade SiC tailored for abrasives, refractories, metallurgy and electronics."
      ],
      specs: [["Purity", "Up to 98.5% SiC"], ["Color", "Black or Green"], ["Form", "Grains, powder and blocks"], ["Hardness", "9.2 – 9.5 (Mohs)"], ["Melting Point", "Over 2700°C"], ["Thermal Conductivity", "High"], ["Packaging", "50 kg, 1-ton jumbo, custom"]],
      types: [{ name: "SiC Grains", img: "images/products_silicon-carbide-1.webp" }],
      apps: [
        ["Abrasives", "Grinding wheels, cutting discs, sandpapers"], ["Refractories", "Kiln furniture, furnace linings and bricks"],
        ["Metallurgy", "Deoxidizing agent in steelmaking"], ["Ceramics", "High-performance technical ceramics"],
        ["Electronics", "Semiconductors and high-power devices"], ["Foundry", "Riser tubes, crucibles and wear parts"]
      ],
      process: ["Carbothermal Synthesis", "Crushing & Milling", "Magnetic Separation", "Particle Classification", "Quality Testing", "Packaging"],
      why: ["High purity and hardness", "Superior thermal and chemical resistance", "Grains, powder and custom mesh sizes", "Abrasive and high-temperature ready", "Over 50 years of manufacturing experience", "Reliable global delivery network"]
    },
    {
      id: "manganese", name: "Manganese", hue: "#5e5650",
      short: "A vital metal in steel production, enhancing hardness, toughness and wear resistance.",
      title: "Essential Mineral for Steel & Alloy Industries",
      img: "images/home_manganese-2.webp",
      hero: "images/manganese_manganese.webp",
      intro: [
        "High-quality manganese that strengthens steel and enhances alloy performance.",
        "With in-house mining and processing units, our manganese meets stringent standards for purity, strength and chemical composition."
      ],
      specs: [["Purity", "Up to 46% Mn"], ["Form", "Lumps, chips and fines"], ["Color", "Black, greyish-black"], ["Size", "Customizable"], ["Grades", "Ferro Mn, Silico Mn, Mn Ore"], ["Packaging", "50 kg, 1-ton jumbo, custom"]],
      types: [{ name: "Manganese Chips", img: "images/manganese_manganese-1.webp" }],
      apps: [
        ["Steel Manufacturing", "Hardness, strength & wear resistance"], ["Battery Industry", "Lithium-ion and dry cell batteries"],
        ["Ferroalloys", "Specialized steel and alloys"], ["Construction", "Durability in steel bars and structures"],
        ["Chemical Industry", "Fertilizers, pigments and animal feed"]
      ],
      process: ["Mining", "Crushing & Screening", "Washing & Drying", "Magnetic Separation", "Grading & Testing", "Packaging"],
      why: ["High-grade, reliable Mn content", "Multiple forms and sizes", "Consistent supply for all industries", "Over 50 years of manufacturing experience", "In-house processing, strict QC", "Export-ready with complete documentation"]
    },
    {
      id: "alumina-grog", name: "Alumina Grog", hue: "#c9b9a0",
      short: "Crushed alumina for refractory applications, offering thermal stability and resistance to spalling.",
      title: "High-Strength Refractory Material",
      img: "images/home_solid-calcined-alumina-grog.webp",
      hero: "images/products_calcined-alumina-grog.webp",
      intro: [
        "Alumina grog — also known as calcined bauxite — is a crushed and graded refractory aggregate made by heating bauxite ore at high temperatures.",
        "Ideal for high-temperature and wear-resistant applications in refractories, castables, ceramics and foundries."
      ],
      specs: [["Grades", "40% and 70% Alumina Grog"], ["Color", "Off-white to light brown"], ["Form", "Lumps, grains and powder"], ["Size", "Custom mesh sizes"], ["Bulk Density", "2.7 – 3.1 g/cm³"], ["Refractoriness", "> 1750°C"], ["Packaging", "50 kg, 1-ton jumbo, custom"]],
      types: [
        { name: "Solid Calcined Alumina Grog", desc: "Dense, solid alumina grog for refractories", img: "images/home_solid-calcined-alumina-grog.webp" },
        { name: "High Alumina Grog", desc: "Durable, high-temperature refractory alumina", img: "images/alumina-grog_high-alumina-grog.webp" },
        { name: "Calcined Alumina Grog", desc: "Heat-treated alumina for superior strength", img: "images/alumina-grog_calcined-alumina-grog.webp" }
      ],
      apps: [
        ["Refractory Bricks", "Strength and thermal shock resistance"], ["Monolithic Castables", "Coarse aggregate in ramming and gunning mixes"],
        ["Ceramics", "Kiln furniture and structural parts"], ["Foundry", "Mold and core materials"], ["Insulating Materials", "Durability in extreme heat"]
      ],
      process: ["Selection of Raw Bauxite", "High-Temperature Calcination", "Crushing & Screening", "Magnetic Separation", "Particle Sizing", "Final Testing & Packaging"],
      why: ["High Al₂O₃ content & thermal strength", "Custom sizing for all industries", "Thermal shock and corrosion resistance", "Consistent supply, reliable logistics", "Over 50 years of mineral expertise", "In-house testing, strict QC"]
    },
    {
      id: "ball-clay", name: "Ball Clay", hue: "#d8cdb9",
      short: "A highly plastic, fine-grained clay for tiles, sanitary ware, tableware and refractories.",
      title: "Premium Ceramic & Refractory Clay",
      img: "images/bentonite_faqbentonite.webp",
      hero: "images/bentonite_faqbentonite.webp",
      intro: [
        "Premium-quality ball clay sourced from carefully selected deposits — a highly plastic, fine-grained sedimentary clay used in ceramics, sanitary ware, tableware, tiles, refractories and electrical porcelain.",
        "Excellent plasticity, high green strength, superior binding and a light firing color. Multiple grades and particle sizes, or customized specifications."
      ],
      table: { head: ["Parameter", "Test Method", "Typical Value"], rows: [["Al₂O₃", "XRF", "25 – 35%"], ["SiO₂", "XRF", "45 – 60%"], ["Fe₂O₃", "XRF", "Below 1.5%"], ["Moisture", "Standard Test", "Below 12%"], ["Color", "Visual", "Cream to Light Grey"], ["Form", "–", "Lumps / Powder"]] },
      apps: [
        ["Ceramic Industry", "Wall, floor and vitrified tiles"], ["Sanitary Ware", "Wash basins, toilets and sinks"],
        ["Tableware & Porcelain", "Crockery and fine ceramics"], ["Refractory Industry", "Fire bricks, castables and kiln linings"],
        ["Pottery & Clay Products", "Traditional pottery and artistic ceramics"]
      ],
      process: ["Raw Material Selection", "Crushing", "Drying", "Fine Grinding", "Quality Testing", "Packaging"],
      why: ["Over 50 years of experience in mineral supply", "In-house production & quality control", "Customized grades and particle sizes", "Consistent plasticity and green strength", "Eco-Friendly & Non-Toxic", "Timely delivery across India & exports"]
    }
  ]
};
