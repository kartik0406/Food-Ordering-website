let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.prevent.default();
  deferredPrompt=e;
  btnAdd.style.display='block';
});
btnAdd.addeventListner('click, (e) => {
       deferredPrompt.prompt();
    deferredPrompt.userchoice.then((choiceResult) => {
      
      if(choice.result==='accepted') {
        console.log('user A2H accepted');
      }
      deferredPrompt=null;
    });
});
window.addEventListener('appinstalled',(evt) => {
  app.logEvent('a2hs','installed');
});
