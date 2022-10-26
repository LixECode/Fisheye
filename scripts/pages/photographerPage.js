//Mettre le code JavaScript lié à la page photographer.html

// 1 - RECUPERATION DE L'ID
//recupération de la chaine de requête liée dans l'url id=
//search permet de récupérer tout ce qu'il y a après ?
const queryStringUrlId = window.location.search;
console.log(queryStringUrlId);
// urlsearchparams.get retourne la première valeur associée au parametre de recherche donné
// operateur new permet de créer une instance d'une certain type d'objet à partir du constructeur qui existe pour celui-ci
// il créé un objet / lie à un autre objet protype / le nouvel objet est .this / si function don't return, c'est this
const urlSearchParams = new URLSearchParams(queryStringUrlId);
console.log(urlSearchParams);
const urlId = urlSearchParams.get("id")
console.log(urlId)

// 2 - CREATION FETCH ASYNC POUR LINK DATA AU JS
const getPhotographerPageData =
    // on créer une fonction
    async function () { // attendre un retour (def)
        try {
            let media = [];
            let photographers = [];
            // on ajoute une asynchrone function pour lui ajouter une promesse
            await fetch("/data/photographersData.json")
                // si la variable response renvoie au data json
                .then(
                    function (response) {
                        return response.json();
                    }
                )
                .then(function (data) {
                    media = data.media
                    photographers = data.photographers
                })
            console.log(media);
            return {
                media,
                photographers
            }
        }
        // en cas d'erreur d'affichage
        catch (err) {
            return {
                data: 'There was an error!'
            }
        }
    };

// 3 - FONCTION LINK ENTRE INIT ET AFFICHAGE HTML
//  init est appelé après que toutes les déclarations de variables du package ont évalué leurs initialiseurs, et ceux-ci ne sont évalués qu'après que tous les packages importés ont été initialisés.
async function init() {
    // Récupère les datas des photographes
    const {
        media,
        photographers
    } = await getPhotographerPageData();
    displayPhotographerPageData(media, photographers);
    // getLikes()
};

init();

// 2 - FONCTION LINK ENTRE FACTORIES ET INIT
// je créé une fonction qui attend le retour de l'init pour afficher les données
// fonction d'affichage lié à photographers défini dans photographerFactories
async function displayPhotographerPageData(media, photographers) {
    // var qui va dans la div photographer_header
    const photographerHeader = document.querySelector(".photographer-header");
    console.log(photographerHeader)

    // 2.1 - DISPLAY PHOTOGRAPHER HEADER FACTORY
    // .find calls a function searching the id linked to our variable Url on top of here
    const photographerId = photographers.find(function (findIdPhotographer) {
        return findIdPhotographer.id == urlId;
    });
    console.log(photographerId)
    // our variable is the id inside the photographerFactory
    const photographerModelHeader = photographerFactory(photographerId);
    // our variable need to .get medias of PortraitPhotographer
    const photographerPortrait = photographerModelHeader.getPhotographerHeader();
    // .appenchild displays all 
    photographerHeader.appendChild(photographerPortrait);

    // FILTER MENU

    //MEDIA CONTAINER
    const photographerMediaArticle = media.filter(function (findMedia) {
        // ici on dit que le retour du photographerID doit être celui du search params id
        return findMedia.photographerId == urlId;
    });
    console.log(photographerMediaArticle)
    const photographersMediaContainer = document.querySelector(".photographer-medias-container")
    // we use for each to display the exact number of media for each ID. no need to create 10 articles balise in html.
    photographerMediaArticle.forEach(function (e) {
        const photographerMediasContainerModel = mediaFactory(e);
        const PhotographerMediaContainerUser = photographerMediasContainerModel.getMediaFactory();
        photographersMediaContainer.appendChild(PhotographerMediaContainerUser);
    });

    // LIKES 
    const likeButton = document.querySelectorAll('.photographer-article-like')
    const heart = document.querySelector('.fa-like')
    const heartSolid = document.querySelector('.fa-solid')
    const likeCounterText = document.querySelector('.photographer-article-like-counter li')
    const totalLikes = document.querySelector('.photographer-nav-like-total')
    likeButton.forEach(function (likeButtonEvent) {
        likeButtonEvent.addEventListener("click", function () {
            photographerMediaArticle.forEach(function (likeCounter) {
                let numero = likeCounter.likes;
                console.log(likeCounter.likes)
                likeCounterText = photographerId.likes



            })
        })
    })

    //NAV CONTAINER

    const photographerNav = document.querySelector('.photographer-nav-container')
    let like = 0;
    // for each media declaring behand, we create a function linking to media from photographers.json
    // and count the total of likes
    media.forEach(function (totalLikes) {
        like += totalLikes.likes;
    })
    console.log(like)
    console.log(photographerNav)

    const photographerNavModel = navFactory({
        price: photographerId.price,
        likes: like
    });
    const photographerNavDisplay = photographerNavModel.getNavFactory();
    photographerNav.appendChild(photographerNavDisplay);
};

//DISPLAY LIKES EVENT
// function getLikes() {

//     console.log(likeButton)
//     //  1 EVENT
//     // likeButton.forEach(function (likeButtonEvent) {
//     //     likeButtonEvent.addEventListener("click", function () {
//     //         likeCounterText = media.likes
//     //         console.log(likeCounterText)
//     //         let likeCounter = parseInt(likeCounterText)
//     //         console.log(likeCounter)
//     //         console.log(typeof likeCounter)
//     //     })
//     // })
// }
// const numero = likeButtonCounter.closest('.photographer-article-text').querySelector('.photographer-article-like-icon li')
// let numeroPlus = parseInt(numero.textContent)
// let totalLikesPlus = parseInt(totalLikes.textContent)
// console.log('teest')
// // si c'est pas cocher (checked = 0)
// // si c'est checked = + 1
// // like ++ ou rien du tout
// if (likeButtonCounter.classList.contains('active')) {
//     numeroPlus--
//     totalLikesPlus--
//     // otherwise, like adds 1
// } else {
//     numeroPlus++
//     totalLikesPlus++
// }
// // declare thant our new vaiable number = text of our cont numero. same for totallikesplus
// numero.textContent = numeroPlus
// totalLikes.textContent = totalLikesPlus
// // add .toggle to play with the active css class and create the click on, click off
// likeButtonCounter.classList.toggle('active')