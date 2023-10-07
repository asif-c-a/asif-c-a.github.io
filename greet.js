var d = new Date();
let hour = d.getHours();

if (hour < 12)
{
	document.getElementById("greeting").innerHTML = "GOOD MORNING";
}else if (hour > 12 && hour < 18) {
	document.getElementById("greeting").innerHTML = "GOOD AFTERNOON";
}else{
	document.getElementById("greeting").innerHTML = "GOOD EVENING";
}
