

fetch('https://api.consumet.org/anime/gogoanime/top-airing')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    data = data.results
    const html = data.map((img, i) =>{
        return `
        <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${data[i].image}"  style="background-image: url('${data[i].image}');">
                                        <div class="ep">${data[i].genres[0]}</div>
                                        <div class="comment"><i class="fa fa-comments"></i> ${Math.floor((Math.random() * 9) + 1)}K</div>
                                        <div class="view"><i class="fa fa-eye"></i> ${Math.floor((Math.random() * 999) + 1)}.${Math.floor((Math.random() * 9) + 1)}k</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>${data[i].genres[0]}</li>
                                        </ul>
                                        <h5><a href="watch.html?view=${data[i].id}">${data[i].title}</a></h5>
                                    </div>
                                </div>
                            </div>`;
    }).join('');
    document.querySelector("#recent1").insertAdjacentHTML("afterbegin", html);
})


function ok(){
    var x = ["action",
    "adventure",
    "cars",
    "comedy",
    "crime",
    "dementia",
    "demons",
    "drama",
    "dub",
    "ecchi",
    "family",
    "fantasy",
    "game",
    "gourmet",
    "harem",
    "historical",
    "horror",
    "josei",
    "kids",
    "magic",
    "martial-arts",
    "mecha",
    "military",
    "Mmusic",
    "mystery",
    "parody",
    "police",
    "psychological",
    "romance",
    "samurai",
    "school",
    "sci-fi",
    "seinen",
    "shoujo",
    "shoujo-ai",
    "shounen",
    "shounen-ai",
    "slice-of-Life",
    "space",
    "sports",
    "super-power",
    "supernatural",
    "suspense",
    "thriller",
    "vampire",
    "yaoi",
    "yuri"]
    var x1 =["tagline.jpg","tagline3.jpg","tagline2.png"]
    for(i=0;i<x.length;i++){
        console.log(`<div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="img/${x1[Math.floor((Math.random() * 3) + 0)]}">
                <div class="comment"><i class="fa fa-comments"></i> ${Math.floor((Math.random() * 3) + 1)}k</div>
                <div class="view"><i class="fa fa-eye"></i> ${Math.floor((Math.random() * 99) + 10)}k</div>
            </div>
            <div class="product__item__text">
                <h5><a href="search.html?label=${x[i]}">${x[i]}</a></h5>
            </div>
        </div>
    </div>`)
    }
}
