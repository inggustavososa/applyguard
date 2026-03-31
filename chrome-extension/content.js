// content.js - Soporte para LinkedIn, InfoJobs, Indeed, Computrabajo, Seek y Stepstone
function extractJobInfo() {
  const url = window.location.href;
  let jobInfo = {
    id: null,
    title: null,
    company: null,
    platform: null
  };
  
  console.log('[ApplyGuard] === INICIANDO DETECCIÓN ===');
  console.log('[ApplyGuard] URL:', url);
  
  // ==================== LINKEDIN ====================
  if (url.includes('linkedin.com/jobs/')) {
    jobInfo.platform = 'linkedin';
    console.log('[ApplyGuard] Plataforma: LinkedIn');
    
    // Título
    const titleSelectors = [
      '.job-details-jobs-unified-top-card__job-title',
      'h1[class*="jobs"]',
      '[data-test-job-title]'
    ];
    for (const selector of titleSelectors) {
      const element = document.querySelector(selector);
      if (element && element.textContent.trim()) {
        jobInfo.title = element.textContent.trim();
        console.log('[ApplyGuard] LinkedIn título:', jobInfo.title);
        break;
      }
    }
    
    // Empresa
    let companyElement = document.querySelector('a[href*="/company/"]');
    if (!companyElement) companyElement = document.querySelector('.job-details-jobs-unified-top-card__company-name a');
    if (companyElement) {
      jobInfo.company = companyElement.textContent.trim();
      console.log('[ApplyGuard] LinkedIn empresa:', jobInfo.company);
    }
    
    // ID
    const matches = url.match(/\/view\/(\d+)/);
    if (matches) jobInfo.id = `linkedin_${matches[1]}`;
  }
  
  // ==================== INFOJOBS ====================
  else if (url.includes('infojobs.net')) {
    jobInfo.platform = 'infojobs';
    console.log('[ApplyGuard] Plataforma: InfoJobs');
    
    // Título
    const titleElement = document.querySelector('.job-title, h1');
    if (titleElement) jobInfo.title = titleElement.textContent.trim();
    console.log('[ApplyGuard] InfoJobs título:', jobInfo.title);
    
    // Empresa
    let companyElement = document.querySelector('.ij-Heading-headline2');
    if (!companyElement) companyElement = document.querySelector('a[href*="/empresa/"]');
    if (companyElement) {
      jobInfo.company = companyElement.textContent.trim();
      console.log('[ApplyGuard] InfoJobs empresa:', jobInfo.company);
    }
    
    // ID
    const matches = url.match(/offer-(\d+)/);
    if (matches) jobInfo.id = `infojobs_${matches[1]}`;
  }
  
  // ==================== INDEED ====================
  else if (url.includes('indeed.com')) {
    jobInfo.platform = 'indeed';
    console.log('[ApplyGuard] Plataforma: Indeed');
    
    // Título
    const titleSelectors = [
      'h1[data-testid="jobsearch-JobInfoHeader-title"]',
      '.jobsearch-JobInfoHeader-title',
      'h1'
    ];
    for (const selector of titleSelectors) {
      const element = document.querySelector(selector);
      if (element && element.textContent.trim()) {
        jobInfo.title = element.textContent.trim();
        console.log('[ApplyGuard] Indeed título:', jobInfo.title);
        break;
      }
    }
    
    // Empresa
    let companyElement = null;
    const companySelectors = [
      '[data-testid="inlineHeader-companyName"] span',
      '[data-company-name="true"] span',
      '[data-testid="inlineHeader-companyName"]',
      '[data-company-name="true"]'
    ];
    for (const selector of companySelectors) {
      const element = document.querySelector(selector);
      if (element && element.textContent.trim()) {
        companyElement = element;
        console.log('[ApplyGuard] Indeed selector empresa:', selector, '->', element.textContent.trim());
        break;
      }
    }
    if (companyElement) {
      jobInfo.company = companyElement.textContent.trim();
      console.log('[ApplyGuard] Indeed empresa:', jobInfo.company);
    }
    
    // ID
    const matches = url.match(/jk=([a-zA-Z0-9]+)/);
    if (matches) jobInfo.id = `indeed_${matches[1]}`;
  }
  
  // ==================== COMPUTRABAJO ====================
  // Computrabajo
  else if (url.includes('computrabajo.com')) {
    jobInfo.platform = 'computrabajo';
    console.log('[ApplyGuard] Plataforma: Computrabajo');
    
    // Título
    const titleSelectors = [
      'h1.fwB.fs24',
      'h1.box_detail',
      'h1'
    ];
    for (const selector of titleSelectors) {
      const element = document.querySelector(selector);
      if (element && element.textContent.trim()) {
        jobInfo.title = element.textContent.trim();
        console.log('[ApplyGuard] Computrabajo título:', jobInfo.title);
        break;
      }
    }
    
    // Empresa - buscar específicamente el párrafo después del título
    // En el HTML, la empresa está en el primer <p class="fs16"> dentro del contenedor principal
    let companyElement = null;
    
    // Buscar el párrafo que contiene el nombre de la empresa
    const paragraphs = document.querySelectorAll('p.fs16');
    for (const p of paragraphs) {
      const text = p.textContent.trim();
      // El formato correcto es "Empresa - Ubicación"
      if (text.includes(' - ') && !text.includes('mejores empresas')) {
        const parts = text.split(' - ');
        jobInfo.company = parts[0] || text;
        console.log('[ApplyGuard] Computrabajo empresa encontrada:', jobInfo.company);
        break;
      }
    }
    
    // Si no se encontró, intentar con otros selectores
    if (!jobInfo.company) {
      const altSelectors = [
        '.info_company a',
        '[itemprop="hiringOrganization"]',
        '.empresa'
      ];
      for (const selector of altSelectors) {
        const element = document.querySelector(selector);
        if (element && element.textContent.trim() && element.textContent.trim().length < 100) {
          jobInfo.company = element.textContent.trim();
          console.log('[ApplyGuard] Computrabajo empresa alt:', jobInfo.company);
          break;
        }
      }
    }
    
    // ID
    const idMatch = url.match(/-([A-F0-9]{32})/i);
    if (idMatch) {
      jobInfo.id = `computrabajo_${idMatch[1]}`;
    } else {
      const numericMatch = url.match(/-([0-9]+)\.htm/);
      if (numericMatch) jobInfo.id = `computrabajo_${numericMatch[1]}`;
    }
  }
  
  // ==================== SEEK ====================
  else if (url.includes('seek.com.au')) {
    jobInfo.platform = 'seek';
    console.log('[ApplyGuard] Plataforma: Seek');
    
    // Título
    const titleElement = document.querySelector('h1[data-automation="job-detail-title"], h1');
    if (titleElement) jobInfo.title = titleElement.textContent.trim();
    console.log('[ApplyGuard] Seek título:', jobInfo.title);
    
    // Empresa
    const companyElement = document.querySelector('span[data-automation="advertiser-name"]');
    if (companyElement) {
      let companyText = companyElement.textContent.trim();
      companyText = companyText.replace(/Verified|Sponsored|•/g, '').trim();
      jobInfo.company = companyText;
      console.log('[ApplyGuard] Seek empresa:', jobInfo.company);
    }
    
    // ID
    const matches = url.match(/job\/([0-9]+)/);
    if (matches) jobInfo.id = `seek_${matches[1]}`;
  }
  
  // ==================== STEPSTONE ====================
  else if (url.includes('stepstone.de') || url.includes('stepstone.at') || url.includes('stepstone.ch')) {
    jobInfo.platform = 'stepstone';
    console.log('[ApplyGuard] Plataforma: Stepstone');
    
    // Título
    const titleSelectors = [
      'h1[data-at="header-job-title"]',
      '.job-ad-display-gro348 h1',
      'h1'
    ];
    for (const selector of titleSelectors) {
      const element = document.querySelector(selector);
      if (element && element.textContent.trim()) {
        jobInfo.title = element.textContent.trim();
        console.log('[ApplyGuard] Stepstone título:', jobInfo.title);
        break;
      }
    }
    
    // Empresa
    let companyElement = null;
    const companySelectors = [
      '[data-at="metadata-company-name"]',
      '[data-at="metadata-company-name"] span',
      '.listingHeaderColor a',
      'a[href*="/cmp/"]'
    ];
    for (const selector of companySelectors) {
      const element = document.querySelector(selector);
      if (element && element.textContent.trim()) {
        companyElement = element;
        console.log('[ApplyGuard] Stepstone selector empresa:', selector, '->', element.textContent.trim());
        break;
      }
    }
    if (companyElement) {
      jobInfo.company = companyElement.textContent.trim();
      console.log('[ApplyGuard] Stepstone empresa:', jobInfo.company);
    }
    
    // Si no se encontró, buscar en JSON-LD
    if (!jobInfo.company) {
      const jsonLd = document.querySelector('script[type="application/ld+json"]');
      if (jsonLd) {
        try {
          const data = JSON.parse(jsonLd.textContent);
          if (data.hiringOrganization && data.hiringOrganization.name) {
            jobInfo.company = data.hiringOrganization.name;
            console.log('[ApplyGuard] Stepstone empresa desde JSON-LD:', jobInfo.company);
          }
        } catch (e) {}
      }
    }
    
    // ID
    const matches = url.match(/--(\d+)-inline\.html/);
    if (matches) {
      jobInfo.id = `stepstone_${matches[1]}`;
    } else {
      const idMatch = url.match(/-(\d+)-inline\.html/);
      if (idMatch) jobInfo.id = `stepstone_${idMatch[1]}`;
    }
  }
  
  // ==================== FALLBACKS ====================
  if (!jobInfo.title) {
    const titleParts = document.title.split('|');
    jobInfo.title = titleParts[0] ? titleParts[0].trim() : 'Oferta de trabajo';
    console.log('[ApplyGuard] Título por fallback:', jobInfo.title);
  }
  if (!jobInfo.company) {
    jobInfo.company = 'Empresa no identificada';
    console.log('[ApplyGuard] Empresa no identificada');
  }
  if (!jobInfo.id) {
    jobInfo.id = `generic_${Date.now()}`;
  }
  
  console.log('[ApplyGuard] === RESULTADO FINAL ===');
  console.log('[ApplyGuard] Título:', jobInfo.title);
  console.log('[ApplyGuard] Empresa:', jobInfo.company);
  console.log('[ApplyGuard] ID:', jobInfo.id);
  console.log('[ApplyGuard] Plataforma:', jobInfo.platform);
  
  return jobInfo;
}

