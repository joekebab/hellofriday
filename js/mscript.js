let movies = [
    {
        num: 2,
        name: "La Couleur de La Victoire",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia601405.us.archive.org/11/items/la-couleur-de-la-victoire/__ia_thumb.jpg",
        source: "https://ia601506.us.archive.org/4/items/la-couleur-de-la-victoire_202207/la-couleur-de-la-victoire.mp4",
    },
    {
        num: 3,
        name: "Une Femme Pas Comme Les Autres",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/18/items/une-femme-pas-comme-les-autres/__ia_thumb.jpg",
        source: "https://ia601405.us.archive.org/6/items/femme-pas-comme-les-autres-burkina-faso-fr-sous-titre-anglais/FEMME%20PAS%20COMME%20LES%20AUTRES%20-%20BURKINA%20FASO%20-%20Fr%20sous%20titre%CC%81%20anglais.mp4",
    },
    {
        num: 4,
        name: "Get On Up",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia801505.us.archive.org/3/items/get-on-up_202207/__ia_thumb.jpg",
        source: "https://ia601404.us.archive.org/3/items/regarder-gratuitement-le-film-get-on-up-en-streaming-vf-ou-vostfr/Regarder%20gratuitement%20le%20film%20Get%20On%20Up%20en%20streaming%20VF%20ou%20VOSTFR.mp4",
    },
    {
        num: 9,
        name: "Le Fondateur",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia601405.us.archive.org/26/items/le-fondateur/__ia_thumb.jpg",
        source: "https://ia902504.us.archive.org/32/items/film-le-fondateur-en-streaming/Film%20Le%20Fondateur%20en%20streaming.mp4",
    },
    {
        num: 10,
        name: "Les Guignols d'Abidjan : Gnafou Gnafou",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia801401.us.archive.org/7/items/images_20221009/__ia_thumb.jpg",
        source: "https://ia601508.us.archive.org/7/items/les-guignols-d-abidjan-gnafou-gnafou/Les%20Guignols%20d%27Abidjan%20Gnafou%20Gnafou.mp4",
    },
    {
        num: 11,
        name: "Les Guignols d'Abidjan : La Vengeance A Deux Visages",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia801401.us.archive.org/7/items/images_20221009/__ia_thumb.jpg",
        source: "https://ia802501.us.archive.org/11/items/les-guignols-d-abidjan-la-vengeance-a-deux-visages/Les%20Guignols%20d%27Abidjan%20-%20La%20Vengeance%20a%20deux%20visages.mp4",
    },
    {
        num: 12,
        name: "Soccer Kids",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia601503.us.archive.org/35/items/59395/__ia_thumb.jpg",
        source: "https://ia601505.us.archive.org/16/items/regarder-scc-kd/Regarder%20Scc%20Kd.mp4",
    },
    {
        num: 13,
        name: "Sam le Caïd",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia802505.us.archive.org/13/items/sam-le-caid/__ia_thumb.jpg",
        source: "https://ia801406.us.archive.org/21/items/sam-le-caid-integral-official/Sam%20Le%20Ca%C3%AFd%20%28Integral%20-%20Official%29.mp4",
    },
    {
        num: 14,
        name: "Aya de Yopougon",
        type: "Film",
        category: "Animation",
        thumbnail: "https://ia601508.us.archive.org/0/items/21006442-20130516121958057/__ia_thumb.jpg",
        source: "https://ia801401.us.archive.org/27/items/film-aya-de-yopougon-streaming-vf-complet/Film%20Aya%20de%20Yopougon%20streaming%20vf%20complet.mp4",
    },
    {
        num: 17,
        name: "Silk Road",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia801402.us.archive.org/23/items/silk-road_202207/__ia_thumb.jpg",
        source: "https://ia601402.us.archive.org/29/items/film-silk-road-en-streaming/Film%20Silk%20Road%20en%20streaming.mp4",
    },
    {
        num: 20,
        name: "Proud Mary",
        type: "Film",
        category: "Action",
        thumbnail: "https://ia802500.us.archive.org/6/items/mv-5-byj-y-1-ytc-5-mtyt-nj-m-4-my-00-mdq-3-ltk-4-y-2-et-mjk-2-ogyw-mm-rl-m-2-q-1/__ia_thumb.jpg",
        source: "https://ia801407.us.archive.org/22/items/film-proud-mary-streaming-vf-complet/Film%20Proud%20Mary%20streaming%20vf%20complet.mp4",
    },
    {
        num: 24,
        name: "Menace II Society",
        type: "Film",
        category: "Drame",
        thumbnail: "https://ia802509.us.archive.org/14/items/mv-5-bnge-3-mgi-0-mz-it-nj-jj-nc-00-ztuz-ltlm-ztct-oguy-mdll-mwm-2-otcx-xk-ey-xk/__ia_thumb.jpg",
        source: "https://ia902506.us.archive.org/13/items/regarder-gratuitement-le-film-menace-ii-society-en-streaming-vf-ou-vostfr/Regarder%20gratuitement%20le%20film%20Menace%20II%20Society%20en%20streaming%20VF%20ou%20VOSTFR.mp4",
    },
    {
        num: 25,
        name: "Boyz in the Hood, la loi de la rue",
        type: "Film",
        category: "Drame",
        thumbnail: "https://ia801404.us.archive.org/33/items/mv-5-bzm-rj-ndi-5-ntgt-otiw-mc-00-mz-jh-lwi-4-ztyt-mm-u-0-zte-3-zm-rk-zdnh-xk-ey/__ia_thumb.jpg",
        source: "https://ia601408.us.archive.org/4/items/regarder-gratuitement-le-film-boyz-n-the-hood-la-loi-de-la-rue-en-streaming-vf-ou-vostfr/Regarder%20gratuitement%20le%20film%20Boyz%20n%20the%20Hood%20-%20La%20loi%20de%20la%20rue%20en%20streaming%20VF%20ou%20VOSTFR.mp4",
    },
    {
        num: 28,
        name: "Arrête-moi Si Tu Peux",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia902502.us.archive.org/17/items/b-3-b-13-e-6-a-b-311-4264-8353-76-f-72-e-4-e-5-d-20/__ia_thumb.jpg",
        source: "https://ia802503.us.archive.org/22/items/arretes-moi-si-tu-peux/Arr%C3%AAtes-moi%20si%20tu%20peux.mp4",
    },
    {
        num: 29,
        name: "La Cité de Dieu",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia902507.us.archive.org/20/items/la-cite-de-dieu/__ia_thumb.jpg",
        source: "https://ia601503.us.archive.org/2/items/la-cite-de-dieu-french/La%20Cit%C3%A9%20de%20Dieu%20%28FRENCH%29.mp4",
    },
    {
        num: 30,
        name: "The Losers",
        type: "Film",
        category: "Action",
        thumbnail: "https://ia802504.us.archive.org/27/items/fb80284af87b95751696bd21ba444fbacba247fb14740ede37aa6a3afd433f4f._RI_V_TTW_/__ia_thumb.jpg",
        source: "https://ia902506.us.archive.org/25/items/the-losers-voir-films-streaming-vf-gratuit-complet-hd-film-stoon/The%20Losers%20%C2%BB%20voir%20Films%20Streaming%20VF%20Gratuit%20Complet%20HD%20-%20FilmStoon.mp4",
    },
    {
        num: 32,
        name: "Nina",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia801507.us.archive.org/28/items/150514/__ia_thumb.jpg",
        source: "https://ia902508.us.archive.org/27/items/film-nina-2016-streaming-vf-complet/Film%20Nina%20%282016%29%20streaming%20vf%20complet.mp4",
    },
    {
        num: 33,
        name: "Paid in Full",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia902501.us.archive.org/23/items/Paidinfullposter/__ia_thumb.jpg",
        source: "https://ia601506.us.archive.org/7/items/paid-in-full-french/Paid%20in%20Full%20%28FRENCH%29.mp4",
    },
    {
        num: 34,
        name: "La Peur au Ventre",
        type: "Film",
        category: "Action",
        thumbnail: "https://ia801402.us.archive.org/16/items/la-peur-au-ventre/__ia_thumb.jpg",
        source: "https://ia801407.us.archive.org/12/items/film-la-peur-au-ventre-streaming-vf-complet/Film%20La%20peur%20au%20ventre%20streaming%20vf%20complet.mp4",
    },
    {
        num: 35,
        name: "Eliminators",
        type: "Film",
        category: "Action",
        thumbnail: "https://ia601408.us.archive.org/34/items/234833/__ia_thumb.jpg",
        source: "https://ia802507.us.archive.org/23/items/eliminators-french/Eliminators%20%28FRENCH%29.mp4",
    },
    {
        num: 36,
        name: "Waist Deep, Au Coeur des gangs",
        type: "Film",
        category: "Action",
        thumbnail: "https://ia601508.us.archive.org/21/items/513-uciill-8-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia802501.us.archive.org/19/items/waist-deep-au-coeur-des-gangs-french/Waist%20Deep%20%20Au%20c%C5%93ur%20des%20gangs%20%28FRENCH%29.mp4",
    },
    {
        num: 37,
        name: "La Femme du Pasteur",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia601504.us.archive.org/21/items/lafemmedupaw-0096060-cov-4-2424-newtv/__ia_thumb.jpg",
        source: "https://ia601406.us.archive.org/24/items/f-d-p/f-d-p.mp4",
    },
    {
        num: 39,
        name: "Wild Card",
        type: "Film",
        category: "Action",
        thumbnail: "https://ia902506.us.archive.org/4/items/357850130ae-6831cf-59df-290bf-0b-066c/__ia_thumb.jpg",
        source: "https://ia601503.us.archive.org/18/items/film-wild-card-streaming-vf-filmstoon/Film%20Wild%20Card%20Streaming%20VF%20-%20Filmstoon.mp4",
    },
    {
        num: 42,
        name: "Boiler Room",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia802507.us.archive.org/7/items/41-a-84g-6b-esl/__ia_thumb.jpg",
        source: "https://ia802502.us.archive.org/15/items/boiler-room-french/Boiler%20Room%20%28FRENCH%29.mp4",
    },
    {
        num: 44,
        name: "La Cité des Hommes",
        type: "Film",
        category: "Drame",
        thumbnail: "https://ia601503.us.archive.org/33/items/18953306/__ia_thumb.jpg",
        source: "https://ia902505.us.archive.org/31/items/la-cite-des-hommes-french/La%20Cit%C3%A9%20des%20Hommes%20%28FRENCH%29.mp4",
    },
    {
        num: 45,
        name: "Notorious B.I.G",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia601406.us.archive.org/17/items/1m-39a-9-yd-1-dzite-9-vjx-kki-s-4-gu-h-9/__ia_thumb.jpg",
        source: "https://ia601503.us.archive.org/24/items/regarder-gratuitement-le-film-notorious-b.-i.-g.-en-streaming-vf-ou-vostfr/Regarder%20gratuitement%20le%20film%20Notorious%20B.I.G.%20en%20streaming%20VF%20ou%20VOSTFR.mp4",
    },
    {
        num: 47,
        name: "All Eyez On Me",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia802507.us.archive.org/19/items/alleyezonmey-2017-m-474x-677-pst/__ia_thumb.jpg",
        source: "https://ia802506.us.archive.org/24/items/regarder-gratuitement-le-film-all-eyez-on-me-en-streaming-vf-ou-vostfr/Regarder%20gratuitement%20le%20film%20All%20Eyez%20on%20Me%20en%20streaming%20VF%20ou%20VOSTFR.mp4",
    },
    {
        num: 48,
        name: "Braquage en Or",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia601407.us.archive.org/2/items/4838933_202207/__ia_thumb.jpg",
        source: "https://ia802504.us.archive.org/33/items/film-braquage-en-or-streaming-vf-filmstoon/Film%20Braquage%20en%20or%20Streaming%20VF%20-%20Filmstoon.mp4",
    },
    {
        num: 49,
        name: "Congé de Mariage",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia802503.us.archive.org/14/items/diallo-boubakar-2013-conge-de-mariage-00/__ia_thumb.jpg",
        source: "https://archive.org/download/conge-de-mariage-integral-official/Cong%C3%A9%20de%20mariage%20%28Integral%20-%20Official%29.mp4",
    },
    {
        num: 50,
        name: "Passagers Clandestins",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia801503.us.archive.org/34/items/affich_72148_1/__ia_thumb.jpg",
        source: "https://ia801401.us.archive.org/28/items/passagers-clandestins-french/Passagers%20clandestins%20%28FRENCH%29.mp4",
    },
    {
        num: 51,
        name: "Faut Pas Fâcher : Les Emmerdeurs",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia801409.us.archive.org/7/items/faut-pas-facher/__ia_thumb.jpg",
        source: "https://ia802508.us.archive.org/23/items/film-ivoirien-les-emmerdeurs/Film%20ivoirien%20-%20Les%20Emmerdeurs.mp4",
    },
    {
        num: 52,
        name: "Friday",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia601403.us.archive.org/11/items/4366-aa/__ia_thumb.jpg",
        source: "https://ia902509.us.archive.org/11/items/regarder-gratuitement-le-film-friday-en-streaming-vf-ou-vostfr/Regarder%20gratuitement%20le%20film%20Friday%20en%20streaming%20VF%20ou%20VOSTFR.mp4",
    },
    {
        num: 55,
        name: "The Social Network",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia801502.us.archive.org/18/items/mv-5-boguy-zdux-zj-et-mm-iz-mc-00-mzlm-ltg-4-mgit-zwjm-mz-bh-zj-e-0-mjc-1-xk-ey-/__ia_thumb.jpg",
        source: "https://ia802501.us.archive.org/27/items/film-the-social-network-streaming-vf-complet/Film%20The%20Social%20Network%20streaming%20vf%20complet.mp4",
    },
    {
        num: 56,
        name: "Les Figures de L'Ombre",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia902508.us.archive.org/34/items/573198/__ia_thumb.jpg",
        source: "https://ia601402.us.archive.org/16/items/film-les-figures-de-lombre-streaming-vf-complet/Film%20Les%20Figures%20de%20l%27ombre%20streaming%20vf%20complet.mp4",
    },
    {
        num: 57,
        name: "Loving Pablo",
        type: "Film",
        category: "Biopic",
        thumbnail: "https://ia601508.us.archive.org/0/items/mv-5-bmtaw-odjh-n-2-yt-mz-uw-my-00-zj-i-1-ltll-ngyt-nta-3-ytk-5-mtey-y-2-m-2-xk-/__ia_thumb.jpg",
        source: "https://ia801406.us.archive.org/14/items/voir-film-escobar-streaming-2017-vf-hd-gratuit/Voir%20Film%20Escobar%20Streaming%202017%20VF%20HD%20GRATUIT.mp4",
    },
    {
        num: 58,
        name: "Plombier Malgré Lui, Partie 01",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia601503.us.archive.org/2/items/profile-twitter-400x-400/__ia_thumb.jpg",
        source: "https://ia801403.us.archive.org/20/items/plombier-malgre-lui-partie-01/Plombier%20malgr%C3%A9%20lui%20%28Partie%2001%29.mp4",
    },
    {
        num: 59,
        name: "Plombier Malgré Lui, Partie 02",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia601503.us.archive.org/2/items/profile-twitter-400x-400/__ia_thumb.jpg",
        source: "https://ia601401.us.archive.org/13/items/plombier-malgre-lui-partie-02/Plombier%20malgr%C3%A9%20lui%20%28Partie%2002%29.mp4",
    },
    {
        num: 60,
        name: "Sofia",
        type: "Film",
        category: "Romance",
        thumbnail: "https://ia902504.us.archive.org/12/items/photo-16/__ia_thumb.jpg",
        source: "https://ia801505.us.archive.org/7/items/sofia-integral-official/Sofia%20%28Integral%20-%20Official%29.mp4",
    },
    {
        num: 61,
        name: "Machete",
        type: "Film",
        category: "Action",
        thumbnail: "https://ia601508.us.archive.org/24/items/machete-poster/__ia_thumb.jpg",
        source: "https://ia601406.us.archive.org/4/items/regarder-gratuitement-mcht/Regarder%20gratuitement%20Mcht.mp4",
    },
    {
        num: 62,
        name: "Next Friday",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia601500.us.archive.org/28/items/next-friday_u-L-F4S67W0/__ia_thumb.jpg",
        source: "https://ia601507.us.archive.org/2/items/nx-frdy/Nx%20Frdy.mp4",
    },
    {
        num: 63,
        name: "Friday After Next",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia601400.us.archive.org/32/items/mv-5-byte-2-mm-fm-ztgt-y-2-rh-nc-00-mte-4-lwex-zj-qt-mm-q-4-ndix-ntg-1-yz-i-4-xk/__ia_thumb.jpg",
        source: "https://ia601500.us.archive.org/9/items/regarder-gratuitement-le-film-friday-after-next/Regarder%20gratuitement%20le%20film%20Friday%20After%20Next%20en%20streaming%20VF%20ou%20VOSTFR.mp4",
    },
    {
        num: 64,
        name: "Bal Poussiere",
        type: "Film",
        category: "Comédie",
        thumbnail: "https://ia601502.us.archive.org/34/items/l_bal-poussiere/__ia_thumb.jpg",
        source: "https://ia801501.us.archive.org/30/items/blpssr_dmd/blpssr_dmd.mp4",
    },
];

