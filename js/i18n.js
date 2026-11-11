// Traduction FR → EN. Le site est écrit en français ; chaque texte est repéré par son contenu
// français (les clés longues peuvent être abrégées à leurs ~40 premiers caractères).
// Pour ajouter une langue : ajouter un dictionnaire et une entrée dans LANGS.
(function () {
  const EN = [
    // Navigation
    ["Accueil", "Home"],
    ["Nos offres", "Our offers"],
    ["Le fondateur", "The founder"],
    ["Prendre rendez-vous", "Book a meeting"],
    ["Gestion Privée", "Wealth Management"],
    ["Informations", "Information"],
    ["Mentions légales", "Legal notice"],

    // Accueil
    ["Gestion privée, une stratégie patrimoniale durable", "Private <span>wealth management</span>, a lasting strategy"],
    ["OSEIS accompagne les familles, les dirigeants et les professions libérales", "OSEIS supports families, business owners and independent professionals in building, protecting and passing on their wealth — with rigour, independence and discretion."],
    ["Découvrir notre expertise", "Discover our expertise"],
    ["Notre objectif", "Our objective"],
    ["« Une expertise de Family Office au service de votre stratégie patrimoniale »", "“Family Office expertise at the service of your wealth strategy”"],
    ["Dans un monde de plus en plus complexe et incertain", "In an increasingly complex and uncertain world, your wealth needs consistency, direction and security. Founded by Franck Bonin, former CEO of Société Générale Private Banking Switzerland, OSEIS Gestion Privée draws on solid experience in wealth management in France and internationally. It informs a demanding approach to advice, attentive to your objectives and to the long-term strength of your wealth."],
    ["Une vision d'ensemble de votre patrimoine", "A complete view of your wealth"],
    ["Vos investissements, vos projets de vie", "Your investments, your life plans and your financing choices are all strategic orientations that call for particular attention. We help you bring them together in a wealth strategy that combines expertise, performance and security."],
    ["Notre rôle", "Our role"],
    ["Vous éclairer dans vos décisions", "To guide you in your decisions and coordinate their implementation. To do so, we rely on a small number of leading international partners, able to select the best investment solutions and provide tailored financing."],
    ["Notre savoir-faire", "Our expertise"],
    ["Une double compétence", "A dual skill set"],
    ["Ingénierie patrimoniale", "Wealth engineering"],
    ["L'ingénierie patrimoniale", "Wealth engineering"],
    ["Une maîtrise approfondie de l'ingénierie patrimoniale", "In-depth mastery of French and international wealth engineering, to structure and optimise complex estates. It serves discerning clients who wish to secure their wealth in complete confidentiality."],
    ["Vision internationale", "International perspective"],
    ["Une vision internationale de la gestion d'actifs", "An international perspective on asset management and structured financing. It allows us to choose, with full independence, the partners best suited to provide you with the best investment and tailored financing solutions."],
    ["Notre méthode", "Our method"],
    ["Un accompagnement en trois temps", "Support in three stages"],
    ["Écouter", "Listen"],
    ["Vos objectifs, votre organisation patrimoniale", "Your objectives, how your wealth is organised and the decisions ahead."],
    ["Construire", "Build"],
    ["Une feuille de route patrimoniale et une planification", "A wealth roadmap and financial plan that take your family and tax situation into account."],
    ["Accompagner", "Support"],
    ["Une présence proche à chacune de vos décisions", "Close support at each of your investment decisions."],
    ["Une approche globale de votre patrimoine", "A comprehensive approach to your wealth"],
    ["Stratégie patrimoniale", "Wealth strategy"],
    ["Bilan, objectifs et allocation d'ensemble", "Review, objectives and overall allocation of your financial, real estate and business assets."],
    ["Épargne & investissement", "Savings & investment"],
    ["Assurance-vie, portefeuille financier, immobilier", "Life insurance, financial portfolio, real estate: a selection consistent with your profile."],
    ["Transmission", "Wealth transfer"],
    ["Anticiper la donation et la succession", "Plan gifts and inheritance ahead to protect your loved ones and optimise the transfer."],
    ["Voir toute l'expertise", "See all our expertise"],
    ["« Oser anticiper aujourd'hui, c'est offrir à son patrimoine la sérénité de demain. »", "“Daring to plan ahead today means giving your wealth peace of mind tomorrow.”"],
    ["Franck BONIN — Fondateur d'OSEIS", "Franck BONIN — Founder of OSEIS"],
    ["Premier échange", "First conversation"],
    ["Parlons de votre projet", "Let’s talk about your project"],
    ["Un premier rendez-vous, sans engagement", "A first meeting, with no obligation, to review your situation and your priorities."],
    ["Nous contacter", "Contact us"],
    ["Cabinet de gestion de patrimoine fondé par Franck BONIN", "Wealth management firm founded by Franck BONIN. Rigour, independence and discretion."],
    ["Tout investissement comporte des risques", "All investments carry risk, including the risk of capital loss. Past performance is no guarantee of future results."],
    ["© 2026 OSEIS Gestion Privée — Franck BONIN. Tous droits", "© 2026 OSEIS Gestion Privée — Franck BONIN. All rights reserved."],
    ["TITLE:OSEIS Gestion Privée — Wealth Management", "OSEIS Gestion Privée — Wealth Management"],
    ["DESC:OSEIS Gestion Privée, cabinet de gestion de patrimoine", "OSEIS Gestion Privée, a wealth management firm founded by Franck BONIN. A tailored, independent and long-term approach."],

    // Expertise
    ["Notre expertise", "Our expertise"],
    ["Quatre axes pour structurer, développer et transmettre", "Four areas to structure, grow and pass on your wealth."],
    ["Organiser vos actifs personnels et professionnels", "Organise your personal and business assets, anticipate your needs and prepare their transfer."],
    ["Stratégie internationale", "International strategy"],
    ["Examiner les possibilités de détention", "Review the options for holding and managing your assets in France, Switzerland and Luxembourg."],
    ["Stratégie d'investissement", "Investment strategy"],
    ["Définir une allocation cohérente", "Define an allocation consistent with your objectives, your horizon and the risks you are willing to accept."],
    ["Financements", "Financing"],
    ["Étudier les solutions de crédit", "Study the credit solutions suited to your projects and to the balance of your wealth."],
    ["Une question sur votre situation ?", "A question about your situation?"],
    ["Échangeons lors d'un premier rendez-vous", "Let’s talk during a first meeting, with no obligation."],
    ["TITLE:Expertise — OSEIS Gestion Privée", "Expertise — OSEIS Gestion Privée"],
    ["DESC:Stratégie patrimoniale, épargne, immobilier", "Wealth strategy, savings, real estate, taxation and wealth transfer: the expertise of OSEIS Gestion Privée."],

    // Offres
    ["Un accompagnement adapté à vos décisions", "Support tailored to your decisions"],
    ["Trois formules de Family Office", "Three Family Office packages, depending on the level of follow-up you need."],
    ["Comment ça fonctionne", "How it works"],
    ["Ensemble, nous fixons le périmètre", "Together, we define the scope of the engagement, what you receive, how often we follow up and the fees. You know exactly who does what: the role of OSEIS Gestion Privée and that of the partners working alongside you."],
    ["Suivi annuel", "Annual review"],
    ["Définir votre stratégie et choisir vos partenaires", "Define your strategy and choose your partners."],
    ["Construction de la stratégie patrimoniale", "Building your wealth strategy"],
    ["Planification financière", "Financial planning"],
    ["Choix du partenaire bancaire et assurance", "Choice of banking and insurance partner"],
    ["Négociation des tarifs avec les partenaires", "Negotiation of partner fees"],
    ["Tarif", "Fee"],
    ["0,50 %", "0.50%"],
    ["0,50 % HT", "0.50% excl. VAT"],
    ["des actifs supervisés, en honoraire unique.", "of assets under supervision, as a single fee."],
    ["des actifs supervisés.", "of assets under supervision."],
    ["des actifs gérés.", "of assets under management."],
    ["Suivi semestriel", "Half-yearly review"],
    ["Coordonner votre stratégie et vos financements", "Coordinate your strategy and your financing."],
    ["Financements structurés", "Structured financing"],
    ["Honoraires annuels", "Annual fees"],
    ["Suivi trimestriel", "Quarterly review"],
    ["Approfondir l'allocation et le suivi", "Deepen the allocation and monitoring of your investments."],
    ["Allocation d'actifs", "Asset allocation"],
    ["Recommandation d'investissements", "Investment recommendations"],
    ["Transparence sur la rémunération", "Fee transparency"],
    ["Nos honoraires peuvent être réduits", "Our fees may be reduced by any retrocessions we receive, up to the amount invoiced. If a balance of retrocessions remains, it is retained by OSEIS Gestion Privée and is fully disclosed to you."],
    ["Autres missions", "Other services"],
    ["Pour une demande ciblée", "For a specific request"],
    ["Vous ne souhaitez pas un accompagnement global", "Don’t need a comprehensive Family Office service? We also take on specific needs."],
    ["Conseil en investissements financiers", "Financial investment advice"],
    ["Un avis sur l'ensemble de vos placements", "An opinion on all your investments held in securities accounts and life insurance, in strict compliance with the suitability rules between your investor profile and the recommended solutions."],
    ["Courtage en assurance-vie", "Life insurance brokerage"],
    ["Le mode de détention le mieux adapté", "The holding structure best suited to your financial assets, chosen with you from the available contracts."],
    ["Une mise en relation avec un ou plusieurs établissements de crédit", "An introduction to one or more credit institutions or payment service providers, to finance a property or a financial investment (leverage)."],
    ["Quelle offre vous correspond ?", "Which offer suits you?"],
    ["Un premier échange nous permet de définir", "A first conversation allows us to define together the scope and follow-up that suit you."],
    ["TITLE:Nos offres — OSEIS Gestion Privée", "Our offers — OSEIS Gestion Privée"],
    ["DESC:Family Office Premium, Business et First", "Family Office Premium, Business and First: the wealth support offers of OSEIS Gestion Privée, with their fees."],

    // Fondateur
    ["Fondateur d'OSEIS Gestion Privée — Family Office", "Founder of OSEIS Gestion Privée — Family Office"],
    ["Franck BONINFondateur", "Franck BONIN<small>Founder</small>"],
    ["Expert en stratégie patrimoniale internationale", "Expert in international wealth strategy"],
    ["Franck Bonin est un expert reconnu", "Franck Bonin is a recognised expert in international wealth strategy and in wealth management for UHNWI clients. With nearly 27 years of experience within the Société Générale group, he has held senior responsibilities in France, Europe and Switzerland, in contexts of transformation, growth and strategic repositioning."],
    ["Il a notamment dirigé, de 2019 à 2024", "From 2019 to 2024, he notably led Société Générale Private Banking Switzerland, an entity representing CHF 11 billion in assets under management, 300 employees and revenues of CHF 110 million. Under his leadership, the bank achieved a major financial turnaround and strengthened its positioning with an international UHNWI clientele."],
    ["Avant son expérience suisse, il a été un acteur clé", "Before his time in Switzerland, he was a key player in the development of Private Banking in France for more than 20 years. He successively served as associate director in wealth engineering, then as a private banker dedicated to UHNWI clients, and finally as sales director for France. He contributed to the growth of the entrepreneurial clientele, providing tailored answers to issues of wealth transfer, investment, governance and internationalisation. He structured complex offerings, supported major business families in their long-term projects, and led the skills development of the sales teams (350 employees, €50 billion in assets)."],
    ["Spécialiste de l'approche internationale", "A specialist in the international approach, he also led integrated set-ups across the main European financial centres (Switzerland, Luxembourg, Monaco, France) and contributed to the Group’s European strategy through a unified approach to wealthy clients."],
    ["Diplômé de SKEMA (Master Ingénierie du Patrimoine)", "A graduate of SKEMA (Master’s in Wealth Engineering), INSEAD (Growth Programme) and IMD (LEAD Programme), he was named Best CEO Private Banking Switzerland by WealthBriefing in 2022. Founder of OSEIS Gestion Privée, he acts as a Family Office for wealthy families and teaches at business schools in specialised master’s programmes at SKEMA, KEDGE and FINENCIA on international expertise, asset allocation and wealth strategy."],
    ["Rencontrer Franck BONIN", "Meet Franck BONIN"],
    ["TITLE:Franck BONIN — OSEIS Gestion Privée", "Franck BONIN — OSEIS Gestion Privée"],
    ["DESC:Franck BONIN, fondateur d'OSEIS Gestion Privée.", "Franck BONIN, founder of OSEIS Gestion Privée."],

    // Contact
    ["Un premier échange, sans engagement, pour faire le point", "A first conversation, with no obligation, to review your situation."],
    ["Échangeons", "Let’s talk"],
    ["Interlocuteur", "Contact person"],
    ["Franck BONIN — Fondateur", "Franck BONIN — Founder"],
    ["Rendez-vous", "Meetings"],
    ["En cabinet, à distance ou à votre domicile", "At the office, remotely or at your home"],
    ["Délai de réponse", "Response time"],
    ["Sous 48 heures ouvrées", "Within 48 business hours"],
    ["Nom et prénom", "Full name"],
    ["E-mail", "Email"],
    ["Téléphone (facultatif)", "Phone (optional)"],
    ["Votre besoin", "Your need"],
    ["Premier rendez-vous", "First meeting"],
    ["Transmission & succession", "Wealth transfer & inheritance"],
    ["Dirigeant / profession libérale", "Business owner / independent professional"],
    ["Autre", "Other"],
    ["Message", "Message"],
    ["J'accepte que mes informations soient utilisées", "I agree that my information may be used to respond to my request. It is neither sold nor passed on to third parties."],
    ["Envoyer ma demande", "Send my request"],
    ["Ne communiquez pas d'informations bancaires", "Please do not share sensitive banking information through this form."],
    ["TITLE:Contact — OSEIS Gestion Privée", "Contact — OSEIS Gestion Privée"],
    ["DESC:Prenez rendez-vous avec Franck BONIN", "Book a meeting with Franck BONIN, founder of OSEIS Gestion Privée."],

    // Expertise : détail des savoir-faire
    ["Financement patrimonial structuré", "Structured wealth financing"],
    ["Notre mission est de bâtir à vos côtés", "Our mission is to build, alongside you, a wealth strategy that brings consistency to your personal and business assets, anticipates your needs and prepares their transfer as well as possible. To do so, we coordinate your usual advisers — banks, asset managers, insurers, notaries, lawyers and chartered accountants — to provide you with tailored solutions."],
    ["Bilan patrimonial", "Wealth review"],
    ["Comprendre votre situation familiale et professionnelle", "Understand your family and professional situation, and analyse your assets, commitments and cash flows. This overall view is the starting point of a strategy suited to your priorities and life plans."],
    ["Organisation du patrimoine", "Organising your wealth"],
    ["Examiner l'articulation entre vos actifs personnels", "Review how your personal and business assets fit together, your liquidity needs and your holding objectives. We support your thinking, in coordination with your legal and tax advisers."],
    ["Retraite et transmission", "Retirement and wealth transfer"],
    ["Anticiper l'évolution de vos revenus", "Anticipate changes in your income, prepare the funding of your retirement and organise the transfer of your wealth with the relevant professionals."],
    ["Élargir vos possibilités d'investissement et étudier", "Broaden your investment options and study the geographic diversification of your wealth."],
    ["Vous souhaitez détenir une partie de vos actifs financiers", "You wish to hold part of your financial assets abroad or access international expertise. We support you in analysing the solutions available given your residence, your situation and the applicable regulations."],
    ["Partenaires bancaires et financiers", "Banking and financial partners"],
    ["Identifier des établissements habilités", "Identify institutions authorised to serve you in Europe, Asia or the Middle East by comparing their services, investment offering and fees. This tailored approach lets us assess the relevance of each location from a wealth and financial standpoint."],
    ["Diversification des dépositaires et des devises", "Diversifying custodians and currencies"],
    ["Examiner l'intérêt d'une répartition", "Consider the benefit of spreading assets across several institutions and currencies, taking into account your needs and currency risks."],
    ["Solutions d'assurance internationales", "International insurance solutions"],
    ["Étudier, lorsque votre situation le permet", "Where your situation allows, study life insurance or capitalisation contracts offered by insurers authorised to operate in your country of residence."],
    ["Coordination transfrontalière", "Cross-border coordination"],
    ["Intégrer les contraintes liées à votre résidence", "Factor in the constraints linked to your residence and to holding assets abroad, in coordination with your legal and tax advisers, whether you are a French resident or non-resident."],
    ["La détention d'actifs à l'étranger ne supprime pas", "Holding assets abroad does not remove your tax and reporting obligations in your country of residence."],
    ["Vous souhaitez être accompagné dans votre stratégie", "You wish to be supported in your investment strategy in order to build an allocation consistent with your objectives, investment horizon, liquidity needs and risk profile."],
    ["Nos recommandations reposent sur l'analyse", "Our recommendations are based on an analysis of your financial situation, your knowledge and experience, your risk tolerance and your capacity to bear losses. They also take your sustainability preferences into account, where applicable."],
    ["Allocation et diversification", "Allocation and diversification"],
    ["Définir une répartition entre classes d'actifs", "Define a split between asset classes (funds, ETFs, real estate funds…), regions and currencies suited to your objectives. We examine how your investments complement one another, together with their costs and risks."],
    ["Gestion sur mesure sous mandat", "Tailored discretionary management"],
    ["Vous souhaitez déléguer les décisions", "You wish to delegate investment decisions. We help you choose the management mandate that fits your expectations. We also select the most relevant partner to deliver tailored management."],
    ["Conseil en investissement", "Investment advice"],
    ["Vous souhaitez bénéficier de recommandations", "You wish to receive personalised recommendations while keeping the decision on each investment. We advise you under our CIF status, or help you select a partner offering an advisory management service."],
    ["Assurance-vie et capitalisation", "Life insurance and capitalisation contracts"],
    ["Examiner les contrats et les supports accessibles", "Review the contracts and underlying investments available in light of your savings, income and wealth-transfer objectives, taking into account how they work, their costs and their risks."],
    ["Produits structurés", "Structured products"],
    ["Vous recherchez des possibilités de revenus conditionnels", "You are looking for conditional income or capital protection on defined terms. We analyse the solutions offered by our partners, their underlying assets, costs and repayment scenarios. Coupons and any protection depend on the product's terms (underlying, level of complexity…)."],
    ["Ces investissements sont réservés à une clientèle avertie", "These investments are reserved for experienced investors, as they may result in a loss of capital and are exposed in particular to the default risk of the issuer and, where applicable, of the guarantor."],
    ["Private equity", "Private equity"],
    ["Vous souhaitez participer au financement et au développement", "You wish to take part in financing and developing unlisted companies. We select funds accessible to your investor category and financial standing, and suited to your strategy."],
    ["Ces investissements comportent un risque de perte en capital", "These investments carry a risk of capital loss and limited, or even no, liquidity, with capital that may be locked in for many years."],
    ["Nous étudions à vos côtés les financements", "We study, alongside you, the financing suited to your projects, your repayment capacity and the balance of your wealth. Our ambition is to make your transactions possible."],
    ["Dans le cadre de notre activité de courtier", "As part of our activity as a broker in banking operations and payment services (COBSP), we support you in finding banking partners and analysing the offers obtained: overall cost, term, guarantees and repayment terms."],
    ["Crédit lombard", "Lombard loan"],
    ["Vous souhaitez disposer de liquidités sans céder", "You wish to have liquidity without immediately selling some of your investments. We look for financing secured by a pledge of financial assets and assess its relevance to your situation."],
    ["Nous restons également attentifs à la bonne adéquation", "We also pay close attention to whether your level of borrowing suits your personal situation, because a fall in the value of the assets may lead to a request for additional collateral, early repayment or the sale of the pledged assets."],
    ["Financement immobilier et crédit hypothécaire", "Property financing and mortgage loans"],
    ["Vous souhaitez financer l'acquisition de votre résidence", "You wish to finance the purchase of your main or second home, or consider refinancing. We support you in finding a lender and comparing the terms offered, taking into account your income, your commitments and the guarantees required."],
    ["Mobilisation de la valeur immobilière", "Unlocking property value — Equity Release"],
    ["Vous souhaitez dégager des liquidités à partir d'un bien", "You wish to release cash from a property without selling it. We study the possibility of financing secured by a mortgage, depending on your situation and lenders' criteria."],
    ["Il s'agit d'un emprunt à rembourser", "This is a loan to be repaid, not the realisation of a capital gain. In the event of default, the property pledged as collateral may be seized and sold."],
    ["Les financements sont soumis à l'étude et à l'acceptation", "Financing is subject to review and approval by the lender. The collateral provided may limit your freedom to dispose of the assets concerned."],
    ["Aucun versement, de quelque nature que ce soit", "No payment of any kind may be required from an individual before one or more loans have been obtained."],

    // Mentions légales
    ["À compléter par OSEIS avant mise en ligne", "<span class=\"todo\">To be completed by OSEIS before going live</span> — the fields below must be filled in with the firm’s official information."],
    ["Éditeur du site", "Site publisher"],
    ["OSEIS Gestion Privée — Franck BONIN, fondateur.Forme juridique", "OSEIS Gestion Privée — Franck BONIN, founder.<br>Legal form: <span class=\"todo\">to be completed</span><br>SIREN / RCS: <span class=\"todo\">to be completed</span><br>Address: <span class=\"todo\">to be completed</span><br>Email: <span class=\"todo\">to be completed</span>"],
    ["Statut réglementaire", "Regulatory status"],
    ["Numéro ORIAS, statut (CIF, courtier en assurance", "ORIAS number, status (CIF, insurance broker, etc.), professional association, professional indemnity insurance and mediator: <span class=\"todo\">to be completed</span>."],
    ["Hébergement", "Hosting"],
    ["Site hébergé par GitHub Pages — GitHub", "Site hosted by GitHub Pages — GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States."],
    ["Données personnelles", "Personal data"],
    ["Les informations transmises via le formulaire", "Information sent through the contact form is used solely to respond to your request. Under the GDPR, you have the right to access, rectify and delete your data by writing to the address given above. This site does not use tracking cookies."],
    ["Avertissement", "Disclaimer"],
    ["Les informations de ce site sont à caractère général", "The information on this site is general in nature and does not constitute personalised advice. All investments carry risk, including the risk of capital loss."],
    ["TITLE:Mentions légales — OSEIS Gestion Privée", "Legal notice — OSEIS Gestion Privée"],
    ["DESC:Mentions légales d'OSEIS Gestion Privée.", "Legal notice of OSEIS Gestion Privée."]
  ];

  const LANGS = { fr: { code: "FR", flag: "images/flags/fr.svg" }, en: { code: "EN", flag: "images/flags/gb.svg" } };
  const norm = (s) => s.replace(/[‐‑]/g, "-").replace(/[‘’]/g, "'").replace(/[\s ]+/g, " ").trim();
  const DICT = EN.map(([k, v]) => [norm(k), v]);
  const EXACT = new Map(DICT);
  const lookup = (key) => {
    if (EXACT.has(key)) return EXACT.get(key);
    for (const [k, v] of DICT) if (k.length >= 30 && key.startsWith(k)) return v;
    return undefined;
  };

  const BLOCK = new Set(["H1", "H2", "H3", "H4", "P", "DIV", "UL", "OL", "LI", "ARTICLE", "SECTION", "ASIDE", "FIGURE", "FORM", "NAV", "HEADER", "FOOTER", "MAIN", "BLOCKQUOTE", "BUTTON", "SELECT", "SVG", "IMG"]);
  const cache = [];
  (function walk(el) {
    const tag = el.tagName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag.toLowerCase() === "svg" || el.classList.contains("lang") || el.classList.contains("nav-toggle") || el.hasAttribute("data-no-i18n")) return;
    const direct = [...el.childNodes].some((n) => n.nodeType === 3 && norm(n.textContent));
    const blockKid = [...el.children].some((c) => BLOCK.has(c.tagName.toUpperCase()));
    if (direct && !blockKid) { cache.push({ el, key: norm(el.textContent), fr: el.innerHTML }); return; }
    [...el.children].forEach(walk);
  })(document.body);

  const descEl = document.querySelector('meta[name="description"]');
  const titleFr = document.title, descFr = descEl ? descEl.content : "";

  function setLang(lang) {
    const en = lang === "en";
    for (const u of cache) {
      const t = en ? lookup(u.key) : undefined;
      if (t === undefined) { if (u.el.innerHTML !== u.fr) u.el.innerHTML = u.fr; continue; }
      if (t.includes("<")) u.el.innerHTML = t; else u.el.textContent = t;
    }
    const tt = en ? lookup("TITLE:" + norm(titleFr)) : undefined;
    document.title = tt || titleFr;
    if (descEl) { const dd = en ? lookup("DESC:" + norm(descFr)) : undefined; descEl.content = dd || descFr; }
    document.documentElement.lang = lang;
    const btn = document.querySelector(".lang-btn");
    if (btn) {
      btn.querySelector(".lang-flag").src = LANGS[lang].flag;
      btn.querySelector(".lang-code").textContent = LANGS[lang].code;
    }
    document.querySelectorAll(".lang-menu [data-lang]").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.lang === lang)));
    try { localStorage.setItem("oseis-lang", lang); } catch (e) {}
  }

  // Menu déroulant
  const btn = document.querySelector(".lang-btn"), menu = document.querySelector(".lang-menu");
  if (btn && menu) {
    const close = () => { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); };
    btn.addEventListener("click", (e) => { e.stopPropagation(); const open = menu.hidden; menu.hidden = !open; btn.setAttribute("aria-expanded", String(open)); });
    menu.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => { setLang(b.dataset.lang); close(); }));
    document.addEventListener("click", (e) => { if (!menu.contains(e.target)) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  let start = "fr";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    start = (q && LANGS[q]) ? q : (localStorage.getItem("oseis-lang") || "fr");
  } catch (e) {}
  if (!LANGS[start]) start = "fr";
  setLang(start);
})();
