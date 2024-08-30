let timeContainer = document.getElementById('timeContainer');
// The large time container is located in the control panel when it is opened
let largeTimeContainer = document.getElementById('LargeTimeContainer');
// let am_pm_format = false;
// const formatChangeSettings = document.getElementById('the id of the element -- not developed yet');
let dateContainer = document.getElementById('DateContainer');

setInterval(() => {
    displayTime(timeContainer)
    displayTime(largeTimeContainer)
    displayDate(dateContainer)
}, 1000);

function displayTime(timeElement){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let localTime = hour + ":" + minutes;

    timeElement.innerHTML = localTime;

}

function displayDate(dateElement){
    let date = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let dateNum = date.getDate();
    let day = weekday[date.getDay()];
    let month = monthString[date.getMonth() + 1];
    let year = date.getFullYear();
    
    dateElement.innerHTML = day + ", " + month + " " + dateNum + ", " + year;

}



displayTime(timeContainer);
displayTime(largeTimeContainer);
displayDate(dateContainer)
