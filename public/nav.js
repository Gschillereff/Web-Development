//This page allows for navagation

//Functions to pages
function about()
{
	window.location.replace("/");
}

function skills()
{
	window.location.replace("/skills");
}

function contact()
{
	window.location.replace("/contact");
}

function thanks()
{
	window.location.replace("/thanks");
}

//Event listeners for each button
document.getElementById("homeButton").addEventListener("click", about);
document.getElementById("skillsButton").addEventListener("click", skills);
document.getElementById("contactButton").addEventListener("click", contact);
document.getElementById("thanksButton").addEventListener("click", thanks);