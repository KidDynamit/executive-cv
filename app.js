/* ==========================================================================
   DAVID GIGUÈRE — EXECUTIVE SPORTS CARD CV CONTROLLER
   - Premium Pill Overall Rating badge at bottom center
   - Location (Canada • Montréal) at top
   - Realistic stat ratings & Google HR standard
   ========================================================================== */

const PASSCODES = {
  DAVID2026: "default",
  GOOGLE2026: "google",
  AWS2026: "amazon",
  AMAZON2026: "amazon",
  PERION2026: "default"
};

const TARGET_PRESETS = {
  default: {
    id: "default",
    name: "Enterprise Tech",
    badge: "GLOBAL TECH LEAD",
    accent: "#2563eb",
    accentGlow: "rgba(37, 99, 235, 0.25)",
    tagline: {
      en: "High-Scale AdTech Systems, Global Team Leadership & Platform Revenue Growth",
      fr: "Systèmes AdTech Haute Échelle, Leadership d'Équipe Global & Croissance Revenus"
    },
    pillars: {
      en: ["27-Country Operations", "$20M+ DSP Revenue", "15x Publisher Expansion"],
      fr: ["Opérations dans 27 Pays", "Revenu DSP > 20M$", "Expansion Éditeurs x15"]
    }
  },
  google: {
    id: "google",
    name: "Google / Alphabet",
    badge: "GOOGLE RECRUITER PRESET",
    accent: "#1a73e8",
    accentGlow: "rgba(26, 115, 232, 0.25)",
    tagline: {
      en: "Scaling Complex AdTech Platforms, API Integrations & Data-Driven Revenue",
      fr: "Passage à l'Échelle de Plateformes AdTech, Intégrations API & Revenus"
    },
    pillars: {
      en: ["Large-Scale Platforms", "Cross-Functional Execution", "Data-Driven Results"],
      fr: ["Plateformes Grande Échelle", "Exécution Multidisciplinaire", "Résultats Chiffrés"]
    }
  },
  amazon: {
    id: "amazon",
    name: "Amazon / AWS",
    badge: "AMAZON / AWS PRESET",
    accent: "#d97706",
    accentGlow: "rgba(217, 119, 6, 0.25)",
    tagline: {
      en: "Customer Obsession & Ownership across 27-Country Enterprise Operations",
      fr: "Obsession Client & Sens des Responsabilités dans 27 Pays"
    },
    pillars: {
      en: ["Customer Obsession", "Earn Trust & Lead Teams", "Deliver High-Scale Results"],
      fr: ["Obsession Client", "Gagner la Confiance & Leadership", "Livrer des Résultats"]
    }
  }
};

const CANDIDATE_INFO = {
  name: "David Giguère",
  location: "Canada • Montréal",
  email: "davidgiguere21@gmail.com",
  phone: "+1 418-932-1720",
  linkedin: "https://linkedin.com/in/mrgiguere/",
  avatarUrl: "./david_avatar.jpg",
  languagesSpoken: {
    en: "Bilingual (English & French)",
    fr: "Bilingue (Français & Anglais)"
  }
};

