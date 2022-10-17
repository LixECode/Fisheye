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

    function getPhotographerPortrait() {
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
    return {
        name,
        id,
        city,
        country,
        tagline,
        price,
        portrait,
        picture,
        getPhotographerPortrait
    }
}

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
        const photographerMedias = document.querySelector('photographer-medias')
        // create a new article balise in html
        photographerMedias = document.createElement('article')
        // add a class id to the article
        photographerMedias.classList.add('photographer-article')
        photographerMedias.innerHTML +=
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
        return (photographerMedias)
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