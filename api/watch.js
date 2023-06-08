const params = new URLSearchParams(document.location.search);
var name = params.get("view");
// console.log(name);
fetch(`https://api.consumet.org/anime/gogoanime/info/${name}`)
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data)
    document.getElementsByTagName('meta')["description"].content = `Watch ${data.title} online for free`;

    var meta = document.createElement('meta');
    meta.setAttribute("property","og:image");
    meta.content = data.image;
    meta.name = "twitter:image";
    document.getElementsByTagName('head')[0].appendChild(meta);


    const html = data.episodes.map((img, i) =>{
        return `<a onclick="render('${data.episodes[i].id}');">Ep ${data.episodes[i].number}</a>`;
    }).join('');
    document.querySelector("#epl").insertAdjacentHTML("afterbegin", html);           
})

if(name){
    let pos = name.search("episode");
if(pos==-1){
    name = name + "-episode-1"
    // console.log(name);
    document.getElementById("amain").innerHTML = name;
    
    fetch(`https://api.consumet.org/anime/gogoanime/watch/${name}`)
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();})
    .then(data => {
        document.getElementById("player").src = data.headers.Referer;
    })
}
}

if(name){
    let pos = name.search("episode");
if(pos){
    document.getElementById("amain").innerHTML = name;
    fetch(`https://api.consumet.org/anime/gogoanime/watch/${name}`)
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();})
    .then(data => {
        document.getElementById("player").src = data.headers.Referer;
    })
}
}

function render(x){
    var x = x;
    document.getElementById("amain").innerHTML = x;
    fetch(`https://api.consumet.org/anime/gogoanime/watch/${x}`)
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();})
        .then(data => {
            // console.log(data);
            document.getElementById("player").src = data.headers.Referer;
            
    })
}
