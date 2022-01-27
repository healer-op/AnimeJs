const params = new URLSearchParams(document.location.search);
var name = params.get("view");
// console.log(name);
fetch(`https://gogoanime.herokuapp.com/anime-details/${name}`)
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data)
    document.getElementsByTagName('meta')["description"].content = `Watch ${name} online for free`;

    var meta = document.createElement('meta');
    meta.setAttribute("property","og:image");
    meta.content = data.animeImg;
    meta.name = "twitter:image";
    document.getElementsByTagName('head')[0].appendChild(meta);


    const html = data.episodesList.map((img, i) =>{
        return `<a onclick="render('${data.episodesList[i].episodeId}');">Ep ${data.episodesList[i].episodeNum}</a>`;
    }).join('');
    document.querySelector("#epl").insertAdjacentHTML("afterbegin", html);
            
})

if(name){
    let pos = name.search("episode");
if(pos==-1){
    name = name + "-episode-1"
    // console.log(name);
    document.getElementById("amain").innerHTML = name;
    fetch(`https://gogoanime.herokuapp.com/gogo-server/watch/${name}`)
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();})
    .then(data => {
        document.getElementById("player").src = data.referer;
    })
}
}

if(name){
    let pos = name.search("episode");
if(pos){
    document.getElementById("amain").innerHTML = name;
    fetch(`https://gogoanime.herokuapp.com/gogo-server/watch/${name}`)
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();})
    .then(data => {
        document.getElementById("player").src = data.referer;
    })
}
}

function render(x){
    var x = x;
    document.getElementById("amain").innerHTML = x;
    fetch(`https://gogoanime.herokuapp.com/gogo-server/watch/${x}`)
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();})
        .then(data => {
            // console.log(data);
            document.getElementById("player").src = data.referer;
            
    })
}