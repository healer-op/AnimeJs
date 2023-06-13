const params = new URLSearchParams(document.location.search);
var name = params.get("view");
// console.log(name);
fetch(`https://api.consumet.org/movies/flixhq/info?id=${name}`)
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
        return `<a onclick="render('${data.episodes[i].id}','S${data.episodes[i].season}-E${data.episodes[i].number}');">S${data.episodes[i].season}-E${data.episodes[i].number}</a>`;
    }).join('');
    document.querySelector("#epl").insertAdjacentHTML("afterbegin", html);           
})


function render(x,y){
    document.getElementById("amain").innerHTML = y;
    fetch(`https://api.consumet.org/movies/flixhq/watch?episodeId=${x}&mediaId=${name}&server=upcloud`)
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();})
        .then(data => {
            // console.log(data);
            // document.getElementById("player").src = data.referer;
            player = new Playerjs({id:"player", autoplay:"1", file:data.sources[data.sources.length-1].url});;
            
    })
}