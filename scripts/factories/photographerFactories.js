//----------INDEX

// 1 - FACTORY JSON PHOTOGRAPHERS 
function photographerFactory(data) {
    const {
        name,
        id,
        city,
        country,
        tagline,
        price,
        portrait
    } = data;

    // 2 - FACTORY PORTRAIT 
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const photographerPortrait = document.createElement("article");
        photographerPortrait.innerHTML =
            `
        <a href="photographer.html?id=${id}"><img class="portrait-img" src="${picture}" alt ="${name}" title = "picture of" + "${name}">
        <h2 class="portrait-name">${name}</h2></a>
        <p class="portrait-city">${city}, ${country}</p>
        <p class="portrait-tagline">${tagline}</p>
        <p class="portrait-price">${price}€/jour</p>
        `
        // display the new article balise created
        return (photographerPortrait);
    }

    //----------PAGE PHOTOGRAPHER

    // // FACTORY PORTRAIT SUBLINES PHOTOGRAPHER

    // get media data from photographers.json with portrait sublines photographer on Index page in html
    function getPhotographerHeader() {
        // search in html the class for creating new div inside in html
        const photographerHeader = document.querySelector('.photographer-header')
        // create a div balise in html
        const photographerHeaderContainer = document.createElement('div')
        // add a id class to the div
        photographerHeaderContainer.classList.add('photographer-header-container')
        // create the html in div balise with id variable of media data from photographers.json
        photographerHeaderContainer.innerHTML =
            `
    <div class="photographer-header-container-portrait">
    <h2 class="portrait-name">${name}</h2>
    <p class="portrait-city">${city}, ${country}</p>
    <p class="portrait-tagline">${tagline}</p>
    </div>
    <button class="contact-button" onclick="displayModal()">Contactez-moi</button>
    <img class="portrait-img" src="${picture}" alt="${id}" title="picture of" + "${id}">
        `
        return (photographerHeaderContainer)
    }
    // display the new div balise created with variables tags inside
    return {
        name,
        id,
        city,
        country,
        tagline,
        price,
        portrait,
        picture,
        getUserCardDOM,
        getPhotographerHeader
    }
};

//------------------------------------------------

// 2 - FACTORY JSON MEDIA
// link with photographer data from photographer.json
function mediaFactory(data) {
    const {
        photographerId,
        title,
        image,
        likes,
        video,
    } = data;

    // links medias in files project
    const Image = `<img src="./assets/images/${photographerId}/${image}"/>`;
    const Video = `<video><source src="./assets/images/${photographerId}/${video}#t=5.0" type="video/mp4"></video>`;
    // create a variable for choosing to display video or image
    let mediaStyle
    // si image = false on va chercher la vidéo sinon on affiche l'id image
    if (!image) {
        mediaStyle = Video
    } else {
        mediaStyle = Image
    }

    function getMediaFactory() {
        const photographerMedias = document.querySelector(".photographer-medias-container")
        // create a new article balise in html
        const photographerMediasArticle = document.createElement('article')
        // add a class id to the article
        photographerMediasArticle.classList.add('photographer-article')
        photographerMediasArticle.innerHTML +=
            `
          ${mediaStyle}
          <div class="photographer-article-text">
            <h3>${title}</h3>
            <ul class="photographer-article-like-counter">
            <li>${likes}</li>
            </ul>
            <ul class="photographer-article-like-icon">
            <li><i class="fa-regular fa-heart"></i></i></li>
            <li><i class="fa-solid fa-heart"></i></li>
            </ul>
          </div>
    `
        // display new html for checking if $media is video or image
        return (photographerMediasArticle)
    }
    // display all new html creating
    return {
        photographerId,
        title,
        image,
        likes,
        video,
        getMediaFactory
    }
};