let ordered_movies = movies.sort(function(a,b){
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
});

let categories = ["Action","Aventure","Biopic","Comédie","Drame","Horreur","Romance"];

for(let i=0;i<categories.length;i++) {
    let filter = document.getElementById("filter");
    let filter_opt = document.createElement("option");

    filter_opt.setAttribute("id", "select-value");

    filter_opt.setAttribute("value", categories[i].toLowerCase());

    filter.setAttribute("onchange", "filterContent()");

    filter_opt.innerHTML = categories[i];

    filter.appendChild(filter_opt);

}

function filterContent() {
    let elements = document.querySelectorAll("#movie-box");
    let value = document.getElementById("filter").value;
    
    elements.forEach((element) => {
        if(value == 'all') {
            element.classList.remove("invisible");
        }
        else {
            if(element.classList.contains(value)) {
                element.classList.remove("invisible");
            }
            else {
              element.classList.add("invisible");
          }
        }
    });
}

const searchContent = () => {
    const searchbox = document.getElementById("search-input").value.toUpperCase();
    const listcontents = document.getElementById("movies");
    const content = document.querySelectorAll("#movie-box");
    const mname = listcontents.getElementsByClassName("movie-title");

    for(var i=0;i<mname.length;i++) {
        let match = content[i].getElementsByClassName("movie-title")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                content[i].style.display = "";
            }else{
                content[i].style.display = "none";
            }
        }
    }

}

