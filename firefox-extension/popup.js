// popup.js - Versión final limpia y optimizada

const translations = {
  es: {
    loginTitle: "Bienvenido de nuevo",
    loginSubtitle: "Ingresa tus credenciales para continuar",
    registerTitle: "Crear cuenta",
    registerSubtitle: "Completa tus datos para empezar",
    email: "Correo electrónico",
    emailPlaceholder: "tu@email.com",
    password: "Contraseña",
    passwordPlaceholder: "••••••••",
    nickname: "Nombre público",
    nicknamePlaceholder: "Cómo aparecerás en los comentarios",
    nicknameAvailable: "✓ Nickname disponible",
    nicknameTaken: "✗ Este nickname ya está en uso",
    nicknameChecking: "⏳ Verificando disponibilidad...",
    nicknameRequired: "El nickname debe tener al menos 3 caracteres",
    country: "País",
    selectCountry: "Selecciona tu país",
    language: "Idioma de la interfaz",
    loginBtn: "Iniciar sesión",
    registerBtn: "Registrarme",
    switchToLogin: "¿Ya tienes cuenta? Inicia sesión",
    switchToRegister: "¿No tienes cuenta? Regístrate",
    logoutBtn: "Cerrar sesión",
    logoutSuccess: "✅ Sesión cerrada correctamente",
    publicName: "Tu nombre público",
    notConfigured: "No configurado",
    verdict: "Dictamen",
    real: "✅ Real",
    fake: "❌ Falso",
    suspicious: "⚠️ Sospechoso",
    rating: "Puntuación",
    excellent: "⭐⭐⭐⭐⭐ - Excelente",
    good: "⭐⭐⭐⭐ - Bueno",
    normal: "⭐⭐⭐ - Normal",
    bad: "⭐⭐ - Malo",
    terrible: "⭐ - Pésimo",
    comment: "Comentario",
    commentPlaceholder: "Escribe tu comentario...",
    submit: "Enviar valoración",
    deletePlaceholder: "Código de review (ej: RV-A3F9K2)",
    deleteBtn: "Eliminar mi review",
    loginRequired: "Debes iniciar sesión primero",
    noJobDetected: "No hay una oferta de trabajo detectada",
    writeComment: "Por favor escribe un comentario",
    sending: "Enviando...",
    reviewSent: "✅ ¡Review publicada!",
    yourCode: "📝 Tu código de publicación:",
    saveCode: "🔑 Guarda este código. Sin él no podrás eliminar tu review.",
    deleteConfirm: "⚠️ ¿Estás seguro de que quieres eliminar esta review?",
    invalidCode: "❌ Código inválido o review no encontrada",
    alreadyDeleted: "⚠️ Esta review ya fue eliminada anteriormente",
    reviewDeleted: "✅ Review eliminada correctamente",
    errorOccurred: "❌ Error: ",
    loading: "Cargando comentarios...",
    noReviews: "📝 Sé el primero en comentar esta oferta",
    anonymous: "👤 Usuario anónimo",
    jobTitleDefault: "Título no disponible",
    companyDefault: "Empresa no identificada",
    notOnJobPage: "No estás en una página de empleo",
    openJobFirst: "Abre una oferta de trabajo primero",
    terms: "📋 Términos de uso",
    privacy: "🔒 Política de privacidad",
    languageLabel: "Idioma",
    reviewCode: "Código:",
    slogan: "Protege tus postulaciones",
	verdictLabel: "Dictamen",
	ratingLabel: "Puntuación"
  },
  en: {
    loginTitle: "Welcome back",
    loginSubtitle: "Enter your credentials to continue",
    registerTitle: "Create account",
    registerSubtitle: "Complete your data to start",
    email: "Email",
    emailPlaceholder: "your@email.com",
    password: "Password",
    passwordPlaceholder: "••••••••",
    nickname: "Public name",
    nicknamePlaceholder: "How you'll appear in comments",
    nicknameAvailable: "✓ Nickname available",
    nicknameTaken: "✗ This nickname is already taken",
    nicknameChecking: "⏳ Checking availability...",
    nicknameRequired: "Nickname must be at least 3 characters",
    country: "Country",
    selectCountry: "Select your country",
    language: "Interface language",
    loginBtn: "Login",
    registerBtn: "Register",
    switchToLogin: "Already have an account? Login",
    switchToRegister: "Don't have an account? Register",
    logoutBtn: "Logout",
    logoutSuccess: "✅ Logged out successfully",
    publicName: "Your public name",
    notConfigured: "Not configured",
    verdict: "Verdict",
    real: "✅ Real",
    fake: "❌ Fake",
    suspicious: "⚠️ Suspicious",
    rating: "Rating",
    excellent: "⭐⭐⭐⭐⭐ - Excellent",
    good: "⭐⭐⭐⭐ - Good",
    normal: "⭐⭐⭐ - Normal",
    bad: "⭐⭐ - Bad",
    terrible: "⭐ - Terrible",
    comment: "Comment",
    commentPlaceholder: "Write your comment...",
    submit: "Submit review",
    deletePlaceholder: "Review code (e.g., RV-A3F9K2)",
    deleteBtn: "Delete my review",
    loginRequired: "You must login first",
    noJobDetected: "No job offer detected",
    writeComment: "Please write a comment",
    sending: "Sending...",
    reviewSent: "✅ Review published!",
    yourCode: "📝 Your publication code:",
    saveCode: "🔑 Save this code. Without it you cannot delete your review.",
    deleteConfirm: "⚠️ Are you sure you want to delete this review?",
    invalidCode: "❌ Invalid code or review not found",
    alreadyDeleted: "⚠️ This review was already deleted",
    reviewDeleted: "✅ Review deleted successfully",
    errorOccurred: "❌ Error: ",
    loading: "Loading comments...",
    noReviews: "📝 Be the first to comment on this offer",
    anonymous: "👤 Anonymous user",
    jobTitleDefault: "Title not available",
    companyDefault: "Company not identified",
    notOnJobPage: "You are not on a job page",
    openJobFirst: "Open a job offer first",
    terms: "📋 Terms of use",
    privacy: "🔒 Privacy policy",
    languageLabel: "Language",
    reviewCode: "Code:",
    slogan: "Protect your applications",
	verdictLabel: "Verdict",
	ratingLabel: "Rating"
  },
  fr: {
    loginTitle: "Bon retour",
    loginSubtitle: "Entrez vos identifiants pour continuer",
    registerTitle: "Créer un compte",
    registerSubtitle: "Complétez vos données pour commencer",
    email: "E-mail",
    emailPlaceholder: "votre@email.com",
    password: "Mot de passe",
    passwordPlaceholder: "••••••••",
    nickname: "Nom public",
    nicknamePlaceholder: "Comment vous apparaîtrez dans les commentaires",
    nicknameAvailable: "✓ Nom disponible",
    nicknameTaken: "✗ Ce nom est déjà utilisé",
    nicknameChecking: "⏳ Vérification...",
    nicknameRequired: "Le nom doit contenir au moins 3 caractères",
    country: "Pays",
    selectCountry: "Sélectionnez votre pays",
    language: "Langue de l'interface",
    loginBtn: "Se connecter",
    registerBtn: "S'inscrire",
    switchToLogin: "Déjà un compte? Connectez-vous",
    switchToRegister: "Pas de compte? Inscrivez-vous",
    logoutBtn: "Déconnexion",
    logoutSuccess: "✅ Déconnecté avec succès",
    publicName: "Votre nom public",
    notConfigured: "Non configuré",
    verdict: "Avis",
    real: "✅ Réel",
    fake: "❌ Faux",
    suspicious: "⚠️ Suspect",
    rating: "Note",
    excellent: "⭐⭐⭐⭐⭐ - Excellent",
    good: "⭐⭐⭐⭐ - Bon",
    normal: "⭐⭐⭐ - Normal",
    bad: "⭐⭐ - Mauvais",
    terrible: "⭐ - Terrible",
    comment: "Commentaire",
    commentPlaceholder: "Écrivez votre commentaire...",
    submit: "Envoyer l'avis",
    deletePlaceholder: "Code de l'avis (ex: RV-A3F9K2)",
    deleteBtn: "Supprimer mon avis",
    loginRequired: "Vous devez d'abord vous connecter",
    noJobDetected: "Aucune offre d'emploi détectée",
    writeComment: "Veuillez écrire un commentaire",
    sending: "Envoi...",
    reviewSent: "✅ Avis publié !",
    yourCode: "📝 Votre code de publication :",
    saveCode: "🔑 Conservez ce code. Sans lui, vous ne pourrez pas supprimer votre avis.",
    deleteConfirm: "⚠️ Êtes-vous sûr de vouloir supprimer cet avis ?",
    invalidCode: "❌ Code invalide ou avis non trouvé",
    alreadyDeleted: "⚠️ Cet avis a déjà été supprimé",
    reviewDeleted: "✅ Avis supprimé avec succès",
    errorOccurred: "❌ Erreur : ",
    loading: "Chargement des commentaires...",
    noReviews: "📝 Soyez le premier à commenter cette offre",
    anonymous: "👤 Utilisateur anonyme",
    jobTitleDefault: "Titre non disponible",
    companyDefault: "Entreprise non identifiée",
    notOnJobPage: "Vous n'êtes pas sur une page d'emploi",
    openJobFirst: "Ouvrez d'abord une offre d'emploi",
    terms: "📋 Conditions d'utilisation",
    privacy: "🔒 Politique de confidentialité",
    languageLabel: "Langue",
    reviewCode: "Code:",
    slogan: "Protégez vos candidatures",
	verdictLabel: "Avis",
	ratingLabel: "Note"
  },
  de: {
    loginTitle: "Willkommen zurück",
    loginSubtitle: "Geben Sie Ihre Anmeldedaten ein",
    registerTitle: "Konto erstellen",
    registerSubtitle: "Vervollständigen Sie Ihre Daten",
    email: "E-Mail",
    emailPlaceholder: "ihre@email.com",
    password: "Passwort",
    passwordPlaceholder: "••••••••",
    nickname: "Öffentlicher Name",
    nicknamePlaceholder: "Wie Sie in Kommentaren erscheinen",
    nicknameAvailable: "✓ Name verfügbar",
    nicknameTaken: "✗ Dieser Name ist bereits vergeben",
    nicknameChecking: "⏳ Prüfung...",
    nicknameRequired: "Name muss mindestens 3 Zeichen haben",
    country: "Land",
    selectCountry: "Wählen Sie Ihr Land",
    language: "Oberflächensprache",
    loginBtn: "Anmelden",
    registerBtn: "Registrieren",
    switchToLogin: "Bereits ein Konto? Anmelden",
    switchToRegister: "Kein Konto? Registrieren",
    logoutBtn: "Abmelden",
    logoutSuccess: "✅ Erfolgreich abgemeldet",
    publicName: "Ihr öffentlicher Name",
    notConfigured: "Nicht konfiguriert",
    verdict: "Urteil",
    real: "✅ Echt",
    fake: "❌ Falsch",
    suspicious: "⚠️ Verdächtig",
    rating: "Bewertung",
    excellent: "⭐⭐⭐⭐⭐ - Ausgezeichnet",
    good: "⭐⭐⭐⭐ - Gut",
    normal: "⭐⭐⭐ - Normal",
    bad: "⭐⭐ - Schlecht",
    terrible: "⭐ - Sehr schlecht",
    comment: "Kommentar",
    commentPlaceholder: "Schreiben Sie Ihren Kommentar...",
    submit: "Bewertung absenden",
    deletePlaceholder: "Bewertungscode (z.B. RV-A3F9K2)",
    deleteBtn: "Meine Bewertung löschen",
    loginRequired: "Sie müssen sich zuerst anmelden",
    noJobDetected: "Kein Stellenangebot erkannt",
    writeComment: "Bitte schreiben Sie einen Kommentar",
    sending: "Senden...",
    reviewSent: "✅ Bewertung veröffentlicht!",
    yourCode: "📝 Ihr Veröffentlichungscode:",
    saveCode: "🔑 Bewahren Sie diesen Code auf. Ohne ihn können Sie Ihre Bewertung nicht löschen.",
    deleteConfirm: "⚠️ Sind Sie sicher, dass Sie diese Bewertung löschen möchten?",
    invalidCode: "❌ Ungültiger Code oder Bewertung nicht gefunden",
    alreadyDeleted: "⚠️ Diese Bewertung wurde bereits gelöscht",
    reviewDeleted: "✅ Bewertung erfolgreich gelöscht",
    errorOccurred: "❌ Fehler: ",
    loading: "Kommentare werden geladen...",
    noReviews: "📝 Seien Sie der Erste, der dieses Angebot kommentiert",
    anonymous: "👤 Anonymer Benutzer",
    jobTitleDefault: "Titel nicht verfügbar",
    companyDefault: "Unternehmen nicht identifiziert",
    notOnJobPage: "Sie befinden sich nicht auf einer Jobseite",
    openJobFirst: "Öffnen Sie zuerst ein Stellenangebot",
    terms: "📋 Nutzungsbedingungen",
    privacy: "🔒 Datenschutzrichtlinie",
    languageLabel: "Sprache",
    reviewCode: "Code:",
    slogan: "Schützen Sie Ihre Bewerbungen",
	verdictLabel: "Urteil",
	ratingLabel: "Bewertung"
  },
  pt: {
    loginTitle: "Bem-vindo de volta",
    loginSubtitle: "Digite suas credenciais para continuar",
    registerTitle: "Criar conta",
    registerSubtitle: "Complete seus dados para começar",
    email: "E-mail",
    emailPlaceholder: "seu@email.com",
    password: "Senha",
    passwordPlaceholder: "••••••••",
    nickname: "Nome público",
    nicknamePlaceholder: "Como você aparecerá nos comentários",
    nicknameAvailable: "✓ Nome disponível",
    nicknameTaken: "✗ Este nome já está em uso",
    nicknameChecking: "⏳ Verificando...",
    nicknameRequired: "O nome deve ter pelo menos 3 caracteres",
    country: "País",
    selectCountry: "Selecione seu país",
    language: "Idioma da interface",
    loginBtn: "Entrar",
    registerBtn: "Registrar",
    switchToLogin: "Já tem conta? Entre",
    switchToRegister: "Não tem conta? Registre-se",
    logoutBtn: "Sair",
    logoutSuccess: "✅ Sessão encerrada com sucesso",
    publicName: "Seu nome público",
    notConfigured: "Não configurado",
    verdict: "Decisão",
    real: "✅ Real",
    fake: "❌ Falso",
    suspicious: "⚠️ Suspeito",
    rating: "Pontuação",
    excellent: "⭐⭐⭐⭐⭐ - Excelente",
    good: "⭐⭐⭐⭐ - Bom",
    normal: "⭐⭐⭐ - Normal",
    bad: "⭐⭐ - Mau",
    terrible: "⭐ - Péssimo",
    comment: "Comentário",
    commentPlaceholder: "Escreva seu comentário...",
    submit: "Enviar avaliação",
    deletePlaceholder: "Código da avaliação (ex: RV-A3F9K2)",
    deleteBtn: "Eliminar minha avaliação",
    loginRequired: "Você precisa iniciar sessão primeiro",
    noJobDetected: "Nenhuma oferta de emprego detetada",
    writeComment: "Por favor, escreva um comentário",
    sending: "Enviando...",
    reviewSent: "✅ Avaliação publicada!",
    yourCode: "📝 Seu código de publicação:",
    saveCode: "🔑 Guarde este código. Sem ele não poderá eliminar sua avaliação.",
    deleteConfirm: "⚠️ Tem certeza que deseja eliminar esta avaliação?",
    invalidCode: "❌ Código inválido ou avaliação não encontrada",
    alreadyDeleted: "⚠️ Esta avaliação já foi eliminada",
    reviewDeleted: "✅ Avaliação eliminada com sucesso",
    errorOccurred: "❌ Erro: ",
    loading: "Carregando comentários...",
    noReviews: "📝 Seja o primeiro a comentar esta oferta",
    anonymous: "👤 Utilizador anônimo",
    jobTitleDefault: "Título não disponível",
    companyDefault: "Empresa não identificada",
    notOnJobPage: "Você não está numa página de emprego",
    openJobFirst: "Abra uma oferta de emprego primeiro",
    terms: "📋 Termos de uso",
    privacy: "🔒 Política de privacidade",
    languageLabel: "Idioma",
    reviewCode: "Código:",
    slogan: "Proteja suas candidaturas",
	verdictLabel: "Decisão",
	ratingLabel: "Pontuação"
  }
};

