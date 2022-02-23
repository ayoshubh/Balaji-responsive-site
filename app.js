
$(document).ready(function () {
    $('#mob-rec').owlCarousel({
        center: true,
        loop: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1,
                margin: -20,
            },
            769:{
                items:3,
                margin:-320,
            }
        }
    })
    $('#testimonial').owlCarousel({
        center: true,
        loop: true,
        autoWidth: true,
        autoHidth: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: false
            },
            768: {
                items: 3,
                
            }
        }
    })
    // console.log(recLarge()); 
    
})

function testimonial() {
    fetch("./json/comments.json")
        .then(response => {
            return (response.json());
        }).then(jsondata => {
            let Arr = jsondata;
            Arr.forEach(i => {
                let ih = '<div class="testi-card"><img src="./img/Quotas.png" alt="Quotas Image"><p>' + i.com + '</p><div class="testi-img" style="background-image: url(' + i.loc + ');"></div><div class="testi-au">' + i.name + '</div><div class="testi-star">';
                for (let index = 1; index <= i.rate; index++) {
                    ih += '<i class="fa-solid fa-star active"></i>'
                }
                for (let index = 1; index <= 5 - i.rate; index++) {
                    ih += '<i class="fa-solid fa-star"></i>'
                }
                ih += '</div></div>';
                $('#testimonial').owlCarousel('add', ih).owlCarousel('update');
            });
        })
}
testimonial();

function recMob() {
    fetch("./json/recipe.json")
        .then(response => {
            return (response.json());
        }).then(jsondata => {
            jsondata.forEach(i => {
                let ih = '<div><div class="mob-rec-img"><img src="' + i.loc + '" alt="Recipe ' + i.id + '"></div><div class="mob-rec-name">' + i.name + '</div><div class="mob-rec-desc">' + i.desc + '</div></div>';
                $('#mob-rec').owlCarousel('add', ih).owlCarousel('update');
            });
        })
}
recMob();



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


let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" fade", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " fade";
    dots[slideIndex - 1].className += " active";
}


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

function gallery() {
    fetch("./json/galleryAll.json")
        .then(response => {
            return (response.json());
        }).then(jsondata => {
            let products = jsondata;
            let output = "";
            let ran = Math.floor((Math.random() * 12) + 2);
            let divNo = 'div'+ran;
            output += `<div class="div1">
                <a data-fslightbox="gallery" href="${products[ran].image}" id="galLink">
                <img src="${products[ran].image}" alt="" class="img-fluid" loading="lazy" id="galImg">
                <div class="action" id="galAct">
                ${products[ran].dish}
                </div>
                </a>
            </div>`;
            for (let item of products) {
                if(item.div == 'div1'){
                    continue;
                }
                if(item.div == divNo){
                    continue;
                }
            output += `<div class="${item.div}">
                        <a data-fslightbox="gallery" href="${item.image}">
                        <img src="${item.image}" alt="" class="img-fluid" loading="lazy">
                        <div class="action">
                        ${item.dish}
                        </div>
                        </a>
                    </div>`;
            }
            console.log(output);
            document.querySelector("#gallery-all").innerHTML = output;
            return true
        }).then(m=>{
            if(m){
                var s = document.createElement( 'script' );
                s.setAttribute( 'src', './js/fslightbox.js' );
                document.body.appendChild( s );
            }else{
                console.log('Error !!!!');
            }
        })
}
gallery();