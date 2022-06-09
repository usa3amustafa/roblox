const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.nav-items')

hamburger.addEventListener('click', () => {
  navbar.classList.add('show-navbar')
})

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

document.body.addEventListener('click', e => {
  if (e.target.classList.contains('hamburger')) {
    navbar.classList.add('show-navbar')
  } else {
    navbar.classList.remove('show-navbar')
  }
})
