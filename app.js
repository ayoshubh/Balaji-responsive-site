function chn(x) {
    if (x == 1) {
        let imgStr = document.getElementById('comm-img').src;
        let x;
        if (imgStr.length > 36) {
            x = Number.parseInt(imgStr[46]);
        } else {
            x = Number.parseInt(imgStr[30]);
        }

        let forNo, prNo, backNo;
        if (x == 3) {
            prNo = 1;
            backNo = 3;
            forNo = 2;
        } else {
            prNo = x + 1;
            backNo = prNo - 1;
            if (prNo === 3) {
                forNo = 1;
            } else { forNo = prNo + 1; }
        }
        document.getElementById('comm-img').src = "./img/comm" + prNo + ".png";
        document.getElementById('back-btn-block').style.backgroundImage = "linear-gradient(rgba(49, 49, 49, 0.8),rgba(49, 49, 49, 0.8)),url(./img/comm" + backNo + ".png)";
        document.getElementById('forward-btn-block').style.backgroundImage = "linear-gradient(rgba(49, 49, 49, 0.8),rgba(49, 49, 49, 0.8)),url(./img/comm" + forNo + ".png)";
    }
    if (x == -1) {
        let imgStr = document.getElementById('comm-img').src;
        let x;
        if (imgStr.length > 36) {
            x = Number.parseInt(imgStr[46]);
        } else {
            x = Number.parseInt(imgStr[30]);
        }
        let forNo, prNo, backNo;
        if (x === 1) {
            prNo = 3;
            backNo = 2;
            forNo = 1;
        } else {
            prNo = x - 1;
            if (prNo === 1) {
                backNo = 3;
            } else { backNo = prNo + 1; }
            forNo = prNo + 1;
        }
        document.getElementById('comm-img').src = "./img/comm" + prNo + ".png";
        document.getElementById('back-btn-block').style.backgroundImage = "linear-gradient(rgba(49, 49, 49, 0.8),rgba(49, 49, 49, 0.8)),url(./img/comm" + backNo + ".png)";
        document.getElementById('forward-btn-block').style.backgroundImage = "linear-gradient(rgba(49, 49, 49, 0.8),rgba(49, 49, 49, 0.8)),url(./img/comm" + forNo + ".png)";
    }
}


let i = 0;
function showNav() {
    if (i == 0) {
        document.getElementById('mobNav').style.animationName = "show";
        i = 1;
    } else {
        document.getElementById('mobNav').style.animationName = "hide";
        i = 0;
    }
}

function CS() {
    if (window.innerWidth < 768) {
        document.getElementById('forward-btn-block').style.display = "none";
        document.getElementById('back-btn-block').style.display = "none";
        document.getElementById('dotc-con').style.display = "block";
        document.getElementById('dotr-con').style.display = "block";
    } else {
        document.getElementById('forward-btn-block').style.display = "block";
        document.getElementById('back-btn-block').style.display = "block";
        document.getElementById('dotc-con').style.display = "none";
        document.getElementById('dotr-con').style.display = "none";
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}