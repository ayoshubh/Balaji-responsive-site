function chn(x) {
    if (x == 1) {
        let imgStr = document.getElementsByClassName('comm-img')[0].src;
        let x = Number.parseInt(imgStr[imgStr.length - 5]);
        // if (imgStr.length > 36) {
        //     x = Number.parseInt(imgStr[46]);
        // } else {
        //     x = Number.parseInt(imgStr[30]);
        // }

        let cArr;
        let forNo, prNo, backNo;
        fetch("./comments.json")
            .then(response => {
                return (response.json());
            }).then(jsondata => {
                cArr = jsondata;
                cl = cArr.length;
                if (x == cl) {
                    prNo = 1;
                    backNo = cArr[cl - 1].id;
                    forNo = prNo + 1;
                } else {
                    prNo = x + 1;
                    backNo = prNo - 1;
                    if (prNo === cl) {
                        forNo = 1;
                    } else { forNo = prNo + 1; }
                }

                document.getElementsByClassName('comm-img')[0].src = "./img/comm" + prNo + ".png";
                document.getElementById('back-btn-block').style.backgroundImage = "linear-gradient(rgba(49, 49, 49, 0.8),rgba(49, 49, 49, 0.8)),url(./img/comm" + backNo + ".png)";
                document.getElementById('forward-btn-block').style.backgroundImage = "linear-gradient(rgba(49, 49, 49, 0.8),rgba(49, 49, 49, 0.8)),url(./img/comm" + forNo + ".png)";

                document.getElementsByClassName('comm-au')[0].innerText = cArr[prNo - 1].name;
                document.getElementsByClassName('comm-text')[0].innerText = cArr[prNo - 1].com;
            });
    }
    if (x == -1) {
        let imgStr = document.getElementsByClassName('comm-img')[0].src;
        let x = Number.parseInt(imgStr[imgStr.length - 5]);
        // if (imgStr.length > 36) {
        //     x = Number.parseInt(imgStr[46]);
        // } else {
        //     x = Number.parseInt(imgStr[30]);
        // }

        let cArr;
        let forNo, prNo, backNo;

        fetch("./comments.json")
            .then(response => {
                return (response.json());
            }).then(jsondata => {
                cArr = jsondata;
                cl = cArr.length;
                if (x === cArr[0].id) {
                    prNo = cl;
                    backNo = prNo - 1;
                    forNo = 1;
                } else {
                    prNo = x - 1;
                    if (prNo === cArr[0].id) {
                        backNo = cl;
                    } else { backNo = prNo + 1; }
                    forNo = prNo + 1;
                }
                document.getElementsByClassName('comm-img')[0].src = "./img/comm" + prNo + ".png";
                document.getElementById('back-btn-block').style.backgroundImage = "linear-gradient(rgba(49, 49, 49, 0.8),rgba(49, 49, 49, 0.8)),url(./img/comm" + backNo + ".png)";
                document.getElementById('forward-btn-block').style.backgroundImage = "linear-gradient(rgba(49, 49, 49, 0.8),rgba(49, 49, 49, 0.8)),url(./img/comm" + forNo + ".png)";

                document.getElementsByClassName('comm-au')[0].innerText = cArr[prNo - 1].name;
                document.getElementsByClassName('comm-text')[0].innerText = cArr[prNo - 1].com;
            });

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
    //dots[slideIndex - 1].className += " active";
}
document.getElementById('recipe-img-block').addEventListener('click', e => {
    e.preventDefault();
    console.log("Hello")
})

const all = document.getElementById('gallery-all');
const snack = document.getElementById('gallery-snack');
const meal = document.getElementById('gallery-meal');

function chnGal(a) {
    let btns = document.getElementsByClassName("button");
    console.log(btns);
    for (let index = 0; index < btns.length; index++) {
        btns[index].className = btns[index].className.replace(' gal-btn-active', '');
    }
    btns[a].className += ' gal-btn-active';
    if (a === 0) {
        all.style.display = "grid";
        snack.style.display = "none";
        meal.style.display = "none";
    } else if (a === 1) {
        all.style.display = "none";
        snack.style.display = "grid";
        meal.style.display = "none";
    } else if (a === 2) {
        all.style.display = "none";
        snack.style.display = "none";
        meal.style.display = "grid";
    }
}


// Gallery 

let http = new XMLHttpRequest();
http.open('get', 'galleryAll.json', true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let outputSnack = "";
    let output = "";
    for (let item of products) {
      output += `<div class="${item.div}">

      <a data-fslightbox="gallery" href="${item.image}">
        <img src="${item.image}" alt="" class="img-fluid" loading=" lazy">
        <div class="action">
        ${item.dish}
        </div>
        </a>
      
    </div>`;
    }
    document.querySelector("#gallery-all").innerHTML = output 
  };

}

let http2 = new XMLHttpRequest();
http2.open('get', 'gallerySnack.json', true);
http2.send();
http2.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    // let outputSnack = "";
    let output = "";
    for (let item of products) {
      output += `<div class="${item.div}">

      <a data-fslightbox="gallery" href="${item.image}">
        <img src="${item.image}" alt="" class="img-fluid" loading=" lazy">
        <div class="action">
        ${item.dish}
        </div>
        </a>
      
    </div>`;
    }
    document.querySelector("#gallery-snack").innerHTML = output 
  };

}

let http3 = new XMLHttpRequest();
http3.open('get', 'galleryMeal.json', true);
http3.send();
http3.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";
    for (let item of products) {
      output += `<div class="${item.div}">

      <a data-fslightbox="gallery" href="${item.image}">
        <img src="${item.image}" alt="" class="img-fluid" loading=" lazy">
        <div class="action">
        ${item.dish}
        </div>
        </a>
      
    </div>`;
    }
    document.querySelector("#gallery-meal").innerHTML = output 
  };

}

