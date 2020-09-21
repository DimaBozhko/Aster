"use strict";

let burgerMenu = document.querySelector(".burger-menu"),
	burgerLine = document.querySelectorAll(".burger-menu__line"),
	nav = document.querySelector(".nav"),
	header = document.querySelector(".header"),
	arrow = document.querySelector(".arrow"),
	catalog = document.querySelector(".catalog"),
	contactBtn = document.querySelector(".contact-form-item__btn");

	
document.addEventListener("click", function(event){
	if (event.target && event.target.classList.contains("burger-menu__line") ||  
		event.target.classList.contains("burger-menu")) {
		burgerLine[0].classList.toggle("open-top");
		burgerLine[0].classList.toggle("close-top");
		burgerLine[2].classList.toggle("open-bottom");
		burgerLine[2].classList.toggle("close-bottom");
		burgerLine[1].classList.toggle("hide");
		nav.classList.toggle("nav--show");
		burgerMenu.classList.toggle("burger-menu--border-hide");
		burgerMenu.classList.toggle("burger-menu--border-show");
		header.classList.toggle("header-bg");
	}
	if (event.target && event.target.classList.contains("arrow") || event.target.classList.contains("line")) {
		catalog.classList.toggle("catalog-show");
		arrow.classList.toggle("arrow--rotate");
	}
	if (event.target && event.target.classList.contains("contact-form-item__btn")) {
		contactBtn.classList.toggle("contact-form-item__btn--send")

	}	
})