// Escuchar mensajes del popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getJobInfo") {
    const jobInfo = extractJobInfo();
    sendResponse({jobInfo: jobInfo});
  }
  return true;
});

// Añadir badge flotante con resumen de valoraciones
async function addBadge() {
  const jobInfo = extractJobInfo();
  if (!jobInfo.id) return;
  
  try {
    const response = await fetch(`https://applyguard-backend.onrender.com/api/reviews/summary?jobId=${encodeURIComponent(jobInfo.id)}`);
    const data = await response.json();
    
    if (data.total > 0) {
      const badge = document.createElement('div');
      badge.id = 'applyguard-badge';
      badge.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <span>🛡️</span>
          <span><strong>${data.average.toFixed(1)}</strong> ★</span>
          <span>(${data.total})</span>
        </div>
      `;
      badge.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #1a472a;
        color: white;
        padding: 10px 16px;
        border-radius: 40px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        cursor: pointer;
        z-index: 999999;
        border: none;
        transition: transform 0.2s;
      `;
      badge.addEventListener('click', () => chrome.runtime.sendMessage({ action: "openPopup" }));
      document.body.appendChild(badge);
    }
  } catch (error) {
    console.error('[ApplyGuard] Error loading badge:', error);
  }
}

// Esperar a que la página cargue antes de añadir el badge
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addBadge, 1500);
  });
} else {
  setTimeout(addBadge, 1500);
}
