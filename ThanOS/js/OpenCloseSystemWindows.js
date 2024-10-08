
//All buttons that trigger the Opening of a System Window
const resolveWindow = document.getElementById("resolve-window");
const updateWindow = document.getElementById("update-window");
const updateButton = document.getElementById("update-button");
const closeButton = document.getElementById("closeButton");
const helpButton = document.getElementById("helpButton");
const CurrentVersionFeatureView = document.getElementById(
  "CurrentVersionFeatureView-window"
);

//Regarding Updates

//version-history.html
function closeFeaturesWindow() {
  CurrentVersionFeatureView.style.display = "none";
}
function openCurrentVersionFeatureView() {
  CurrentVersionFeatureView.style.display = "block";
  CurrentVersionFeatureView.style.animationDelay = "0.75s";
  CurrentVersionFeatureView.style.animation =
    "windowIntro .45s cubic-bezier(.17,.6,.22,.88)";
}
function closeResolveWindow() {
  resolveWindow.style.display = "none";
}

function openUpdateResolver() {
  resolveWindow.style.display = "block";
  resolveWindow.style.animationDelay = "0.75s";
  resolveWindow.style.animation = "windowIntro .45s cubic-bezier(.17,.6,.22,.88)";
}
function openUpdateChecker() {
  updateWindow.style.display = "block";
  updateWindow.style.animationDelay = "0.75s";
  updateWindow.style.animation =
    "windowIntro .45s cubic-bezier(.17,.6,.22,.88)";
}
function closeUpdateChecker() {
  updateWindow.style.animation =
    "windowOutro .45s cubic-bezier(.17,.6,.22,.88)";
  updateWindow.style.animationDelay = "0.75s";
  updateWindow.style.display = "none";
}

//workspace.html



function openApp(windowApp){
  const argument = document.getElementById(windowApp);

  argument.style.display = "block";
  argument.style.animationDelay = "0.75s";
  argument.style.animation =
    "windowIntro .45s cubic-bezier(.17,.6,.22,.88)";
}

function closeApp(windowApp){
  const argument = document.getElementById(windowApp);

  argument.style.animation = "windowOutro .45s cubic-bezier(.17,.6,.22,.88)";
  argument.style.animationDelay = "0.75s";

  setTimeout(() => {
    argument.style.display = "none";
  }, 750);
  
}