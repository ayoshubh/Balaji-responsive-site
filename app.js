
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
            768:{
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
                let ih = '<div class="testi-card"><img src="./img/Quotas.png"><p>' + i.com + '</p><div class="testi-img" style="background-image: url(' + i.loc + ');"></div><div class="testi-au">' + i.name + '</div><div class="testi-star">';
                for (let index = 1; index <= i.rate; index++) {
                    ih += '<i class="fa-solid fa-star active"></i>'
                }
                for (let index = 1; index <= 5 - i.rate; index++) {
                    ih += '<i class="fa-solid fa-star"></i>'
                }
                ih += '</div></div>';
                $('#testimonial').owlCarousel('add', ih).owlCarousel('update');
            });
            // let ih = '<div class="testi-card"><img src="./img/Quotas.png"><p>Nulla id tortor nec lectus feugiat ultricies. Duis sit amet augue vitae dui bibendumNulla id tortor nec lectus feugiat ultricies. Duis sit amet augue vitae dui bibendum</p><div class="testi-img t1"></div><div class="testi-au">Joye</div><div class="testi-star"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>' 
            // console.log(ih);
            //
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

// $('#mob-rec').owlCarousel('changed',updateZ());

// function updateZ() {
//     console.log('Hello');
// }

function recLarge() {
    let x = false;
    fetch("./json/recipe.json")
        .then(response => {
            return (response.json());
        }).then(jsondata => {
            let ele = document.getElementById('rec-slide-list');
            jsondata.forEach(i => {
                const tempele = document.createElement('li');
                tempele.innerHTML = '<div class="slide-cont"><div class="slide-img"><img src="'+i.loc+'" alt="Recipe '+i.id+'"></div><div class="slide-title">'+i.name+'</div><div class="slide-desc">'+i.desc+'</div></div>';
                console.log(tempele);
                ele.appendChild(tempele);
            });
            x = true;
            return x;
        }).then(m=>{
            if(m){
                $('#large-rec').hiSlide({});
            }else{
                console.log('This is Error msg '+ m);
            }
        })       
}
recLarge();


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


// const all = document.getElementById('gallery-all');
// const snack = document.getElementById('gallery-snack');
// const meal = document.getElementById('gallery-meal');

// function chnGal(a) {
//     let btns = document.getElementsByClassName("button");
//     console.log(btns);
//     for (let index = 0; index < btns.length; index++) {
//         btns[index].className = btns[index].className.replace(' gal-btn-active', '');
//     }
//     btns[a].className += ' gal-btn-active';
//     if (a === 0) {
//         all.style.display = "grid";
//         snack.style.display = "none";
//         meal.style.display = "none";
//     } else if (a === 1) {
//         all.style.display = "none";
//         snack.style.display = "grid";
//         meal.style.display = "none";
//     } else if (a === 2) {
//         all.style.display = "none";
//         snack.style.display = "none";
//         meal.style.display = "grid";
//     }
// }
/* <a data-fslightbox="gallery" href="${products[ran].image}"></a> */
{/* <a data-fslightbox="gallery" href="${item.image}"></a> */}
let http = new XMLHttpRequest();
http.open('get', './json/galleryAll.json', true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";

    let ran = Math.floor((Math.random() * 12) + 2);
    let divNo = 'div'+ran;
    output += `<div class="div1">
      <img src="${products[ran].image}" alt="" class="img-fluid" loading=" lazy">
      <div class="action">
      ${products[ran].dish}
      </div>
      
    
  </div>`;

    for (let item of products) {
        if(item.div == 'div1'){
            continue;
        }
        if(item.div == divNo){
            continue;
        }
      output += `<div class="${item.div} ">

        
        <img src="${item.image}" alt="" class="img-fluid" loading=" lazy">
        <div class="action">
        ${item.dish}
        </div>
      
    </div>`;
    }
    document.querySelector("#gallery-all").innerHTML = output 
  };

}

// let http2 = new XMLHttpRequest();
// http2.open('get', './json/gallerySnack.json', true);
// http2.send();
// http2.onload = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     let products = JSON.parse(this.responseText);
//     // let outputSnack = "";
//     let output = "";
//     for (let item of products) {
//       output += `<div class="${item.div}">

//       <a data-fslightbox="gallery" href="${item.image}">
//         <img src="${item.image}" alt="" class="img-fluid" loading=" lazy">
//         <div class="action">
//         ${item.dish}
//         </div>
//         </a>
      
//     </div>`;
//     }
//     document.querySelector("#gallery-snack").innerHTML = output 
//   };

// }

// let http3 = new XMLHttpRequest();
// http3.open('get', './json/galleryMeal.json', true);
// http3.send();
// http3.onload = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     let products = JSON.parse(this.responseText);
//     let output = "";
//     for (let item of products) {
//       output += `<div class="${item.div}">

//       <a data-fslightbox="gallery" href="${item.image}">
//         <img src="${item.image}" alt="" class="img-fluid" loading=" lazy">
//         <div class="action">
//         ${item.dish}
//         </div>
//         </a>
      
//     </div>`;
//     }
//     document.querySelector("#gallery-meal").innerHTML = output 
//   };

// }