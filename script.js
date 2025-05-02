
window.addEventListener('scroll', 
	function() {
		
		var a = window.scrollY;
		var vh = self.innerHeight;

		const homeIcon = document.querySelector("#home svg");
		const home = document.querySelector('#home');

		const skillIcon = document.querySelector("#skills svg");
		const skill = document.querySelector('#skills');

		const projectIcon = document.querySelector("#projects svg");
		const project = document.querySelector('#projects');

		const certificationIcon = document.querySelector("#certifications svg");
		const certification = document.querySelector('#certifications');

		const contactIcon = document.querySelector("#contact svg");
		const contact = document.querySelector('#contact');

		// if(a>=228&&a<741 || a>=1509&&a<2022 || a>=2934)
		// {
		// 	contactIcon.style.fill = 'white';
		// 	contact.style.color = 'white';

		// }else{
		// 	contactIcon.style.fill = 'black';
		// 	contact.style.color = 'black';
		// }

		// if(a>=285&&a<798 || a>=1566&&a<2079 || a>=2991)
		// {
		// 	certificationIcon.style.fill = 'white';
		// 	certification.style.color = 'white';

		// }else{
		// 	certificationIcon.style.fill = 'black';
		// 	certification.style.color = 'black';
		// }

		// if(a>=342&&a<855 || a>=1623&&a<2136 || a>=3048)
		// {
		// 	projectIcon.style.fill = 'white';
		// 	project.style.color = 'white';

		// }else{
		// 	projectIcon.style.fill = 'black';
		// 	project.style.color = 'black';
		// }
	
		// if(a>=399&&a<912 || a>=1653&&a<2223 || a>=3105)
		// {
		// 	skillIcon.style.fill = 'white';
		// 	skill.style.color = 'white';

		// }else{
		// 	skillIcon.style.fill = 'black';
		// 	skill.style.color = 'black';
		// }

		// if(a>=456&&a<969 || a>=1710&&a<2280 || a>=3162)
		// {
		// 	homeIcon.style.fill = 'white';
		// 	home.style.color = 'white';

		// }else{
		// 	homeIcon.style.fill = 'black';
		// 	home.style.color = 'black';
		// }	

		// Setting current tag to current section
		if (a>=3341)
		{	
			window.history.replaceState({}, null, "#contactsection");

			home.classList.remove("current");
			skill.classList.remove("current");
			project.classList.remove("current");
			certification.classList.remove("current");
			contact.classList.add("current");
		}
		else if (a>=2461) {
			window.history.replaceState({}, null, "#certificationssection");

			home.classList.remove("current");
			skill.classList.remove("current");
			project.classList.remove("current");
			certification.classList.add("current");
			contact.classList.remove("current");
		}
		else if (a>=1881) 
		{
			window.history.replaceState({}, null, "#projectssection");

			home.classList.remove("current");
			skill.classList.remove("current");
			project.classList.add("current");
			certification.classList.remove("current");
			contact.classList.remove("current");	
		}
		else if (a>=1160) 
		{	
			window.history.replaceState({}, null, "#skillssection");

			home.classList.remove("current");
			skill.classList.add("current");
			project.classList.remove("current");
			certification.classList.remove("current");
			contact.classList.remove("current");

			swapSkillIcon();
		}
		else if (a>=0) 
		{
			window.history.replaceState({}, null, "#homesection");

			home.classList.add("current");
			skill.classList.remove("current");
			project.classList.remove("current");
			certification.classList.remove("current");
			contact.classList.remove("current");
		}
	});

var nicon = 0;

