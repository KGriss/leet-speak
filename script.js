document.getElementById("crypt").addEventListener("input", encrypt);
document.getElementById("mode").addEventListener("click", mode);

let cryptMode = 1;

/*let width = getComputedStyle(document.getElementById("crypt"));
console.log(width.height);*/

function mode(e) {
	cryptMode++;
	switch (cryptMode) {
		case 2:
			document.getElementById("mode").textContent = "NORMAL";
			break;
		case 3:
			document.getElementById("mode").textContent = "HARD";
			break;
		case 4:
			cryptMode = 1;
			document.getElementById("mode").textContent = "EASY";
			break;
		default:
			console.log("ERROR : function \"mode\" from #9 to #31");
	}
}

function encrypt(e) {
	let msg = e.target.value;
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz²&é\"'(-è_çà)=^$ù*,;:!°+¨£%µ?./§<>~#{[|`@]}€¤\\êï0123456789";
	let easyLeet = "48CD3FGH1JKLMN0PQRSTUVWXYZ 48cd3fgh1jklmn0pqrstuvwxyz²&é\"'(-è_çà)=^$ù*,;:!°+¨£%µ?./§<>~#{[|`@]}€¤\\êïOI2EA567B9";
	let normalLeet = "48CD3F6H1JKLMN0PQR5TUVWXYZ 48cd3f6h1jklmn0pqr5tuvwxyz²&é\"'(-è_çà)=^$ù*,;:!°+¨£%µ?./§<>~#{[|`@]}€¤\\êïOI2EASG7B9";
	let hardLeet = "48CD3F6H1JKLMN09QR57UVWXY2 48cd3f6h1jklmn09qr57uvwxy2²&é\"'(-è_çà)=^$ù*,;:!°+¨£%µ?./§<>~#{[|`@]}€¤\\êïOIZEASGTBP";
	let code = "";
	
	for (let i=0;i<msg.length;i++) { // Filtrage du message
		for (let key=0;key<chars.length;key++) { // Filtrage de la chaine "chars"
			if (msg[i] === chars[key]) { // Comparaison entre le caractère "i" du message et le caractère "key" de la chaine "chars"
				if (cryptMode === 1) {
					code += easyLeet[key];
					document.getElementById("crypted").textContent = code;
				} else if (cryptMode === 2) {
					code += normalLeet[key];
					document.getElementById("crypted").textContent = code;
				} else if (cryptMode === 3) {
					code += hardLeet[key];
					document.getElementById("crypted").textContent = code;
				}
			}
		}
	}
}