export type LocaleCode = "en" | "fr";

export function localeCode(locale: string): LocaleCode {
    return locale === "fr" ? "fr" : "en";
}

export const siteCopy = {
    en: {
        nav: {
            home: "Home",
            governments: "Governments",
            businesses: "Businesses",
            individuals: "Individuals",
            contact: "Contact",
            expert: "Speak to an Expert",
        },
        footer: {
            description:
                "Our solutions are tailored to each client's unique objectives, ensuring practical, scalable, and impactful results.",
            solutionsTitle: "Our solutions",
            useCaseTitle: "Use case",
            contactTitle: "Get in touch",
            solutions: ["For fraud detection", "For expenditure rationalization", "For churn management"],
            useCases: ["For Government", "For Enterprise", "For Individual"],
            address: "173 Notre-Dame street, Winnipeg, Manitoba, Canada",
            email: "contact@ikwook.ca",
            phone: "+1 (204) 288 7874",
            privacy: "Privacy Policy",
            terms: "Terms of Use",
            rights: "© 2025 iKwook Inc. All rights reserved.",
        },
        home: {
            heroTitle: "Boost your financial performance with our AI toolbox.",
            heroSubtitle:
                "We offer robust, customizable solutions to help you increase revenue, reduce losses and rationalize costs.",
            primary: "Speak to an Expert",
            secondary: "Get a quote",
            intro:
                "We help governments, enterprises, and individuals unlock the full financial value of their data through custom AI-driven models built for measurable results.",
            scaleTitle: "Designed for Every Scale",
            scaleSubtitle:
                "Custom AI-driven models built for governments, enterprises, and individuals.",
            segments: [
                {
                    title: "Governments",
                    heading: "Maximize Public Revenue. Rationalize Spending.",
                    description:
                        "Government bodies face growing pressure to do more with less. Our AI-powered solutions help public institutions detect fiscal and customs fraud, recover lost revenues, and bring intelligence to every dollar spent.",
                    features: [
                        "Automated tax fraud detection and compliance monitoring",
                        "Intelligent analysis of public spending and budget utilization",
                        "Enhanced transparency and efficiency in fiscal management",
                    ],
                    cta: "See Government Solutions",
                },
                {
                    title: "Businesses",
                    heading: "Grow Revenue. Eliminate Waste. Retain Your Best Clients.",
                    description:
                        "Whether you are a mid-sized company or a large corporation, hidden inefficiencies and missed revenue opportunities are costing you more than you realize.",
                    features: [
                        "Revenue optimization and growth analytics",
                        "Intelligent resource allocation and operational efficiency",
                        "Data-driven forecasting and strategic decision support",
                    ],
                    cta: "See Enterprise Solutions",
                },
                {
                    title: "Individuals",
                    heading: "Personal Financial Intelligence, Built Around You.",
                    description:
                        "We believe individuals deserve the same quality of financial insight previously reserved for large institutions.",
                    features: [
                        "Streamline personal and business expenses",
                        "Identify savings opportunities and improve budgeting",
                        "Optimize business revenue and financial planning",
                    ],
                    cta: "See Individual Solutions",
                },
            ],
            approachTitle: "Our Approach — Three Phases",
            approachSubtitle:
                "Every engagement follows a rigorous methodology designed to move from raw data to operational financial intelligence.",
            phases: [
                {
                    title: "Data Foundation",
                    description:
                        "We identify, collect, consolidate and structure available data sources into a solid foundation for intelligence.",
                },
                {
                    title: "Analysis & Solution Design",
                    description:
                        "We assess your needs, map proven base models, and design the exact solution best suited to your context.",
                },
                {
                    title: "Build, Deploy & Transfer",
                    description:
                        "We deploy custom models, refine them with real-world feedback, and transfer knowledge so your team fully owns the solution.",
                },
            ],
            stats: [
                { value: "$40B+", label: "Capital Protected" },
                { value: "99.9%", label: "Model Accuracy" },
                { value: "SOC2", label: "Type II Certified" },
                { value: "15ms", label: "Response Latency" },
            ],
            teamTitle: "Built for Financial Performance. Nothing Else.",
            teamDescription:
                "Every model is custom-built, results-focused, and designed to transfer capability to your team.",
        },
        government: {
            title: "AI Solutions for Smarter Public Finance",
            subtitle:
                "We partner with government agencies at all levels to recover lost revenues and bring discipline to public spending through intelligent, auditable, and custom-built models.",
            primary: "Request a Government Briefing",
            secondary: "Explore Methodologies",
            metrics: [
                { value: "$4.2B+", label: "Assets Recovered", note: "Total identified fraud" },
                { value: "99.92%", label: "Audit Accuracy", note: "Validated by third parties" },
                { value: "+18.4%", label: "Revenue Growth", note: "Avg. portfolio increase" },
                { value: "<150ms", label: "System Response", note: "Real-time monitoring" },
            ],
            serviceTitle: "Our Two Service Areas",
            serviceSubtitle:
                "Revenue maximization and expenditure rationalization models built for public-sector accountability.",
            features: [
                {
                    title: "Sales Revenue Fraud Detection",
                    description:
                        "Analyzes declared turnover against indirect indicators such as consumption patterns, sector benchmarks, supplier transactions and employment data.",
                    metric: "Increased audit efficiency",
                },
                {
                    title: "Income-Based Tax Fraud Detection",
                    description:
                        "Cross-references declared income with employment records, financial transactions, lifestyle indicators and third-party reporting.",
                    metric: "Reduction in the tax gap",
                },
                {
                    title: "Profit-Based Fraud Detection",
                    description:
                        "Examines financial statements, related-party transactions and industry margins to surface profit-shifting schemes.",
                    metric: "Enhanced corporate compliance",
                },
                {
                    title: "Customs Fraud Detection",
                    description:
                        "Analyzes import/export declarations, shipping data, pricing references and historical patterns to prioritize inspections.",
                    metric: "Reduced customs leakage",
                },
                {
                    title: "Expenditure Fraud Detection",
                    description:
                        "Surfaces procurement fraud, false invoicing, benefits abuse and payroll manipulation through transaction pattern analysis.",
                    metric: "Stronger internal controls",
                },
                {
                    title: "Spending Quality Improvement",
                    description:
                        "Benchmarks expenditure patterns against performance outcomes to support strategic budget decisions and accountability reporting.",
                    metric: "Better policy alignment",
                },
            ],
            workflowTitle: "Business Cases",
            workflowSubtitle:
                "Government clients use iKwook to recover revenues, prioritize audits and strengthen accountability.",
            caseTitle: "Recover What Is Owed. Protect the Public Purse.",
            caseText:
                "Our revenue maximization solutions detect anomalies, identify fraudulent behavior and support enforcement teams with actionable intelligence.",
            ctaTitle: "Ready to Modernize Your Public Finance Infrastructure?",
            ctaSubtitle:
                "Schedule a secure briefing with our team to discuss revenue recovery and expenditure rationalization.",
        },
        enterprise: {
            title: "Financial Performance Intelligence for Forward-Thinking Companies",
            subtitle:
                "We help businesses uncover hidden losses, recover untapped revenue, and build the models that make financial performance a competitive advantage.",
            primary: "Schedule a Strategy Session",
            secondary: "View Case Studies",
            sectionTitle: "Our Enterprise Solutions",
            sectionSubtitle:
                "Models that produce specific, actionable intelligence tied directly to financial outcomes.",
            features: [
                {
                    title: "Resource Loss & Underutilization Detection",
                    description:
                        "Identify where value is leaking through physical waste, process inefficiency, underutilized capacity or billing gaps.",
                    metric: "Improved margin without growing revenue",
                },
                {
                    title: "Revenue Growth Through Client Intelligence",
                    description:
                        "Analyze transaction histories, engagement patterns and lifecycle data to identify high-potential clients and churn risk.",
                    metric: "Higher client lifetime value",
                },
                {
                    title: "Churn Prediction",
                    description:
                        "Early intervention intelligence for retaining valuable recurring clients.",
                    metric: "Reduced churn",
                },
                {
                    title: "Cross-Sell & Upsell Detection",
                    description:
                        "Surface the right offer at the right time using behavioral and transaction signals.",
                    metric: "More targeted growth",
                },
                {
                    title: "Operational Efficiency",
                    description:
                        "Model labor allocation, asset utilization and production losses across departments.",
                    metric: "Prioritized recovery opportunities",
                },
                {
                    title: "Strategic Forecasting",
                    description:
                        "Transform financial and operational data into forward-looking decision support.",
                    metric: "Competitive advantage",
                },
            ],
            darkTitle: "Stop Losing What You Already Have",
            darkText:
                "Hidden inefficiencies rarely appear clearly in financial statements, but they accumulate into major bottom-line impact.",
            achievementTitle: "Why Enterprises Choose Us",
            achievementText:
                "Our enterprise clients are not looking for dashboards. They are looking for answers.",
            ctaTitle: "Ready to Capture Missing Performance?",
            ctaSubtitle:
                "Schedule your custom assessment and uncover hidden financial performance opportunities.",
        },
        individuals: {
            title: "Your Financial Future Deserves Better Intelligence",
            subtitle:
                "We bring the power of AI-driven financial analysis to individuals, giving you clarity, insight and tools to make smarter decisions with your money.",
            primary: "Try a Personal Assessment",
            secondary: "View Wealth Models",
            sectionTitle: "What We Offer Individuals",
            sectionSubtitle:
                "The same quality of financial intelligence available to governments and major corporations, now accessible to you.",
            features: [
                {
                    title: "Personal Financial Performance Analysis",
                    description:
                        "Build a comprehensive model of your income, spending patterns and financial behavior.",
                },
                {
                    title: "Financial Opportunity Identification",
                    description:
                        "Identify unnecessary fees, tax positions, savings opportunities and investment behaviors that can improve.",
                },
                {
                    title: "Personalized Financial Improvement Modeling",
                    description:
                        "Map a realistic path toward your objectives using your income, goals, risk profile and obligations.",
                },
                {
                    title: "Confidential Data Handling",
                    description:
                        "Your financial data is treated with the highest standards of confidentiality.",
                },
                {
                    title: "Actionable Recommendations",
                    description:
                        "Receive recommendations grounded in your own data, not generic templates.",
                },
                {
                    title: "Knowledge Transfer",
                    description:
                        "Every model is explained clearly, transferred fully, and designed to grow with you.",
                },
            ],
            pathTitle: "How Does It Work?",
            pathSubtitle: "Our approach moves from data analysis to model design and deployment.",
            steps: [
                "Data analysis and preparation",
                "Model design and indicator definition",
                "Deployment and knowledge transfer",
                "Ongoing evolution",
            ],
            plansTitle: "Our Commitment to You",
            plansText:
                "We treat your financial data with the highest standards of confidentiality, and every model we build is yours.",
            ctaTitle: "Ready to Improve Your Financial Intelligence?",
            ctaSubtitle:
                "Take control of your finances with AI-driven analysis built around your numbers.",
        },
        contact: {
            title: "Let's Talk About Your Financial Performance Goals",
            subtitle:
                "Whether you represent a government agency, lead a business, or are an individual ready to take control of your finances, we would like to hear from you.",
            formTitle: "Contact Us",
            formSubtitle: "Tell us about your needs and our team will respond within one business day.",
            fields: {
                firstName: "First name",
                name: "Name",
                category: "Category",
                country: "Country",
                interest: "Main interest",
                language: "Language",
                email: "Email Address",
                phone: "Phone Number",
                subject: "Subject / Brief Description of Your Needs",
                message: "Message",
            },
            submit: "Send Message",
            infoTitle: "Contact Information",
            company: "iKwook Inc",
            location: "173 Notre-Dame street, Winnipeg, Manitoba, Canada",
            email: "contact@ikwook.ca",
            phone: "+1 204 698-9279",
            confidentiality:
                "All inquiries are treated with strict confidentiality. We typically respond within one business day.",
            ctaTitle: "Prepare Your Institution for the Intelligence Age",
            ctaSubtitle:
                "Request a specialized executive briefing on AI-driven financial performance.",
        },
    },
    fr: {
        nav: {
            home: "Accueil",
            governments: "Gouvernements",
            businesses: "Entreprises",
            individuals: "Particuliers",
            contact: "Contact",
            expert: "Parler à un expert",
        },
        footer: {
            description:
                "Nos solutions sont adaptées aux objectifs uniques de chaque client, afin d'assurer des résultats pratiques, évolutifs et impactants.",
            solutionsTitle: "Nos solutions",
            useCaseTitle: "Cas d'usage",
            contactTitle: "Nous contacter",
            solutions: ["Détection de fraude", "Rationalisation des dépenses", "Gestion de l'attrition"],
            useCases: ["Pour les gouvernements", "Pour les entreprises", "Pour les particuliers"],
            address: "173 rue Notre-Dame, Winnipeg, Manitoba, Canada",
            email: "contact@ikwook.ca",
            phone: "+1 (204) 288 7874",
            privacy: "Politique de confidentialité",
            terms: "Conditions d'utilisation",
            rights: "© 2025 iKwook Inc. Tous droits réservés.",
        },
        home: {
            heroTitle: "Améliorez votre performance financière avec notre boîte à outils IA.",
            heroSubtitle:
                "Nous offrons des solutions robustes et personnalisables pour vous aider à augmenter vos revenus, réduire vos pertes et rationaliser vos coûts.",
            primary: "Parler à un expert",
            secondary: "Obtenir un devis",
            intro:
                "Nous aidons les gouvernements, les entreprises et les particuliers à révéler toute la valeur financière de leurs données grâce à des modèles IA sur mesure et mesurables.",
            scaleTitle: "Conçu pour chaque échelle",
            scaleSubtitle:
                "Des modèles IA sur mesure pour les gouvernements, les entreprises et les particuliers.",
            segments: [
                {
                    title: "Gouvernements",
                    heading: "Maximiser les revenus publics. Rationaliser les dépenses.",
                    description:
                        "Les organismes publics doivent faire plus avec moins. Nos solutions IA aident à détecter la fraude fiscale et douanière, récupérer les revenus perdus et apporter de l'intelligence à chaque dollar dépensé.",
                    features: [
                        "Détection automatisée de fraude fiscale et suivi de conformité",
                        "Analyse intelligente des dépenses publiques et des budgets",
                        "Transparence et efficacité accrues dans la gestion fiscale",
                    ],
                    cta: "Voir les solutions gouvernementales",
                },
                {
                    title: "Entreprises",
                    heading: "Augmenter les revenus. Éliminer le gaspillage. Retenir vos meilleurs clients.",
                    description:
                        "Pour les PME comme pour les grandes entreprises, les inefficacités cachées et les revenus manqués coûtent plus cher qu'il n'y paraît.",
                    features: [
                        "Optimisation des revenus et analyses de croissance",
                        "Allocation intelligente des ressources et efficacité opérationnelle",
                        "Prévisions basées sur les données et soutien à la décision stratégique",
                    ],
                    cta: "Voir les solutions entreprises",
                },
                {
                    title: "Particuliers",
                    heading: "Une intelligence financière personnelle construite autour de vous.",
                    description:
                        "Nous croyons que les particuliers méritent la même qualité d'analyse financière que les grandes institutions.",
                    features: [
                        "Rationaliser les dépenses personnelles et professionnelles",
                        "Identifier les économies possibles et améliorer le budget",
                        "Optimiser les revenus d'affaires et la planification financière",
                    ],
                    cta: "Voir les solutions particulières",
                },
            ],
            approachTitle: "Notre approche — trois phases",
            approachSubtitle:
                "Chaque mandat suit une méthodologie rigoureuse, des données brutes à l'intelligence financière opérationnelle.",
            phases: [
                {
                    title: "Fondation des données",
                    description:
                        "Nous identifions, collectons, consolidons et structurons les sources de données disponibles.",
                },
                {
                    title: "Analyse et conception de solution",
                    description:
                        "Nous évaluons vos besoins, sélectionnons les modèles de base et concevons la solution adaptée à votre contexte.",
                },
                {
                    title: "Construction, déploiement et transfert",
                    description:
                        "Nous déployons les modèles, les raffinons avec le terrain et transférons les connaissances à votre équipe.",
                },
            ],
            stats: [
                { value: "$40B+", label: "Capital protégé" },
                { value: "99.9%", label: "Précision des modèles" },
                { value: "SOC2", label: "Certifié Type II" },
                { value: "15ms", label: "Latence de réponse" },
            ],
            teamTitle: "Conçu pour la performance financière. Rien d'autre.",
            teamDescription:
                "Chaque modèle est personnalisé, orienté résultats et conçu pour transférer la capacité à votre équipe.",
        },
        government: {
            title: "Solutions IA pour des finances publiques plus intelligentes",
            subtitle:
                "Nous accompagnons les agences gouvernementales pour récupérer les revenus perdus et discipliner les dépenses publiques grâce à des modèles intelligents, auditables et construits sur mesure.",
            primary: "Demander un briefing gouvernemental",
            secondary: "Explorer les méthodologies",
            metrics: [
                { value: "$4.2B+", label: "Actifs récupérés", note: "Fraude identifiée" },
                { value: "99.92%", label: "Précision d'audit", note: "Validée par des tiers" },
                { value: "+18.4%", label: "Croissance des revenus", note: "Hausse moyenne" },
                { value: "<150ms", label: "Réponse système", note: "Surveillance temps réel" },
            ],
            serviceTitle: "Nos deux domaines de service",
            serviceSubtitle:
                "Maximisation des revenus et rationalisation des dépenses pour la responsabilité publique.",
            features: [
                {
                    title: "Détection de fraude sur les revenus de ventes",
                    description:
                        "Analyse le chiffre d'affaires déclaré avec des indicateurs indirects: consommation, références sectorielles, fournisseurs et emploi.",
                    metric: "Efficacité d'audit accrue",
                },
                {
                    title: "Détection de fraude fiscale sur le revenu",
                    description:
                        "Recoupe revenus déclarés, emploi, transactions financières, indicateurs de style de vie et déclarations tierces.",
                    metric: "Réduction de l'écart fiscal",
                },
                {
                    title: "Détection de fraude sur les bénéfices",
                    description:
                        "Examine états financiers, transactions liées et marges sectorielles pour repérer les transferts de bénéfices.",
                    metric: "Conformité renforcée",
                },
                {
                    title: "Détection de fraude douanière",
                    description:
                        "Analyse déclarations import/export, expéditions, prix de référence et historiques pour prioriser les inspections.",
                    metric: "Fuites douanières réduites",
                },
                {
                    title: "Détection de fraude dans les dépenses",
                    description:
                        "Repère fraude d'approvisionnement, fausses factures, abus de prestations et manipulation de paie.",
                    metric: "Contrôles internes renforcés",
                },
                {
                    title: "Amélioration de la qualité des dépenses",
                    description:
                        "Compare les dépenses aux résultats pour soutenir les décisions budgétaires et la reddition de comptes.",
                    metric: "Meilleur alignement politique",
                },
            ],
            workflowTitle: "Cas d'affaires",
            workflowSubtitle:
                "Les clients publics utilisent iKwook pour récupérer des revenus, prioriser les audits et renforcer la responsabilité.",
            caseTitle: "Récupérer ce qui est dû. Protéger les fonds publics.",
            caseText:
                "Nos solutions détectent les anomalies, identifient les comportements frauduleux et soutiennent les équipes d'application.",
            ctaTitle: "Prêt à moderniser vos finances publiques?",
            ctaSubtitle:
                "Planifiez un briefing sécurisé sur la récupération des revenus et la rationalisation des dépenses.",
        },
        enterprise: {
            title: "Intelligence de performance financière pour entreprises visionnaires",
            subtitle:
                "Nous aidons les entreprises à révéler les pertes cachées, récupérer les revenus inexploités et bâtir des modèles qui font de la performance financière un avantage concurrentiel.",
            primary: "Planifier une session stratégique",
            secondary: "Voir les cas d'affaires",
            sectionTitle: "Nos solutions pour entreprises",
            sectionSubtitle:
                "Des modèles qui produisent une intelligence précise et actionnable, liée aux résultats financiers.",
            features: [
                {
                    title: "Détection des pertes de ressources et de sous-utilisation",
                    description:
                        "Identifie les fuites de valeur: gaspillage, inefficacités, capacité sous-utilisée ou lacunes de facturation.",
                    metric: "Marges améliorées sans croissance de revenus",
                },
                {
                    title: "Croissance des revenus par intelligence client",
                    description:
                        "Analyse historiques de transactions, engagement et cycle de vie pour détecter potentiel client et risque d'attrition.",
                    metric: "Valeur vie client accrue",
                },
                {
                    title: "Prédiction de l'attrition",
                    description:
                        "Intelligence d'intervention précoce pour retenir les clients récurrents à forte valeur.",
                    metric: "Attrition réduite",
                },
                {
                    title: "Détection de ventes croisées et incitatives",
                    description:
                        "Propose la bonne offre au bon moment grâce aux signaux comportementaux et transactionnels.",
                    metric: "Croissance plus ciblée",
                },
                {
                    title: "Efficacité opérationnelle",
                    description:
                        "Modélise l'allocation de main-d'œuvre, l'utilisation des actifs et les pertes de production.",
                    metric: "Opportunités priorisées",
                },
                {
                    title: "Prévisions stratégiques",
                    description:
                        "Transforme les données financières et opérationnelles en soutien décisionnel prospectif.",
                    metric: "Avantage concurrentiel",
                },
            ],
            darkTitle: "Cessez de perdre ce que vous avez déjà",
            darkText:
                "Les inefficacités cachées apparaissent rarement dans les états financiers, mais elles pèsent fortement sur les résultats.",
            achievementTitle: "Pourquoi les entreprises nous choisissent",
            achievementText:
                "Nos clients ne cherchent pas des tableaux de bord. Ils cherchent des réponses.",
            ctaTitle: "Prêt à capter la performance manquante?",
            ctaSubtitle:
                "Planifiez votre évaluation personnalisée et révélez les opportunités financières cachées.",
        },
        individuals: {
            title: "Votre avenir financier mérite une meilleure intelligence",
            subtitle:
                "Nous apportons l'analyse financière par IA aux particuliers pour offrir clarté, insight et outils afin de mieux décider avec votre argent.",
            primary: "Essayer une évaluation personnelle",
            secondary: "Voir les modèles patrimoniaux",
            sectionTitle: "Ce que nous offrons aux particuliers",
            sectionSubtitle:
                "La même qualité d'intelligence financière disponible pour les gouvernements et grandes entreprises, maintenant accessible à vous.",
            features: [
                {
                    title: "Analyse de performance financière personnelle",
                    description:
                        "Construit un modèle complet de vos revenus, dépenses et comportements financiers.",
                },
                {
                    title: "Identification d'opportunités financières",
                    description:
                        "Repère frais inutiles, positions fiscales, économies possibles et comportements d'investissement à améliorer.",
                },
                {
                    title: "Modélisation personnalisée d'amélioration financière",
                    description:
                        "Trace un chemin réaliste vers vos objectifs selon vos revenus, votre profil de risque et vos obligations.",
                },
                {
                    title: "Confidentialité des données",
                    description:
                        "Vos données financières sont traitées selon les plus hauts standards de confidentialité.",
                },
                {
                    title: "Recommandations actionnables",
                    description:
                        "Recevez des recommandations fondées sur vos propres données, pas des modèles génériques.",
                },
                {
                    title: "Transfert de connaissance",
                    description:
                        "Chaque modèle est expliqué clairement, transféré complètement et conçu pour évoluer avec vous.",
                },
            ],
            pathTitle: "Comment ça fonctionne?",
            pathSubtitle: "Notre approche va de l'analyse des données à la conception et au déploiement.",
            steps: [
                "Analyse et préparation des données",
                "Conception du modèle et définition des indicateurs",
                "Déploiement et transfert de connaissances",
                "Évolution continue",
            ],
            plansTitle: "Notre engagement envers vous",
            plansText:
                "Vos données financières sont traitées avec la plus grande confidentialité, et chaque modèle construit vous appartient.",
            ctaTitle: "Prêt à améliorer votre intelligence financière?",
            ctaSubtitle:
                "Prenez le contrôle de vos finances avec une analyse IA construite autour de vos chiffres.",
        },
        contact: {
            title: "Parlons de vos objectifs de performance financière",
            subtitle:
                "Que vous représentiez une agence gouvernementale, dirigiez une entreprise ou soyez un particulier prêt à reprendre le contrôle de ses finances, nous aimerions vous entendre.",
            formTitle: "Contactez-nous",
            formSubtitle: "Décrivez vos besoins et notre équipe répondra sous un jour ouvrable.",
            fields: {
                firstName: "Prénom",
                name: "Nom",
                category: "Catégorie",
                country: "Pays",
                interest: "Intérêt principal",
                language: "Langue",
                email: "Adresse courriel",
                phone: "Numéro de téléphone",
                subject: "Sujet / brève description de vos besoins",
                message: "Message",
            },
            submit: "Envoyer le message",
            infoTitle: "Coordonnées",
            company: "iKwook Inc",
            location: "173 rue Notre-Dame, Winnipeg, Manitoba, Canada",
            email: "contact@ikwook.ca",
            phone: "+1 204 698-9279",
            confidentiality:
                "Toutes les demandes sont traitées avec stricte confidentialité. Nous répondons généralement sous un jour ouvrable.",
            ctaTitle: "Préparez votre institution pour l'ère de l'intelligence",
            ctaSubtitle:
                "Demandez un briefing exécutif spécialisé sur la performance financière alimentée par l'IA.",
        },
    },
} as const;
