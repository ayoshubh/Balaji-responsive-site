let http = new XMLHttpRequest();
http.open('get', 'products.json', true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);

    let output = "";
    for (let item of products) {
      output += `<section id="gallery-all" class="container gal marb">
            <div class="${item.div}">
                < a data - fslightbox="gallery" href = "${item.image}" >
                    < img src="${item.image}" alt="" class="img - fluid" loading=" lazy" >
                        < div class="action" >
                            ${item.dish}
                        </div >
                    </a >
        </div >
</section>
                `;
    }

    document.querySelector(".gal").innerHTML = output;
  }
}