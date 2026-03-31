// privacy.js - Script para la página de política de privacidad
document.addEventListener('DOMContentLoaded', function() {
  const texts = {
    es: {
      pageTitle: "🔒 Política de Privacidad",
      pageSubtitle: "ApplyGuard - Verificador de ofertas de trabajo",
      lastUpdate: "Última actualización: marzo 2026",
      intro: "1. INFORMACIÓN GENERAL",
      introText: "ApplyGuard se compromete a proteger la privacidad de sus usuarios. Esta política explica qué datos recopilamos, cómo los utilizamos y qué derechos tienes sobre ellos.",
      dataCollected: "2. DATOS QUE RECOPILAMOS",
      dataCollectedItems: [
        "Valoraciones y comentarios: Contenido que los usuarios publican voluntariamente sobre ofertas de trabajo.",
        "Identificadores de ofertas: URLs e IDs de las ofertas de trabajo para asociar las valoraciones.",
        "Preferencias de idioma: Para mostrar la interfaz en el idioma seleccionado.",
        "Datos técnicos anónimos: Tipo de navegador y versión de la extensión (fines estadísticos)."
      ],
      notCollected: "3. DATOS QUE NO RECOPILAMOS",
      notCollectedItems: [
        "Nombre real o apellidos",
        "Correo electrónico",
        "Dirección IP",
        "Ubicación geográfica",
        "Datos de contacto",
        "Información financiera"
      ],
      usage: "4. CÓMO UTILIZAMOS LOS DATOS",
      usageItems: [
        "Mostrar valoraciones de otros usuarios en las ofertas de trabajo.",
        "Permitir que los usuarios compartan sus experiencias laborales.",
        "Mejorar la detección de ofertas fraudulentas.",
        "Analizar tendencias de forma anónima.",
        "Personalizar la interfaz según el idioma seleccionado."
      ],
      storage: "5. ALMACENAMIENTO DE DATOS",
      storageText: "Los comentarios y valoraciones se almacenan en servidores seguros de Supabase. ApplyGuard no vende, alquila ni comparte tus datos con terceros.",
      retention: "6. CONSERVACIÓN DE DATOS",
      retentionText: "Los comentarios se conservan mientras la oferta exista o hasta que el usuario solicite su eliminación.",
      rights: "7. TUS DERECHOS",
      rightsItems: [
        "Acceder a tus comentarios",
        "Rectificar: editar tus comentarios",
        "Eliminar: solicitar eliminación a privacidad@applyguard.com",
        "Oponerte al tratamiento de tus datos",
        "Portabilidad: solicitar copia de tus datos"
      ],
      security: "8. SEGURIDAD DE LOS DATOS",
      securityText: "Implementamos medidas de seguridad para proteger tus datos. Sin embargo, ningún sistema es 100% seguro.",
      children: "9. MENORES DE EDAD",
      childrenText: "ApplyGuard no está dirigido a menores de 16 años. No recopilamos información de menores.",
      changes: "10. CAMBIOS EN ESTA POLÍTICA",
      changesText: "Podemos actualizar esta política ocasionalmente. La fecha de la última actualización está al inicio.",
      contact: "11. CONTACTO",
      contactText: "Para preguntas o ejercer tus derechos: privacidad@applyguard.com",
      applicableLaw: "12. LEY APLICABLE",
      applicableLawText: "Esta política se rige por las leyes de protección de datos de Alemania y la UE (GDPR)."
    },
    en: {
      pageTitle: "🔒 Privacy Policy",
      pageSubtitle: "ApplyGuard - Job Offer Verifier",
      lastUpdate: "Last updated: March 2026",
      intro: "1. GENERAL INFORMATION",
      introText: "ApplyGuard is committed to protecting user privacy. This policy explains what data we collect, how we use it, and your rights.",
      dataCollected: "2. DATA WE COLLECT",
      dataCollectedItems: [
        "Ratings and comments: Content users voluntarily publish about job offers.",
        "Job identifiers: URLs and IDs of job offers to associate reviews.",
        "Language preferences: To display the interface in the selected language.",
        "Anonymous technical data: Browser type and extension version (statistical purposes)."
      ],
      notCollected: "3. DATA WE DO NOT COLLECT",
      notCollectedItems: [
        "Real name or surname",
        "Email address",
        "IP address",
        "Geographic location",
        "Contact information",
        "Financial information"
      ],
      usage: "4. HOW WE USE THE DATA",
      usageItems: [
        "Display other users' reviews on job offers.",
        "Allow users to share their work experiences.",
        "Improve detection of fraudulent offers.",
        "Analyze trends anonymously.",
        "Customize the interface based on selected language."
      ],
      storage: "5. DATA STORAGE",
      storageText: "Comments and ratings are stored on secure Supabase servers. ApplyGuard does not sell, rent or share your data with third parties.",
      retention: "6. DATA RETENTION",
      retentionText: "Comments are retained as long as the job offer exists or until the user requests deletion.",
      rights: "7. YOUR RIGHTS",
      rightsItems: [
        "Access your comments",
        "Rectification: edit your comments",
        "Deletion: request deletion at privacy@applyguard.com",
        "Object to processing of your data",
        "Portability: request a copy of your data"
      ],
      security: "8. DATA SECURITY",
      securityText: "We implement security measures to protect your data. However, no system is 100% secure.",
      children: "9. MINORS",
      childrenText: "ApplyGuard is not intended for children under 16. We do not knowingly collect information from minors.",
      changes: "10. CHANGES TO THIS POLICY",
      changesText: "We may update this policy occasionally. The date of the last update is at the top.",
      contact: "11. CONTACT",
      contactText: "For questions or to exercise your rights: privacy@applyguard.com",
      applicableLaw: "12. APPLICABLE LAW",
      applicableLawText: "This policy is governed by the data protection laws of Germany and the EU (GDPR)."
    },
    fr: {
      pageTitle: "🔒 Politique de Confidentialité",
      pageSubtitle: "ApplyGuard - Vérificateur d'offres d'emploi",
      lastUpdate: "Dernière mise à jour: mars 2026",
      intro: "1. INFORMATIONS GÉNÉRALES",
      introText: "ApplyGuard s'engage à protéger la vie privée de ses utilisateurs. Cette politique explique quelles données nous collectons et comment nous les utilisons.",
      dataCollected: "2. DONNÉES QUE NOUS COLLECTONS",
      dataCollectedItems: [
        "Évaluations et commentaires: Contenu publié volontairement par les utilisateurs.",
        "Identifiants d'offres: URLs et IDs des offres d'emploi.",
        "Préférences de langue: Pour afficher l'interface dans la langue sélectionnée.",
        "Données techniques anonymes: Type de navigateur et version de l'extension."
      ],
      notCollected: "3. DONNÉES QUE NOUS NE COLLECTONS PAS",
      notCollectedItems: [
        "Nom réel",
        "Adresse e-mail",
        "Adresse IP",
        "Localisation géographique",
        "Coordonnées",
        "Informations financières"
      ],
      usage: "4. COMMENT NOUS UTILISONS LES DONNÉES",
      usageItems: [
        "Afficher les évaluations des autres utilisateurs.",
        "Permettre aux utilisateurs de partager leurs expériences.",
        "Améliorer la détection des offres frauduleuses.",
        "Analyser les tendances de manière anonyme.",
        "Personnaliser l'interface selon la langue sélectionnée."
      ],
      storage: "5. STOCKAGE DES DONNÉES",
      storageText: "Les commentaires sont stockés sur des serveurs sécurisés Supabase. ApplyGuard ne vend ni ne partage vos données.",
      retention: "6. CONSERVATION DES DONNÉES",
      retentionText: "Les commentaires sont conservés tant que l'offre existe ou jusqu'à suppression par l'utilisateur.",
      rights: "7. VOS DROITS",
      rightsItems: [
        "Accéder à vos commentaires",
        "Rectifier: modifier vos commentaires",
        "Supprimer: demander la suppression à privacy@applyguard.com",
        "Vous opposer au traitement",
        "Portabilité: demander une copie de vos données"
      ],
      security: "8. SÉCURITÉ DES DONNÉES",
      securityText: "Nous mettons en œuvre des mesures de sécurité pour protéger vos données. Aucun système n'est 100% sécurisé.",
      children: "9. MINEURS",
      childrenText: "ApplyGuard n'est pas destiné aux enfants de moins de 16 ans.",
      changes: "10. MODIFICATIONS",
      changesText: "Nous pouvons mettre à jour cette politique occasionnellement.",
      contact: "11. CONTACT",
      contactText: "Questions: privacy@applyguard.com",
      applicableLaw: "12. DROIT APPLICABLE",
      applicableLawText: "Cette politique est régie par les lois allemandes et européennes (RGPD)."
    },
    de: {
      pageTitle: "🔒 Datenschutzerklärung",
      pageSubtitle: "ApplyGuard - Stellenangebots-Prüfer",
      lastUpdate: "Letzte Aktualisierung: März 2026",
      intro: "1. ALLGEMEINE INFORMATIONEN",
      introText: "ApplyGuard verpflichtet sich, die Privatsphäre seiner Nutzer zu schützen. Diese Richtlinie erklärt, welche Daten wir erheben und wie wir sie verwenden.",
      dataCollected: "2. DATEN, DIE WIR ERHEBEN",
      dataCollectedItems: [
        "Bewertungen und Kommentare: Inhalte, die Nutzer freiwillig veröffentlichen.",
        "Stellenkennungen: URLs und IDs der Stellenangebote.",
        "Spracheinstellungen: Zur Anzeige der Oberfläche in der ausgewählten Sprache.",
        "Anonyme technische Daten: Browsertyp und Erweiterungsversion."
      ],
      notCollected: "3. DATEN, DIE WIR NICHT ERHEBEN",
      notCollectedItems: [
        "Vor- und Nachname",
        "E-Mail-Adresse",
        "IP-Adresse",
        "Geografischer Standort",
        "Kontaktdaten",
        "Finanzielle Informationen"
      ],
      usage: "4. WIE WIR DIE DATEN NUTZEN",
      usageItems: [
        "Anzeige von Bewertungen anderer Nutzer.",
        "Ermöglichung des Austauschs von Berufserfahrungen.",
        "Verbesserung der Erkennung betrügerischer Angebote.",
        "Analyse von Trends in anonymer Form.",
        "Anpassung der Oberfläche an die ausgewählte Sprache."
      ],
      storage: "5. DATENSPEICHERUNG",
      storageText: "Kommentare werden auf sicheren Supabase-Servern gespeichert. ApplyGuard verkauft oder teilt Ihre Daten nicht.",
      retention: "6. DATENAUFBEWAHRUNG",
      retentionText: "Kommentare werden so lange aufbewahrt, wie das Stellenangebot existiert oder bis der Nutzer Löschung beantragt.",
      rights: "7. IHRE RECHTE",
      rightsItems: [
        "Auskunft über Ihre Kommentare",
        "Berichtigung: Kommentare bearbeiten",
        "Löschung: Anfrage an privacy@applyguard.com",
        "Widerspruch gegen Datenverarbeitung",
        "Datenübertragbarkeit"
      ],
      security: "8. DATENSICHERHEIT",
      securityText: "Wir setzen Sicherheitsmaßnahmen ein. Kein System ist jedoch 100% sicher.",
      children: "9. MINDERJÄHRIGE",
      childrenText: "ApplyGuard richtet sich nicht an Kinder unter 16 Jahren.",
      changes: "10. ÄNDERUNGEN",
      changesText: "Wir können diese Richtlinie gelegentlich aktualisieren.",
      contact: "11. KONTAKT",
      contactText: "Fragen: privacy@applyguard.com",
      applicableLaw: "12. ANWENDBARES RECHT",
      applicableLawText: "Es gelten die deutschen und europäischen Datenschutzgesetze (DSGVO)."
    },
    pt: {
      pageTitle: "🔒 Política de Privacidade",
      pageSubtitle: "ApplyGuard - Verificador de Ofertas de Emprego",
      lastUpdate: "Última atualização: março 2026",
      intro: "1. INFORMAÇÕES GERAIS",
      introText: "A ApplyGuard está comprometida em proteger a privacidade dos seus utilizadores. Esta política explica quais dados recolhemos e como os utilizamos.",
      dataCollected: "2. DADOS QUE RECOLHEMOS",
      dataCollectedItems: [
        "Avaliações e comentários: Conteúdo publicado voluntariamente pelos utilizadores.",
        "Identificadores de ofertas: URLs e IDs das ofertas de emprego.",
        "Preferências de idioma: Para exibir a interface no idioma selecionado.",
        "Dados técnicos anónimos: Tipo de navegador e versão da extensão."
      ],
      notCollected: "3. DADOS QUE NÃO RECOLHEMOS",
      notCollectedItems: [
        "Nome real",
        "Endereço de e-mail",
        "Endereço IP",
        "Localização geográfica",
        "Informações de contacto",
        "Informações financeiras"
      ],
      usage: "4. COMO UTILIZAMOS OS DADOS",
      usageItems: [
        "Exibir avaliações de outros utilizadores.",
        "Permitir que os utilizadores partilhem experiências.",
        "Melhorar a deteção de ofertas fraudulentas.",
        "Analisar tendências de forma anónima.",
        "Personalizar a interface de acordo com o idioma selecionado."
      ],
      storage: "5. ARMAZENAMENTO DE DADOS",
      storageText: "Os comentários são armazenados em servidores seguros Supabase. A ApplyGuard não vende nem partilha os seus dados.",
      retention: "6. CONSERVAÇÃO DE DADOS",
      retentionText: "Os comentários são conservados enquanto a oferta existir ou até o utilizador solicitar a eliminação.",
      rights: "7. OS SEUS DIREITOS",
      rightsItems: [
        "Aceder aos seus comentários",
        "Retificar: editar os seus comentários",
        "Eliminar: solicitar eliminação para privacy@applyguard.com",
        "Opor-se ao tratamento dos seus dados",
        "Portabilidade: solicitar cópia dos seus dados"
      ],
      security: "8. SEGURANÇA DOS DADOS",
      securityText: "Implementamos medidas de segurança. No entanto, nenhum sistema é 100% seguro.",
      children: "9. MENORES DE IDADE",
      childrenText: "A ApplyGuard não se destina a menores de 16 anos.",
      changes: "10. ALTERAÇÕES",
      changesText: "Podemos atualizar esta política ocasionalmente.",
      contact: "11. CONTATO",
      contactText: "Dúvidas: privacy@applyguard.com",
      applicableLaw: "12. LEI APLICÁVEL",
      applicableLawText: "Esta política é regida pelas leis alemãs e europeias (RGPD)."
    }
  };

  function loadContent(lang) {
    const t = texts[lang];
    if (!t) return;
    
    // Actualizar header
    const titleEl = document.getElementById('pageTitle');
    const subtitleEl = document.getElementById('pageSubtitle');
    const updateEl = document.getElementById('lastUpdate');
    
    if (titleEl) titleEl.textContent = t.pageTitle;
    if (subtitleEl) subtitleEl.textContent = t.pageSubtitle;
    if (updateEl) updateEl.textContent = t.lastUpdate;
    
    // Generar listas
    const dataList = t.dataCollectedItems.map(item => `<li>${item}</li>`).join('');
    const notDataList = t.notCollectedItems.map(item => `<li>${item}</li>`).join('');
    const usageList = t.usageItems.map(item => `<li>${item}</li>`).join('');
    const rightsList = t.rightsItems.map(item => `<li>${item}</li>`).join('');
    
    // Actualizar contenido
    const html = `
      <div class="section">
        <h2>${t.intro}</h2>
        <p>${t.introText}</p>
      </div>
      
      <div class="section">
        <h2>${t.dataCollected}</h2>
        <ul>${dataList}</ul>
      </div>
      
      <div class="section">
        <h2>${t.notCollected}</h2>
        <ul>${notDataList}</ul>
      </div>
      
      <div class="section">
        <h2>${t.usage}</h2>
        <ul>${usageList}</ul>
      </div>
      
      <div class="section">
        <h2>${t.storage}</h2>
        <p>${t.storageText}</p>
      </div>
      
      <div class="section">
        <h2>${t.retention}</h2>
        <p>${t.retentionText}</p>
      </div>
      
      <div class="section">
        <h2>${t.rights}</h2>
        <ul>${rightsList}</ul>
      </div>
      
      <div class="section">
        <h2>${t.security}</h2>
        <p>${t.securityText}</p>
      </div>
      
      <div class="section">
        <h2>${t.children}</h2>
        <p>${t.childrenText}</p>
      </div>
      
      <div class="section">
        <h2>${t.changes}</h2>
        <p>${t.changesText}</p>
      </div>
      
      <div class="section">
        <h2>${t.contact}</h2>
        <p>${t.contactText}</p>
      </div>
      
      <div class="section">
        <h2>${t.applicableLaw}</h2>
        <p>${t.applicableLawText}</p>
      </div>
    `;
    
    const contentDiv = document.getElementById('content');
    if (contentDiv) contentDiv.innerHTML = html;
  }

  // Cargar idioma guardado
  let savedLang = localStorage.getItem('applyguard_lang');
  if (!savedLang) savedLang = 'es';
  
  const selectEl = document.getElementById('langSelect');
  if (selectEl) {
    selectEl.value = savedLang;
    loadContent(savedLang);
    
    selectEl.addEventListener('change', function(e) {
      const newLang = e.target.value;
      localStorage.setItem('applyguard_lang', newLang);
      loadContent(newLang);
    });
  }

  // Cerrar ventana
  const closeBtn = document.getElementById('closeWindow');
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.close();
    });
  }
});
