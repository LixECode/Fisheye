    // 1 - FONCTION LINK ENTRE DATA PHOTOGRAPHERS ET FACTORIES
    const getPhotographersData =
        // on créer une fonction
        async function () { // attendre un retour (def)
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


    // 2 - FONCTION LINK ENTRE FACTORIES ET INIT
    // je créé une fonction qui attend le retour de l'init pour afficher les données
    // fonction d'affichage lié à photographers défini dans photographerFactories
    async function displayPhotographersData(photographers) {
        // var qui va dans la div photographer_section
        const photographersSection = document.querySelector(".photographer_section");
        // pour chaque donnée dans photographers on définié un photographer 
        photographers.forEach((photographer) => {
            // var de création de model et le lier au factory de photographers
            const photographerModel = photographerFactory(photographer);
            // variable qui relie l'affichage du factory portrait
            const photographerUserCard = photographerModel.getPhotographerPortrait();
            // appendchild qui affiche les données définies dans getphotographerPortrait dans photographer_section
            photographersSection.appendChild(photographerUserCard);
        });
    };
    // 3 - FONCTION LINK ENTRE INIT ET AFFICHAGE HTML
    //  init est appelé après que toutes les déclarations de variables du package ont évalué leurs initialiseurs, et ceux-ci ne sont évalués qu'après que tous les packages importés ont été initialisés.
    async function init() {
        // Récupère les datas des photographes
        const {
            photographers
        } = await getPhotographersData();
        displayPhotographersData(photographers);
    };

    init();