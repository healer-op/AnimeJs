const params = new URLSearchParams(document.location.search);
var label = params.get("label");
var keyword = params.get("key");
if(label){
fetch(`https://api.consumet.org/anime/gogoanime/${label}`)
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    document.getElementsByTagName('meta')["description"].content = `Search Results for ${label} `;
    document.getElementById("aname").innerHTML = `Search Results For Label : ${label} `

    var meta = document.createElement('meta');
    meta.setAttribute("property","og:image");
    meta.content = data.results[0].image;
    meta.name = "twitter:image";
    document.getElementsByTagName('head')[0].appendChild(meta);


    const html = data.results.map((img, i) =>{
        return `
        <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${data.results[i].image}" style="background-image: url('${data.results[i].image}');"">
                                        <div class="ep">${data.results[i].releaseDate}</div>
                                        <div class="comment"><i class="fa fa-comments"></i> ${Math.floor((Math.random() * 11) + 1)}k</div>
                                        <div class="view"><i class="fa fa-eye"></i>${Math.floor((Math.random() * 99) + 10)},${Math.floor((Math.random() * 999) + 100)} views</div>
                                    </div>
                                    <div class="product__item__text">
                                        <h5><a href="watch.html?view=${data.results[i].id}">${data.results[i].title}</a></h5>
                                    </div>
                                </div>
                            </div>`
    }).join('');
    document.querySelector("#results").insertAdjacentHTML("afterbegin", html);
})
}
if(keyword){
    fetch(`https://api.consumet.org/anime/gogoanime/${keyword}`)
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();})
    .then(data => {
      document.getElementsByTagName('meta')["description"].content = `Search Results for ${label} `;
      document.getElementById("aname").innerHTML = `Search Results For Label : ${label} `
  
      var meta = document.createElement('meta');
      meta.setAttribute("property","og:image");
      meta.content = data.results[0].image;
      meta.name = "twitter:image";
      document.getElementsByTagName('head')[0].appendChild(meta);
  
  
      const html = data.results.map((img, i) =>{
          return `
          <div class="col-lg-4 col-md-6 col-sm-6">
                                  <div class="product__item">
                                      <div class="product__item__pic set-bg" data-setbg="${data.results[i].image}" style="background-image: url('${data.results[i].image}');"">
                                          <div class="ep">${data.results[i].releaseDate}</div>
                                          <div class="comment"><i class="fa fa-comments"></i> ${Math.floor((Math.random() * 11) + 1)}k</div>
                                          <div class="view"><i class="fa fa-eye"></i>${Math.floor((Math.random() * 99) + 10)},${Math.floor((Math.random() * 999) + 100)} views</div>
                                      </div>
                                      <div class="product__item__text">
                                          <h5><a href="watch.html?view=${data.results[i].id}">${data.results[i].title}</a></h5>
                                      </div>
                                  </div>
                              </div>`
      }).join('');
      document.querySelector("#results").insertAdjacentHTML("afterbegin", html);
    })
}
