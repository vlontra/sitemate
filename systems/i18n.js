(() => {
  "use strict";

  // Keep the Portuguese copy in the HTML as the default and translate the same
  // text nodes in place, preserving inline icons, links and FAQ interactions.
  const en = {
    "Pular para o conteúdo": "Skip to content",
    "Início": "Home",
    "Serviços": "Services",
    "Portfólio": "Portfolio",
    "Preços": "Pricing",
    "Nossos preços": "Our pricing",
    "Mensal": "Monthly",
    "Anual": "Annually",
    "Mais popular": "Most popular",
    "Site funcional (10–20 páginas)": "Functional Website (10–20 pages)",
    "Acompanhamento automático de leads": "Automated Lead Follow Up",
    "Resposta por SMS a chamadas perdidas": "Missed Call Text Back",
    "Funil de avaliações 5 estrelas": "5-Star Magic Review Funnel",
    "Campanhas de marketing em um clique": "One-Click Marketing Campaigns",
    "SEO no site": "On-Site SEO",
    "Cobrança anual": "Annual billing",
    "Sobre": "About",
    "Agendar chamada": "Book a call",
    "Agendar Chamada": "Book a call",
    "Marketing para contratistas": "Marketing for contractors",
    "Transforme Mais Leads em Obras Fechadas.": "Turn More Leads Into Booked Jobs.",
    "Sites, acompanhamento com IA, automações e gestão de reputação criados para ajudar contratistas a gerar mais leads e agendar mais orçamentos.": "Websites, AI-powered follow-up, automation and reputation management built to help contractors generate more leads and book more estimates.",
    "Ver nosso trabalho": "See our work",
    "Reputação local": "Local reputation",
    "Novo lead recebido": "New lead received",
    "Automação ativa": "Automation active",
    "4.9/5 no Google": "4.9/5 on Google",
    "5.0/5 no Facebook": "5.0/5 on Facebook",
    "4.8/5 no Trustpilot": "4.8/5 on Trustpilot",
    "Confiável por contratistas em todo Reino Unido": "Trusted by contractors across the UK",
    "Isso é para você?": "Is this for you?",
    "Quem Ajudamos": "Who We Help",
    "Não trabalhamos com qualquer um. Parceiros com contratistas de serviços locais já estabelecidos, prontos para escalar, mas travados por fluxo de leads inconsistente e follow-ups manuais.": "We work with established local service contractors ready to grow, but held back by inconsistent leads and manual follow-up.",
    "Se você está cansado de depender apenas de indicações ou jogar dinheiro fora em agências de marketing genéricas que não entendem seu ofício, somos a equipe de infraestrutura que você estava procurando.": "If you are tired of relying only on referrals or paying generic agencies that do not understand your trade, we can build the system your business needs.",
    "Negócios estabelecidos faturando $50k+": "Established businesses earning $50k+",
    "Contratistas cansados de sites de leads compartilhados": "Contractors tired of shared lead platforms",
    "Equipes prontas para automatizar follow-up": "Teams ready to automate follow-up",
    "Donos que querem dominar a busca local": "Owners ready to stand out in local search",
    "Projetos concluídos": "Projects completed",
    "Avaliações 5 estrelas": "Five-star reviews",
    "Anos no mercado": "Years in business",
    "Crescimento médio": "Average growth",
    "Leads qualificados": "Qualified leads",
    "Serviços locais": "Local services",
    "Ofícios que Atendemos": "Trades We Serve",
    "Especializamos em serviços locais. Sabemos exatamente o que funciona para o seu setor.": "We focus on local trades and understand what works for your industry.",
    "Deslize para explorar mais especialidades": "Scroll to explore more trades",
    "Ver ofícios anteriores": "View previous trades",
    "Ver próximos ofícios": "View next trades",
    "Ofícios que atendemos": "Trades we serve",
    "Contratistas Gerais": "General Contractors",
    "Sistemas de crescimento sob medida para contratistas gerais.": "Growth systems tailored to general contractors.",
    "Reforma": "Renovation",
    "Sistemas de crescimento sob medida para reforma.": "Growth systems tailored to renovation businesses.",
    "Telhados": "Roofing",
    "Sistemas de crescimento sob medida para telhados.": "Growth systems tailored to roofers.",
    "Pintura": "Painting",
    "Sistemas de crescimento sob medida para pintura.": "Growth systems tailored to painters.",
    "Limpeza": "Cleaning",
    "Sistemas de crescimento sob medida para limpeza.": "Growth systems tailored to cleaning businesses.",
    "Paisagismo": "Landscaping",
    "Sistemas de crescimento sob medida para paisagismo.": "Growth systems tailored to landscapers.",
    "Serviços de Árvores": "Tree Services",
    "Mais oportunidades para poda e cuidados com árvores.": "More enquiries for tree care and pruning.",
    "Decks e Pátios": "Decks & Patios",
    "Mais projetos para decks e áreas externas.": "More deck and outdoor living projects.",
    "Construção de Piscinas": "Pool Construction",
    "Mais clientes para projetos de piscinas.": "More customers for pool projects.",
    "Pisos e Estruturas Externas": "Hardscaping",
    "Mais projetos de alvenaria e áreas externas.": "More masonry and outdoor projects.",
    "Revestimento de Fachadas": "Exterior Cladding",
    "Mais serviços de cladding e fachadas.": "More cladding and exterior work.",
    "Pavimentação": "Paving",
    "Mais trabalhos em entradas e pavimentos.": "More driveway and paving jobs.",
    "Janelas e Portas": "Windows & Doors",
    "Mais instalações e substituições de janelas e portas.": "More window and door installations and replacements.",
    "Banho e Tosa": "Dog Grooming",
    "Mais agendamentos para cuidados com pets.": "More bookings for pet care.",
    "Construção de Casas": "Home Building",
    "Mais projetos para construtores residenciais.": "More projects for home builders.",
    "Lavagem de Alta Pressão": "Pressure Washing",
    "Mais serviços de limpeza externa.": "More exterior cleaning jobs.",
    "Mudanças": "Moving Companies",
    "Mais pedidos de orçamento para mudanças.": "More quote requests for removals.",
    "Controle de Pragas": "Pest Control",
    "Mais chamadas para inspeção e tratamento.": "More calls for inspections and treatment.",
    "Limpeza de Pisos e Carpetes": "Floor & Carpet Cleaning",
    "Mais agendamentos para limpeza especializada.": "More specialist cleaning bookings.",
    "Encanamento": "Plumbing",
    "Mais chamados para instalações e reparos.": "More installation and repair enquiries.",
    "Manutenção Geral": "Handyman Services",
    "Mais clientes para pequenos reparos.": "More customers for everyday repairs.",
    "Climatização": "HVAC",
    "Mais instalações e manutenção de sistemas HVAC.": "More HVAC installations and servicing.",
    "Eletricistas": "Electricians",
    "Mais chamados para serviços elétricos.": "More electrical service enquiries.",
    "Sistema completo": "One complete system",
    "O Que Você Recebe": "What You Get",
    "Tudo o que você precisa para dominar sua área local, integrado em um sistema poderoso.": "Everything you need to grow locally, connected in one powerful system.",
    "Site de Alta Conversão": "High-Converting Website",
    "Não é apenas um cartão de visitas digital. É uma máquina de geração de leads 24/7 feita para o seu ofício.": "More than a digital business card: a 24/7 lead-generation website built for your trade.",
    "Carrega em menos de 2 segundos": "Loads in under two seconds",
    "Otimizado para converter visitantes mobile": "Optimised to convert mobile visitors",
    "Botões de chamada e orçamento em 1 clique": "One-tap call and quote buttons",
    "Ver Demo do Site": "See the Website Demo",
    "Funil de Avaliações 5 Estrelas": "Five-Star Review System",
    "Sua reputação é seu maior ativo. Automatizamos a coleta de avaliações logo após cada trabalho concluído.": "Your reputation is your greatest asset. We automate review requests after each completed job.",
    "Filtra avaliações negativas antes de irem públicas": "Routes negative feedback to your team first",
    "SMS automáticos pedindo feedback": "Automated feedback request texts",
    "Integração direta com Google Business Profile": "Direct Google Business Profile integration",
    "Ver Funil de Avaliações": "See the Review System",
    "Resposta de Chamada Perdida": "Missed-Call Text Back",
    "Pare de perder clientes só porque você estava no telhado ou com as mãos sujas.": "Stop losing customers because you were on a roof or busy on a job.",
    "SMS automático imediato se você perder uma chamada": "Instant text reply when you miss a call",
    "Mantém o cliente engajado para não ligar para o concorrente": "Keeps the customer engaged before they call a competitor",
    "Responda pelo app quando estiver livre": "Reply in the app when you are free",
    "Ver Resposta em Ação": "See It in Action",
    "Conversa automática após uma chamada perdida": "Automated conversation after a missed call",
    "Resposta automática ativa": "Automatic reply active",
    "Chamada perdida": "Missed call",
    "Hoje, 14:32": "Today, 14:32",
    "Olá! Aqui é da Northline Roofing. Não conseguimos atender sua ligação agora. Como podemos ajudar?": "Hi! This is Northline Roofing. We couldn't answer your call just now. How can we help?",
    "Oi! Preciso de um orçamento para reparar meu telhado.": "Hi! I need a quote to repair my roof.",
    "Claro. Qual é o seu postcode para verificarmos a disponibilidade?": "Of course. What's your postcode so we can check availability?",
    "Novo lead capturado": "New lead captured",
    "Escrever mensagem…": "Write a message…",
    "Resposta enviada em 4 segundos": "Reply sent in 4 seconds",
    "O cliente continua engajado": "The customer stays engaged",
    "SEO Local Otimizado": "Local SEO",
    "Apareça no topo das buscas quando alguém na sua cidade procura seu serviço.": "Help customers find you when they search for your trade nearby.",
    "Páginas de serviço por cidade": "Service pages for each area",
    "Sem taxas de retenção abusivas": "No excessive retainer fees",
    "Ver Resultados de SEO Local": "See Local SEO Results",
    "Painel ilustrativo mostrando evolução de posicionamento local no Google": "Illustrative dashboard showing local Google ranking growth",
    "Resultados locais": "Local results",
    "Visibilidade crescente": "Visibility growing",
    "Presente no Top 3 local": "Now in the local Top 3",
    "Posição no Google": "Google position",
    "↑ 9 posições": "↑ 9 positions",
    "Cliques": "Clicks",
    "Chamadas": "Calls",
    "Você entrou no Top 3": "You reached the Top 3",
    "Busca local em crescimento": "Local search visibility growing",
    "Sem enrolação": "Straightforward process",
    "Como Funciona": "How It Works",
    "Lançamos seu novo sistema em menos de duas semanas.": "We launch your new system in under two weeks.",
    "Chamada de Diagnóstico": "Discovery Call",
    "20 minutos": "20 minutes",
    "Entendemos seu negócio, seus gargalos e definimos a estratégia exata para sua área.": "We learn about your business and define the right strategy for your area.",
    "Construímos seu sistema": "We Build Your System",
    "7 - 10 dias": "7–10 days",
    "Nossa equipe constrói seu site, configura automações, integrações e prepara o SEO.": "Our team builds your website, sets up automations and integrations, and prepares your SEO.",
    "Chamada de Lançamento": "Launch Call",
    "25 minutos": "25 minutes",
    "Entregamos as chaves. Mostramos como usar o app e ligar a máquina de leads.": "We hand over your system and show you how to use the app and manage incoming leads.",
    "O jeito GroundWorks": "The GroundWorks way",
    "Por Que Somos Diferentes?": "Why We're Different",
    "Chega de agências que prometem o mundo e entregam dor de cabeça.": "No more agencies that overpromise and underdeliver.",
    "Sem Contratos ou Retainers": "No Long-Term Contracts",
    "Você fica porque funciona, não porque um papel te obriga.": "Stay because it works, not because a contract locks you in.",
    "Sem Termos Técnicos": "No Confusing Jargon",
    "Falamos sua língua. Sem métricas de vaidade, focamos no lucro no seu bolso.": "We speak plainly and focus on results that matter to your business.",
    "Prova Real de Resultados": "Real Results",
    "Sistemas testados e validados por dezenas de contratistas antes de chegar a você.": "Systems tested and validated by dozens of contractors before reaching you.",
    "Simples de Usar": "Simple to Use",
    "Um único app no seu celular para gerenciar todos os leads, mensagens e avaliações.": "One mobile app to manage your leads, messages and reviews.",
    "“Nós não apenas construímos sites. Construímos a infraestrutura que permite aos contratistas parar de se preocupar de onde virá o próximo trabalho, e começar a focar em escalar o negócio.”": "“We don't just build websites. We build the systems that help contractors spend less time worrying about their next job and more time growing their business.”",
    "Co-Fundador": "Co-Founder",
    "Pronto para crescer?": "Ready to grow?",
    "Vamos Construir o Seu Negócio com a Reputação que Ele Merece": "Build the Business and Reputation You Deserve",
    "Uma conversa rápida para entender seu momento e desenhar o sistema certo.": "A quick conversation to understand your goals and find the right system.",
    "Tudo esclarecido": "Everything, explained",
    "Perguntas Frequentes": "Frequently Asked Questions",
    "Respostas diretas antes de você decidir dar o próximo passo.": "Clear answers before you take the next step.",
    "Quanto custa?": "How much does it cost?",
    "O plano Contractor Advanced custa £99 por mês ou £990 por ano. Sem taxas escondidas.": "Contractor Advanced costs £99 per month or £990 per year. No hidden fees.",
    "Vocês trabalham com qualquer contratista?": "Do you work with every contractor?",
    "Especializamos em negócios de serviço local já estabelecidos e que querem escalar. Geralmente não trabalhamos com empresas recém-criadas.": "We focus on established local service businesses looking to grow. We generally do not work with brand-new companies.",
    "Quanto tempo leva para lançar?": "How long does launch take?",
    "A maioria dos nossos sistemas, incluindo um site novo de alta conversão, entra no ar em 7 a 10 dias após a chamada de diagnóstico.": "Most systems, including a new high-converting website, launch 7–10 days after the discovery call.",
    "Meu site vai funcionar bem no celular?": "Will my website work well on mobile?",
    "Com certeza. Mais de 60% das buscas de serviços locais acontecem no mobile. Todo site que construímos é mobile-first e otimizado para velocidade.": "Absolutely. More than 60% of local service searches happen on mobile. Every website we build is mobile-first and optimised for speed.",
    "O que preciso fornecer para começar?": "What do I need to get started?",
    "Apenas algumas fotos dos seus projetos, seu logo e informações básicas. Cuidamos de todo o copywriting, design e configuração técnica.": "Just a few project photos, your logo and basic business details. We handle the copy, design and technical setup.",
    "Resultados reais": "Real results",
    "Ainda Não Está Convencido?": "Need More Convincing?",
    "Mantemos contratistas com a agenda cheia através de sites de alta conversão e sistemas de marketing automatizado.": "We help contractors stay busy with high-converting websites and automated marketing systems.",
    "Navegação": "Navigation",
    "Empresa": "Company",
    "Contato": "Contact",
    "Política de Privacidade": "Privacy Policy",
    "Termos e Condições": "Terms & Conditions",
    "Redes Sociais": "Social Media",
    "© GroundWorks 2026. Todos os direitos reservados.": "© GroundWorks 2026. All rights reserved.",
    "Voltar ao topo ↑": "Back to top ↑",
    "Contratista recebendo um novo lead pelo celular": "Contractor receiving a new lead on his phone",
    "Cinco estrelas": "Five stars",
    "Contratistas gerais em planejamento de obra": "General contractors planning a project",
    "Profissionais trabalhando em uma reforma": "Professionals working on a renovation",
    "Profissional trabalhando em um telhado": "Roofer working on a roof",
    "Profissional realizando serviço de pintura": "Painter working on a project",
    "Profissional realizando serviço de limpeza": "Cleaner at work",
    "Profissional realizando serviço de paisagismo": "Landscaper at work",
    "Arborista podando uma árvore": "Tree surgeon pruning a tree",
    "Construção de deck de madeira em jardim": "Timber deck being built in a garden",
    "Piscina residencial recém-construída": "Newly built residential pool",
    "Instalação de pedras em área externa": "Stone paving being laid outdoors",
    "Instalação de revestimento em fachada": "Exterior cladding being installed",
    "Pavimentação de entrada residencial": "Residential driveway paving",
    "Instalação de janela em residência": "Window installation at a home",
    "Profissional cuidando de um cachorro": "Dog groomer caring for a dog",
    "Casa residencial recém-construída": "Newly built house",
    "Limpeza de pátio com jato de alta pressão": "Pressure washing a patio",
    "Equipe de mudança transportando caixas": "Moving team carrying boxes",
    "Técnico de controle de pragas inspecionando uma casa": "Pest control technician inspecting a home",
    "Profissional limpando carpete em residência": "Professional carpet cleaning at a home",
    "Encanador reparando tubulação sob pia": "Plumber repairing pipes beneath a sink",
    "Profissional instalando prateleiras": "Handyman fitting shelves",
    "Técnico fazendo manutenção em ar-condicionado": "Technician servicing an air conditioner",
    "Eletricista instalando tomada": "Electrician installing an outlet",
    "Exemplo de site de alta conversão para contratistas": "Example of a high-converting contractor website",
    "Funil de avaliações exibido em um celular": "Review system displayed on a phone",
    "Contratista atendendo uma chamada durante o trabalho": "Contractor answering a call while working",
    "Planejamento de páginas para SEO local": "Planning local SEO service pages",
    "Empresas atendidas": "Companies served",
    "Navegação principal": "Main navigation",
    "GroundWorks Systems — Início": "GroundWorks Systems — Home"
  };

  const normalise = (value) => value.replace(/\s+/g, " ").trim();
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.parentElement || node.parentElement.closest("script, style, svg, [data-i18n-dynamic]")) continue;
    const original = node.nodeValue;
    if (normalise(original)) textNodes.push({ node, original, key: normalise(original) });
  }

  const attributes = [];
  document.querySelectorAll("[alt], [aria-label]").forEach((element) => {
    for (const name of ["alt", "aria-label"]) {
      if (element.hasAttribute(name)) attributes.push({ element, name, original: element.getAttribute(name) });
    }
  });

  const titlePt = document.title;
  const description = document.querySelector('meta[name="description"]');
  const descriptionPt = description?.content;
  let language;
  try { language = localStorage.getItem("groundworks-language") === "en" ? "en" : "pt"; }
  catch { language = "pt"; }

  function applyLanguage() {
    document.documentElement.lang = language === "en" ? "en-GB" : "pt-BR";
    textNodes.forEach(({ node, original, key }) => {
      if (language === "pt" || !en[key]) { node.nodeValue = original; return; }
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      node.nodeValue = leading + en[key] + trailing;
    });
    attributes.forEach(({ element, name, original }) => {
      element.setAttribute(name, language === "en" ? (en[normalise(original)] || original) : original);
    });
    document.title = language === "en"
      ? (document.body.classList.contains("pricing-page")
        ? "GroundWorks Systems — Pricing"
        : "GroundWorks Systems — Marketing systems for contractors")
      : titlePt;
    if (description) description.content = language === "en"
      ? (document.body.classList.contains("pricing-page")
        ? "Contractor Advanced pricing: £99 monthly or £990 annually. See what is included and book a call."
        : "High-converting websites and automated marketing systems for local contractors.")
      : descriptionPt;
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.textContent = language === "pt" ? "EN" : "PT";
      button.setAttribute("aria-label", language === "pt" ? "Mudar idioma para inglês" : "Switch language to Portuguese");
    });
    const callMessage = language === "pt"
      ? "Olá! Quero agendar uma chamada sobre o GroundWorks Systems."
      : "Hello! I'd like to book a call about GroundWorks Systems.";
    document.querySelectorAll('[data-whatsapp="call"]').forEach((link) => {
      link.href = `https://wa.me/447404400524?text=${encodeURIComponent(callMessage)}`;
    });
    const navToggle = document.querySelector("[data-nav-toggle]");
    if (navToggle) navToggle.setAttribute("aria-label", language === "en"
      ? (navToggle.getAttribute("aria-expanded") === "true" ? "Close menu" : "Open menu")
      : (navToggle.getAttribute("aria-expanded") === "true" ? "Fechar menu" : "Abrir menu"));
    document.dispatchEvent(new CustomEvent("groundworks:languagechange", { detail: { language } }));
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      language = language === "pt" ? "en" : "pt";
      try { localStorage.setItem("groundworks-language", language); } catch { /* Storage is optional. */ }
      applyLanguage();
    });
  });

  applyLanguage();
})();
