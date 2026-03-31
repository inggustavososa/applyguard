// popup.js
const API_URL = 'https://applyguard-backend.onrender.com/api';
let currentJobId = null;
let currentUser = null;
let currentLanguage = 'es';

// Textos por idioma
const texts = {
  es: {
    extensionName: 'ApplyGuard',
    tagline: 'Protege tus postulaciones',
    verdictLabel: 'Dictamen',
    ratingLabel: 'Puntuación',
    submit: 'Enviar valoración',
    loginMessage: 'Inicia sesión para comentar',
    loginButton: 'Iniciar sesión',
    real: '✅ Real',
    fake: '❌ Falso',
    suspicious: '⚠️ Sospechoso',
    rating5: '⭐⭐⭐⭐⭐ - Excelente',
    rating4: '⭐⭐⭐⭐ - Bueno',
    rating3: '⭐⭐⭐ - Normal',
    rating2: '⭐⭐ - Malo',
    rating1: '⭐ - Pésimo',
    commentPlaceholder: 'Escribe tu comentario...',
    noReviews: 'No hay valoraciones aún. ¡Sé el primero en comentar!',
    loading: 'Cargando...',
    errorLoading: 'Error al cargar valoraciones',
    reviewSubmitted: '¡Valoración enviada!',
    errorSubmit: 'Error al enviar la valoración',
    loginRequired: 'Inicia sesión para comentar',
    noJobDetected: 'No se detectó oferta',
    openJob: 'Abre una oferta de LinkedIn, InfoJobs o Indeed',
    terms: 'Términos y Condiciones',
    privacy: 'Política de Privacidad',
    termsLink: '📜 Términos y Condiciones',
    privacyLink: '🔒 Política de Privacidad'
  },
  en: {
    extensionName: 'ApplyGuard',
    tagline: 'Protect your applications',
    verdictLabel: 'Verdict',
    ratingLabel: 'Rating',
    submit: 'Submit Review',
    loginMessage: 'Login to comment',
    loginButton: 'Login',
    real: '✅ Real',
    fake: '❌ Fake',
    suspicious: '⚠️ Suspicious',
    rating5: '⭐⭐⭐⭐⭐ - Excellent',
    rating4: '⭐⭐⭐⭐ - Good',
    rating3: '⭐⭐⭐ - Average',
    rating2: '⭐⭐ - Bad',
    rating1: '⭐ - Terrible',
    commentPlaceholder: 'Write your comment...',
    noReviews: 'No reviews yet. Be the first to comment!',
    loading: 'Loading...',
    errorLoading: 'Error loading reviews',
    reviewSubmitted: 'Review submitted!',
    errorSubmit: 'Error submitting review',
    loginRequired: 'Login to comment',
    noJobDetected: 'No job detected',
    openJob: 'Open a job offer on LinkedIn, InfoJobs or Indeed',
    terms: 'Terms and Conditions',
    privacy: 'Privacy Policy',
    termsLink: '📜 Terms and Conditions',
    privacyLink: '🔒 Privacy Policy'
  },
  fr: {
    extensionName: 'ApplyGuard',
    tagline: 'Protégez vos candidatures',
    verdictLabel: 'Verdict',
    ratingLabel: 'Note',
    submit: 'Envoyer',
    loginMessage: 'Connectez-vous pour commenter',
    loginButton: 'Se connecter',
    real: '✅ Réel',
    fake: '❌ Faux',
    suspicious: '⚠️ Suspect',
    rating5: '⭐⭐⭐⭐⭐ - Excellent',
    rating4: '⭐⭐⭐⭐ - Bien',
    rating3: '⭐⭐⭐ - Moyen',
    rating2: '⭐⭐ - Mauvais',
    rating1: '⭐ - Terrible',
    commentPlaceholder: 'Écrivez votre commentaire...',
    noReviews: 'Aucun avis pour le moment. Soyez le premier à commenter !',
    loading: 'Chargement...',
    errorLoading: 'Erreur de chargement',
    reviewSubmitted: 'Avis envoyé !',
    errorSubmit: 'Erreur lors de l\'envoi',
    loginRequired: 'Connectez-vous pour commenter',
    noJobDetected: 'Offre non détectée',
    openJob: 'Ouvrez une offre sur LinkedIn, InfoJobs ou Indeed',
    terms: 'Conditions Générales',
    privacy: 'Politique de Confidentialité',
    termsLink: '📜 Conditions Générales',
    privacyLink: '🔒 Politique de Confidentialité'
  },
  de: {
    extensionName: 'ApplyGuard',
    tagline: 'Schützen Sie Ihre Bewerbungen',
    verdictLabel: 'Urteil',
    ratingLabel: 'Bewertung',
    submit: 'Bewertung absenden',
    loginMessage: 'Melden Sie sich an, um zu kommentieren',
    loginButton: 'Anmelden',
    real: '✅ Echt',
    fake: '❌ Falsch',
    suspicious: '⚠️ Verdächtig',
    rating5: '⭐⭐⭐⭐⭐ - Ausgezeichnet',
    rating4: '⭐⭐⭐⭐ - Gut',
    rating3: '⭐⭐⭐ - Durchschnittlich',
    rating2: '⭐⭐ - Schlecht',
    rating1: '⭐ - Sehr schlecht',
    commentPlaceholder: 'Schreiben Sie Ihren Kommentar...',
    noReviews: 'Noch keine Bewertungen. Seien Sie der Erste!',
    loading: 'Laden...',
    errorLoading: 'Fehler beim Laden',
    reviewSubmitted: 'Bewertung gesendet!',
    errorSubmit: 'Fehler beim Senden',
    loginRequired: 'Anmelden zum Kommentieren',
    noJobDetected: 'Stelle nicht erkannt',
    openJob: 'Öffnen Sie eine Stelle auf LinkedIn, InfoJobs oder Indeed',
    terms: 'Allgemeine Geschäftsbedingungen',
    privacy: 'Datenschutzerklärung',
    termsLink: '📜 Allgemeine Geschäftsbedingungen',
    privacyLink: '🔒 Datenschutzerklärung'
  },
  pt: {
    extensionName: 'ApplyGuard',
    tagline: 'Proteja suas candidaturas',
    verdictLabel: 'Veredito',
    ratingLabel: 'Pontuação',
    submit: 'Enviar avaliação',
    loginMessage: 'Faça login para comentar',
    loginButton: 'Entrar',
    real: '✅ Real',
    fake: '❌ Falso',
    suspicious: '⚠️ Suspeito',
    rating5: '⭐⭐⭐⭐⭐ - Excelente',
    rating4: '⭐⭐⭐⭐ - Bom',
    rating3: '⭐⭐⭐ - Normal',
    rating2: '⭐⭐ - Ruim',
    rating1: '⭐ - Péssimo',
    commentPlaceholder: 'Escreva seu comentário...',
    noReviews: 'Nenhuma avaliação ainda. Seja o primeiro!',
    loading: 'Carregando...',
    errorLoading: 'Erro ao carregar',
    reviewSubmitted: 'Avaliação enviada!',
    errorSubmit: 'Erro ao enviar',
    loginRequired: 'Faça login para comentar',
    noJobDetected: 'Oferta não detectada',
    openJob: 'Abra uma oferta no LinkedIn, InfoJobs ou Indeed',
    terms: 'Termos e Condições',
    privacy: 'Política de Privacidade',
    termsLink: '📜 Termos e Condições',
    privacyLink: '🔒 Política de Privacidade'
  }
};

