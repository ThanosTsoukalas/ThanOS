const fileWindow = document.getElementById("files-window");
const settingsWindow = document.getElementById("settings-window");

// For Opening and closing the Files app

function openFilesApp() {
    fileWindow.style.display = "block";
    fileWindow.style.animationDelay = "0.75s";
    fileWindow.style.animation = "windowIntro .45s cubic-bezier(.17,.6,.22,.88)";
}

function closeFilesApp() {
    fileWindow.style.display = 'none';
}

//For Opening the Controls

function OpenSettingsApp() {
    settingsWindow.style.display = "block";
    settingsWindow.style.animationDelay = "0.75s";
    settingsWindow.style.animation = "windowIntro .45s cubic-bezier(.17,.6,.22,.88)";
}

function closeSettingsApp() {
    settingsWindow.style.display = 'none';
}