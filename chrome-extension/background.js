// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log('ApplyGuard instalado');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openPopup") {
    chrome.action.openPopup();
  }
});
