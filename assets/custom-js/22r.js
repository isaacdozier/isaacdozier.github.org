var last = 0
function changeImg(f) {
	var src = "/assets/custom-img/" + f + '.png';
	var srcReal = "/assets/custom-img/real/" + f + '.jpg';
	 document.getElementById("img").src = src;
	 document.getElementById("img-link").href = src;
	 document.getElementById("img-real").src = srcReal;
	 document.getElementById("img-real-link").src = srcReal;
	 document.getElementById(f).style.backgroundColor = "red";
	 document.getElementById(last).style.backgroundColor = "";
	 last = f

	 //document.getElementsById("content").scrollIntoView()
}