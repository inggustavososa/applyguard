// content.js - Versión corregida

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
    
    let companyElement = document.querySelector('a[href*="/company/"]');
    if (!companyElement) companyElement = document.querySelector('.job-details-jobs-unified-top-card__company-name a');
    if (companyElement) {
      jobInfo.company = companyElement.textContent.trim();
      console.log('[ApplyGuard] LinkedIn empresa:', jobInfo.company);
    }
    
    const matches = url.match(/\/view\/(\d+)/);
    if (matches) jobInfo.id = `linkedin_${matches[1]}`;
  }
  
  // ==================== INFOJOBS ====================
  else if (url.includes('infojobs.net')) {
    jobInfo.platform = 'infojobs';
    console.log('[ApplyGuard] Plataforma: InfoJobs');
    
    const titleElement = document.querySelector('.job-title, h1');
    if (titleElement) jobInfo.title = titleElement.textContent.trim();
    console.log('[ApplyGuard] InfoJobs título:', jobInfo.title);
    
    let companyElement = document.querySelector('.ij-Heading-headline2');
    if (!companyElement) companyElement = document.querySelector('a[href*="/empresa/"]');
    if (companyElement) {
      jobInfo.company = companyElement.textContent.trim();
      console.log('[ApplyGuard] InfoJobs empresa:', jobInfo.company);
    }
    
    const matches = url.match(/offer-(\d+)/);
    if (matches) jobInfo.id = `infojobs_${matches[1]}`;
  }
  
  // ==================== INDEED ====================
  else if (url.includes('indeed.com')) {
    jobInfo.platform = 'indeed';
    console.log('[ApplyGuard] Plataforma: Indeed');
    
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
    
    const matches = url.match(/jk=([a-zA-Z0-9]+)/);
    if (matches) jobInfo.id = `indeed_${matches[1]}`;
  }
  
  // ==================== COMPUTRABAJO ====================
  else if (url.includes('computrabajo.com')) {
    jobInfo.platform = 'computrabajo';
    console.log('[ApplyGuard] Plataforma: Computrabajo');
    
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
    
    const paragraphs = document.querySelectorAll('p.fs16');
    for (const p of paragraphs) {
      const text = p.textContent.trim();
      if (text.includes(' - ') && !text.includes('mejores empresas')) {
        const parts = text.split(' - ');
        jobInfo.company = parts[0] || text;
        console.log('[ApplyGuard] Computrabajo empresa encontrada:', jobInfo.company);
        break;
      }
    }
    
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
    
    const titleElement = document.querySelector('h1[data-automation="job-detail-title"], h1');
    if (titleElement) jobInfo.title = titleElement.textContent.trim();
    console.log('[ApplyGuard] Seek título:', jobInfo.title);
    
    const companyElement = document.querySelector('span[data-automation="advertiser-name"]');
    if (companyElement) {
      let companyText = companyElement.textContent.trim();
      companyText = companyText.replace(/Verified|Sponsored|•/g, '').trim();
      jobInfo.company = companyText;
      console.log('[ApplyGuard] Seek empresa:', jobInfo.company);
    }
    
    const matches = url.match(/job\/([0-9]+)/);
    if (matches) jobInfo.id = `seek_${matches[1]}`;
  }
  
  // ==================== STEPSTONE ====================
  else if (url.includes('stepstone.de') || url.includes('stepstone.at') || url.includes('stepstone.ch')) {
    jobInfo.platform = 'stepstone';
    console.log('[ApplyGuard] Plataforma: Stepstone');
    
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
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getJobInfo") {
    const jobInfo = extractJobInfo();
    sendResponse({jobInfo: jobInfo});
  }
  return true;
});

// Mapa de selectores de título por plataforma
const TITLE_SELECTORS = {
  linkedin:     [
    '.job-details-jobs-unified-top-card__job-title',
    'h1[class*="jobs"]',
    '[data-test-job-title]'
  ],
  indeed:       [
    'h1[data-testid="jobsearch-JobInfoHeader-title"]',
    '.jobsearch-JobInfoHeader-title',
    'h1'
  ],
  infojobs:     ['.job-title', 'h1'],
  computrabajo: ['h1.fwB.fs24', 'h1.box_detail', 'h1'],
  seek:         ['h1[data-automation="job-detail-title"]', 'h1'],
  stepstone:    ['h1[data-at="header-job-title"]', '.job-ad-display-gro348 h1', 'h1']
};

