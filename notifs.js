var d = new Date();
let tm = d.getMinutes();
let ts = d.getSeconds();

var notfed = false;
var justBefore = 0;

const tips = ["Joe Mama, not Joe Biden", "Its not a trap. Its a Standoff", "Its one of those kind of nights",
			"Sometime you're gay. Sometimes you're not", "I am Asif", "Now I am become death. Destroyer of Worlds",
			"Did ya watch Oppenheimer?","Watcha know bout rolling down in the Deep?"];

justBefore = tips;

if(justBefore == tips)
{
	var tip = Math.floor(Math.random() * tips.length);
}


while (tm != 0 && ts != 0 && notfed==false) {
	new Notification(tips[tip]);
	notfed = true;
}

if(tm == 30 && notfed == true)
{
	notfed = false;
}
