const params = new URLSearchParams(document.location.search);
var label = params.get("label");
var keyword = params.get("key");
if(label){
fetch(`https://gogoanime.herokuapp.com/genre/${label}`)
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data);
    // var link=data.episodeId;
    document.getElementsByTagName('meta')["description"].content = `Search Results for ${label} `;
    document.getElementById("aname").innerHTML = `Search Results For Label : ${label} `

    var meta = document.createElement('meta');
    meta.setAttribute("property","og:image");
    meta.content = data[0].animeImg;
    meta.name = "twitter:image";
    document.getElementsByTagName('head')[0].appendChild(meta);


    const html = data.map((img, i) =>{
        return `
        <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${data[i].animeImg}" style="background-image: url('${data[i].animeImg}');"">
                                        <div class="ep">${data[i].releasedDate}</div>
                                        <div class="comment"><i class="fa fa-comments"></i> ${Math.floor((Math.random() * 11) + 1)}k</div>
                                        <div class="view"><i class="fa fa-eye"></i>${Math.floor((Math.random() * 99) + 10)},${Math.floor((Math.random() * 999) + 100)} views</div>
                                    </div>
                                    <div class="product__item__text">
                                        <h5><a href="watch.html?view=${data[i].animeId}">${data[i].animeTitle}</a></h5>
                                    </div>
                                </div>
                            </div>`
    }).join('');
    document.querySelector("#results").insertAdjacentHTML("afterbegin", html);
})
}
if(keyword){
    fetch(`https://gogoanime.herokuapp.com/search?keyw=${keyword}`)
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();})
    .then(data => {
        // console.log(data);
        // var link=data.episodeId;
        document.getElementsByTagName('meta')["description"].content = `Search Results for ${keyword} `;
        document.getElementById("aname").innerHTML = `Search Results For Anime : ${keyword} `

        var meta = document.createElement('meta');
        meta.setAttribute("property","og:image");
        meta.content = data[0].animeImg;
        meta.name = "twitter:image";
        document.getElementsByTagName('head')[0].appendChild(meta);

        const html = data.map((img, i) =>{
            return `
            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${data[i].animeImg}" style="background-image: url('${data[i].animeImg}');"">
                                        <div class="ep">${data[i].releasedDate}</div>
                                        <div class="comment"><i class="fa fa-comments"></i> ${Math.floor((Math.random() * 11) + 1)}k</div>
                                        <div class="view"><i class="fa fa-eye"></i>${Math.floor((Math.random() * 99) + 10)},${Math.floor((Math.random() * 999) + 100)} views</div>
                                    </div>
                                    <div class="product__item__text">
                                        <h5><a href="watch.html?view=${data[i].animeId}">${data[i].animeTitle}</a></h5>
                                    </div>
                                </div>
                            </div>`;
        }).join('');
        document.querySelector("#results").insertAdjacentHTML("afterbegin", html);
    })
}