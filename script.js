
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
	const htmlSvg = '<svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 512.00 512.00" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#000000" stroke-width="0.00512" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>';
	const cssSvg = '<svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b001a2b"> <path display="inline" d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492 V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308 V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034 c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9 l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574 l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542 l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26 l0.26-0.112l109.086-46.639L369.477,176.444z"> </path> </g> </g></svg>';
	const jsSvg = '<svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>javascript</title> <path d="M17.313 14.789h-2.809c0 2.422-0.011 4.829-0.011 7.254 0.033 0.329 0.051 0.712 0.051 1.099 0 0.81-0.081 1.601-0.236 2.365l0.013-0.076c-0.412 0.861-1.475 0.751-1.957 0.6-0.451-0.242-0.808-0.609-1.031-1.055l-0.006-0.014c-0.044-0.094-0.097-0.174-0.16-0.246l0.001 0.001-2.281 1.406c0.367 0.79 0.934 1.434 1.637 1.885l0.018 0.011c0.763 0.427 1.675 0.678 2.645 0.678 0.484 0 0.954-0.063 1.401-0.18l-0.038 0.009c0.988-0.248 1.793-0.89 2.254-1.744l0.009-0.019c0.359-0.914 0.566-1.973 0.566-3.080 0-0.388-0.026-0.77-0.075-1.145l0.005 0.044c0.015-2.567 0-5.135 0-7.722zM28.539 23.843c-0.219-1.368-1.11-2.518-3.753-3.59-0.92-0.431-1.942-0.731-2.246-1.425-0.063-0.158-0.099-0.341-0.099-0.532 0-0.124 0.015-0.244 0.044-0.359l-0.002 0.010c0.208-0.55 0.731-0.935 1.343-0.935 0.199 0 0.388 0.040 0.559 0.113l-0.009-0.004c0.552 0.19 0.988 0.594 1.215 1.112l0.005 0.013c1.292-0.845 1.292-0.845 2.193-1.406-0.216-0.369-0.459-0.689-0.734-0.977l0.002 0.002c-0.767-0.814-1.852-1.32-3.056-1.32-0.171 0-0.34 0.010-0.505 0.030l0.020-0.002-0.881 0.111c-0.856 0.194-1.587 0.639-2.133 1.252l-0.003 0.004c-0.535 0.665-0.859 1.519-0.859 2.449 0 1.279 0.613 2.415 1.56 3.131l0.010 0.007c1.706 1.275 4.2 1.555 4.519 2.755 0.3 1.462-1.087 1.931-2.457 1.762-0.957-0.218-1.741-0.83-2.184-1.652l-0.009-0.017-2.287 1.313c0.269 0.536 0.607 0.994 1.011 1.385l0.001 0.001c2.174 2.194 7.61 2.082 8.586-1.255 0.113-0.364 0.178-0.782 0.178-1.215 0-0.3-0.031-0.593-0.091-0.875l0.005 0.028zM1.004 1.004h29.991v29.991h-29.991z"></path> </g></svg>';
	const godotSvg = '<svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.745 0.917c-1.458 0.328-2.906 0.781-4.266 1.464 0.031 1.198 0.109 2.344 0.266 3.505-0.526 0.339-1.078 0.63-1.568 1.026-0.5 0.38-1.010 0.75-1.464 1.198-0.906-0.594-1.859-1.156-2.849-1.651-1.063 1.141-2.052 2.375-2.865 3.755 0.609 0.99 1.25 1.911 1.938 2.792h0.016v8.474c0.016 0 0.031 0 0.047 0.005l5.198 0.5c0.271 0.026 0.484 0.245 0.5 0.521l0.161 2.292 4.531 0.323 0.313-2.115c0.042-0.276 0.276-0.479 0.552-0.479h5.484c0.276 0 0.51 0.203 0.552 0.479l0.313 2.115 4.531-0.323 0.161-2.292c0.016-0.276 0.229-0.495 0.505-0.521l5.193-0.5c0.016 0 0.031-0.005 0.047-0.005v-8.474h0.021c0.688-0.875 1.323-1.802 1.932-2.792-0.807-1.38-1.802-2.615-2.865-3.755-0.984 0.495-1.943 1.057-2.849 1.651-0.453-0.448-0.958-0.818-1.458-1.198-0.495-0.396-1.047-0.688-1.573-1.026 0.156-1.161 0.234-2.307 0.266-3.505-1.354-0.682-2.802-1.135-4.266-1.464-0.583 0.984-1.115 2.047-1.578 3.083-0.552-0.089-1.109-0.125-1.661-0.13h-0.026c-0.552 0.005-1.109 0.042-1.661 0.13-0.464-1.036-0.995-2.099-1.583-3.083zM8.635 13.323c1.729 0 3.13 1.406 3.13 3.135s-1.401 3.13-3.13 3.13c-1.729 0-3.13-1.401-3.13-3.13s1.401-3.135 3.13-3.135zM23.365 13.323c1.729 0 3.13 1.406 3.13 3.135s-1.401 3.13-3.13 3.13c-1.729 0-3.13-1.401-3.13-3.13s1.401-3.135 3.13-3.135zM8.932 14.568c-1.146 0-2.078 0.927-2.078 2.078 0 1.146 0.932 2.073 2.078 2.073 1.151 0 2.083-0.927 2.083-2.073 0-1.151-0.932-2.078-2.083-2.078zM23.063 14.568c-1.146 0-2.078 0.927-2.078 2.078 0 1.146 0.932 2.073 2.078 2.073 1.151 0 2.078-0.927 2.078-2.073 0-1.151-0.927-2.078-2.078-2.078zM16 15.172c0.557 0 1.010 0.406 1.010 0.911v2.885c0 0.505-0.453 0.917-1.010 0.917s-1.010-0.411-1.010-0.917v-2.885c0-0.505 0.453-0.911 1.010-0.911zM1.948 22.599c0 0.505 0.005 1.052 0.005 1.161 0 4.938 6.26 7.307 14.036 7.333h0.021c7.776-0.026 14.031-2.396 14.031-7.333 0-0.109 0.005-0.656 0.010-1.161l-4.672 0.453-0.161 2.307c-0.021 0.276-0.24 0.5-0.516 0.516l-5.578 0.396c-0.271 0-0.51-0.198-0.552-0.474l-0.318-2.156h-4.516l-0.318 2.156c-0.042 0.286-0.297 0.495-0.594 0.474l-5.531-0.396c-0.276-0.021-0.5-0.24-0.521-0.516l-0.156-2.307-4.672-0.448z"></path> </g></svg>';

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