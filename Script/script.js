function abrirNav(){
    document.getElementById("menuOculto").style.width = "250px";
    document.getElementById("principal").style.marginLeft = "250px";
}

function fecharNav(){
    document.getElementById("menuOculto").style.width = "0";
    document.getElementById("principal").style.marginLeft = "0";
}

const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=1&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'daf71657bbmsh47e362bf47628fap165eb9jsn8700e82c1efc',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch(url, options)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let img = data['tracks']['0']['album']['images']['1']['url'];
        document.getElementById("img-album").setAttribute('src', img);
        document.getElementById("nomeArtista").innerHTML = data['tracks']['0']['artists']['0']['name'];
        document.getElementById("nomeMusica").innerHTML = data['tracks']['0']['name'];


    })
    .catch((erro) => {
        console.log("Erro: " + erro);
    })



