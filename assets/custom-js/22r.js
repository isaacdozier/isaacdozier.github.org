var content = document.getElementById("content");

function loadContent(f, file_type) {
	var client = new XMLHttpRequest();
	client.open('GET', f + '.jpg');
	client.onreadystatechange = function() {
	  content.innerHTML = client.responseText;
	}
	client.send();
}