// Actualizar todos los textos de la interfaz
function updateUITexts() {
  const t = texts[currentLanguage];
  if (!t) return;
  
  const elements = {
    extensionName: document.getElementById('extensionName'),
    tagline: document.getElementById('tagline'),
    verdictLabel: document.getElementById('verdictLabel'),
    ratingLabel: document.getElementById('ratingLabel'),
    submitReview: document.getElementById('submitReview'),
    loginMessage: document.getElementById('loginMessage'),
    loginButton: document.getElementById('loginButton'),
    commentText: document.getElementById('commentText')
  };
  
  if (elements.extensionName) elements.extensionName.textContent = t.extensionName;
  if (elements.tagline) elements.tagline.textContent = t.tagline;
  if (elements.verdictLabel) elements.verdictLabel.textContent = t.verdictLabel;
  if (elements.ratingLabel) elements.ratingLabel.textContent = t.ratingLabel;
  if (elements.submitReview) elements.submitReview.textContent = t.submit;
  if (elements.loginMessage) elements.loginMessage.textContent = t.loginMessage;
  if (elements.loginButton) elements.loginButton.textContent = t.loginButton;
  if (elements.commentText) elements.commentText.placeholder = t.commentPlaceholder;
  
  // Actualizar opciones del selector de dictamen
  const verdictSelect = document.getElementById('verdictSelect');
  if (verdictSelect) {
    verdictSelect.options[0].text = t.real;
    verdictSelect.options[1].text = t.fake;
    verdictSelect.options[2].text = t.suspicious;
  }
  
  // Actualizar opciones del selector de puntuación
  const ratingSelect = document.getElementById('ratingSelect');
  if (ratingSelect) {
    ratingSelect.options[0].text = t.rating5;
    ratingSelect.options[1].text = t.rating4;
    ratingSelect.options[2].text = t.rating3;
    ratingSelect.options[3].text = t.rating2;
    ratingSelect.options[4].text = t.rating1;
  }
  
  const termsLink = document.getElementById('termsLink');
  const privacyLink = document.getElementById('privacyLink');
  if (termsLink) termsLink.textContent = t.termsLink;
  if (privacyLink) privacyLink.textContent = t.privacyLink;
  
}

