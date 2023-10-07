var d = new Date();
let hour = d.getHours();

if (hour < 12)
{
	document.getElementById("greeting").innerHTML = "GOOD MORNING";
}else if (hour > 12 && hour < 18) {
	document.getElementById("greeting").innerHTML = "GOOD AFTERNOON";
}else if (hour > 18 && hour < 24) {
	document.getElementById("greeting").innerHTML = "GOOD EVENING";
}else{
	document.getElementById("greeting").innerHTML = "DUDE! WHAT ARE YOU DOING?!";
}