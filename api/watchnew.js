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
    fetch(
        'https://discord.com/api/webhooks/936152202689540156/FeCdB6LvuyOHzDsLLJgC_UmebZqqotnO1P5izUoz7whjUiOagRxwDHeawkR7jmwYcR6_',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // the username to be displayed
            username: 'ANIME | HEALER-OP',
            // the avatar to be displayed
            avatar_url:
              'https://cdn.discordapp.com/attachments/931899522584551437/936155517678669874/1919d7715d0f029da3198f2dfcf4c7f8.jpg',
            // contents of the message to be sent
            // content:
            // //   'Someone Visited HomePage',
            // enable mentioning of individual users or roles, but not @everyone/@here
            allowed_mentions: {
              parse: ['users', 'roles'],
            },
            // embeds to be sent
            embeds: [
              {
                // decimal number colour of the side of the embed
                color: 15158332,
                // author
                // - icon next to text at top (text is a link)
                author: {
                  name: 'ANIME | CMS HEALER',
                  url: `https://github.com/healer-op/AnimeJs`,
                  icon_url: 'https://cdn.discordapp.com/attachments/931899522584551437/936155517678669874/1919d7715d0f029da3198f2dfcf4c7f8.jpg',
                },
                // embed title
                // - link on 2nd row
                title: 'Someone is Watching',
                url:
                  `${window.location.href}`,
                // thumbnail
                // - small image in top right corner.
                thumbnail: {
                  url:
                    'https://cdn.discordapp.com/attachments/931899522584551437/936155517678669874/1919d7715d0f029da3198f2dfcf4c7f8.jpg',
                },
                // embed description
                // - text on 3rd row
                description: `📺 ${name}`,
                // // custom embed fields: bold title/name, normal content/value below title
                // // - located below description, above image.
                // fields: [
                //   {
                //     name: 'field 1',
                //     value: 'value',
                //   },
                //   {
                //     name: 'field 2',
                //     value: 'other value',
                //   },
                // ],
                // image
                // - picture below description(and fields)
                // image: {
                //   url:
                //     'http://tolkiengateway.net/w/images/thumb/7/75/J.R.R._Tolkien_-_Ring_verse.jpg/300px-J.R.R._Tolkien_-_Ring_verse.jpg',
                // },
                // footer
                // - icon next to text at bottom
                footer: {
                  text: 'ANIME | HEALER',
                  icon_url:
                    'https://cdn.discordapp.com/attachments/931899522584551437/936155517678669874/1919d7715d0f029da3198f2dfcf4c7f8.jpg',
                },
              },
            ],
          }),
        }
      );
    
            
})

if(name){
    let pos = name.search("episode");
if(pos==-1){
    name = name + "-episode-1"
    // console.log(name);
    document.getElementById("amain").innerHTML = name;
    
    fetch(`https://gogoanime.herokuapp.com/vidcdn/watch/${name}`)
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();})
    .then(data => {;
      // document.getElementById("player").src = data.referer;
      player = new Playerjs({id:"player", autoplay:"1", file:data.referer});;
})
}
}

// if(name){
//     let pos = name.search("episode");
// if(pos){
//     document.getElementById("amain").innerHTML = name;
//     fetch(`https://gogoanime.herokuapp.com/vidcdn/watch/${name}`)
//     .then(response =>{
//         if(!response.ok){
//             throw Error("ERROR");
//         }
//         return response.json();})
//     .then(data => {
//       player = new Playerjs({id:"player", autoplay:"1", file:data.referer});;
//     })
// }
// }

function render(x){
    var x = x;
    document.getElementById("amain").innerHTML = x;
    fetch(`https://gogoanime.herokuapp.com/vidcdn/watch/${x}`)
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();})
        .then(data => {
            // console.log(data);
            // document.getElementById("player").src = data.referer;
            player = new Playerjs({id:"player", autoplay:"1", file:data.referer});;
            
    })
}