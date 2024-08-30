let timeContainer = document.getElementById('timeContainer');
// The large time container is located in the control panel when it is opened
let largeTimeContainer = document.getElementById('LargeTimeContainer');
// let am_pm_format = false;
// const formatChangeSettings = document.getElementById('the id of the element -- not developed yet');
let dateContainer = document.getElementById('DateContainer');

setInterval(() => {
    displayTime(timeContainer, 'false')
    displayTime(largeTimeContainer, 'true')
    displayDate(dateContainer)
}, 1000);

function displayTime(timeElement, secDisplay){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    let localTime = '';

    if (secDisplay === 'false'){
        localTime = hour + ":" + minutes;
    }else if(secDisplay === 'true'){
        localTime = hour + ":" + minutes + ":" + seconds;
    }

    timeElement.innerHTML = localTime;

}

function displayDate(dateElement){
    let date = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let dateNum = date.getDate();
    let day = weekday[date.getDay()];
    let month = monthString[date.getMonth()];
    let year = date.getFullYear();
    
    dateElement.innerHTML = day + ", " + month + " " + dateNum + ", " + year;

}



displayTime(timeContainer, 'false');
displayTime(largeTimeContainer, 'true');
displayDate(dateContainer)