function getTitleElement(platform) {
  const selectors = TITLE_SELECTORS[platform] || ['h1'];
  for (const sel of selectors) {
    const el = document.querySelector(sel);
    if (el && el.textContent.trim()) return el;
  }
  return null;
}

function buildInlineBadge(average, total) {
  const wrapper = document.createElement('span');
  wrapper.id = 'applyguard-inline-badge';
  wrapper.style.cssText = `
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-left: 10px;
    padding: 3px 10px 3px 6px;
    background: #02589e;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    color: white;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    line-height: 1;
  `;

  const logo = document.createElement('img');
  logo.src = browser.runtime.getURL('icons/icon48.png');
  logo.style.cssText = 'width:18px;height:18px;border-radius:4px;display:block;';
  wrapper.appendChild(logo);

  const star = document.createElement('span');
  star.textContent = '★';
  star.style.cssText = 'color:#fe7d00;font-size:14px;line-height:1;';
  wrapper.appendChild(star);

  const score = document.createElement('span');
  score.textContent = `${average.toFixed(1)}`;
  wrapper.appendChild(score);

  const count = document.createElement('span');
  count.textContent = `(${total})`;
  count.style.cssText = 'opacity:0.8;font-weight:400;font-size:11px;';
  wrapper.appendChild(count);

  wrapper.addEventListener('click', () => {
    browser.runtime.sendMessage({ action: 'openPopup' }).catch(() => {});
  });

  return wrapper;
}

async function addInlineBadge(jobInfo) {
  if (!jobInfo || !jobInfo.id || !jobInfo.platform) return;

  if (document.getElementById('applyguard-inline-badge')) return;

  try {
    const response = await fetch(
      `https://applyguard-backend.onrender.com/api/reviews/summary?jobId=${encodeURIComponent(jobInfo.id)}`
    );
    if (!response.ok) return;

    const data = await response.json();
    if (!data || data.total === 0) return;

    const titleEl = getTitleElement(jobInfo.platform);
    if (!titleEl) return;

    const badge = buildInlineBadge(data.average, data.total);
    titleEl.appendChild(badge);

  } catch (err) {
    console.error('[ApplyGuard] Error adding inline badge:', err);
  }
}

async function addBadge() {
  const jobInfo = extractJobInfo();
  if (!jobInfo.id) return;
  
  try {
    const response = await fetch(`https://applyguard-backend.onrender.com/api/reviews/summary?jobId=${encodeURIComponent(jobInfo.id)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.total > 0) {
      const badge = document.createElement('div');
      badge.id = 'applyguard-badge';
      
      const innerDiv = document.createElement('div');
      innerDiv.style.display = 'flex';
      innerDiv.style.alignItems = 'center';
      innerDiv.style.gap = '8px';
      
      const shieldSpan = document.createElement('span');
      shieldSpan.textContent = '🛡️';
      innerDiv.appendChild(shieldSpan);
      
      const ratingSpan = document.createElement('span');
      const strong = document.createElement('strong');
      strong.textContent = data.average.toFixed(1);
      ratingSpan.appendChild(strong);
      ratingSpan.appendChild(document.createTextNode(' ★'));
      innerDiv.appendChild(ratingSpan);
      
      const countSpan = document.createElement('span');
      countSpan.textContent = `(${data.total})`;
      innerDiv.appendChild(countSpan);
      
      badge.appendChild(innerDiv);
      
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
      
      badge.addEventListener('click', () => {
        browser.runtime.sendMessage({ action: "openPopup" }).catch(err => {
          console.log('[ApplyGuard] Error al enviar mensaje:', err);
        });
      });
      
      document.body.appendChild(badge);
    }
  } catch (error) {
    console.error('[ApplyGuard] Error loading badge:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const jobInfo = extractJobInfo();
      addBadge();
      addInlineBadge(jobInfo);
    }, 1500);
  });
} else {
  setTimeout(() => {
    const jobInfo = extractJobInfo();
    addBadge();
    addInlineBadge(jobInfo);
  }, 1500);
}
