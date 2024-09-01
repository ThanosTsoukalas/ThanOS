

function openApp(windowApp){
    const argument = document.getElementById(windowApp);
  
    argument.style.display = "block";
    argument.style.animationDelay = "0.75s";
    argument.style.animation =
      "windowIntro .45s cubic-bezier(.17,.6,.22,.88)";
  }
  
  function closeApp(windowApp){
    const argument = document.getElementById(windowApp);
  
    argument.style.animation = "windowOutro .55s cubic-bezier(.17,.6,.22,.88)";
  
    setTimeout(() => {
      argument.style.display = "none";
    }, 540);
    
  }