const countries = [
  { code: "ES", name: "🇪🇸 España", nameEn: "Spain" },
  { code: "MX", name: "🇲🇽 México", nameEn: "Mexico" },
  { code: "AR", name: "🇦🇷 Argentina", nameEn: "Argentina" },
  { code: "CO", name: "🇨🇴 Colombia", nameEn: "Colombia" },
  { code: "CL", name: "🇨🇱 Chile", nameEn: "Chile" },
  { code: "PE", name: "🇵🇪 Perú", nameEn: "Peru" },
  { code: "VE", name: "🇻🇪 Venezuela", nameEn: "Venezuela" },
  { code: "UY", name: "🇺🇾 Uruguay", nameEn: "Uruguay" },
  { code: "PY", name: "🇵🇾 Paraguay", nameEn: "Paraguay" },
  { code: "BO", name: "🇧🇴 Bolivia", nameEn: "Bolivia" },
  { code: "EC", name: "🇪🇨 Ecuador", nameEn: "Ecuador" },
  { code: "CR", name: "🇨🇷 Costa Rica", nameEn: "Costa Rica" },
  { code: "PA", name: "🇵🇦 Panamá", nameEn: "Panama" },
  { code: "DO", name: "🇩🇴 República Dominicana", nameEn: "Dominican Republic" },
  { code: "PR", name: "🇵🇷 Puerto Rico", nameEn: "Puerto Rico" },
  { code: "US", name: "🇺🇸 Estados Unidos", nameEn: "United States" },
  { code: "FR", name: "🇫🇷 Francia", nameEn: "France" },
  { code: "DE", name: "🇩🇪 Alemania", nameEn: "Germany" },
  { code: "GB", name: "🇬🇧 Reino Unido", nameEn: "United Kingdom" },
  { code: "PT", name: "🇵🇹 Portugal", nameEn: "Portugal" },
  { code: "BR", name: "🇧🇷 Brasil", nameEn: "Brazil" }
];

