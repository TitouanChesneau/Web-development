var lat = 48.852969;
var lon = 2.349903;
var macarte = null;

var villes = {
	"Paris": { "lat": 48.852969, "lon": 2.349903 },
	"Brest": { "lat": 48.383, "lon": -4.500 },
	"Quimper": { "lat": 48.000, "lon": -4.100 },
	"Bayonne": { "lat": 43.500, "lon": -1.467 },
    "londres": { "lat": 51.5072, "lon": -0.1275 },
    "KB-Voltaire VJN crÊpes": {"lat": 48.8155, "lon": 2.3630}
};

function initMap() {
    macarte = L.map('map').setView([lat, lon], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    for (ville in villes) {
        var marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte);
        marker.bindPopup(ville);
    } 
}

function get_donner_sign_in_page(nom_dirigeant, immatriculation_entreprise, mail, nom_entreprise) {
    if (nom_dirigeant == "" || immatriculation_entreprise == "" || mail == "" || nom_entreprise == "")
    {
        alert("Il faut remplir toutes les cases");
    }
    else
    {
        alert("Votre demande à été enregistrée, elle sera vérifiée par notre équipe.")
    }
}

function get_donner_affiliate_form(name_entreprise) {
    if (name_entreprise == "")
    {
        alert("Il faut remplir toutes les cases");
    }
    else
    {
        alert("Votre demande à été enregistrée, elle sera vérifiée par notre équipe.")
    }
}