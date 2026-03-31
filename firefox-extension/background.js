// background.js - Versión simple
console.log('ApplyGuard instalado');

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openPopup") {
    console.log('Popup solicitado');
  }
  return true;
});