let currentLang = 'es';
let supabaseClient = null;
let currentUser = null;
let currentJobInfo = null;
let nicknameCheckTimeout = null;

const SUPABASE_URL = 'https://rfdxbrgnuzlnnoylhgpq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_54eiEvIWjOgF-EAtE29_lQ_NM-m0VBo';

// ============ FUNCIONES AUXILIARES ============

function t(key) {
  return translations[currentLang]?.[key] || translations.es[key] || key;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function generateReviewCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
  let code = 'RV-';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function mostrarError(mensaje) {
  const errorMsg = document.createElement('div');
  errorMsg.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#ffebee;color:#c62828;padding:12px 20px;border-radius:8px;z-index:10000;font-size:14px;';
  errorMsg.textContent = `❌ ${mensaje}`;
  document.body.appendChild(errorMsg);
  setTimeout(() => { if (errorMsg.parentElement) errorMsg.parentElement.removeChild(errorMsg); }, 5000);
}

function mostrarExito(mensaje) {
  const successMsg = document.createElement('div');
  successMsg.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#e8f5e9;color:#2e7d32;padding:12px 20px;border-radius:8px;z-index:10000;font-size:14px;';
  successMsg.textContent = `✅ ${mensaje}`;
  document.body.appendChild(successMsg);
  setTimeout(() => { if (successMsg.parentElement) successMsg.parentElement.removeChild(successMsg); }, 3000);
}

// ============ VERIFICACIÓN DE NICKNAME ÚNICO ============

async function verificarNicknameUnico(nickname, excludeUserId = null) {
  if (!nickname || nickname.length < 3) return null;
  
  try {
    const { data, error } = await supabaseClient
      .from('profiles')
      .select('nickname, id')
      .eq('nickname', nickname);
    
    if (error) throw error;
    
    if (excludeUserId && data && data.length > 0) {
      const otros = data.filter(p => p.id !== excludeUserId);
      return otros.length === 0;
    }
    
    return !data || data.length === 0;
  } catch (error) {
    console.error('Error verificando nickname:', error);
    return null;
  }
}

function configurarVerificacionNickname(nicknameInput, statusSpan, excludeUserId = null) {
  nicknameInput.addEventListener('input', async () => {
    const nickname = nicknameInput.value.trim();
    
    if (nickname.length < 3) {
      statusSpan.textContent = t('nicknameRequired');
      statusSpan.style.color = '#f57c00';
      statusSpan.dataset.valid = 'false';
      return;
    }
    
    statusSpan.textContent = t('nicknameChecking');
    statusSpan.style.color = '#02589e';
    statusSpan.dataset.valid = 'checking';
    
    if (nicknameCheckTimeout) clearTimeout(nicknameCheckTimeout);
    
    nicknameCheckTimeout = setTimeout(async () => {
      const disponible = await verificarNicknameUnico(nickname, excludeUserId);
      
      if (disponible === true) {
        statusSpan.textContent = t('nicknameAvailable');
        statusSpan.style.color = '#2e7d32';
        statusSpan.dataset.valid = 'true';
      } else if (disponible === false) {
        statusSpan.textContent = t('nicknameTaken');
        statusSpan.style.color = '#c62828';
        statusSpan.dataset.valid = 'false';
      } else {
        statusSpan.textContent = '⚠️ Error verificando';
        statusSpan.style.color = '#f57c00';
        statusSpan.dataset.valid = 'false';
      }
    }, 500);
  });
}

// ============ FORMULARIO DE AUTENTICACIÓN ============

function renderAuthForm(mode = 'login', error = null, success = null) {
  const container = document.getElementById('authContainer');
  if (!container) return;

  const isLogin = mode === 'login';
  const title = isLogin ? t('loginTitle') : t('registerTitle');
  const subtitle = isLogin ? t('loginSubtitle') : t('registerSubtitle');
  const btnText = isLogin ? t('loginBtn') : t('registerBtn');
  const switchText = isLogin ? t('switchToRegister') : t('switchToLogin');
  const switchMode = isLogin ? 'register' : 'login';

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';

  const titleDiv = document.createElement('div');
  titleDiv.className = 'form-title';
  titleDiv.textContent = title;
  formContainer.appendChild(titleDiv);

  const subtitleDiv = document.createElement('div');
  subtitleDiv.className = 'form-subtitle';
  subtitleDiv.textContent = subtitle;
  formContainer.appendChild(subtitleDiv);

  if (error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = error;
    formContainer.appendChild(errorDiv);
  }

  if (success) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = success;
    formContainer.appendChild(successDiv);
  }

  const form = document.createElement('form');
  form.id = 'authForm';

  const emailGroup = document.createElement('div');
  emailGroup.className = 'form-group';
  const emailLabel = document.createElement('label');
  emailLabel.textContent = t('email');
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.placeholder = t('emailPlaceholder');
  emailInput.required = true;
  emailGroup.appendChild(emailLabel);
  emailGroup.appendChild(emailInput);
  form.appendChild(emailGroup);

  const passwordGroup = document.createElement('div');
  passwordGroup.className = 'form-group';
  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = t('password');
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'password';
  passwordInput.placeholder = t('passwordPlaceholder');
  passwordInput.required = true;
  passwordInput.minLength = 6;
  passwordGroup.appendChild(passwordLabel);
  passwordGroup.appendChild(passwordInput);
  form.appendChild(passwordGroup);

  if (!isLogin) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'form-row';

    const nicknameGroup = document.createElement('div');
    nicknameGroup.className = 'form-group';
    const nicknameLabel = document.createElement('label');
    nicknameLabel.textContent = t('nickname');
    const nicknameInput = document.createElement('input');
    nicknameInput.type = 'text';
    nicknameInput.id = 'nickname';
    nicknameInput.placeholder = t('nicknamePlaceholder');
    nicknameInput.required = true;
    nicknameInput.minLength = 3;
    nicknameInput.maxLength = 30;
    const nicknameStatus = document.createElement('div');
    nicknameStatus.style.fontSize = '11px';
    nicknameStatus.style.marginTop = '4px';
    nicknameStatus.textContent = t('nicknameRequired');
    nicknameStatus.style.color = '#f57c00';
    nicknameGroup.appendChild(nicknameLabel);
    nicknameGroup.appendChild(nicknameInput);
    nicknameGroup.appendChild(nicknameStatus);
    rowDiv.appendChild(nicknameGroup);
    
    configurarVerificacionNickname(nicknameInput, nicknameStatus);

    const countryGroup = document.createElement('div');
    countryGroup.className = 'form-group';
    const countryLabel = document.createElement('label');
    countryLabel.textContent = t('country');
    const countrySelect = document.createElement('select');
    countrySelect.id = 'country';
    countrySelect.required = true;
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = t('selectCountry');
    countrySelect.appendChild(defaultOption);
    countries.forEach(c => {
      const option = document.createElement('option');
      option.value = c.code;
      option.textContent = currentLang === 'es' ? c.name : c.nameEn;
      countrySelect.appendChild(option);
    });
    countryGroup.appendChild(countryLabel);
    countryGroup.appendChild(countrySelect);
    rowDiv.appendChild(countryGroup);
    form.appendChild(rowDiv);

    const langGroup = document.createElement('div');
    langGroup.className = 'form-group';
    const langLabel = document.createElement('label');
    langLabel.textContent = t('language');
    const langSelect = document.createElement('select');
    langSelect.id = 'regLanguage';
    const langs = [
      { code: 'es', name: '🇪🇸 Español' },
      { code: 'en', name: '🇬🇧 English' },
      { code: 'fr', name: '🇫🇷 Français' },
      { code: 'de', name: '🇩🇪 Deutsch' },
      { code: 'pt', name: '🇵🇹 Português' }
    ];
    langs.forEach(l => {
      const option = document.createElement('option');
      option.value = l.code;
      option.textContent = l.name;
      langSelect.appendChild(option);
    });
    langGroup.appendChild(langLabel);
    langGroup.appendChild(langSelect);
    form.appendChild(langGroup);
  }

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.className = 'btn-primary';
  submitBtn.textContent = btnText;
  form.appendChild(submitBtn);
  formContainer.appendChild(form);

  const toggleDiv = document.createElement('div');
  toggleDiv.className = 'toggle-link';
  const toggleLink = document.createElement('a');
  toggleLink.id = 'switchModeBtn';
  toggleLink.textContent = switchText;
  toggleDiv.appendChild(toggleLink);
  formContainer.appendChild(toggleDiv);

  container.appendChild(formContainer);
  container.style.display = 'block';

  const mainContent = document.getElementById('mainContent');
  if (mainContent) mainContent.style.display = 'none';
  
  const userSection = document.getElementById('userSection');
  if (userSection) userSection.style.display = 'none';
  
  const loginSection = document.getElementById('loginSection');
  if (loginSection) loginSection.style.display = 'block';

  form.onsubmit = async (e) => {
    e.preventDefault();
    await handleAuthSubmit(mode);
  };

  const switchBtn = document.getElementById('switchModeBtn');
  if (switchBtn) {
    switchBtn.onclick = () => renderAuthForm(switchMode);
  }
}

