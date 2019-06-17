const eventKey = { left: 37, up: 38, right: 39, down: 40 }
 
export const HeroNavigation = () => {
  const buttons = document.querySelectorAll('main .details button')
	buttons[0] && buttons[0].focus()
	buttons[0] &&
		buttons[0].addEventListener('keydown', event => {
			switch (event.keyCode) {
				case eventKey.right: 
					buttons[1].focus()
					break
				case eventKey.left:
					sidebarNavigation('HeroNavigation')
					break
				case eventKey.down:
					railNavigation()
					break
				default:
					break
			}
  })
	buttons[0] &&
		buttons[1].addEventListener('keydown', event => {
			switch (event.keyCode) {
				case eventKey.left: 
					buttons[0].focus()
					break
				case eventKey.down:
					railNavigation()
					break
				default:
					break
			}
	})
}

function sidebarNavigation (beforeFunction) {
	console.log(beforeFunction)
	document.querySelector('section .item-menu-0').focus()
  const items = document.querySelectorAll('section button')

	items.forEach(item => {
		item.addEventListener('keydown', event => {
			const key = item.getAttribute('data-key')
			switch (event.keyCode) {
				case eventKey.down:
					const nextEvent = document.querySelector(`section .item-menu-${parseInt(key) + 1}`)
					nextEvent && nextEvent.focus()
					break
				case eventKey.up:
					const prevEvent = document.querySelector(`section .item-menu-${parseInt(key) - 1}`)
					prevEvent && prevEvent.focus()
					break
				case eventKey.right:
					console.log(beforeFunction)
					if(beforeFunction === 'railNavigation'){
						railNavigation()
					}
					if(beforeFunction === 'HeroNavigation'){
						HeroNavigation()
					}
					break
				default:
					break
			}
		})
	})
}

const railNavigation = () => {
  const items = document.querySelectorAll('main .rail ul li button')
	document.querySelector(`.rail-0`).focus()

	items.forEach(item => {
		item.addEventListener('keydown', event => {
			const key = item.getAttribute('data-key')

			switch (event.keyCode) {
				case eventKey.right:
					const nextEvent = document.querySelector(`.rail-${parseInt(key) + 1}`)
					nextEvent && nextEvent.focus()
					break
				case eventKey.left:
					if (parseInt(key) === 0) {
						sidebarNavigation('railNavigation')
					}
					const prevEvent = document.querySelector(`.rail-${parseInt(key) - 1}`)
					prevEvent && prevEvent.focus()
					break
				case eventKey.up:
					break
				default:
					break
			}
		})
	})
}


window.onload = function() {
	HeroNavigation();
};