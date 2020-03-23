const nav_menu = document.querySelector('.nav-menu')
const nav_items = document.querySelectorAll('.nav-menu li')
const nav_expand = document.querySelector('.nav-expand')

nav_expand.addEventListener('click', () => {
  console.log('nav-li --', nav_items)
  nav_menu.classList.toggle('active')
  nav_expand.classList.toggle('open')
  nav_items.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = ''
    } else {
      item.style.animation = `slideIn .5s ease-in forwards ${0.1 * index + 0.3}s`
    }
  })
})

