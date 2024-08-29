let timeContainer = document.getElementById('timeContainer');
// let am_pm_format = false;
// const formatChangeSettings = document.getElementById('the id of the element -- not developed yet');


setInterval(() => {
    displayTime(timeContainer)
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

displayTime(timeContainer);
