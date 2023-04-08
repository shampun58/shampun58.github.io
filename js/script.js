//Header плашка
/*
const headerElem = document.querySelector(".header");

const callback = function (entries, observer) {
	if (entries[0].isInteresting) {
		headerElem.classList.remove('scroll')
	} else {
		headerElem.classList.add("scroll")
	}
};

const headerObserver = new IntersectionObserver(callback)
headerObserver.observe(headerElem)
*/

//========================УБИРАЕМ=PLACEHOLDER=У=INPUT========================================================================================================================
const inputs = document.getElementsByName("input");
if (inputs.length > 0) {
	for (let index = 0; index < inputs.length; index++) {
		const element = inputs[index];
		let inputPlaceholder = element.placeholder;
		element.addEventListener("focusin", function (e) {
			element.classList.add("active")
			element.placeholder = '';
		})
		element.addEventListener("focusout", function (e) {
			element.classList.remove("active")
			element.placeholder = inputPlaceholder;
		})
	}
}
//=============================HEADER==============================================================================================================================================
//===========СКРОЛЛИМ ХЕДЕР====================================================================================================================================================================================================================================================================================

window.addEventListener("scroll", function (e) {
	console.log('привет');

	let header = document.querySelector(".header")
	let block = document.querySelector(".page__full-screen")
	let offSet = block.clientHeight;
	let offSetTop = block.getBoundingClientRect().top;
	let cf = 6;
	if (window.pageYOffset > (offSet - offSetTop) / cf) {
		header.classList.add("scroll")
	} else {
		header.classList.remove("scroll")
	}

})

//Бургер 

const burger = document.querySelector(".header__burger");

burger.addEventListener("click", function (e) {
	document.body.classList.toggle("scroll-lock")
	burger.classList.toggle("active")
	document.querySelector(".header__menu").classList.toggle("active")
})



//=======================открытие менюшки========================================================================================================================================================================================================================================================================


const dropLink = document.querySelector("#drop-link");


if (dropLink) {
	dropLink.addEventListener("click", function (e) {
		document.querySelector(".form-booking__drop-menu").classList.add("active")
		document.querySelector(".form-booking__arrow").classList.add("active")
	})
}
const dropMenuItems = document.querySelectorAll(".form-booking__item");
if (dropMenuItems.length > 0) {

	dropMenuItems.forEach((item) => {
		item.addEventListener("click", function (e) {
			dropLink.setAttribute("value", e.target.textContent)
			document.querySelector(".form-booking__drop-menu").classList.remove("active")
			document.querySelector(".form-booking__arrow").classList.remove("active")
		})
	})
}

document.addEventListener("click", function (e) {
	if (!e.target.closest(".form-booking__item") && !e.target.closest(".form-booking__drop-menu") && !e.target.closest(".form-booking__input") && !e.target.closest(".form-booking__arrow")) {
		document.querySelector(".form-booking__drop-menu").classList.remove("active")
		document.querySelector(".form-booking__arrow").classList.remove("active")
	}
})


//========================ДЕЛАЕМ ВАЛИДАЦИЮ НА EMAIL (пытаемся)=======================================================================================================================================================================================================================================================================

/*
const submitButtons = document.getElementById("submit");

if (submitButtons.length > 0) {
	var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
	for (let index = 0; index < submitButtons.length; index++) {
		const element = submitButtons[index];
		element.addEventListener("click", function (e) {

			let str = document.getElementById("email")
			if (str.length > 0) {
				str.forEach((item) => {
					is_enougth(item)
				})
				function is_enougth(item) {
					alert(item.match(pattern));
					return item.match(pattern);
				}
			}
		})
	}
}
*/
/*
function checkEmail() {
	var email = document.getElementById('email');
	var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!filter.test(email.value)) {
		alert('Please provide a valid email address');
		email.focus;
		return false;
	}
}
*/
/*
var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";

function isEmailAddress(str) {

	str = "azamsharp@gmail.com";



}
*/