async function handleAuthSubmit(mode) {
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;
  
  if (!email || !password) {
    renderAuthForm(mode, 'Por favor completa todos los campos');
    return;
  }

  if (mode === 'register') {
    const nickname = document.getElementById('nickname')?.value.trim();
    const country = document.getElementById('country')?.value;
    const regLanguage = document.getElementById('regLanguage')?.value;
    const statusSpan = document.querySelector('#nickname ~ div');
    
    if (!nickname || nickname.length < 3) {
      renderAuthForm(mode, t('nicknameRequired'));
      return;
    }
    
    if (statusSpan?.dataset.valid !== 'true') {
      renderAuthForm(mode, t('nicknameTaken'));
      return;
    }
    
    if (!country) {
      renderAuthForm(mode, 'Por favor selecciona tu país');
      return;
    }
    
    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: { nickname, country, preferred_language: regLanguage }
        }
      });
      
      if (error) {
        if (error.message.includes('already registered')) {
          renderAuthForm(mode, 'Este email ya está registrado. Inicia sesión.');
        } else {
          renderAuthForm(mode, error.message);
        }
        return;
      }
      
      if (data.session) {
        currentUser = data.user;
        
        // Usar asegurarPerfilExiste en lugar de guardarPerfilRegistro directamente
        const profile = await asegurarPerfilExiste(currentUser.id, currentUser.email);
        
        // Si el perfil se creó con nickname temporal y el usuario eligió uno, actualizarlo
        if (profile && profile.nickname !== nickname) {
          await actualizarNickname(nickname);
        }
        
        renderAuthForm(mode, null, '✅ ¡Cuenta creada exitosamente!');
        setTimeout(() => mostrarInterfazLogueado(currentUser), 1500);
      } else {
        renderAuthForm(mode, null, '✅ ¡Registro exitoso! Revisa tu email para confirmar la cuenta.');
        setTimeout(() => renderAuthForm('login', null, 'Ya puedes iniciar sesión'), 3000);
      }
    } catch (err) {
      renderAuthForm(mode, 'Error inesperado: ' + err.message);
    }
  } else {
    // LOGIN
    try {
      console.log('🔐 Intentando login con:', email);
      
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      
      if (error) {
        console.error('❌ Error de login:', error);
        renderAuthForm(mode, error.message);
        return;
      }
      
      currentUser = data.user;
      console.log('✅ Usuario logueado:', currentUser.email, 'ID:', currentUser.id);
      
      // Asegurar que el perfil existe
      const profile = await asegurarPerfilExiste(currentUser.id, currentUser.email);
      console.log('📝 Perfil asegurado:', profile);
      
      // Mostrar interfaz logueada
      mostrarInterfazLogueado(currentUser);
      
    } catch (err) {
      console.error('❌ Error inesperado en login:', err);
      renderAuthForm(mode, 'Error inesperado: ' + err.message);
    }
  }
}

