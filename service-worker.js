self.addEventListener('fetch',() => console.log("fetch"));
window.addEventListener("beforeinstallprompt", function(e) { 
  // log the platforms provided as options in an install prompt 
  console.log(e.platforms); // e.g., ["web", "android", "windows"] 
  e.userChoice.then(function(choiceResult) { 
    console.log(choiceResult.outcome); // either "accepted" or "dismissed"
  }, handleError); 
});
