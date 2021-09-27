document.addEventListener('DOMContentLoaded', () => {
	
	const menuButton = document.querySelector('#header-menu')
	const nav = document.querySelectorAll('nav')
	const menuMenu = document.querySelectorAll('#menu-menu')
	const subMenu = document.querySelectorAll('.sub-menu')
	const menuItemSub = document.querySelectorAll('.sub-menu li')
	const subMenuUl = document.querySelectorAll('.sub-menu > li > ul')
	const subMenuLi = document.querySelectorAll('.sub-menu > li')
	const menuItem = document.querySelectorAll('#menu-menu > li')

	const addSubMenuContainer = (element) => {
		for (let elem of element) {
			for (let elem2 of Array.from(elem.children)) {
				if (elem2.className == 'sub-menu') {
					elem2.parentElement.classList.add('sub-menu-container')
				}
			}
		}
	}	
	addSubMenuContainer(menuItem)
	addSubMenuContainer(subMenuLi)

	const removeActive = (element) => {
		for (let elem of element) {
			elem.classList.remove('_active')
		}
	}
	const removeOpen = (element) => {
		for (let elem of element) {
			elem.classList.remove('_open')
		}
	}
	const toggleActive = (element) => {
		for (let elem of element) {
			elem.classList.toggle('_active')
		}
	}

	menuButton.addEventListener('click', () => {
		toggleActive(nav)
		toggleActive(menuMenu)
		removeActive(subMenu)
		removeOpen(menuItem)
		removeOpen(menuItemSub)
	})

	const subMenuContainerA = document.querySelectorAll('.sub-menu-container > a')
	for (let elem of subMenuContainerA) {
			elem.href = '#'
	}
	
	menuItem.forEach(elem => elem.addEventListener('click', (event) => {
		if (event.target.parentElement.classList.contains('menu-item')) {
			event.target.parentElement.classList.toggle('_open')
			for (let node of event.target.parentElement.children) {
				if (node.classList.contains('sub-menu')) {
					if (!node.classList.contains('_active')) {
						node.classList.add('_active')
					}
					else {
						node.classList.remove('_active')
					}
				}
			}
		}
	}))
})