async function guardarPerfilRegistro(userId, nickname, country, language) {
  if (!userId) {
    console.error('❌ guardarPerfilRegistro: userId es null');
    return false;
  }
  
  try {
    console.log(`💾 Guardando perfil: userId=${userId}, nickname=${nickname}, country=${country}`);
    
    const { data, error } = await supabaseClient
      .from('profiles')
      .upsert({
        id: userId,
        nickname: nickname,
        country: country,
        preferred_language: language,
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' })
      .select(); // Añadir .select() para verificar que se guardó
    
    if (error) {
      console.error('❌ Error en upsert:', error);
      return false;
    }
    
    console.log('✅ Perfil guardado exitosamente:', data);
    return true;
  } catch (error) {
    console.error('❌ Error catastrófico guardando perfil:', error);
    return false;
  }
}

// ============ FUNCIONES DE PERFIL ============

async function cargarPerfil(userId) {
  try {
    const { data, error } = await supabaseClient
      .from('profiles')
      .select('nickname')
      .eq('id', userId)
      .single();
    if (error && error.code !== 'PGRST116') throw error;
    return data ? data.nickname : null;
  } catch (error) {
    console.error('Error cargando perfil:', error);
    return null;
  }
}

async function cargarPerfilCompleto(userId) {
  if (!userId) {
    console.error('❌ cargarPerfilCompleto: userId es null o undefined');
    return { nickname: null, country: null, preferred_language: null };
  }
  
  try {
    console.log(`🔍 Buscando perfil para userId: ${userId}`);
    
    const { data, error } = await supabaseClient
      .from('profiles')
      .select('nickname, country, preferred_language')
      .eq('id', userId)
      .maybeSingle(); // Usar maybeSingle en lugar de single para evitar error si no existe
    
    if (error) {
      console.error('❌ Error en consulta de perfil:', error);
      return { nickname: null, country: null, preferred_language: null };
    }
    
    if (!data) {
      console.log(`⚠️ No se encontró perfil para userId: ${userId}`);
      return { nickname: null, country: null, preferred_language: null };
    }
    
    console.log(`✅ Perfil cargado: nickname="${data.nickname}", país="${data.country}"`);
    return data;
  } catch (error) {
    console.error('❌ Error catastrófico cargando perfil:', error);
    return { nickname: null, country: null, preferred_language: null };
  }
}

async function guardarPerfilCompleto(userId, nickname, country) {
  try {
    const perfilActual = await cargarPerfilCompleto(userId);
    const nicknameFinal = nickname || perfilActual.nickname;
    const countryFinal = country || perfilActual.country;
    
    const { error } = await supabaseClient
      .from('profiles')
      .upsert({ 
        id: userId, 
        nickname: nicknameFinal, 
        country: countryFinal,
        updated_at: new Date().toISOString() 
      }, { onConflict: 'id' });

    if (error) throw error;
    console.log(`✅ Perfil guardado: nickname="${nicknameFinal}", país="${countryFinal}"`);
    return true;
  } catch (error) {
    console.error('Error guardando perfil:', error);
    return false;
  }
}

async function actualizarNickname(nickname) {
  if (!currentUser) return false;
  if (!nickname || nickname.length < 3) {
    alert(t('nicknameRequired'));
    return false;
  }
  if (nickname.length > 30) {
    alert('El nickname no puede tener más de 30 caracteres');
    return false;
  }
  
  const disponible = await verificarNicknameUnico(nickname, currentUser.id);
  if (!disponible) {
    alert(t('nicknameTaken'));
    return false;
  }
  
  const success = await guardarPerfilCompleto(currentUser.id, nickname, null);
  if (success) {
    const sidebarNickname = document.getElementById('sidebarNickname');
    if (sidebarNickname) sidebarNickname.textContent = nickname;
    
    try {
      await supabaseClient
        .from('reviews')
        .update({ nickname: nickname })
        .eq('user_id', currentUser.id);
      
      if (currentJobInfo) {
        await cargarReviews(currentJobInfo.id);
      }
    } catch (error) {
      console.error('Error actualizando reviews:', error);
    }
    
    mostrarExito('Nickname actualizado correctamente en todas tus publicaciones');
    return true;
  }
  return false;
}

// Función para asegurar que el perfil existe
async function asegurarPerfilExiste(userId, email) {
  console.log('🔍 Verificando si existe perfil para:', userId);
  
  // 1. Intentar cargar el perfil existente
  const { data: perfilExistente, error: loadError } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();
  
  if (loadError) {
    console.error('❌ Error al verificar perfil:', loadError);
  }
  
  if (perfilExistente) {
    console.log('✅ Perfil ya existe:', perfilExistente);
    return perfilExistente;
  }
  
  console.log('⚠️ Perfil no encontrado, creando...');
  
  // 2. Crear perfil con nickname temporal
  const nicknameTemp = email ? email.split('@')[0] : `user_${userId.slice(0, 8)}`;
  const country = detectarPais();
  
  const { data: nuevoPerfil, error: insertError } = await supabaseClient
    .from('profiles')
    .insert({
      id: userId,
      nickname: nicknameTemp,
      country: country,
      preferred_language: currentLang,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
    .select()
    .single();
  
  if (insertError) {
    console.error('❌ Error al crear perfil:', insertError);
    
    // Si hay error de unique constraint, puede que ya exista pero no lo encontramos
    if (insertError.code === '23505') {
      console.log('⚠️ Conflicto de unique, reintentando búsqueda...');
      const { data: reintentar } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      
      if (reintentar) {
        console.log('✅ Perfil encontrado en reintento:', reintentar);
        return reintentar;
      }
    }
    
    return null;
  }
  
  console.log('✅ Perfil creado exitosamente:', nuevoPerfil);
  return nuevoPerfil;
}

// ============ FUNCIONES DE INTERFAZ ============

function applyTranslations() {
  const logoutBtn = document.getElementById('sidebarLogoutBtn');
  if (logoutBtn) logoutBtn.textContent = t('logoutBtn');

  const publicNameLabel = document.querySelector('.nickname-label');
  if (publicNameLabel) publicNameLabel.textContent = `👤 ${t('publicName')}`;

  const verdictSelect = document.getElementById('verdictSelect');
  if (verdictSelect) {
    verdictSelect.options[0].text = t('real');
    verdictSelect.options[1].text = t('fake');
    verdictSelect.options[2].text = t('suspicious');
  }

  const ratingSelect = document.getElementById('ratingSelect');
  if (ratingSelect) {
    ratingSelect.options[0].text = t('excellent');
    ratingSelect.options[1].text = t('good');
    ratingSelect.options[2].text = t('normal');
    ratingSelect.options[3].text = t('bad');
    ratingSelect.options[4].text = t('terrible');
  }

  const commentTextarea = document.getElementById('commentText');
  if (commentTextarea) commentTextarea.placeholder = t('commentPlaceholder');

  const submitBtn = document.getElementById('submitReview');
  if (submitBtn) submitBtn.textContent = t('submit');

  const deleteInput = document.getElementById('deleteCodeInput');
  if (deleteInput) deleteInput.placeholder = t('deletePlaceholder');

  const deleteBtn = document.getElementById('deleteReviewBtn');
  if (deleteBtn) deleteBtn.textContent = t('deleteBtn');

  const languageLabel = document.querySelector('.language-label');
  if (languageLabel) languageLabel.textContent = `🌐 ${t('languageLabel')}`;

  const linkTerms = document.getElementById('linkTerms');
  if (linkTerms) linkTerms.textContent = t('terms');

  const linkPrivacy = document.getElementById('linkPrivacy');
  if (linkPrivacy) linkPrivacy.textContent = t('privacy');
  
  const sloganText = document.getElementById('sloganText');
  if (sloganText) sloganText.textContent = t('slogan');
  
  const verdictLabel = document.getElementById('verdictLabel');
  if (verdictLabel) verdictLabel.textContent = t('verdictLabel');
  
  const ratingLabel = document.getElementById('ratingLabel');
  if (ratingLabel) ratingLabel.textContent = t('ratingLabel');
}

function configurarIdioma() {
  const langSelect = document.getElementById('languageSelect');
  if (!langSelect) return;

  browser.storage.local.get('applyguard_lang').then(result => {
    const savedLang = result.applyguard_lang || 'es';
    currentLang = savedLang;
    langSelect.value = savedLang;
    applyTranslations();
  }).catch(() => {
    currentLang = 'es';
    applyTranslations();
  });

  langSelect.addEventListener('change', async (e) => {
    currentLang = e.target.value;
    browser.storage.local.set({ applyguard_lang: currentLang }).catch(() => {});
    applyTranslations();

    if (currentJobInfo) {
      await cargarReviews(currentJobInfo.id);
    }

    const msg = document.createElement('div');
    msg.textContent = currentLang === 'es' ? '✅ Idioma cambiado a Español'
                    : currentLang === 'en' ? '✅ Language changed to English'
                    : '✅ Idioma cambiado';
    msg.style.cssText = 'position:fixed;bottom:20px;left:220px;background:#02589e;color:white;padding:8px 12px;border-radius:8px;font-size:11px;z-index:1000;';
    document.body.appendChild(msg);
    setTimeout(() => {
      if (msg.parentElement) msg.parentElement.removeChild(msg);
    }, 2000);
  });
}

// ============ FUNCIONES DE REVIEWS ============

async function cargarReviews(jobId) {
  const reviewsList = document.getElementById('reviewsList');
  if (!reviewsList) return;

  while (reviewsList.firstChild) {
    reviewsList.removeChild(reviewsList.firstChild);
  }

  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'loading';
  loadingDiv.textContent = t('loading');
  reviewsList.appendChild(loadingDiv);

  try {
    const { data: reviews, error } = await supabaseClient
      .from('reviews')
      .select('*')
      .eq('job_id', jobId)
      .eq('status', 'active')
      .order('created_at', { ascending: false });

    if (error) throw error;

    while (reviewsList.firstChild) {
      reviewsList.removeChild(reviewsList.firstChild);
    }

    if (!reviews || reviews.length === 0) {
      const noReviewsDiv = document.createElement('div');
      noReviewsDiv.className = 'no-reviews';
      noReviewsDiv.textContent = t('noReviews');
      reviewsList.appendChild(noReviewsDiv);
      return;
    }

    for (const review of reviews) {
      const reviewEl = document.createElement('div');
      reviewEl.className = 'review-item';

      const verdictText = {
        real: '✅ Real',
        fake: '❌ Falso',
        suspicious: '⚠️ Sospechoso'
      }[review.verdict] || '📝 ' + review.verdict;

      const stars = '⭐'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
      const displayName = review.nickname ? `✨ ${escapeHtml(review.nickname)}` : t('anonymous');

      const mainDiv = document.createElement('div');
      mainDiv.style.display = 'flex';
      mainDiv.style.justifyContent = 'space-between';
      mainDiv.style.alignItems = 'center';
      mainDiv.style.marginBottom = '5px';

      const leftDiv = document.createElement('div');
      const verdictStrong = document.createElement('strong');
      verdictStrong.textContent = verdictText;
      leftDiv.appendChild(verdictStrong);

      const starSpan = document.createElement('span');
      starSpan.style.color = '#ffc107';
      starSpan.style.marginLeft = '8px';
      starSpan.textContent = stars;
      leftDiv.appendChild(starSpan);

      const dateSmall = document.createElement('small');
      dateSmall.style.color = '#999';
      dateSmall.textContent = new Date(review.created_at).toLocaleDateString();

      mainDiv.appendChild(leftDiv);
      mainDiv.appendChild(dateSmall);
      reviewEl.appendChild(mainDiv);

      const nameDiv = document.createElement('div');
      const nameStrong = document.createElement('strong');
      nameStrong.style.color = '#2e7d32';
      nameStrong.textContent = displayName;
      nameDiv.appendChild(nameStrong);
      reviewEl.appendChild(nameDiv);
      
      const codeDiv = document.createElement('div');
      codeDiv.style.fontSize = '10px';
      codeDiv.style.color = '#888';
      codeDiv.style.marginTop = '6px';
      codeDiv.style.fontFamily = 'monospace';
      codeDiv.textContent = `${t('reviewCode')} ${review.review_code}`;
      reviewEl.appendChild(codeDiv);
      
      if (review.comment) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'review-text';
        commentDiv.style.marginTop = '8px';
        commentDiv.textContent = review.comment;
        reviewEl.appendChild(commentDiv);
      }

      reviewsList.appendChild(reviewEl);
    }
  } catch (error) {
    console.error('Error cargando reviews:', error);
    while (reviewsList.firstChild) {
      reviewsList.removeChild(reviewsList.firstChild);
    }
    const errorDiv = document.createElement('div');
    errorDiv.className = 'loading';
    errorDiv.textContent = '❌ Error al cargar comentarios';
    reviewsList.appendChild(errorDiv);
  }
}

async function cargarInfoTrabajo() {
  try {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    if (tabs.length > 0) {
      const response = await browser.tabs.sendMessage(tabs[0].id, { action: 'getJobInfo' });
      if (response && response.jobInfo) {
        currentJobInfo = response.jobInfo;
        const jobTitle = document.getElementById('jobTitle');
        const companyName = document.getElementById('companyName');
        
        if (jobTitle) jobTitle.textContent = currentJobInfo.title || t('jobTitleDefault');
        if (companyName) companyName.textContent = currentJobInfo.company || t('companyDefault');
        
        cargarReviews(currentJobInfo.id);
      }
    }
  } catch (error) {
    console.log('Error cargando info del trabajo:', error);
    const jobTitle = document.getElementById('jobTitle');
    const companyName = document.getElementById('companyName');
    
    if (jobTitle) jobTitle.textContent = t('notOnJobPage');
    if (companyName) companyName.textContent = t('openJobFirst');
  }
}

function configurarEnvioReview() {
  const submitBtn = document.getElementById('submitReview');
  if (!submitBtn) return;

  const newSubmitBtn = submitBtn.cloneNode(true);
  submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);

  newSubmitBtn.onclick = async () => {
    if (!currentUser) {
      alert(t('loginRequired'));
      return;
    }

    const nickname = await cargarPerfil(currentUser.id);
    if (!nickname) {
      alert('❌ Primero configura tu nickname. Haz clic en tu nombre en el panel izquierdo para editarlo.');
      return;
    }

    if (!currentJobInfo || !currentJobInfo.id) {
      alert(t('noJobDetected'));
      return;
    }

    const verdict = document.getElementById('verdictSelect').value;
    const rating = parseInt(document.getElementById('ratingSelect').value);
    const comment = document.getElementById('commentText').value;

    if (!comment.trim()) {
      alert(t('writeComment'));
      return;
    }

    const reviewCode = generateReviewCode();
    const profile = await cargarPerfilCompleto(currentUser.id);
    
    newSubmitBtn.textContent = t('sending');
    newSubmitBtn.disabled = true;

    const resultDiv = document.getElementById('reviewResult');
    resultDiv.style.display = 'none';

    try {
      const { error } = await supabaseClient.from('reviews').insert({
        job_id: currentJobInfo.id,
        verdict,
        rating,
        comment,
        user_id: currentUser.id,
        user_email: currentUser.email,
        nickname,
        review_code: reviewCode,
        language: currentLang,
        user_country: profile.country
      });

      if (error) throw error;

      const resultMessage = document.getElementById('reviewResultMessage');
      while (resultMessage.firstChild) {
        resultMessage.removeChild(resultMessage.firstChild);
      }
      
      const strong1 = document.createElement('strong');
      strong1.textContent = t('reviewSent');
      resultMessage.appendChild(strong1);
      
      resultMessage.appendChild(document.createElement('br'));
      resultMessage.appendChild(document.createElement('br'));
      
      const strong2 = document.createElement('strong');
      strong2.textContent = t('yourCode');
      resultMessage.appendChild(strong2);
      
      resultMessage.appendChild(document.createElement('br'));
      
      const codeElement = document.createElement('code');
      codeElement.style.background = '#fff';
      codeElement.style.padding = '4px 8px';
      codeElement.style.borderRadius = '4px';
      codeElement.style.fontSize = '16px';
      codeElement.style.fontWeight = 'bold';
      codeElement.textContent = reviewCode;
      resultMessage.appendChild(codeElement);
      
      resultMessage.appendChild(document.createElement('br'));
      resultMessage.appendChild(document.createElement('br'));
      
      const small = document.createElement('small');
      small.textContent = t('saveCode');
      resultMessage.appendChild(small);

      resultDiv.style.display = 'block';
      document.getElementById('commentText').value = '';
      await cargarReviews(currentJobInfo.id);

      setTimeout(() => { resultDiv.style.display = 'none'; }, 8000);

    } catch (error) {
      console.error('Error enviando review:', error);
      alert(t('errorOccurred') + error.message);
    } finally {
      newSubmitBtn.textContent = t('submit');
      newSubmitBtn.disabled = false;
    }
  };
}

function configurarEliminacionReview() {
  const deleteBtn = document.getElementById('deleteReviewBtn');
  if (!deleteBtn) return;

  deleteBtn.onclick = async () => {
    const reviewCode = document.getElementById('deleteCodeInput').value.trim().toUpperCase();

    if (!reviewCode) {
      alert('Por favor ingresa el código de la review');
      return;
    }

    if (!confirm(t('deleteConfirm'))) return;

    deleteBtn.textContent = 'Eliminando...';
    deleteBtn.disabled = true;

    try {
      const { data: review, error: findError } = await supabaseClient
        .from('reviews')
        .select('id, status, user_id, review_code')
        .eq('review_code', reviewCode)
        .single();

      if (findError || !review) {
        alert(t('invalidCode'));
        return;
      }

      if (review.status === 'removed_by_user') {
        alert(t('alreadyDeleted'));
        return;
      }

      const { error } = await supabaseClient
        .from('reviews')
        .update({ status: 'removed_by_user', deleted_at: new Date().toISOString() })
        .eq('review_code', reviewCode);

      if (error) throw error;

      alert(t('reviewDeleted'));
      document.getElementById('deleteCodeInput').value = '';

      if (currentJobInfo) await cargarReviews(currentJobInfo.id);

    } catch (error) {
      console.error('Error eliminando review:', error);
      alert(t('errorOccurred') + error.message);
    } finally {
      deleteBtn.textContent = t('deleteBtn');
      deleteBtn.disabled = false;
    }
  };
}

// ============ FUNCIONES DE AUTENTICACIÓN ============

async function handleLogout() {
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      alert('❌ Error al cerrar sesión: ' + error.message);
      return;
    }
    currentUser = null;
    currentJobInfo = null;
    mostrarExito(t('logoutSuccess'));
    mostrarInterfazLogin();
  } catch (err) {
    alert('❌ Error: ' + err.message);
  }
}

