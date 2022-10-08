// FACTORY PHOTOGRAPHERS
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

    // LIEN ENTRE PHOTOS ID ET HTML
    const picture = `assets/photographers/${portrait}`;

    function getPhotographerPortrait() {
        const photographerPortrait = document.createElement("article");
        photographerPortrait.innerHTML =
            `
        <a href="photographer.html?id=${id}"><img class="img-portrait" src="${picture}" alt ="${name}" title = "picture of" + "${name}">
        <h2 class="name-portrait">${name}</h2></a>
        <p class="city-portrait">${city}, ${country}</p>
        <p class="tagline-portrait">${tagline}</p>
        <p class="price-portrait">${price}€/jour</p>
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
//         const article = document.createElement('article');
//         const img = document.createElement('img');
//         img.setAttribute("src", picture)
//         const h2 = document.createElement('h2');
//         h2.textContent = name;
//         article.appendChild(img);
//         article.appendChild(h2);
//         return (article);
//     }
//     return {
//         name,
//         picture,
//         getUserCardDOM
//     }
// }