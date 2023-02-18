console.log("Welcome to my portfolio site! Take a look and let me know what you think!")

//function to toggle menu off or on //

function menuToggle (){
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}

