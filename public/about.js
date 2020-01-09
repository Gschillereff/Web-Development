//Reference https://www.w3schools.com/w3css/w3css_slideshow.asp

var slideIndex = 0;

//function for carousel of pictures
function carousel()
{
	var i;
	var x = document.getElementsByClassName("slides");
	//Loop for length
	for(i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	slideIndex++;
	//Reset after end
	if(slideIndex > x.length){
		slideIndex = 1;
	}
	x[slideIndex-1].style.display = "block";
	//Hold about 4 seconds
	setTimeout(carousel,4000);
}

carousel();
