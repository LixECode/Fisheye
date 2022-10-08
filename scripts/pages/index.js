    // FONCTION LINK ENTRE DATA PHOTOGRAPHERS ET FACTORIES
    const getPhotographersData =
        // on créer une fonction
        async function () {
            try {
                // on ajoute une asynchrone function pour lui ajouter une promesse
                await fetch("/data/photographersData.json")
                    // si la variable response renvoie au data json
                    .then(
                        function (response) {
                            return response.json();
                        }
                    )
                    .then(function (data) {
                        photographers = data.photographers
                    })
                console.log(photographers);
                return {
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

    // on fait le return de la valeur de la fonction  car une fonction doit toujours retourner qq chose
    // si on fait pas un return, la fonction se lance en continue et ça bug tout

    // AUTRES TEST FETCH
    // await pour attendre l'analyse totale des data avant d'envoyer > parser les données / attendre conversion du json en objet
    // let data = await fetch("/data/photographersData.json")
    //     .then(
    //         // ici on retourne une promesse en json
    //         function (response) {
    //             return response.json();
    //         }
    //     )
    //     .then(
    //         function (data) {
    // photographers = [{
    //         "name": "Ma data test",
    //         "id": 1,
    //         "city": "Paris",
    //         "country": "France",
    //         "tagline": "Ceci est ma data test",
    //         "price": 400,
    //         "portrait": "account.png"
    //     },
    //     {
    //         "name": "Autre data test",
    //         "id": 2,
    //         "city": "Londres",
    //         "country": "UK",
    //         "tagline": "Ceci est ma data test 2",
    //         "price": 500,
    //         "portrait": "account.png"
    //     },
    // ]
    //             }
    //         )

    //     // et bien retourner le tableau photographers seulement une fois
    //     return ({
    //         photographers: [...photographers, ...photographers, ...photographers]
    //     })
    // }


    // FONCTION LINK ENTRE FACTORIES ET LE HTML

    async function displayPhotographersData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const photographerUserCard = photographerModel.getPhotographerPortrait();
            photographersSection.appendChild(photographerUserCard);
        });
    };
    // RECUPERE LES DONNEES ET LES AFFICHE VIA FACTORY
    async function init() {
        // Récupère les datas des photographes
        const {
            photographers
        } = await getPhotographersData();
        displayPhotographersData(photographers);
    };

    init();