const POSITIONS = {
  pm: {
    id: "pm",
    code: "PM",
    title: {
      en: "Product Manager",
      fr: "Product Manager (Directeur Produit)"
    },
    ovr: 91,
    stats: {
      DSP: { 
        label: { en: "DSP Strategy & Revenue", fr: "Stratégie & Revenus DSP" }, 
        value: 94,
        detail: { en: "Owned Hivestack's #1 revenue engine generating $20M+/yr with >30% YoY growth.", fr: "Propriétaire du moteur de revenu principal (>20M$/an, croissance >30%/an)." }
      },
      ANA: { 
        label: { en: "Usage Analytics", fr: "Analytique d'Usage" }, 
        value: 92,
        detail: { en: "Data-driven feature optimization based on real user behavior & platform metrics.", fr: "Optimisation produit axée sur les données réelles et comportements utilisateurs." }
      },
      SPEC: { 
        label: { en: "Technical Specs", fr: "Spécifications Techniques" }, 
        value: 91,
        detail: { en: "Translating complex market requirements into clear engineering specifications.", fr: "Traduction des besoins marchés en spécifications d'ingénierie claires." }
      },
      EXEC: { 
        label: { en: "Cross-Functional Mgmt", fr: "Gestion Multidisciplinaire" }, 
        value: 89,
        detail: { en: "Directing agile engineering teams on strategic multi-month product releases.", fr: "Direction d'équipes d'ingénierie agiles sur des livraisons stratégiques." }
      },
      DEL: { 
        label: { en: "Agile Delivery", fr: "Livraison Agile" }, 
        value: 86,
        detail: { en: "Delivered proprietary bidders, DCO triggers, and pacing algorithms.", fr: "Livraison d'enchérisseurs propriétaires, déclencheurs DCO et algorithmes." }
      },
      RES: { 
        label: { en: "Market Research", fr: "Études de Marché" }, 
        value: 83,
        detail: { en: "Grounded background in consumer economics and quantitative analysis.", fr: "Formation solide en économie commerciale et recherches quantitatives." }
      }
    },
    topTraits: {
      en: ["$20M+ DSP Platform Owner", ">30% YoY Revenue Growth", "15x Publisher Ad Server Expansion", "Cross-Functional Team Mgmt"],
      fr: ["Responsable Platforme DSP >20M$", "Croissance >30%/an", "Expansion Ad Server x15 (3M$+)", "Gestion d'Équipes Multidisciplinaires"]
    },
    summary: {
      en: "Product Manager managing Hivestack's #1 revenue driver: the Demand-Side Platform (DSP) generating $20M+/year with >30% YoY growth. Scaled publisher ad server net revenue from $200K to $3M+ (15x growth) across 20+ enterprise media partners.",
      fr: "Product Manager responsable du moteur financier principal : la plateforme DSP (>20M$/an avec >30% de croissance). Expansion de l'Ad Server éditeur de 200k$ à plus de 3M$ net sur 20+ grands médias."
    },
    keyMetrics: [
      { label: { en: "Core DSP Revenue", fr: "Revenu Moteur DSP" }, value: "$20M+ / Year" },
      { label: { en: "Annual Growth Rate", fr: "Taux de Croissance YoY" }, value: "> 30% YoY" },
      { label: { en: "Publisher Rev Expansion", fr: "Expansion Revenu Éditeurs" }, value: "15x ($200K ➔ $3M+)" }
    ]
  },
  cs: {
    id: "cs",
    code: "CS",
    title: {
      en: "Customer Success & Lead TAM",
      fr: "Succès Client & Lead TAM"
    },
    ovr: 92,
    stats: {
      GLO: { 
        label: { en: "27-Country Operations", fr: "Opérations 27 Pays" }, 
        value: 96,
        detail: { en: "Directed global TAM teams across Americas, EMEA, and APAC regions.", fr: "Direction des équipes TAM régionales (Amériques, EMEA, APAC)." }
      },
      ACC: { 
        label: { en: "Key Account Mgmt", fr: "Gestion Grands Comptes" }, 
        value: 93,
        detail: { en: "Managed supply accounts generating $10M+ gross annual revenue.", fr: "Gestion des comptes éditeurs clés générant plus de 10M$ brut." }
      },
      ESC: { 
        label: { en: "SLA & Escalation Mgmt", fr: "Gestion SLAs & Escalades" }, 
        value: 90,
        detail: { en: "Ensured 99.9% platform uptime and rapid enterprise issue resolution.", fr: "Garantie de conformité SLA et résolution rapide des escalades." }
      },
      ADV: { 
        label: { en: "Executive Relationships", fr: "Relations Exécutives" }, 
        value: 89,
        detail: { en: "Supported global agency holdco workflows (WPP, Dentsu, Talon).", fr: "Support des flux connectés aux plus grandes agences (WPP, Dentsu, Talon)." }
      },
      ONB: { 
        label: { en: "Technical Onboarding", fr: "Intégration Technique" }, 
        value: 87,
        detail: { en: "Authored global API onboarding & technical documentation from scratch.", fr: "Rédaction de zéro de toute la documentation d'intégration API." }
      },
      TEAM: { 
        label: { en: "Regional Team Mgmt", fr: "Gestion Équipes Régionales" }, 
        value: 85,
        detail: { en: "Standardized regional execution across 6 direct global TAM reports.", fr: "Standardisation de l'exécution sur 6 TAMs régionaux directs." }
      }
    },
    topTraits: {
      en: ["Lead TAM (27 Countries)", "$10M+ Key Accounts", "Americas / EMEA / APAC Teams", "Agency HoldCo Workflows"],
      fr: ["TAM Lead (27 Pays)", "Grands Comptes > 10M$", "Équipes Amériques / EMEA / APAC", "Écosystèmes Agences HoldCos"]
    },
    summary: {
      en: "Led technical account management worldwide operating across 27 countries. Managed all publisher supply accounts generating $10M+ gross annual revenue while building regional TAM teams across Americas, EMEA, and APAC.",
      fr: "Direction des opérations TAM dans 27 pays. Gestion des comptes éditeurs générant plus de 10M$ brut et encadrement des équipes TAM régionales (Amériques, EMEA, APAC)."
    },
    keyMetrics: [
      { label: { en: "Global Operations", fr: "Opérations Mondiales" }, value: "27 Countries" },
      { label: { en: "Publisher Account Portfolio", fr: "Portefeuille Comptes Éditeurs" }, value: "$10M+ Gross Rev" },
      { label: { en: "Agency HoldCo Workflows", fr: "Flux Agences HoldCos" }, value: "WPP, Dentsu, Talon" }
    ]
  },
  sa: {
    id: "sa",
    code: "SA",
    title: {
      en: "Solutions Architecture Profile",
      fr: "Profil Architecture de Solutions"
    },
    ovr: 89,
    stats: {
      API: { 
        label: { en: "API & RTB Integrations", fr: "Intégrations API & RTB" }, 
        value: 93,
        detail: { en: "High-frequency RTB bidding and custom AdTech API endpoint design.", fr: "Design d'APIs AdTech et d'enchères RTB haute fréquence." }
      },
      DES: { 
        label: { en: "Enterprise Ad Server Design", fr: "Design Ad Server Entreprise" }, 
        value: 91,
        detail: { en: "Scaled publisher net revenue by 15x across 20+ enterprise partners.", fr: "Expansion des revenus éditeurs x15 sur 20+ médias d'envergure." }
      },
      SYS: { 
        label: { en: "System Architecture", fr: "Architecture Système" }, 
        value: 88,
        detail: { en: "Architected bidder engines, DCO triggers, and pacing algorithms.", fr: "Architecture d'enchérisseurs, déclencheurs DCO et algorithmes." }
      },
      SEC: { 
        label: { en: "Data Security & SFDC", fr: "Sécurité Données & SFDC" }, 
        value: 87,
        detail: { en: "Configured enterprise security & Coveo packages inside Salesforce.", fr: "Configuration de sécurité d'entreprise et packages SaaS SFDC." }
      },
      CLD: { 
        label: { en: "Cloud Platform Solutions", fr: "Solutions Cloud" }, 
        value: 84,
        detail: { en: "Integrated top global media owners (Astral, OUTFRONT, Scentre Group).", fr: "Intégration des plus grands médias (Astral, OUTFRONT, Scentre)." }
      },
      COD: { 
        label: { en: "Scripting & Technical Specs", fr: "Spécifications & Scripting" }, 
        value: 80,
        detail: { en: "Computer Science certificate (JS, HTML5, CSS3, Java, PHP, SQL, C#).", fr: "Certificat informatique (JS, HTML5, CSS3, Java, PHP, SQL, C#)." }
      }
    },
    topTraits: {
      en: ["Ad Server & Bidding Architecture", "API & RTB Integration Specs", "Enterprise Client Onboarding", "SFDC SaaS Packages"],
      fr: ["Architecture Ad Server & Enchères", "Spécifications API & RTB", "Intégration Clients Entreprise", "Packages SaaS SFDC"]
    },
    summary: {
      en: "Technical architecture background specializing in high-scale programmatic adtech platforms, custom DSP bidder integrations, and enterprise Ad Server implementations processing millions in revenue across 20+ media partners.",
      fr: "Parcours en architecture technique spécialisé dans les plateformes AdTech programmatiques haute échelle, l'intégration d'enchérisseurs DSP et les Ad Servers d'entreprise."
    },
    keyMetrics: [
      { label: { en: "Publisher Rev Growth", fr: "Croissance Revenu Éditeur" }, value: "15x ($200K ➔ $3M+)" },
      { label: { en: "Enterprise Media Partners", fr: "Médias Majeurs Intégrés" }, value: "20+ Global Clients" },
      { label: { en: "Global Footprint", fr: "Marchés Mondiaux" }, value: "27 Countries" }
    ]
  }
};

