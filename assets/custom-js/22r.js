function changeImg(f) {
	var src = "http://isaacdozier.com/assets/custom-img/" + f + '.png';
	 document.getElementById("content").src = src;
	 document.getElementById("content").scrollIntoView()
}