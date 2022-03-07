$(document).ready(function(){$('#mob-rec').owlCarousel({center:!0,loop:!0,items:1,dots:!0,autoplay:!0,autoplayTimeout:4000,responsive:{0:{items:1,margin:-20,},769:{items:2,margin:-510,}}})
$('#testimonial').owlCarousel({center:!0,loop:!0,autoWidth:!0,autoHidth:!0,autoplay:!0,autoplayTimeout:5000,dots:!0,responsive:{0:{items:1,autoWidth:!1},768:{items:3,}}})})
function testimonial(){fetch("./json/comments.json").then(response=>{return(response.json())}).then(jsondata=>{let Arr=jsondata;Arr.forEach(i=>{let ih='<div class="testi-card"><img src="./img/Quotas.png" alt="Quotas Image"><p>'+i.com+'</p><div class="testi-img" style="background-image: url('+i.loc+');"></div><div class="testi-au">'+i.name+'</div><div class="testi-star">';for(let index=1;index<=i.rate;index++){ih+='<i class="fa-solid fa-star active"></i>'}
for(let index=1;index<=5-i.rate;index++){ih+='<i class="fa-solid fa-star"></i>'}
ih+='</div></div>';$('#testimonial').owlCarousel('add',ih).owlCarousel('update')})})}
testimonial();function recMob(){fetch("./json/recipe.json").then(response=>{return(response.json())}).then(jsondata=>{jsondata.forEach(i=>{let ih=`<div><div class="mob-rec-img"><img src="${i.loc}" alt="Recipe ${i.id}"></div>
                <div class="mob-rec-name">${i.name}</div><div class="mob-rec-desc">${i.desc}</div></div>`;$('#mob-rec').owlCarousel('add',ih).owlCarousel('update')})})}
recMob();let i=0;function showNav(){if(i==0){document.getElementById('mobNav').style.animationName="show";i=1}else{document.getElementById('mobNav').style.animationName="hide";i=0}}
function gallery(){fetch("./json/galleryAll.json").then(response=>{return(response.json())}).then(jsondata=>{let products=jsondata;let output="";let ran=Math.floor((Math.random()*12)+2);let divNo='div'+ran;output+=`<div class="div1">
                <a data-fslightbox="gallery" href="${products[ran].image}" id="galLink">
                <img src="${products[ran].image}" alt="${products[ran].dish}" class="img-fluid" loading="lazy" id="galImg">
                <div class="action" id="galAct">
                ${products[ran].dish}
                </div>
                </a>
            </div>`;for(let item of products){console.log(item.div);if(item.div==divNo){console.log(divNo);continue}
output+=`<div class="${item.div}">
                        <a data-fslightbox="gallery" href="${item.image}">
                        <img src="${item.image}" alt="${item.dish}" class="img-fluid" loading="lazy">
                        <div class="action">
                        ${item.dish}
                        </div>
                        </a>
                    </div>`}
document.querySelector("#gallery-all").innerHTML=output;return!0}).then(m=>{if(m){var s=document.createElement('script');s.setAttribute('src','./js/fslightbox.js');document.body.appendChild(s)}else{console.log('Error !!!!')}})}
gallery()