const CAREER_HISTORY = [
  {
    company: "Hivestack (Acquired by Perion)",
    role: {
      en: "Product Manager",
      fr: "Product Manager (Directeur Produit)"
    },
    period: "2022 – Present",
    location: "Québec / Remote (Global Operations)",
    badge: "CURRENT ROLE",
    highlight: true,
    description: {
      en: "Product Manager owning the company's primary revenue engine (DSP) generating $20M+/year with >30% YoY growth, while leading publisher ad server expansion across 20+ global enterprise clients.",
      fr: "Product Manager responsable du moteur de revenu principal (DSP > 20M$/an, croissance >30%/an) et de l'expansion de l'Ad Server chez plus de 20 grands éditeurs mondiaux."
    },
    achievements: {
      en: [
        "**DSP Core Revenue Engine ($20M+ / yr)**: Managed end-to-end product strategy for the company's primary revenue driver, sustaining **>30% YoY revenue growth**.",
        "**Publisher Ad Server Expansion**: Scaled publisher client base from 3-4 to **20+ enterprise publishers**, expanding net revenue from **$200K to $3M+** (15x growth). Integrated top global media owners including **Astral (Canada)**, **OUTFRONT Media (US)**, and **Scentre Group (Australia)**.",
        "**AdTech Feature Delivery**: Defined specifications for a proprietary Bidder, Dynamic Creative Optimization (DCO) triggers, complex pacing algorithms, RTB integrations, and omnichannel DSP features.",
        "**Cross-Functional Team Leadership**: Guided agile engineering teams on multi-month strategic platform projects while translating market demand into clear engineering specifications."
      ],
      fr: [
        "**Moteur de Revenu DSP (> 20M$ / an)** : Direction de la stratégie produit du moteur financier principal, maintenant une **croissance > 30% par an**.",
        "**Expansion d'Ad Server Éditeur** : Croissance du portefeuille éditeurs de 3-4 à **plus de 20 clients d'envergure**, faisant passer les revenus nets de **200k$ à plus de 3M$** (multiplié par 15). Intégration des plus grands éditeurs mondiaux (**Astral**, **OUTFRONT Media**, **Scentre Group**).",
        "**Livraison de Fonctionnalités AdTech** : Définition des spécifications d'un enchérisseur propriétaire (Bidder), déclencheurs DCO, algorithmes de pacing et intégrations RTB.",
        "**Leadership d'Équipes Multidisciplinaires** : Encadrement d'équipes d'ingénierie agiles sur des projets stratégiques majeurs, traduisant les besoins d'affaires en spécifications techniques nettes."
      ]
    },
    techTags: ["Product Strategy", "DSP Platform", "Ad Server", "RTB Bidding", "Pacing Algorithms", "DCO Triggers"]
  },
  {
    company: "Hivestack (Acquired by Perion)",
    role: {
      en: "Lead Technical Account Manager (Global)",
      fr: "Lead Technical Account Manager (Mondial)"
    },
    period: "2020 – 2022",
    location: "Global (27 Countries)",
    badge: "PROMOTION",
    highlight: true,
    description: {
      en: "Promoted to lead all publisher technical account management worldwide. Managed key publisher supply accounts generating $10M+ in annual gross revenue across 27 countries.",
      fr: "Promu pour diriger l'ensemble de la gestion de comptes techniques éditeurs à l'échelle mondiale. Gestion des comptes clés générant plus de 10M$ de revenu brut annuel dans 27 pays."
    },
    achievements: {
      en: [
        "**Worldwide Operations (27 Countries)**: Built and directed regional TAM teams across **Americas, EMEA, and APAC** (2 TAMs per region).",
        "**Key Publisher Portfolio ($10M+ Gross Rev)**: Managed top tier supply partners ensuring 99.9% platform uptime, rapid technical onboarding, and SLA compliance.",
        "**HoldCo & Agency Synergy**: Supported technical workflows connected to major global agency holdcos including **WPP, Dentsu, and Talon** serving Fortune 500 campaigns.",
        "**Standardization & Documentation**: Authored global onboarding, API integration, and troubleshooting documentation from scratch, standardizing team execution."
      ],
      fr: [
        "**Opérations Mondiales (27 Pays)** : Direction des équipes TAM régionales dans les **Amériques, EMEA et APAC** (2 TAMs par région).",
        "**Portefeuille Éditeurs Majeur (> 10M$ brut)** : Gestion des partenaires stratégiques garantissant la conformité SLA et une intégration rapide.",
        "**Écosystème Agences HoldCos** : Support technique des flux connectés aux plus grandes agences mondiales (**WPP, Dentsu, Talon**).",
        "**Standardisation & Documentation** : Rédaction de la documentation d'intégration API, onboarding et dépannage."
      ]
    },
    techTags: ["27 Countries", "Lead TAM", "API Onboarding", "SLA Management", "Global HoldCos", "Publisher Supply"]
  },
  {
    company: "Coveo",
    role: {
      en: "Product Specialist / Technical Support",
      fr: "Spécialiste Produit / Support Technique"
    },
    period: "2018 – 2020",
    location: "Québec, QC",
    badge: "PREVIOUS ROLE",
    highlight: false,
    description: {
      en: "Provided technical support and API configurations for Coveo's enterprise suite of Machine Learning search engines and Usage Analytics.",
      fr: "Support technique et configurations d'APIs pour la suite d'ingénierie de recherche IA/ML et d'Analytique d'Usage chez Coveo."
    },
    achievements: {
      en: [
        "**Complex API & Data Security**: Handled complex REST API requests and security configurations for enterprise clients.",
        "**Salesforce Ecosystem**: Implemented and configured Coveo SaaS packages directly inside Salesforce (SFDC)."
      ],
      fr: [
        "**APIs Complexes & Sécurité** : Traitement de requêtes API complexes et configuration de sécurité pour entreprises.",
        "**Écosystème Salesforce** : Implémentation de packages SaaS Coveo dans Salesforce (SFDC)."
      ]
    },
    techTags: ["ML Search Engines", "Usage Analytics", "REST APIs", "Salesforce (SFDC)", "Data Security"]
  },
  {
    company: "Hilti",
    role: {
      en: "Account Manager",
      fr: "Gestionnaire de Comptes"
    },
    period: "2015 – 2017",
    location: "Québec, QC",
    badge: "SALES",
    highlight: false,
    description: {
      en: "Managed B2B client portfolio, identified up-selling and cross-selling opportunities, and achieved quarterly sales quotas.",
      fr: "Gestion de portefeuille clients B2B, identification des opportunités de vente croisée et atteinte des quotas trimestriels."
    },
    achievements: {
      en: ["Achieved sales quotas while driving product adoption through consultative account management."],
      fr: ["Atteinte des objectifs commerciaux et maximisation de l'adoption produit."]
    },
    techTags: ["Account Management", "Quotas", "B2B Sales", "Customer Adoption"]
  },
  {
    company: "Vibrant Marketing",
    role: {
      en: "Brand Ambassador",
      fr: "Ambassadeur de Marque"
    },
    period: "2013 – 2015",
    location: "Québec, QC",
    badge: "COMMUNICATIONS",
    highlight: false,
    description: {
      en: "Demonstrated product value at live events and communicated clear product specs to prospective clients.",
      fr: "Démonstration de la valeur produit lors d'événements et communication des spécifications aux prospects."
    },
    achievements: {
      en: ["Achieved event sales quotas and mastered client communication skills."],
      fr: ["Réalisation des quotas événementiels et maîtrise de la communication client."]
    },
    techTags: ["Product Communication", "Client Relationship", "Event Sales"]
  }
];

