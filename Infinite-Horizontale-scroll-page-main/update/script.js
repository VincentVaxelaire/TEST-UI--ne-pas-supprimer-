const indexContainer = document.getElementById('indexContainer')
const viewArray = document.querySelectorAll('.view')
let previousView = document.querySelector('[data-active="previousActive"]')
let activeView = document.querySelector('[data-active="active"]')
let nextView = document.querySelector('[data-active="nextActive"]')
const goto = window.innerWidth

const update = ()=> {
  previousView = document.querySelector('[data-active="previousActive"]')
  activeView = document.querySelector('[data-active="active"]')
  nextView = document.querySelector('[data-active="nextActive"]')
  indexContainer.scrollTo(0, goto)
}

document.addEventListener('DOMContentLoaded', ()=> {
  update()
})

window.addEventListener('wheel', (event)=> {
  const {scrollTop} = indexContainer
  if (event.deltaY < 0) {
    console.log('scrolling up')
    if (scrollTop < goto / 100) {
      nextView.setAttribute("data-active", "hidden")
      if (previousView.previousElementSibling == null) {
        viewArray[viewArray.length - 1].setAttribute("data-active", "previousActive")
      } else {
        previousView.previousElementSibling.setAttribute("data-active", "previousActive")
      }
      previousView.setAttribute("data-active", "active")
      activeView.setAttribute("data-active", "nextActive")
      update()
    }
  } else if (event.deltaY > 0) {
    console.log('scrolling down')
    if (scrollTop > (goto * 2) - (goto / 100)) {
      previousView.setAttribute("data-active", "hidden")
      if (nextView.nextElementSibling == null) {
        viewArray[0].setAttribute("data-active", "nextActive")
      } else {
        nextView.nextElementSibling.setAttribute("data-active", "nextActive")
      }
      nextView.setAttribute("data-active", "active")
      activeView.setAttribute("data-active", "previousActive")
      update()
    }
  }
})
