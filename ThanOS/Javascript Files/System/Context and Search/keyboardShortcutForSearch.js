const searchInput = document.getElementById('search-window');
const searchInputField = document.getElementById('search-input-field');

var searchInputFilled = false;
var searchInputValue = '';

function checkInput(){

}
// The Shortcut for opening search is Ctrl + Shift + E, so we are checking that
// first 
document.addEventListener('keydown', e =>{
    if(e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e'){
        e.preventDefault()

        searchInput.style.display = "flex";
        searchInput.style.animationDelay = "0.75s";
        searchInput.style.animation = "windowIntro .45s cubic-bezier(.17,.6,.22,.88)";

        searchInputField.focus();
        // Then, we are checking for shortcuts inside 
        // search
        document.addEventListener('keydown', e =>{

            if(e.key === 'Escape'){
                searchInput.style.display = "none";
            }
            else if(e.key === 'Enter'){
                searchInputValue = searchInputField.value;
                if (searchInputValue === ''){
                    searchInputFilled = false;
                }
                else{
                    searchInputFilled = true;
                    
                }
            }
            // If the user actually types something into the search bar, then make suggestions visible
            // currently working on that 
            else{
                checkInput()
            }
        })
    }
})