const searchInput = document.getElementById('search-window');
const searchInputField = document.getElementById('search-input-field');
var searchInputFilled = false;
var searchInputValue = '';

document.addEventListener('keydown', e =>{
    if(e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e'){
        e.preventDefault()
        searchInput.style.display = "flex";
        searchInput.style.animationDelay = "0.75s";
        searchInput.style.animation = "windowIntro .45s cubic-bezier(.17,.6,.22,.88)";
        searchInputField.focus();
        document.addEventListener('keydown', e =>{
            if(e.key === 'Escape'){
                searchInput.style.display = "none";
            }else if(e.key === 'Enter'){
                searchInputValue = searchInputField.value;
                if (searchInputValue === ''){
                    searchInputFilled = false;
                }else{
                    searchInputFilled = true;
                    alert('passed');
                }
            }
        })
    }
})