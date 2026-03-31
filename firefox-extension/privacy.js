// privacy.js - Versión completa con todos los textos legales para Alemania
document.addEventListener('DOMContentLoaded', function() {
  const texts = {
    es: {
      pageTitle: "Política de Privacidad",
      pageSubtitle: "ApplyGuard - Verificador de ofertas de trabajo",
      lastUpdate: "Última actualización: marzo 2026",
      intro: "1. INFORMACIÓN GENERAL E IMPRESSUM (Art. 5 DDG)",
      introText: "Responsable del tratamiento:\n\nCarlos Gustavo Sosa Izaguirre\nMünchener Str. 15\n86633 Neuburg an der Donau\nAlemania\n\nEmail: ing.gustavo.sosa@gmail.com\nTeléfono: +49 176 20669998\nIdentificación Fiscal (USt-IdNr): DE460972803\n\nEsta política de privacidad cumple con el Reglamento General de Protección de Datos (RGPD/DSGVO) y la Ley Alemana de Servicios Digitales (DDG) y de Protección de Datos de Telecomunicaciones y Servicios Digitales (TDDDG).",
      dataCollected: "2. DATOS QUE RECOPILAMOS Y BASES LEGALES (Art. 6 DSGVO)",
      dataCollectedItems: [
        "• Correo electrónico: Para la creación y gestión de tu cuenta. Base legal: Art. 6.1.b DSGVO (ejecución del contrato).",
        "• Nombre público (nickname): Para identificar tus comentarios en la comunidad. Base legal: Art. 6.1.b DSGVO.",
        "• País: Para estadísticas regionales y mejora del servicio. Base legal: Art. 6.1.b DSGVO o Art. 6.1.f (interés legítimo).",
        "• Idioma preferido: Para mostrar la interfaz en tu idioma. Almacenado localmente en tu navegador según § 25 Abs. 2 TDDDG.",
        "• Valoraciones y comentarios: Contenido que publicas voluntariamente sobre ofertas de trabajo. Base legal: Art. 6.1.a DSGVO (consentimiento).",
        "• Datos técnicos: Tipo de navegador, versión de la extensión (fines estadísticos anonimizados)."
      ],
      notCollected: "3. DATOS QUE NO RECOPILAMOS",
      notCollectedItems: [
        "• Nombre real o apellidos",
        "• Dirección IP completa (solo almacenada de forma anonimizada por Supabase)",
        "• Ubicación geográfica precisa",
        "• Datos de contacto adicionales",
        "• Información financiera o de pago"
      ],
      usage: "4. CÓMO UTILIZAMOS LOS DATOS",
      usageItems: [
        "• Mostrar tus valoraciones y las de otros usuarios en las ofertas de trabajo.",
        "• Permitir la interacción comunitaria entre usuarios.",
        "• Generar estadísticas anónimas sobre ofertas falsas por país.",
        "• Mejorar la detección de ofertas fraudulentas.",
        "• Personalizar la interfaz según tu idioma seleccionado.",
        "• Atender consultas y ejercer tus derechos como usuario."
      ],
      storage: "5. ALMACENAMIENTO DE DATOS Y UBICACIÓN",
      storageText: "Los datos se almacenan en servidores seguros de Supabase, ubicados en la Unión Europea (UE), cumpliendo con los estándares de protección de datos europeos. No transferimos tus datos fuera de la UE. ApplyGuard no vende, alquila ni comparte tus datos personales con terceros con fines comerciales.",
      retention: "6. CONSERVACIÓN DE DATOS",
      retentionText: "Conservamos tus datos mientras mantengas tu cuenta activa. Si eliminas tu cuenta, tus datos personales se eliminarán en un plazo de 30 días. Las valoraciones publicadas pueden permanecer anonimizadas para preservar la integridad de la comunidad. Puedes solicitar la eliminación de tus comentarios en cualquier momento utilizando el código de publicación proporcionado o contactándonos.",
      rights: "7. TUS DERECHOS (Arts. 15-22 DSGVO)",
      rightsItems: [
        "• Derecho de acceso: Puedes solicitar información sobre tus datos almacenados.",
        "• Derecho de rectificación: Puedes corregir tus datos si son incorrectos.",
        "• Derecho de supresión (derecho al olvido): Puedes solicitar la eliminación de tus datos.",
        "• Derecho de limitación del tratamiento: Puedes solicitar que restrinjamos el uso de tus datos.",
        "• Derecho de portabilidad: Puedes recibir tus datos en un formato estructurado.",
        "• Derecho de oposición: Puedes oponerte al tratamiento de tus datos para fines específicos.",
        "• Derecho a retirar el consentimiento: En cualquier momento, sin afectar la legalidad del tratamiento previo."
      ],
      exerciseRights: "Para ejercer tus derechos, contáctanos en: privacidad@applyguard.de. Responderemos en un plazo máximo de 30 días.",
      complaint: "8. DERECHO A RECLAMAR ANTE AUTORIDAD DE CONTROL",
      complaintText: "Tienes derecho a presentar una reclamación ante una autoridad de protección de datos. La autoridad competente en Alemania es:\n\nBayerisches Landesamt für Datenschutzaufsicht (BayLDA)\nPromenade 27, 91522 Ansbach, Alemania\nhttps://www.lda.bayern.de",
      security: "9. SEGURIDAD DE LOS DATOS",
      securityText: "Implementamos medidas técnicas y organizativas para proteger tus datos contra pérdida, alteración o acceso no autorizado. Sin embargo, ningún sistema es 100% seguro. Recomendamos usar contraseñas seguras y mantener tu navegador actualizado.",
      children: "10. MENORES DE EDAD",
      childrenText: "ApplyGuard no está dirigido a menores de 16 años. No recopilamos conscientemente información de menores. Si eres menor de 16 años, no debes utilizar este servicio sin el consentimiento de tus padres o tutores.",
      changes: "11. CAMBIOS EN ESTA POLÍTICA",
      changesText: "Podemos actualizar esta política ocasionalmente para reflejar cambios legales o funcionales. La fecha de la última actualización aparece al inicio de esta página. Te notificaremos sobre cambios significativos a través de la extensión o por correo electrónico.",
      contact: "12. CONTACTO Y DELEGADO DE PROTECCIÓN DE DATOS",
      contactText: "Para cualquier consulta sobre privacidad o para ejercer tus derechos:\n\nEmail: privacidad@applyguard.de\nTeléfono: +49 176 20669998\nDirección: Carlos Gustavo Sosa Izaguirre, Münchener Str. 15, 86633 Neuburg an der Donau, Alemania",
      applicableLaw: "13. LEY APLICABLE",
      applicableLawText: "Esta política se rige por las leyes de protección de datos de la Unión Europea (RGPD/DSGVO) y las leyes alemanas (DDG, TDDDG)."
    },
    de: {
      pageTitle: "Datenschutzerklärung",
      pageSubtitle: "ApplyGuard - Jobangebot-Verifizierer",
      lastUpdate: "Stand: März 2026",
      intro: "1. ALLGEMEINE INFORMATIONEN & IMPRESSUM (§ 5 DDG)",
      introText: "Verantwortlicher für die Datenverarbeitung:\n\nCarlos Gustavo Sosa Izaguirre\nMünchener Str. 15\n86633 Neuburg an der Donau\nDeutschland\n\nE-Mail: ing.gustavo.sosa@gmail.com\nTelefon: +49 176 20669998\nUmsatzsteuer-Identifikationsnummer (USt-IdNr): DE460972803\n\nDiese Datenschutzerklärung entspricht der Datenschutz-Grundverordnung (DSGVO), dem Digitale-Dienste-Gesetz (DDG) und dem Telekommunikation-Telemedien-Datenschutzgesetz (TDDDG).",
      dataCollected: "2. ERHOBENE DATEN UND RECHTSGRUNDLAGEN (Art. 6 DSGVO)",
      dataCollectedItems: [
        "• E-Mail-Adresse: Zur Kontoerstellung und -verwaltung. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).",
        "• Öffentlicher Name (Nickname): Zur Identifikation Ihrer Kommentare. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.",
        "• Land: Für regionale Statistiken. Rechtsgrundlage: Art. 6 Abs. 1 lit. b oder f DSGVO.",
        "• Bevorzugte Sprache: Für die Anzeige der Oberfläche. Lokale Speicherung gemäß § 25 Abs. 2 TDDDG.",
        "• Bewertungen und Kommentare: Freiwillig bereitgestellte Inhalte. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).",
        "• Technische Daten: Browsertyp, Erweiterungsversion (anonymisiert für Statistik)."
      ],
      notCollected: "3. DATEN, DIE WIR NICHT ERHEBEN",
      notCollectedItems: [
        "• Vor- und Nachname",
        "• Vollständige IP-Adresse (nur anonymisiert bei Supabase gespeichert)",
        "• Genaue geografische Position",
        "• Finanzinformationen"
      ],
      usage: "4. VERWENDUNG IHRER DATEN",
      usageItems: [
        "• Anzeige Ihrer Bewertungen auf Stellenangeboten.",
        "• Ermöglichung der Community-Interaktion.",
        "• Generierung anonymer Statistiken zu gefälschten Stellenangeboten nach Land.",
        "• Verbesserung der Erkennung betrügerischer Angebote.",
        "• Personalisierung der Oberfläche nach Ihrer Sprache.",
        "• Bearbeitung Ihrer Anfragen und Rechte."
      ],
      storage: "5. DATENSPEICHERUNG UND -ORT",
      storageText: "Ihre Daten werden auf sicheren Servern von Supabase innerhalb der Europäischen Union (EU) gespeichert. Es findet keine Übermittlung außerhalb der EU statt. ApplyGuard verkauft, vermietet oder teilt Ihre personenbezogenen Daten nicht mit Dritten zu kommerziellen Zwecken.",
      retention: "6. SPEICHERDAUER",
      retentionText: "Wir speichern Ihre Daten, solange Ihr Konto aktiv ist. Nach Kontolöschung werden Ihre personenbezogenen Daten innerhalb von 30 Tagen gelöscht. Veröffentlichte Bewertungen können anonymisiert bleiben, um die Integrität der Community zu wahren. Sie können die Löschung Ihrer Kommentare jederzeit über den bereitgestellten Code oder per Kontaktaufnahme beantragen.",
      rights: "7. IHRE RECHTE (Art. 15-22 DSGVO)",
      rightsItems: [
        "• Auskunftsrecht: Sie können Informationen über Ihre gespeicherten Daten anfordern.",
        "• Berichtigungsrecht: Sie können unrichtige Daten korrigieren lassen.",
        "• Löschungsrecht (Recht auf Vergessenwerden): Sie können die Löschung Ihrer Daten verlangen.",
        "• Recht auf Einschränkung der Verarbeitung: Sie können die Einschränkung der Nutzung Ihrer Daten verlangen.",
        "• Recht auf Datenübertragbarkeit: Sie können Ihre Daten in einem strukturierten Format erhalten.",
        "• Widerspruchsrecht: Sie können der Verarbeitung Ihrer Daten für bestimmte Zwecke widersprechen.",
        "• Recht auf Widerruf der Einwilligung: Jederzeit, ohne Auswirkungen auf die Rechtmäßigkeit der bisherigen Verarbeitung."
      ],
      exerciseRights: "Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter: datenschutz@applyguard.de. Wir antworten innerhalb von 30 Tagen.",
      complaint: "8. BESCHWERDERECHT BEI DER AUFSICHTSBEHÖRDE",
      complaintText: "Sie haben das Recht, eine Beschwerde bei einer Datenschutzaufsichtsbehörde einzureichen. Die zuständige Aufsichtsbehörde in Bayern ist:\n\nBayerisches Landesamt für Datenschutzaufsicht (BayLDA)\nPromenade 27, 91522 Ansbach\nhttps://www.lda.bayern.de",
      security: "9. DATENSICHERHEIT",
      securityText: "Wir setzen technische und organisatorische Maßnahmen zum Schutz Ihrer Daten ein. Kein System ist jedoch 100 % sicher. Verwenden Sie sichere Passwörter und halten Sie Ihren Browser aktuell.",
      children: "10. MINDERJÄHRIGE",
      childrenText: "ApplyGuard richtet sich nicht an Personen unter 16 Jahren. Wir erheben wissentlich keine Daten von Minderjährigen. Wenn Sie unter 16 sind, nutzen Sie diesen Dienst nur mit Zustimmung Ihrer Eltern oder Erziehungsberechtigten.",
      changes: "11. ÄNDERUNGEN DIESER DATENSCHUTZERKLÄRUNG",
      changesText: "Wir können diese Erklärung gelegentlich aktualisieren. Das Datum der letzten Aktualisierung finden Sie am Anfang dieser Seite. Bei wesentlichen Änderungen informieren wir Sie über die Erweiterung oder per E-Mail.",
      contact: "12. KONTAKT UND DATENSCHUTZBEAUFTRAGTER",
      contactText: "Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte:\n\nE-Mail: datenschutz@applyguard.de\nTelefon: +49 176 20669998\nAdresse: Carlos Gustavo Sosa Izaguirre, Münchener Str. 15, 86633 Neuburg an der Donau",
      applicableLaw: "13. ANWENDBARES RECHT",
      applicableLawText: "Es gelten das europäische Datenschutzrecht (DSGVO) sowie das deutsche DDG und TDDDG."
    },
    en: {
      pageTitle: "Privacy Policy",
      pageSubtitle: "ApplyGuard - Job Offer Verifier",
      lastUpdate: "Last Updated: March 2026",
      intro: "1. GENERAL INFORMATION & IMPRINT (§ 5 DDG)",
      introText: "Data Controller:\n\nCarlos Gustavo Sosa Izaguirre\nMünchener Str. 15\n86633 Neuburg an der Donau\nGermany\n\nEmail: ing.gustavo.sosa@gmail.com\nPhone: +49 176 20669998\nVAT ID (USt-IdNr): DE460972803\n\nThis privacy policy complies with the General Data Protection Regulation (GDPR), the German Digital Services Act (DDG), and the Telecommunications and Digital Services Data Protection Act (TDDDG).",
      dataCollected: "2. DATA COLLECTED AND LEGAL BASES (Art. 6 GDPR)",
      dataCollectedItems: [
        "• Email address: For account creation and management. Legal basis: Art. 6.1.b GDPR (contract performance).",
        "• Public nickname: To identify your comments. Legal basis: Art. 6.1.b GDPR.",
        "• Country: For regional statistics. Legal basis: Art. 6.1.b or f GDPR.",
        "• Preferred language: To display the interface in your language. Stored locally per § 25 (2) TDDDG.",
        "• Reviews and comments: Content you voluntarily publish. Legal basis: Art. 6.1.a GDPR (consent).",
        "• Technical data: Browser type, extension version (anonymized for statistics)."
      ],
      notCollected: "3. DATA WE DO NOT COLLECT",
      notCollectedItems: [
        "• Full name or surname",
        "• Full IP address (only stored anonymized by Supabase)",
        "• Precise geographic location",
        "• Financial information"
      ],
      usage: "4. HOW WE USE YOUR DATA",
      usageItems: [
        "• Display your reviews on job offers.",
        "• Enable community interaction.",
        "• Generate anonymous statistics on fake job offers by country.",
        "• Improve detection of fraudulent offers.",
        "• Personalize the interface according to your language.",
        "• Respond to your inquiries and rights requests."
      ],
      storage: "5. DATA STORAGE AND LOCATION",
      storageText: "Your data is stored on secure Supabase servers within the European Union (EU). No data transfer occurs outside the EU. ApplyGuard does not sell, rent, or share your personal data with third parties for commercial purposes.",
      retention: "6. DATA RETENTION",
      retentionText: "We retain your data as long as your account is active. Upon account deletion, your personal data will be deleted within 30 days. Published reviews may remain anonymized to preserve community integrity. You can request deletion of your comments at any time using the provided code or by contacting us.",
      rights: "7. YOUR RIGHTS (Arts. 15-22 GDPR)",
      rightsItems: [
        "• Right of access: Request information about your stored data.",
        "• Right to rectification: Correct inaccurate data.",
        "• Right to erasure (right to be forgotten): Request deletion of your data.",
        "• Right to restriction of processing: Request restriction of data usage.",
        "• Right to data portability: Receive your data in a structured format.",
        "• Right to object: Object to data processing for specific purposes.",
        "• Right to withdraw consent: At any time, without affecting previous processing."
      ],
      exerciseRights: "To exercise your rights, contact us at: privacy@applyguard.de. We will respond within 30 days.",
      complaint: "8. RIGHT TO LODGE A COMPLAINT WITH A SUPERVISORY AUTHORITY",
      complaintText: "You have the right to lodge a complaint with a data protection supervisory authority. The competent authority in Bavaria is:\n\nBavarian State Office for Data Protection Supervision (BayLDA)\nPromenade 27, 91522 Ansbach, Germany\nhttps://www.lda.bayern.de/en",
      security: "9. DATA SECURITY",
      securityText: "We implement technical and organizational measures to protect your data. However, no system is 100% secure. Use strong passwords and keep your browser updated.",
      children: "10. MINORS",
      childrenText: "ApplyGuard is not intended for individuals under 16. We do not knowingly collect data from minors. If you are under 16, do not use this service without parental or guardian consent.",
      changes: "11. CHANGES TO THIS POLICY",
      changesText: "We may update this policy occasionally. The last update date is at the top of this page. We will notify you of significant changes via the extension or email.",
      contact: "12. CONTACT AND DATA PROTECTION OFFICER",
      contactText: "For privacy inquiries or to exercise your rights:\n\nEmail: privacy@applyguard.de\nPhone: +49 176 20669998\nAddress: Carlos Gustavo Sosa Izaguirre, Münchener Str. 15, 86633 Neuburg an der Donau, Germany",
      applicableLaw: "13. APPLICABLE LAW",
      applicableLawText: "This policy is governed by EU data protection law (GDPR) and German laws (DDG, TDDDG)."
    },
    fr: {
      pageTitle: "Politique de Confidentialité",
      pageSubtitle: "ApplyGuard - Vérificateur d'offres d'emploi",
      lastUpdate: "Dernière mise à jour : mars 2026",
      intro: "1. INFORMATIONS GÉNÉRALES & IMPRESSUM",
      introText: "Responsable du traitement :\n\nCarlos Gustavo Sosa Izaguirre\nMünchener Str. 15\n86633 Neuburg an der Donau\nAllemagne\n\nEmail : ing.gustavo.sosa@gmail.com\nTél : +49 176 20669998\nN° TVA : DE460972803",
      dataCollected: "2. DONNÉES COLLECTÉES ET BASES JURIDIQUES",
      dataCollectedItems: [
        "• Adresse e-mail : Création et gestion du compte.",
        "• Pseudonyme : Identification de vos commentaires.",
        "• Pays : Statistiques régionales.",
        "• Langue préférée : Interface personnalisée.",
        "• Avis et commentaires : Contenu publié volontairement."
      ],
      notCollected: "3. DONNÉES NON COLLECTÉES",
      notCollectedItems: [
        "• Nom complet",
        "• Adresse IP complète",
        "• Position géographique précise",
        "• Informations financières"
      ],
      usage: "4. UTILISATION DES DONNÉES",
      usageItems: [
        "• Affichage des avis sur les offres d'emploi.",
        "• Interaction communautaire.",
        "• Statistiques anonymes par pays.",
        "• Amélioration de la détection des offres frauduleuses."
      ],
      storage: "5. STOCKAGE DES DONNÉES",
      storageText: "Les données sont stockées sur des serveurs sécurisés dans l'Union européenne. ApplyGuard ne vend ni ne partage vos données.",
      retention: "6. CONSERVATION DES DONNÉES",
      retentionText: "Les données sont conservées pendant la durée de votre compte. Après suppression, elles sont effacées sous 30 jours.",
      rights: "7. VOS DROITS",
      rightsItems: [
        "• Droit d'accès",
        "• Droit de rectification",
        "• Droit à l'effacement",
        "• Droit à la limitation du traitement",
        "• Droit à la portabilité",
        "• Droit d'opposition"
      ],
      complaint: "8. RÉCLAMATION AUPRÈS DE L'AUTORITÉ DE CONTRÔLE",
      complaintText: "Vous pouvez déposer une réclamation auprès de la CNIL (France) ou de l'autorité compétente en Allemagne : BayLDA.",
      security: "9. SÉCURITÉ DES DONNÉES",
      securityText: "Des mesures de sécurité sont mises en place pour protéger vos données.",
      children: "10. MINEURS",
      childrenText: "ApplyGuard ne s'adresse pas aux mineurs de moins de 16 ans.",
      changes: "11. MODIFICATIONS",
      changesText: "Cette politique peut être mise à jour occasionnellement.",
      contact: "12. CONTACT",
      contactText: "Email : privacy@applyguard.de\nTél : +49 176 20669998",
      applicableLaw: "13. DROIT APPLICABLE",
      applicableLawText: "Le droit européen (RGPD) et allemand (DDG, TDDDG) s'appliquent."
    },
    pt: {
      pageTitle: "Política de Privacidade",
      pageSubtitle: "ApplyGuard - Verificador de Ofertas de Emprego",
      lastUpdate: "Última atualização: março 2026",
      intro: "1. INFORMAÇÕES GERAIS & IMPRESSUM",
      introText: "Responsável pelo tratamento:\n\nCarlos Gustavo Sosa Izaguirre\nMünchener Str. 15\n86633 Neuburg an der Donau\nAlemanha\n\nEmail: ing.gustavo.sosa@gmail.com\nTel: +49 176 20669998\nNIF: DE460972803",
      dataCollected: "2. DADOS COLETADOS",
      dataCollectedItems: [
        "• E-mail: Criação e gestão de conta.",
        "• Apelido: Identificação nos comentários.",
        "• País: Estatísticas regionais.",
        "• Idioma preferido: Personalização da interface."
      ],
      notCollected: "3. DADOS NÃO COLETADOS",
      notCollectedItems: ["• Nome completo", "• Endereço IP completo", "• Localização precisa"],
      usage: "4. USO DOS DADOS",
      usageItems: ["• Exibição de avaliações", "• Estatísticas por país", "• Melhoria do serviço"],
      storage: "5. ARMAZENAMENTO",
      storageText: "Dados armazenados na UE. ApplyGuard não compartilha dados com terceiros.",
      retention: "6. RETENÇÃO",
      retentionText: "Dados mantidos enquanto a conta estiver ativa.",
      rights: "7. SEUS DIREITOS",
      rightsItems: ["Acesso", "Retificação", "Eliminação", "Portabilidade", "Oposição"],
      complaint: "8. RECLAMAÇÃO",
      complaintText: "Direito de reclamar à autoridade de proteção de dados alemã (BayLDA).",
      contact: "9. CONTATO",
      contactText: "Email: privacy@applyguard.de"
    }
  };

  function addSection(parent, title, body, items = []) {
    const section = document.createElement('div');
    section.className = 'section';
    
    const h2 = document.createElement('h2');
    h2.textContent = title;
    section.appendChild(h2);
    
    if (body) {
      const p = document.createElement('p');
      p.style.whiteSpace = 'pre-line';
      p.textContent = body;
      section.appendChild(p);
    }
    
    if (items && items.length > 0) {
      const ul = document.createElement('ul');
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      section.appendChild(ul);
    }
    
    parent.appendChild(section);
  }

  function loadContent(lang) {
    const t = texts[lang] || texts['es'];
    
    const titleEl = document.getElementById('pageTitle');
    const subtitleEl = document.getElementById('pageSubtitle');
    const updateEl = document.getElementById('lastUpdate');
    const contentDiv = document.getElementById('content');
    
    if (titleEl) titleEl.textContent = t.pageTitle;
    if (subtitleEl) subtitleEl.textContent = t.pageSubtitle;
    if (updateEl) updateEl.textContent = t.lastUpdate;
    
    if (!contentDiv) return;
    
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
    }
    
    addSection(contentDiv, t.intro, t.introText);
    addSection(contentDiv, t.dataCollected, '', t.dataCollectedItems);
    addSection(contentDiv, t.notCollected, '', t.notCollectedItems);
    addSection(contentDiv, t.usage, '', t.usageItems);
    addSection(contentDiv, t.storage, t.storageText);
    addSection(contentDiv, t.retention, t.retentionText);
    addSection(contentDiv, t.rights, '', t.rightsItems);
    if (t.exerciseRights) {
      addSection(contentDiv, '', t.exerciseRights);
    }
    addSection(contentDiv, t.complaint, t.complaintText);
    addSection(contentDiv, t.security, t.securityText);
    addSection(contentDiv, t.children, t.childrenText);
    addSection(contentDiv, t.changes, t.changesText);
    addSection(contentDiv, t.contact, t.contactText);
    addSection(contentDiv, t.applicableLaw, t.applicableLawText);
  }

  let savedLang = localStorage.getItem('applyguard_lang') || 'es';
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

  const closeBtn = document.getElementById('closeWindow');
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (typeof browser !== 'undefined' && browser.tabs) {
        browser.tabs.getCurrent().then(tab => {
          browser.tabs.remove(tab.id);
        }).catch(() => window.close());
      } else {
        window.close();
      }
    });
  }
});