const EDUCATION = [
  {
    institution: "University of Montréal",
    degree: {
      en: "Certificate in Computer Sciences",
      fr: "Certificat en Sciences Informatiques"
    },
    period: "2017 – 2018",
    details: ["JavaScript (ES6+)", "HTML5 & CSS3", "Java", "PHP & SQL", "C# / Object Oriented"]
  },
  {
    institution: "Laval University",
    degree: {
      en: "Bachelor's Degree in Business Administration (B.A.A.)",
      fr: "Baccalauréat en Administration des Affaires (B.A.A.)"
    },
    period: "2012 – 2014",
    details: ["Business Economics", "Consumer Behavior & Psychometrics", "Quantitative Analytics", "Strategic Management"]
  }
];

// App State
let currentLang = 'en';
let currentRole = 'pm';
let currentPreset = 'default';
let isUnlocked = false;
let radarChartInstance = null;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initApp() {
  initUrlParams();
  setupEventListeners();
  checkAuth();
}

function initUrlParams() {
  const params = new URLSearchParams(window.location.search);
  
  if (params.get('lang') === 'fr') currentLang = 'fr';
  
  const roleParam = params.get('role');
  if (roleParam && POSITIONS[roleParam]) {
    currentRole = roleParam;
  }
  
  const coParam = params.get('co');
  if (coParam && TARGET_PRESETS[coParam]) {
    currentPreset = coParam;
  }

  const avatarParam = params.get('avatar');
  if (avatarParam) {
    CANDIDATE_INFO.avatarUrl = avatarParam;
  }
  
  const passParam = params.get('pass');
  if (passParam) {
    const input = document.getElementById('passcode-input');
    if (input) input.value = passParam;
    validatePasscode(passParam);
  }
}

