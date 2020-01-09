//Refernce https://www.w3schools.com/jsref/met_win_open.asp

//Function for cat button
function cat()
{
	window.open("https://www.google.com/search?q=cats&rlz=1C1CHBF_enUS838US838&sxsrf=ACYBGNSDSnrsWVvodWR_TJQ02DexXNlL5Q:1574563463892&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj27cP_6YHmAhVTMn0KHT3SCtgQ_AUoAXoECBgQAw&biw=1707&bih=803&dpr=1.13");
}
document.getElementById("catButton").addEventListener("click", cat);
