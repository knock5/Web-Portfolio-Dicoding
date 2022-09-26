// Function dropdown navbar
function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.drop-btn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

let mySpan = document.createElement('span');

function labelTelegram() {
    mySpan.innerText = "@mif_OS";
    document.getElementById('displayMedsos').appendChild(mySpan);
}
function labelEmail() {
    mySpan.innerText = "putihbiru0505@gmail.com";
    document.getElementById('displayMedsos').appendChild(mySpan);
}
function labelDiscord() {
    mySpan.innerText = "mif#4879";
    document.getElementById('displayMedsos').appendChild(mySpan);
}

function removeLabel() {
    mySpan.remove();
}

window.onclick = function(a) {
    if (a.target.matches('.telegram')) {
        removeLabel();
        labelTelegram();
    } else if (a.target.matches('.email')) {
        removeLabel();
        labelEmail();
    } else if (a.target.matches('.discord')) {
        removeLabel();
        labelDiscord();
    }
}