function configurarEdicionNickname() {
  const sidebarNickname = document.getElementById('sidebarNickname');
  if (!sidebarNickname) return;
  
  sidebarNickname.style.cursor = 'pointer';
  sidebarNickname.title = 'Haz clic para editar tu nickname';
  
  sidebarNickname.onclick = async () => {
    const nuevoNickname = prompt('Ingresa tu nuevo nickname público:', sidebarNickname.textContent === t('notConfigured') ? '' : sidebarNickname.textContent);
    if (nuevoNickname && nuevoNickname.trim()) {
      await actualizarNickname(nuevoNickname.trim());
    }
  };
}

function mostrarInterfazLogueado(user) {
  console.log('🎨 Mostrando interfaz logueada para:', user.email);
  console.log('🆔 User ID:', user.id);
  
  const authContainer = document.getElementById('authContainer');
  const mainContent = document.getElementById('mainContent');
  const userSection = document.getElementById('userSection');
  const loginSection = document.getElementById('loginSection');
  
  if (authContainer) authContainer.style.display = 'none';
  if (mainContent) mainContent.style.display = 'block';
  if (userSection) userSection.style.display = 'block';
  if (loginSection) loginSection.style.display = 'none';

  const sidebarUserEmail = document.getElementById('sidebarUserEmail');
  if (sidebarUserEmail) sidebarUserEmail.textContent = user.email;

  // Configurar botón de logout
  const logoutBtn = document.getElementById('sidebarLogoutBtn');
  if (logoutBtn) {
    const newLogoutBtn = logoutBtn.cloneNode(true);
    logoutBtn.parentNode.replaceChild(newLogoutBtn, logoutBtn);
    newLogoutBtn.onclick = handleLogout;
  }

  // Asegurar que el perfil existe y mostrarlo
  asegurarPerfilExiste(user.id, user.email).then(profile => {
    console.log('📊 Perfil obtenido:', profile);
    
    const sidebarNickname = document.getElementById('sidebarNickname');
    if (sidebarNickname) {
      if (profile && profile.nickname) {
        sidebarNickname.textContent = profile.nickname;
        console.log(`📛 Nickname mostrado: "${profile.nickname}"`);
      } else {
        sidebarNickname.textContent = t('notConfigured');
        console.log('⚠️ No hay nickname, mostrando "No configurado"');
      }
      
      // Configurar edición al hacer clic
      configurarEdicionNickname();
    }
  }).catch(err => {
    console.error('❌ Error grave en asegurarPerfilExiste:', err);
    const sidebarNickname = document.getElementById('sidebarNickname');
    if (sidebarNickname) sidebarNickname.textContent = t('notConfigured');
  });

  cargarInfoTrabajo();
  configurarEnvioReview();
  configurarEliminacionReview();
  configurarIdioma();
}

