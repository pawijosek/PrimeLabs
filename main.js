const menuButton = document.querySelector('.burger__btn')
const navLinks = document.querySelector('.nav__links')
const navItems = document.querySelectorAll('.nav__links a')

menuButton.addEventListener('click', () => {
	navLinks.classList.toggle('active')
})
navItems.forEach(item => {
	item.addEventListener('click', () => {
		navLinks.classList.remove('active')
	})
})

const items = document.querySelectorAll('.product__info')

items.forEach(item => {
	const btn = item.querySelector('.product__toggle')
	const content = item.querySelector('.product__content')

	btn.addEventListener('click', () => {
		if (item.classList.contains('active')) {
			content.style.maxHeight = null
			item.classList.remove('active')
		} else {
			content.style.maxHeight = content.scrollHeight + 'px'
			item.classList.add('active')
		}
	})
})