function checkAuth() {
  try {
    const sessionUnlocked = sessionStorage.getItem('david_cv_unlocked');
    if (sessionUnlocked === 'true') {
      unlockApp();
    }
  } catch (e) {}
}

function validatePasscode(code) {
  const trimmed = (code || '').trim().toUpperCase();
  if (PASSCODES[trimmed]) {
    currentPreset = PASSCODES[trimmed];
    try {
      sessionStorage.setItem('david_cv_unlocked', 'true');
    } catch (e) {}
    unlockApp();
  } else {
    const card = document.querySelector('.gate-card');
    if (card) {
      card.classList.add('error-shake');
      setTimeout(() => card.classList.remove('error-shake'), 500);
    }
  }
}

function unlockApp() {
  isUnlocked = true;
  const gate = document.getElementById('password-gate');
  if (gate) gate.classList.add('unlocked');
  renderAll();
}

function setupEventListeners() {
  const form = document.getElementById('passcode-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = document.getElementById('passcode-input').value;
      validatePasscode(val);
    });
  }

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'fr' : 'en';
      renderAll();
    });
  }

  const presetSelect = document.getElementById('preset-select');
  if (presetSelect) {
    presetSelect.addEventListener('change', (e) => {
      currentPreset = e.target.value;
      renderAll();
    });
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const role = e.currentTarget.dataset.role;
      if (POSITIONS[role]) {
        currentRole = role;
        renderAll();
      }
    });
  });

  const futCard = document.getElementById('fut-card');
  if (futCard) {
    futCard.addEventListener('mousemove', (e) => {
      const rect = futCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 16;
      const rotateY = (x / rect.width) * 16;
      futCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    futCard.addEventListener('mouseleave', () => {
      futCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });

    futCard.addEventListener('click', () => {
      const timelineSection = document.getElementById('timeline-section');
      if (timelineSection) {
        timelineSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const expandBtn = document.getElementById('expand-profile-btn');
  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      const timelineSection = document.getElementById('timeline-section');
      if (timelineSection) {
        timelineSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const shareBtn = document.getElementById('share-link-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', generateShareableLink);
  }
}

function renderAll() {
  if (!isUnlocked) return;

  applyPresetTheme();
  renderHeader();
  renderPresetBanner();
  renderPlayerCard();
  renderHoverPopover();
  renderRoleSummary();
  renderSkillRadar();
  renderTimeline();
  renderEducation();
}

function applyPresetTheme() {
  document.body.setAttribute('data-preset', currentPreset);
  const presetData = TARGET_PRESETS[currentPreset] || TARGET_PRESETS.default;
  document.documentElement.style.setProperty('--accent-color', presetData.accent);
  document.documentElement.style.setProperty('--accent-glow', presetData.accentGlow);
}

function renderHeader() {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'en' ? '🇨🇦 EN | FR' : '🇨🇦 FR | EN';
  }

  const presetSelect = document.getElementById('preset-select');
  if (presetSelect) {
    presetSelect.value = currentPreset;
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    const roleKey = btn.dataset.role;
    if (roleKey === currentRole) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    const labelSpan = btn.querySelector('.tab-label');
    if (labelSpan && POSITIONS[roleKey]) {
      labelSpan.textContent = POSITIONS[roleKey].title[currentLang];
    }
  });
}

function renderPresetBanner() {
  const banner = document.getElementById('preset-banner');
  if (!banner) return;

  const preset = TARGET_PRESETS[currentPreset] || TARGET_PRESETS.default;
  const companyName = preset.name;
  const tagline = preset.tagline[currentLang];
  const pillars = preset.pillars[currentLang];

  banner.innerHTML = `
    <h3>⚡ ${preset.badge}: ${companyName}</h3>
    <p>• ${tagline}</p>
    <div style="display: flex; gap: 6px; margin-left: 10px;">
      ${pillars.map(p => `<span class="pillar-tag" style="background: #f1f5f9; color: var(--accent-color); font-size: 11px; padding: 2px 10px; border-radius: 12px; font-weight: 700;">${p}</span>`).join('')}
    </div>
  `;
}

/* Metallic Pill Bottom Overall Badge */
function renderPlayerCard() {
  const pos = POSITIONS[currentRole];
  const futCard = document.getElementById('fut-card');
  if (!futCard) return;

  const statsHtml = Object.keys(pos.stats).map(key => {
    const stat = pos.stats[key];
    const lbl = stat.label[currentLang];
    const val = stat.value;
    return `
      <div class="attr-item">
        <span class="attr-val">${val}</span>
        <span class="attr-lbl">${lbl}</span>
        <div class="attr-bar-mini">
          <div class="attr-bar-fill" style="width: ${val}%;"></div>
        </div>
      </div>
    `;
  }).join('');

  futCard.innerHTML = `
    <div class="card-header-clean">
      <div class="location-tag-clean">
        <span>📍 ${CANDIDATE_INFO.location}</span>
      </div>
      <div style="font-size: 10px; font-weight: 800; color: var(--accent-color); background: rgba(37, 99, 235, 0.08); padding: 4px 8px; border-radius: 6px;">
        ${TARGET_PRESETS[currentPreset].name}
      </div>
    </div>

    <div class="candidate-avatar-frame">
      <img src="${CANDIDATE_INFO.avatarUrl}" alt="${CANDIDATE_INFO.name}" onclick="promptGooglePhoto()" title="Click to change profile photo URL" />
      <span class="avatar-update-btn" onclick="promptGooglePhoto()">📷 Change Photo</span>
    </div>

    <h2 class="player-name">${CANDIDATE_INFO.name}</h2>
    <p class="player-subtitle">${pos.title[currentLang]}</p>

    <div class="card-divider"></div>

    <div class="attributes-grid">
      ${statsHtml}
    </div>

    <div class="card-bottom-ovr-centered">
      <span style="font-size: 14px; color: var(--accent-color);">★</span>
      <span class="ovr-score-large">${pos.ovr}</span>
      <span class="ovr-label-text">OVERALL</span>
    </div>
  `;
}

function renderHoverPopover() {
  const container = document.querySelector('.card-perspective-container');
  if (!container) return;

  let popover = document.getElementById('card-hover-popover');
  if (!popover) {
    popover = document.createElement('div');
    popover.id = 'card-hover-popover';
    popover.className = 'card-hover-popover';
    container.appendChild(popover);
  }

  const pos = POSITIONS[currentRole];
  const itemsHtml = Object.keys(pos.stats).map(key => {
    const stat = pos.stats[key];
    return `
      <div class="popover-item">
        <div class="popover-item-title">
          <span>${stat.label[currentLang]}</span>
          <span style="color: var(--accent-color); font-family: var(--font-jersey); font-size: 18px;">${stat.value}</span>
        </div>
        <p class="popover-item-desc">${stat.detail[currentLang]}</p>
      </div>
    `;
  }).join('');

  popover.innerHTML = `
    <div class="popover-header">
      <h4>🔍 ${pos.title[currentLang]} Metric Details</h4>
      <span style="font-size: 11px; color: var(--accent-color); font-weight: 700;">Hover Card Detail</span>
    </div>
    ${itemsHtml}
  `;
}

window.promptGooglePhoto = function() {
  const newUrl = prompt(
    currentLang === 'en' 
      ? 'Paste your photo URL:' 
      : 'Collez l\'URL de votre photo :'
  );
  if (newUrl && newUrl.trim()) {
    CANDIDATE_INFO.avatarUrl = newUrl.trim();
    renderPlayerCard();
  }
};

function renderRoleSummary() {
  const pos = POSITIONS[currentRole];
  const summaryBox = document.getElementById('role-summary-content');
  if (!summaryBox) return;

  const metricsHtml = pos.keyMetrics.map(m => `
    <div class="metric-card">
      <div class="val">${m.value}</div>
      <div class="lbl">${m.label[currentLang]}</div>
    </div>
  `).join('');

  const traitsHtml = pos.topTraits[currentLang].map(t => `
    <span class="tech-tag" style="font-size: 11px; padding: 6px 14px; margin-right: 6px; margin-bottom: 6px; display: inline-block;">
      ★ ${t}
    </span>
  `).join('');

  summaryBox.innerHTML = `
    <div class="role-summary-box">
      <h2>🎯 ${pos.title[currentLang]} <span style="font-family: var(--font-jersey); font-size: 32px; color: var(--accent-color); margin-left: 8px;">${pos.ovr} OVR</span></h2>
      <p class="role-desc">${pos.summary[currentLang]}</p>
    </div>

    <div class="metrics-row">
      ${metricsHtml}
    </div>

    <div style="margin-top: 16px;">
      ${traitsHtml}
    </div>
  `;
}

function renderSkillRadar() {
  const canvas = document.getElementById('skillRadarCanvas');
  if (!canvas) return;

  const pos = POSITIONS[currentRole];
  const labels = Object.keys(pos.stats).map(k => pos.stats[k].label[currentLang]);
  const dataValues = Object.keys(pos.stats).map(k => pos.stats[k].value);

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  if (typeof window.Chart !== 'undefined') {
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 10,
      canvas.width / 2, canvas.height / 2, 120
    );
    gradient.addColorStop(0, 'rgba(37, 99, 235, 0.4)');
    gradient.addColorStop(0.6, 'rgba(16, 185, 129, 0.35)');
    gradient.addColorStop(1, 'rgba(245, 158, 11, 0.3)');

    radarChartInstance = new window.Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: `${pos.code} Grounded Rating`,
          data: dataValues,
          backgroundColor: gradient,
          borderColor: '#2563eb',
          borderWidth: 2.5,
          pointBackgroundColor: ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#3b82f6', '#ec4899'],
          pointBorderColor: '#ffffff',
          pointHoverBackgroundColor: '#ffffff',
          pointHoverBorderColor: '#2563eb',
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(0, 0, 0, 0.08)', lineWidth: 1.5 },
            grid: { color: 'rgba(0, 0, 0, 0.06)', lineWidth: 1 },
            pointLabels: {
              color: '#1e293b',
              font: { family: 'Plus Jakarta Sans', size: 11, weight: '800' }
            },
            ticks: {
              display: true,
              min: 50,
              max: 100,
              stepSize: 10,
              color: '#94a3b8',
              backdropColor: 'transparent',
              font: { size: 9, weight: '700' }
            }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  const itemsHtml = CAREER_HISTORY.map(item => {
    const roleTitle = item.role[currentLang];
    const description = item.description[currentLang];
    const bullets = item.achievements[currentLang].map(b => {
      const formatted = b.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return `<li>${formatted}</li>`;
    }).join('');

    const tagsHtml = item.techTags.map(t => `<span class="tech-tag">${t}</span>`).join('');

    return `
      <div class="timeline-item ${item.highlight ? 'highlight' : ''}">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <h3 class="role-title">${roleTitle}</h3>
              <p class="company-name">🏢 ${item.company}</p>
            </div>
            <span class="period-badge">📅 ${item.period}</span>
          </div>

          <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px; font-style: italic;">
            ${description}
          </p>

          <ul class="bullet-list">
            ${bullets}
          </ul>

          <div class="tags-row">
            ${tagsHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = itemsHtml;
}

function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container) return;

  const eduHtml = EDUCATION.map(edu => `
    <div class="edu-card">
      <h4>🎓 ${edu.degree[currentLang]}</h4>
      <p>🏛️ ${edu.institution} | ${edu.period}</p>
      <div class="edu-tags">
        ${edu.details.map(d => `<span class="edu-tag">${d}</span>`).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = eduHtml;
}

function generateShareableLink() {
  const pass = currentPreset === 'google' ? 'GOOGLE2026' : (currentPreset === 'amazon' ? 'AWS2026' : 'DAVID2026');
  const url = `${window.location.origin}${window.location.pathname}?co=${currentPreset}&role=${currentRole}&lang=${currentLang}&pass=${pass}`;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      alert(currentLang === 'en' 
        ? `Link copied to clipboard!\n\n${url}`
        : `Lien copié dans le presse-papier !\n\n${url}`);
    }).catch(() => {
      prompt(currentLang === 'en' ? 'Copy your customized link:' : 'Copiez votre lien personnalisé :', url);
    });
  } else {
    prompt(currentLang === 'en' ? 'Copy your customized link:' : 'Copiez votre lien personnalisé :', url);
  }
}
