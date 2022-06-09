const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.nav-items')
const close = document.querySelector('.close')

hamburger.addEventListener('click', () => {
  navbar.classList.add('show-navbar')
})

close.addEventListener('click', () => {
  navbar.classList.remove('show-navbar')
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
