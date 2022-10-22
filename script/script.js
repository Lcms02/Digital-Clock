// change themes function
const changeThemeBtn = document.querySelector('#change-theme');

// toggle dark mode

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

// load light or dark mode

function loadTheme (){
    const darkMode = localStorage.getItem("dark");  

    if (darkMode) {
        toggleDarkMode();
    }

}

loadTheme();

changeThemeBtn.addEventListener("change",  function(){
    toggleDarkMode();

    // save or remove dark mode

    localStorage.removeItem("dark")

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1);

    }   

});


// Digital clock function

setInterval(showTime, 1000);
function showTime(){
    let texto = document.querySelector(".clocktext");
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if(hour>12){
        hour = hour - 12;
        am_pm = "PM";
    }
    if(hour===0){
        hour=12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime = hour + ":" + min + ":" + sec + am_pm;
    
    texto.textContent = currentTime;
    

}