window.onload = () => {
    filterContent('all');
    }

for(let i=0;i<ordered_movies.length;i++) {
movies.sort(function(a,b){return a.name-b.name;});
document.querySelector('#movies').innerHTML += `
<div id="movie-box" class="movie-box ${movies[i].category.toLowerCase()} invisible">
   <img src="${movies[i].thumbnail}" alt="" class="movie-box-img">
   <div class="movie-box-overlay">                 
   </div>
   <div class="movie-box-text">
     <div id="btns-group" class="btns-group">
        <button id="btns-group-play${movies[i].num}" class="btns-group-play"><i class="fa fa-play"></i></button>             
     </div>  
     <h2 class="movie-title">${movies[i].name}</h2>
     <span class="movie-category">${movies[i].category}</span>
   </div>
</div>`
}

let video = document.querySelector(".video-container");

for(let i=0;i<movies.length;i++) {

    mbox = "mname" + i;
    window[mbox] = document.querySelector("#btns-group-play"+`${movies[i].num}`);

window[mbox].addEventListener('click', () => {
   document.querySelector(".video-box").innerHTML = `
   <video id="player" controls controlsList="nodownload">
       <source src="${movies[i].source}" type="video/mp4" />
   </video>
   <button id="close"><i class="fa fa-times"></i></button>`
   let player = document.querySelector("#player");
   let closebtn = document.querySelector("#close");
   
   video.classList.add('show');
   player.play();
   
   closebtn.addEventListener('click', () => {
       video.classList.remove('show');
       player.pause();
 });
})
};