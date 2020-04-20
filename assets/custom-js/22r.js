var last = 0
function changeImg(f) {
	var src = "http://isaacdozier.com/assets/custom-img/" + f + '.png';
	 document.getElementById("content").src = src;
	 document.getElementById("content").scrollIntoView()
	 document.getElementById(f).style.background-color = "red";
	 document.getElementById(last).style.background-color = "";
	 last = f
}

function changeVideoTimestamp(f) {
	var src = "https://youtu.be/9omRz4x0oHI?t=" + f;
	document.getElementById("video").src = src;
	document.getElementById("video").scrollIntoView()
}