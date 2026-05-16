import t from './src/i18n.js'
import Home from './src/Home.js'
import About from './src/About.js'
import NotFound from './src/NotFound.js'


const $ = (...selectors) => document.querySelector(...selectors)
const $$ = (...selectors) => document.querySelectorAll(...selectors)

const routes = {
  '/vanilla/': Home,
  '/vanilla/about': About,
  '/vanilla/404': NotFound,
}
if (location.pathname === '/') {
  history.replaceState({}, undefined, '/vanilla/')
}

function update () {
  const { pathname } = window.location
  const route = routes[pathname] || routes['404']
  console.log(route.name)

  const title = [
    t[route.name].title[t.lang],
    pathname !== '/' && t.title[t.lang],
  ].filter(i => i)
  $('title').innerHTML = title.join(' | ')

  $('#main').innerHTML = route.render()
}
function updateLanguage (e) {
  // TODO
  // - translate #skip-link
  // - translate #page-header
  // - translate #page-footer
  const lang = e.target.value
  t.lang = lang
  window.localStorage.setItem('lang', lang)
  update()
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

t.lang = window.localStorage.getItem('lang') || t.lang
$('#lang').onchange = updateLanguage

window.onpopstate = update
window.onload = update
