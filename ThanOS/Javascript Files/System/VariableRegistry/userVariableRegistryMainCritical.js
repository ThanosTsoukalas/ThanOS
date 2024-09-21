// this file is used to change properties of components across the platform according to the user's preferences

// Global variables
const workspace = document.getElementById('body');

// Changing background
// Variables and arguments
const DefaultWallpaper = 'url("/ThanOS/CSS Files/Main/DefaultWallpaper.jpg")';
const FinalBackground = 'url("/ThanOS/CSS Files/Main/Final Background ThanOS.png")';

let clickState = 0;

function changeBackground(){
    if (clickState === 0){
        workspace.style.backgroundImage = DefaultWallpaper;
        clickState = 1;
    } else if(clickState === 1){
        workspace.style.backgroundImage = FinalBackground;
        clickState = 0;
    }
    
}