function changeLink(link){
	var Link = document.getElementById('userLink').value;
	firstPart = '<iframe width="560" height="315" src="https://www.youtube.com/embed/"';
	secondPart= ' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	var index;
	var need = "";
	for(index = 32; index<Link.length; index++){
		need+=Link[index];
	}
	newLink = firstPart+need+secondPart;
	console.log(Link)
	console.log(newLink)
	document.getElementById('clickme').src = newLink
}