let menu = document.querySelector('.menu')
let close = document.querySelector('.close')
let links = document.querySelector('.links')

menu.addEventListener('click', () => {
    menu.style.visibility = 'hidden',
    close.style.visibility = 'visible',
    links.style.visibility = 'visible'
})

close.addEventListener('click', () => {
  menu.style.visibility = 'visible',
  close.style.visibility = 'hidden',
  links.style.visibility = 'hidden'
})