function mostrarInterfazLogin() {
  const authContainer = document.getElementById('authContainer');
  const mainContent = document.getElementById('mainContent');
  const userSection = document.getElementById('userSection');
  const loginSection = document.getElementById('loginSection');
  
  if (authContainer) authContainer.style.display = 'block';
  if (mainContent) mainContent.style.display = 'none';
  if (userSection) userSection.style.display = 'none';
  if (loginSection) loginSection.style.display = 'block';
  
  renderAuthForm('login');
}

function detectarPais() {
  const userLocale = navigator.language || "es-ES";
  const countryFromLocale = userLocale.split('-')[1];
  if (countryFromLocale) return countryFromLocale;
  
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezoneCountryMap = {
    'Europe/Madrid': 'ES', 'Europe/Paris': 'FR', 'Europe/Berlin': 'DE',
    'Europe/London': 'GB', 'America/New_York': 'US', 'America/Los_Angeles': 'US',
    'America/Mexico_City': 'MX', 'America/Buenos_Aires': 'AR', 'America/Sao_Paulo': 'BR'
  };
  return timezoneCountryMap[timezone] || 'Desconocido';
}

// ============ FUNCIONES DE ESTADÍSTICAS ============

async function obtenerEstadisticasGlobalesPorPais() {
  try {
    const { data, error } = await supabaseClient
      .from('reviews')
      .select('user_country, verdict')
      .eq('status', 'active');
    
    if (error) throw error;
    
    const stats = {};
    for (const review of data) {
      const country = review.user_country || 'Desconocido';
      if (!stats[country]) {
        stats[country] = { total: 0, real: 0, fake: 0, suspicious: 0 };
      }
      stats[country].total++;
      stats[country][review.verdict]++;
    }
    
    const result = [];
    for (const [country, data] of Object.entries(stats)) {
      result.push({
        country,
        total: data.total,
        real: data.real,
        fake: data.fake,
        suspicious: data.suspicious,
        fake_percentage: ((data.fake / data.total) * 100).toFixed(1),
        suspicious_percentage: ((data.suspicious / data.total) * 100).toFixed(1)
      });
    }
    result.sort((a, b) => b.total - a.total);
    return result;
  } catch (error) {
    console.error('Error obteniendo estadísticas:', error);
    return null;
  }
}

// ============ INICIALIZACIÓN ============

document.addEventListener('DOMContentLoaded', async function () {
  console.log('[ApplyGuard] Popup cargado');

  if (typeof supabase !== 'undefined' && supabase.createClient) {
    try {
      supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log('✅ Supabase inicializado');

      const { data: { session }, error } = await supabaseClient.auth.getSession();

      if (session && session.user) {
        currentUser = session.user;
        console.log('✅ Sesión activa:', currentUser.email);
        mostrarInterfazLogueado(currentUser);
      } else {
        console.log('❌ No hay sesión activa');
        mostrarInterfazLogin();
      }
    } catch (initError) {
      console.error('❌ Error inicializando Supabase:', initError);
      mostrarError('Error de conexión con el servidor');
    }
  } else {
    console.error('❌ Supabase no está disponible');
    mostrarError('Error: Supabase no cargado correctamente');
  }
});