// Configurar selector de idioma
function setupLanguageSelector() {
  const selector = document.getElementById('languageSelect');
  if (!selector) return;
  
  selector.addEventListener('change', function(e) {
    currentLanguage = e.target.value;
    chrome.storage.local.set({ language: currentLanguage });
    updateUITexts();
    if (currentJobId) loadReviews(currentJobId);
  });
}

// Cargar idioma guardado
function loadSavedLanguage() {
  chrome.storage.local.get(['language'], function(result) {
    const savedLang = result.language;
    const supported = ['es', 'en', 'fr', 'de', 'pt'];
    
    if (savedLang && supported.includes(savedLang)) {
      currentLanguage = savedLang;
    } else {
      // Detectar idioma del navegador
      const browserLang = navigator.language.split('-')[0];
      currentLanguage = supported.includes(browserLang) ? browserLang : 'es';
    }
    
    const selector = document.getElementById('languageSelect');
    if (selector) selector.value = currentLanguage;
    updateUITexts();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setupLanguageSelector();
  loadSavedLanguage();
  
  // Abrir términos de uso
document.getElementById('termsLink')?.addEventListener('click', (e) => {
  e.preventDefault();
  const url = chrome.runtime.getURL('terms.html');
  window.open(url, '_blank');
});

// Abrir política de privacidad
document.getElementById('privacyLink')?.addEventListener('click', (e) => {
  e.preventDefault();
  const url = chrome.runtime.getURL('privacy.html');
  window.open(url, '_blank');
});
  
  
  // Obtener información del trabajo actual
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getJobInfo"}, function(response) {
      if (response && response.jobInfo) {
        displayJobInfo(response.jobInfo);
        currentJobId = response.jobInfo.id;
        loadReviews(currentJobId);
        checkUserLoggedIn();
      } else {
        const t = texts[currentLanguage];
        document.getElementById('jobInfo').style.display = 'block';
        document.getElementById('jobTitle').textContent = t?.noJobDetected || 'No se detectó oferta';
        document.getElementById('companyName').textContent = t?.openJob || 'Abre una oferta';
      }
    });
  });
  
  // Event listeners
  document.getElementById('submitReview')?.addEventListener('click', submitReview);
  document.getElementById('loginButton')?.addEventListener('click', login);
});

function displayJobInfo(jobInfo) {
  document.getElementById('jobTitle').textContent = jobInfo.title;
  document.getElementById('companyName').textContent = jobInfo.company;
  document.getElementById('jobInfo').style.display = 'block';
}

async function loadReviews(jobId) {
  const reviewsList = document.getElementById('reviewsList');
  const t = texts[currentLanguage];
  if (!t) return;
  reviewsList.innerHTML = `<div class="loading">${t.loading}</div>`;
  
  try {
    const response = await fetch(`${API_URL}/reviews?jobId=${encodeURIComponent(jobId)}&lang=${currentLanguage}`);
    const data = await response.json();
    displayReviews(data.reviews);
    updateRatingSummary(data.averageRating, data.totalReviews);
  } catch (error) {
    console.error('Error loading reviews:', error);
    reviewsList.innerHTML = `<div class="loading">${t.errorLoading}</div>`;
  }
}

