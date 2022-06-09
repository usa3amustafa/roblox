const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const navbar = document.querySelector('.nav-items')

// counter
const counters = document.querySelectorAll('.article-two-number')

const speed = 500

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target')
    const count = +counter.innerText

    const inc = target / speed

    if (count < target) {
      counter.innerText = (count + inc).toFixed(3)
      setTimeout(updateCount, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCount()
})

let isOpen = false

document.body.addEventListener('click', e => {
  if (e.target.classList.contains('hamburger') && isOpen === false) {
    navbar.classList.add('show-navbar')
    hamburger.style.display = 'none'
    close.style.display = 'block'
    isOpen = true
  } else if (e.target.classList.contains('close') && isOpen === true) {
    navbar.classList.remove('show-navbar')
    hamburger.style.display = 'block'
    close.style.display = 'none'
    isOpen = false
  } else {
    navbar.classList.remove('show-navbar')
    hamburger.style.display = 'block'
    close.style.display = 'none'
    isOpen = false
  }
})
