const controlPanel = document.getElementById('controlPanel');
let clickState = 0;

function Controls(){
    if (clickState === 0){
        controlPanel.style.animation = 'controlPanelIn .65s cubic-bezier(.01,.62,.11,.95)';
        controlPanel.style.animationFillMode = 'forwards';
        clickState = 1;
    }
    else if (clickState === 1){
        controlPanel.style.animation = 'controlPanelOut .65s cubic-bezier(.01,.62,.11,.95)';
        controlPanel.style.animationFillMode = 'forwards';
        clickState = 0;
    }
    
}