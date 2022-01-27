// DISCORD WEBHOOK

fetch(
    'https://discord.com/api/webhooks/936258607706685500/ZRJa2qn0muGk2BLuZWeutCNosAYHmkFl9VO43J7InvAwC7OIwJ0quYxHTN7ES-blPe9s',
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
            color: 15844367,
            // author
            // - icon next to text at top (text is a link)
            author: {
              name: 'ANIME | CMS HEALER',
              url: `https://github.com/healer-op/AnimeJs`,
              icon_url: 'https://cdn.discordapp.com/attachments/931899522584551437/936155517678669874/1919d7715d0f029da3198f2dfcf4c7f8.jpg',
            },
            // embed title
            // - link on 2nd row
            title: 'NEW HOMEPAGE VISIT',
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
            // description: 'description',
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


// RENDER

fetch('https://gogoanime.herokuapp.com/recent-release')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data);
    const html = data.map((img, i) =>{
        return `
        <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${data[i].animeImg}"  style="background-image: url('${data[i].animeImg}');">
                                        <div class="ep"> Episode - ${data[i].episodeNum}</div>
                                        <div class="comment"><i class="fa fa-comments"></i> ${Math.floor((Math.random() * 9) + 1)}K</div>
                                        <div class="view"><i class="fa fa-eye"></i> ${Math.floor((Math.random() * 999) + 1)}.${Math.floor((Math.random() * 9) + 1)}k</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>${data[i].subOrDub}</li>
                                            <li>Ongoing</li>
                                        </ul>
                                        <h5><a href="watch.html?view=${data[i].episodeId.split("-episode-")[0] }">${data[i].animeTitle}</a></h5>
                                    </div>
                                </div>
                            </div>`;
    }).join('');
    document.querySelector("#recent1").insertAdjacentHTML("afterbegin", html);
})

/////////////////////////////////////////////////// POPULAR ///////////////////////////////

fetch('https://gogoanime.herokuapp.com/popular')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data);
    // var link=data.episodeId;
    const html = data.map((img, i) =>{
        return `
        <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${data[i].animeImg}"  style="background-image: url('${data[i].animeImg}');">
                                        <div class="ep"> ${data[i].releasedDate}</div>
                                        <div class="comment"><i class="fa fa-comments"></i> ${Math.floor((Math.random() * 9) + 1)}K</div>
                                        <div class="view"><i class="fa fa-eye"></i> ${Math.floor((Math.random() * 999) + 1)}.${Math.floor((Math.random() * 9) + 1)}k</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>Popular</li>
                                            <li>Ongoing</li>
                                        </ul>
                                        <h5><a href="watch.html?view=${data[i].animeId}">${data[i].animeTitle}</a></h5>
                                    </div>
                                </div>
                            </div>
       `;
    }).join('');
    document.querySelector("#popular1").insertAdjacentHTML("afterbegin", html);
})


/////////////////////////////////////////////////// Movie ///////////////////////////////

fetch('https://gogoanime.herokuapp.com/anime-movies')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    // console.log(data);
    // var link=data.episodeId;
    const html = data.map((img, i) =>{
        return `
        <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${data[i].animeImg}"  style="background-image: url('${data[i].animeImg}');">
                                        <div class="ep"> ${data[i].releasedDate}</div>
                                        <div class="comment"><i class="fa fa-comments"></i> ${Math.floor((Math.random() * 9) + 1)}K</div>
                                        <div class="view"><i class="fa fa-eye"></i> ${Math.floor((Math.random() * 999) + 1)}.${Math.floor((Math.random() * 9) + 1)}k</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>Popular</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="watch.html?view=${data[i].animeId}">${data[i].animeTitle}</a></h5>
                                    </div>
                                </div>
                            </div>
       `;
    }).join('');
    document.querySelector("#movie1").insertAdjacentHTML("afterbegin", html);
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
