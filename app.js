
$(document).ready(function () {
    $('#mob-rec').owlCarousel({
        loop: true,
        items: 1,
        autoHidth: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000
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
                items: 3
            }
        }
    })
    // console.log(recLarge()); 
    $('#large-rec').hiSlide({});
})


function chn(x) {
    if (x == 1) {
        let imgStr = document.getElementsByClassName('comm-img')[0].src;
        let x = Number.parseInt(imgStr[imgStr.length - 5]);
        let cArr;
        let forNo, prNo, backNo;
        fetch("./json/comments.json")
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
        let cArr;
        let forNo, prNo, backNo;

        fetch("./json/comments.json")
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


function testiMob() {
    fetch("./json/comments.json")
        .then(response => {
            return (response.json());
        }).then(jsondata => {
            let Arr = jsondata;
            Arr.forEach(i => {
                let ih = '<div class="testi-card"><img src="./img/Quotas.png"><p>' + i.com + '</p><div class="testi-img" style="background-image: url(./img/comm' + i.id + '.png);"></div><div class="testi-au">' + i.name + '</div><div class="testi-star">';
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
testiMob();

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

// function recLarge() {
//     fetch("./json/recipe.json")
//         .then(response => {
//             return (response.json());
//         }).then(jsondata => {
//             let ele = document.getElementById('rec-slide-list');
//             jsondata.forEach(i => {
//                 const tempele = document.createElement('li');
//                 tempele.innerHTML = '<div class="slide-cont"><div class="slide-img"><img src="'+i.loc+'" alt="Recipe '+i.id+'"></div><div class="slide-title">'+i.name+'</div><div class="slide-desc">'+i.desc+'</div></div>';
//                 console.log(tempele);
//                 ele.appendChild(tempele);
                
//             });
//             console.log(ele);
//         })
//         return 12;
// }



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



var Slider = function () {
    var total, $slide, $slider, sliderWidth, increment = 100;
    var on = function () {
        $slider = $('.slider');
        $slide = $('.slide');
        sliderWidth = $slider.width();
        total = $slide.length;
        position();
    }

    var position = function () {
        var sign, half = $('.active').index(), x = 0, z = 0, zindex, scaleX = 1.3, scaleY = 1.3, transformOrigin;
        $slide.each(function (index, element) {
            scaleX = scaleY = 1;
            transformOrigin = sliderWidth / 2;
            if (index < half) {
                sign = 1;
                zindex = index + 1;
                x = sliderWidth / 2 - increment * (half - index + 1);
                z = -increment * (half - index + 1);
            } else if (index > half) {
                sign = -1
                zindex = total - index;
                x = sliderWidth / 2 + increment * (index - half + 1);
                z = -increment * (index - half + 1);
            } else {
                sign = 0;
                zindex = total;
                x = sliderWidth / 2;
                z = 1;
                scaleX = scaleY = 1.2;
                transformOrigin = 'initial';
            }
            $(element).css(
                {
                    'transform': 'translate3d(' + calculateX(x, sign, 300) + 'px, 0,' + z + 'px) scale3d(' + scaleX + ',' + scaleY + ', 1)',
                    'z-index': zindex,
                    'transform-origin-x': transformOrigin
                }
            );
        });
    };

    var calculateX = function (position, sign, width) {
        switch (sign) {
            case 1:
            case 0: return position - width / 2;
            case -1: return position - width / 2;
        }
    }

    var imageSize = function () {
        return $slider.width() / 3;
    }

    var recalculateSizes = function () {
        sliderWidth = $slider.width();
        position();
    }

    var clickedImage = function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
        position();
    }

    var addEvents = function () {
        $(window).resize(recalculateSizes);
        $(document).on('click', '.slide', clickedImage);
    }

    return {
        init: function () {
            on();
            addEvents();
        }
    };
}();

$(function () {
    var slider = Slider.init();
})
