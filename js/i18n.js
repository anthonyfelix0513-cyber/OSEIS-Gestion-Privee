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
    ["« Une expertise de Banque Privée au service de votre stratégie patrimoniale »", "“Private Banking expertise at the service of your wealth strategy”"],
    ["Dans un monde de plus en plus complexe et incertain", "In an increasingly complex and uncertain world, your wealth needs consistency, direction and security. Founded by Franck Bonin, former CEO of Société Générale Private Banking Switzerland, OSEIS Gestion Privée draws on solid experience in wealth management in France and internationally. It informs a demanding approach to advice, attentive to your objectives and to the long-term strength of your wealth."],
    ["Une vision d'ensemble de votre patrimoine", "A complete view of your wealth"],
    ["Vos investissements, vos projets de vie", "Your investments, your life plans and your financing choices are all strategic orientations that call for particular attention. We help you bring them together in a wealth strategy that combines expertise, performance and security."],
    ["Notre rôle", "Our role"],
    ["Vous éclairer dans vos décisions", "To guide you in your decisions and coordinate their implementation. To do so, we rely on a small number of leading international partners, able to select the best investment solutions and provide tailored financing."],
    ["Notre savoir-faire", "Our expertise"],
    ["Une double compétence", "A dual skill set"],
    ["Ingénierie patrimoniale", "Wealth engineering"],
    ["Une maîtrise approfondie de l'ingénierie patrimoniale", "In-depth mastery of French and international wealth engineering, to structure and optimise complex estates. It serves discerning clients who wish to secure their wealth in complete confidentiality."],
    ["Vision internationale", "International perspective"],
    ["Une vision internationale de la gestion d'actifs", "An international perspective on asset management and structured financing. It allows us to choose, with full independence, the partners best suited to provide you with the best investment and tailored financing solutions."],
    ["Notre méthode", "Our method"],
    ["Un accompagnement en trois temps", "Support in three stages"],
    ["Comprendre", "Understand"],
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
    ["« Un patrimoine bien conduit est un cap", "“Well-managed wealth is a compass: it gives freedom today and peace of mind tomorrow.”"],
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
    if (tag === "SCRIPT" || tag === "STYLE" || tag.toLowerCase() === "svg" || el.classList.contains("lang") || el.classList.contains("nav-toggle")) return;
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
