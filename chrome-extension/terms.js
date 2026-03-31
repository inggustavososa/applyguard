// terms.js - Script para la página de términos (con header traducible)
document.addEventListener('DOMContentLoaded', function() {
  const texts = {
    es: {
      pageTitle: "📋 Términos y Condiciones de Uso",
      pageSubtitle: "ApplyGuard - Verificador de ofertas de trabajo",
      lastUpdate: "Última actualización: marzo 2026",
      acceptance: "1. ACEPTACIÓN DE LOS TÉRMINOS",
      acceptanceText: "Al instalar, acceder o utilizar la extensión ApplyGuard, el usuario acepta quedar vinculado por estos Términos y Condiciones de Uso. ApplyGuard se reserva el derecho de modificar estos términos en cualquier momento.",
      userContent: "2. CONTENIDO GENERADO POR EL USUARIO",
      userContentText: "ApplyGuard actúa exclusivamente como intermediario técnico. NO verifica, NO respalda y NO se hace responsable de la veracidad del contenido publicado por los usuarios.",
      responsibility: "El Usuario es el único responsable del Contenido que publica. Declara que es veraz y se basa en experiencias personales objetivas.",
      guidelines: "Se recomienda describir situaciones objetivas: plazos de respuesta, claridad en comunicación, coherencia entre oferta y proceso real. Evitar juicios de valor subjetivos.",
      indemnity: "El Usuario indemniza a ApplyGuard de cualquier reclamación derivada de su contenido.",
      warranties: "3. EXENCIÓN DE GARANTÍAS",
      warrantiesText: "LA EXTENSIÓN SE PROPORCIONA 'TAL CUAL', SIN GARANTÍAS. ApplyGuard no garantiza funcionamiento sin errores ni detección de todas las ofertas falsas.",
      liability: "4. LIMITACIÓN DE RESPONSABILIDAD",
      liabilityText: "APPLYGUARD NO SERÁ RESPONSABLE POR DAÑOS DERIVADOS DEL USO DE LA EXTENSIÓN. Al ser gratuita, la responsabilidad máxima es 0€.",
      moderation: "5. MODERACIÓN",
      moderationText: "ApplyGuard puede eliminar contenido inapropiado. Reportes: moderacion@applyguard.com",
      intellectual: "6. PROPIEDAD INTELECTUAL",
      intellectualText: "La extensión es propiedad de ApplyGuard. El usuario conserva derechos sobre sus comentarios.",
      jurisdiction: "7. LEY APLICABLE",
      jurisdictionText: "Estos términos se rigen por las leyes de Alemania.",
      contact: "8. CONTACTO",
      contactText: "Preguntas: legal@applyguard.com"
    },
    en: {
      pageTitle: "📋 Terms and Conditions of Use",
      pageSubtitle: "ApplyGuard - Job Offer Verifier",
      lastUpdate: "Last updated: March 2026",
      acceptance: "1. ACCEPTANCE OF TERMS",
      acceptanceText: "By installing or using ApplyGuard, the user accepts these terms. ApplyGuard may modify them at any time.",
      userContent: "2. USER-GENERATED CONTENT",
      userContentText: "ApplyGuard acts as a technical intermediary. It does NOT verify, endorse or take responsibility for user content.",
      responsibility: "The user is solely responsible for their comments. They declare they are truthful and based on objective experiences.",
      guidelines: "Describe objective situations: response times, communication clarity, consistency between offer and process. Avoid subjective judgments.",
      indemnity: "The user indemnifies ApplyGuard from any claims arising from their content.",
      warranties: "3. DISCLAIMER OF WARRANTIES",
      warrantiesText: "ApplyGuard is provided 'AS IS', without warranties. Does not guarantee error-free operation.",
      liability: "4. LIMITATION OF LIABILITY",
      liabilityText: "ApplyGuard is NOT liable for damages from using the extension. As it's free, maximum liability is €0.",
      moderation: "5. MODERATION",
      moderationText: "ApplyGuard may remove inappropriate content. Reports: moderation@applyguard.com",
      intellectual: "6. INTELLECTUAL PROPERTY",
      intellectualText: "The extension is owned by ApplyGuard. Users retain rights to their comments.",
      jurisdiction: "7. APPLICABLE LAW",
      jurisdictionText: "These terms are governed by German law.",
      contact: "8. CONTACT",
      contactText: "Questions: legal@applyguard.com"
    },
    fr: {
      pageTitle: "📋 Conditions générales d'utilisation",
      pageSubtitle: "ApplyGuard - Vérificateur d'offres d'emploi",
      lastUpdate: "Dernière mise à jour: mars 2026",
      acceptance: "1. ACCEPTATION DES CONDITIONS",
      acceptanceText: "En installant ou utilisant ApplyGuard, l'utilisateur accepte ces conditions. ApplyGuard peut les modifier.",
      userContent: "2. CONTENU GÉNÉRÉ PAR L'UTILISATEUR",
      userContentText: "ApplyGuard agit comme intermédiaire technique. Ne vérifie PAS et n'est PAS responsable du contenu.",
      responsibility: "L'utilisateur est seul responsable de ses commentaires.",
      guidelines: "Décrivez des situations objectives. Évitez les jugements subjectifs.",
      indemnity: "L'utilisateur indemnise ApplyGuard de toute réclamation.",
      warranties: "3. EXONÉRATION DE GARANTIES",
      warrantiesText: "ApplyGuard est fourni 'TELLE QUELLE', sans garantie.",
      liability: "4. LIMITATION DE RESPONSABILITÉ",
      liabilityText: "ApplyGuard N'EST PAS responsable des dommages. Responsabilité maximale: 0€.",
      moderation: "5. MODÉRATION",
      moderationText: "ApplyGuard peut supprimer du contenu inapproprié. Signalement: moderation@applyguard.com",
      intellectual: "6. PROPRIÉTÉ INTELLECTUELLE",
      intellectualText: "L'extension appartient à ApplyGuard.",
      jurisdiction: "7. DROIT APPLICABLE",
      jurisdictionText: "Ces conditions sont régies par le droit allemand.",
      contact: "8. CONTACT",
      contactText: "Questions: legal@applyguard.com"
    },
    de: {
      pageTitle: "📋 Allgemeine Geschäftsbedingungen",
      pageSubtitle: "ApplyGuard - Stellenangebots-Prüfer",
      lastUpdate: "Letzte Aktualisierung: März 2026",
      acceptance: "1. ANNAHME DER BEDINGUNGEN",
      acceptanceText: "Mit der Nutzung von ApplyGuard akzeptiert der Nutzer diese Bedingungen. ApplyGuard kann sie ändern.",
      userContent: "2. NUTZERGENERIERTE INHALTE",
      userContentText: "ApplyGuard ist technischer Vermittler. Prüft NICHT und ist NICHT verantwortlich für Nutzerinhalte.",
      responsibility: "Der Nutzer ist allein verantwortlich für seine Kommentare.",
      guidelines: "Beschreiben Sie objektive Situationen. Vermeiden Sie subjektive Urteile.",
      indemnity: "Der Nutzer stellt ApplyGuard von Ansprüchen frei.",
      warranties: "3. GEWÄHRLEISTUNGSAUSSCHLUSS",
      warrantiesText: "ApplyGuard wird 'WIE BESEHEN' bereitgestellt, ohne Gewährleistung.",
      liability: "4. HAFTUNGSBESCHRÄNKUNG",
      liabilityText: "ApplyGuard HAFTET NICHT für Schäden. Maximale Haftung: 0€.",
      moderation: "5. MODERATION",
      moderationText: "ApplyGuard kann unangemessene Inhalte entfernen. Meldung: moderation@applyguard.com",
      intellectual: "6. GEISTIGES EIGENTUM",
      intellectualText: "Die Erweiterung gehört ApplyGuard.",
      jurisdiction: "7. ANWENDBARES RECHT",
      jurisdictionText: "Es gilt deutsches Recht.",
      contact: "8. KONTAKT",
      contactText: "Fragen: legal@applyguard.com"
    },
    pt: {
      pageTitle: "📋 Termos e Condições de Uso",
      pageSubtitle: "ApplyGuard - Verificador de Ofertas de Emprego",
      lastUpdate: "Última atualização: março 2026",
      acceptance: "1. ACEITAÇÃO DOS TERMOS",
      acceptanceText: "Ao usar ApplyGuard, o utilizador aceita estes termos. ApplyGuard pode modificá-los.",
      userContent: "2. CONTEÚDO GERADO PELO UTILIZADOR",
      userContentText: "ApplyGuard é intermediário técnico. NÃO verifica e NÃO é responsável pelo conteúdo.",
      responsibility: "O utilizador é o único responsável pelos seus comentários.",
      guidelines: "Descreva situações objetivas. Evite juízos subjetivos.",
      indemnity: "O utilizador indemniza a ApplyGuard de quaisquer reclamações.",
      warranties: "3. ISENÇÃO DE GARANTIAS",
      warrantiesText: "ApplyGuard é fornecida 'COMO ESTÁ', sem garantias.",
      liability: "4. LIMITAÇÃO DE RESPONSABILIDADE",
      liabilityText: "ApplyGuard NÃO É responsável por danos. Responsabilidade máxima: 0€.",
      moderation: "5. MODERAÇÃO",
      moderationText: "ApplyGuard pode remover conteúdo inapropriado. Denuncie: moderation@applyguard.com",
      intellectual: "6. PROPRIEDADE INTELECTUAL",
      intellectualText: "A extensão pertence à ApplyGuard.",
      jurisdiction: "7. LEI APLICÁVEL",
      jurisdictionText: "Aplica-se a lei alemã.",
      contact: "8. CONTATO",
      contactText: "Dúvidas: legal@applyguard.com"
    }
  };

  function loadContent(lang) {
    console.log('[Terms] Cargando idioma:', lang);
    const t = texts[lang];
    if (!t) {
      console.log('[Terms] Idioma no encontrado:', lang);
      return;
    }
    
    // Actualizar header
    const titleEl = document.getElementById('pageTitle');
    const subtitleEl = document.getElementById('pageSubtitle');
    const updateEl = document.getElementById('lastUpdate');
    
    console.log('[Terms] Elementos encontrados:', {
      titleEl: !!titleEl,
      subtitleEl: !!subtitleEl,
      updateEl: !!updateEl
    });
    
    if (titleEl) {
      titleEl.textContent = t.pageTitle;
      console.log('[Terms] Título actualizado a:', t.pageTitle);
    }
    if (subtitleEl) subtitleEl.textContent = t.pageSubtitle;
    if (updateEl) updateEl.textContent = t.lastUpdate;
    
    // Actualizar contenido
    const html = `
      <div class="section">
        <h2>${t.acceptance}</h2>
        <p>${t.acceptanceText}</p>
      </div>
      
      <div class="section">
        <h2>${t.userContent}</h2>
        <div class="warning-box">
          <strong>⚠️ ${t.userContentText}</strong>
        </div>
        <p>${t.responsibility}</p>
        <p>${t.guidelines}</p>
        <p>${t.indemnity}</p>
      </div>
      
      <div class="section">
        <h2>${t.warranties}</h2>
        <p>${t.warrantiesText}</p>
      </div>
      
      <div class="section">
        <h2>${t.liability}</h2>
        <p>${t.liabilityText}</p>
      </div>
      
      <div class="section">
        <h2>${t.moderation}</h2>
        <p>${t.moderationText}</p>
      </div>
      
      <div class="section">
        <h2>${t.intellectual}</h2>
        <p>${t.intellectualText}</p>
      </div>
      
      <div class="section">
        <h2>${t.jurisdiction}</h2>
        <p>${t.jurisdictionText}</p>
      </div>
      
      <div class="section">
        <h2>${t.contact}</h2>
        <p>${t.contactText}</p>
      </div>
    `;
    
    const contentDiv = document.getElementById('content');
    if (contentDiv) contentDiv.innerHTML = html;
  }

  //function loadContent(lang) {
    //const t = texts[lang];
    //if (!t) return;
    
    //// Actualizar header
    //const titleEl = document.getElementById('pageTitle');
    //const subtitleEl = document.getElementById('pageSubtitle');
    //const updateEl = document.getElementById('lastUpdate');
    //if (titleEl) titleEl.textContent = t.pageTitle;
    //if (subtitleEl) subtitleEl.textContent = t.pageSubtitle;
    //if (updateEl) updateEl.textContent = t.lastUpdate;
    
    //// Actualizar contenido
    //const html = `
      //<div class="section">
        //<h2>${t.acceptance}</h2>
        //<p>${t.acceptanceText}</p>
      //</div>
      
      //<div class="section">
        //<h2>${t.userContent}</h2>
        //<div class="warning-box">
          //<strong>⚠️ ${t.userContentText}</strong>
        //</div>
        //<p>${t.responsibility}</p>
        //<p>${t.guidelines}</p>
        //<p>${t.indemnity}</p>
      //</div>
      
      //<div class="section">
        //<h2>${t.warranties}</h2>
        //<p>${t.warrantiesText}</p>
      //</div>
      
      //<div class="section">
        //<h2>${t.liability}</h2>
        //<p>${t.liabilityText}</p>
      //</div>
      
      //<div class="section">
        //<h2>${t.moderation}</h2>
        //<p>${t.moderationText}</p>
      //</div>
      
      //<div class="section">
        //<h2>${t.intellectual}</h2>
        //<p>${t.intellectualText}</p>
      //</div>
      
      //<div class="section">
        //<h2>${t.jurisdiction}</h2>
        //<p>${t.jurisdictionText}</p>
      //</div>
      
      //<div class="section">
        //<h2>${t.contact}</h2>
        //<p>${t.contactText}</p>
      //</div>
    //`;
    
    //const contentDiv = document.getElementById('content');
    //if (contentDiv) contentDiv.innerHTML = html;
  //}

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