function swapSkillIcon() {
	const htmlSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M0-360v-240h52v86h98.67v-86h52v240h-52v-102H52v102H0Zm314 0v-188h-70v-52h192v52h-70v188h-52Zm163.33 0v-204q0-15.67 10.17-25.83Q497.67-600 513.33-600h193.34q15.66 0 25.83 10.17 10.17 10.16 10.17 25.83v204h-52v-188H636v146.67h-52V-548h-54.67v188h-52Zm324 0v-240h52v188H960v52H801.33Z"/></svg>';
	const cssSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M416-360q-15.67 0-25.83-10.17Q380-380.33 380-396v-44h52v28h96v-48.67H416q-15 0-25.5-10.5t-10.5-25.5V-564q0-15.67 10.17-25.83Q400.33-600 416-600h128q15.67 0 25.83 10.17Q580-579.67 580-564v44h-52v-28h-96v48.67h112q15 0 25.5 10.5t10.5 25.5V-396q0 15.67-10.17 25.83Q559.67-360 544-360H416Zm260 0q-15.67 0-25.83-10.17Q640-380.33 640-396v-44h52v28h96v-48.67H676q-15 0-25.5-10.5t-10.5-25.5V-564q0-15.67 10.17-25.83Q660.33-600 676-600h128q15.67 0 25.83 10.17Q840-579.67 840-564v44h-52v-28h-96v48.67h112q15 0 25.5 10.5t10.5 25.5V-396q0 15.67-10.17 25.83Q819.67-360 804-360H676Zm-520 0q-15.67 0-25.83-10.17Q120-380.33 120-396v-168q0-15.67 10.17-25.83Q140.33-600 156-600h128q15.67 0 25.83 10.17Q320-579.67 320-564v44h-52v-28h-96v136h96v-28h52v44q0 15.67-10.17 25.83Q299.67-360 284-360H156Z"/></svg>';
	const jsSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M282.67-360q-18.34 0-30.5-12.17Q240-384.33 240-402.67V-460h52v48h76v-188h52v197.33q0 18.34-12.17 30.5Q395.67-360 377.33-360h-94.66ZM516-360q-15.67 0-25.83-10.17Q480-380.33 480-396v-44h52v28h96v-48.67H516q-15 0-25.5-10.5t-10.5-25.5V-564q0-15.67 10.17-25.83Q500.33-600 516-600h128q15.67 0 25.83 10.17Q680-579.67 680-564v44h-52v-28h-96v48.67h112q15 0 25.5 10.5t10.5 25.5V-396q0 15.67-10.17 25.83Q659.67-360 644-360H516Z"/></svg>';
	const godotSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm2.78-66.67q22.55 0 41.5-11.98Q252.22-250.63 262-271l28-57q13.67-27.67 39-43.17t56-15.5h190q30.67 0 56 16T671-328l28 57q9.78 20.37 28.72 32.35 18.95 11.98 41.45 11.98 33.16 0 57.16-22.5t25-55.83q0-2.33-2.66-22.33l-84-335q-7.67-31-32.27-51t-57.4-20H285q-32.47 0-57.4 19.66-24.93 19.67-32.27 51.34l-84 335q-1.33 4.66-2.66 21.33 0 33.66 24.34 56.5 24.33 22.83 58.77 22.83Zm348.34-300q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm0 160q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm-360.04 63.34q11.59 0 19.09-7.56 7.5-7.55 7.5-19.11v-43.33H410q11.56 0 19.11-7.58 7.56-7.58 7.56-19.17 0-11.59-7.56-19.09-7.55-7.5-19.11-7.5h-43.33V-630q0-11.56-7.58-19.11-7.58-7.56-19.17-7.56-11.59 0-19.09 7.56-7.5 7.55-7.5 19.11v43.33H270q-11.56 0-19.11 7.58-7.56 7.58-7.56 19.17 0 11.59 7.56 19.09 7.55 7.5 19.11 7.5h43.33V-490q0 11.56 7.58 19.11 7.58 7.56 19.17 7.56ZM480-480Z"/></svg>';

	const skillIconConst = document.querySelector('#skills');

	skillIconConst.innerHTML = "";

	if (nicon==0)
	{
		skillIconConst.innerHTML = cssSvg + '<div class="text">Skills</div>';
		nicon = 1;
	}else if (nicon==1) {
		skillIconConst.innerHTML = jsSvg + '<div class="text">Skills</div>';
		nicon = 2;
	}else if (nicon==2) {
		skillIconConst.innerHTML = godotSvg + '<div class="text">Skills</div>';
		nicon = 3;
	}else if (nicon==3) {
		skillIconConst.innerHTML = htmlSvg + '<div class="text">Skills</div>';
		nicon = 0;
	}

	
}