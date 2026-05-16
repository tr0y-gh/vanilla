import Home from './src/Home.js'
import About from './src/About.js'
import NotFound from './src/NotFound.js'

const $ = (...selectors) => document.querySelector(...selectors)
const $$ = (...selectors) => document.querySelectorAll(...selectors)

const routes = {
  '/': Home,
  '/about': About,
  '404': NotFound,
}

function update () {
  const { pathname } = window.location
  const route = routes[pathname] || routes['404']
  $('title').innerHTML = `${route.title} | vanilla`
  $('#main').innerHTML = route.render()
}

function navigate (e) {
  const { href } = e.target
  e.preventDefault()
  history.pushState({}, undefined, href)
  update()
}

const links = $$('a[href]')
for (let link of links) {
  const href = link.getAttribute('href')
  if (href.startsWith('/')) {
    // only nagivate on internal links
    link.addEventListener('click', navigate)
  }
}

window.onpopstate = update
window.onload = update