function displayReviews(reviews) {
  const reviewsList = document.getElementById('reviewsList');
  const t = texts[currentLanguage];
  if (!t) return;
  
  if (!reviews || reviews.length === 0) {
    reviewsList.innerHTML = `<div class="no-reviews">${t.noReviews}</div>`;
    return;
  }
  
  reviewsList.innerHTML = reviews.map(review => {
    let verdictText = '';
    if (review.verdict === 'real') verdictText = t.real;
    else if (review.verdict === 'fake') verdictText = t.fake;
    else verdictText = t.suspicious;
    
    const locale = currentLanguage === 'es' ? 'es-ES' : currentLanguage === 'en' ? 'en-US' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'de' ? 'de-DE' : 'pt-PT';
    
    return `
      <div class="review-item">
        <div class="review-header">
          <span class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</span>
          <span class="review-verdict verdict-${review.verdict}">${verdictText}</span>
          <span class="review-date">${new Date(review.created_at).toLocaleDateString(locale)}</span>
        </div>
        <div class="review-text">${escapeHtml(review.comment)}</div>
      </div>
    `;
  }).join('');
}

function updateRatingSummary(average, total) {
  const avgElement = document.getElementById('averageRating');
  const starsElement = document.getElementById('stars');
  const totalElement = document.getElementById('totalReviews');
  const t = texts[currentLanguage];
  if (!t) return;
  
  avgElement.textContent = average.toFixed(1);
  const reviewWord = total === 1 ? 
    (currentLanguage === 'es' ? 'valoración' : currentLanguage === 'en' ? 'review' : currentLanguage === 'fr' ? 'avis' : currentLanguage === 'de' ? 'bewertung' : 'avaliação') : 
    (currentLanguage === 'es' ? 'valoraciones' : currentLanguage === 'en' ? 'reviews' : currentLanguage === 'fr' ? 'avis' : currentLanguage === 'de' ? 'bewertungen' : 'avaliações');
  totalElement.textContent = `${total} ${reviewWord}`;
  
  const fullStars = Math.round(average);
  starsElement.textContent = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  
  document.getElementById('ratingSummary').style.display = 'flex';
}

async function submitReview() {
  if (!currentUser) {
    const t = texts[currentLanguage];
    alert(t?.loginRequired || 'Login required');
    return;
  }
  
  const verdict = document.getElementById('verdictSelect').value;
  const rating = parseInt(document.getElementById('ratingSelect').value);
  const comment = document.getElementById('commentText').value;
  const t = texts[currentLanguage];
  
  if (!comment.trim()) {
    alert(t?.commentPlaceholder || 'Write a comment');
    return;
  }
  
  const review = {
    jobId: currentJobId,
    verdict: verdict,
    rating: rating,
    comment: comment,
    userId: currentUser.id,
    language: currentLanguage
  };
  
  document.getElementById('submitReview').disabled = true;
  document.getElementById('submitReview').textContent = (t?.submit || 'Submit') + '...';
  
  try {
    const response = await fetch(`${API_URL}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review)
    });
    
    if (response.ok) {
      alert(t?.reviewSubmitted || 'Review submitted!');
      document.getElementById('commentText').value = '';
      loadReviews(currentJobId);
    } else {
      throw new Error('Error');
    }
  } catch (error) {
    console.error('Error submitting review:', error);
    alert(t?.errorSubmit || 'Error submitting review');
  } finally {
    document.getElementById('submitReview').disabled = false;
    document.getElementById('submitReview').textContent = t?.submit || 'Submit';
  }
}

function checkUserLoggedIn() {
  chrome.storage.local.get(['user'], function(result) {
    if (result.user) {
      currentUser = result.user;
      document.getElementById('reviewForm').style.display = 'block';
      document.getElementById('loginPrompt').style.display = 'none';
    } else {
      document.getElementById('reviewForm').style.display = 'none';
      document.getElementById('loginPrompt').style.display = 'block';
    }
  });
}

function login() {
  const user = {
    id: 'user_' + Date.now(),
    name: 'Usuario'
  };
  
  chrome.storage.local.set({user: user}, function() {
    currentUser = user;
    document.getElementById('reviewForm').style.display = 'block';
    document.getElementById('loginPrompt').style.display = 'none';
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
