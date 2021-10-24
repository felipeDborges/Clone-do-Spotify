const button_open_menu = document.querySelector(".button-open-mobile-menu")
const mobile_menu = document.querySelector(".mobile-menu")
const button_close_menu = document.querySelector(".close-mobile-menu")

button_open_menu.addEventListener("click",function () {
		mobile_menu.classList.add("active")
})

button_close_menu.addEventListener("click",function () {
	mobile_menu.classList.remove("active")
})
