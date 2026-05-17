import t from './i18n.js'
import Home from './Home.js'
import Styleguide from './Styleguide.js'
import NotFound from './NotFound.js'

const routes = {
  '/': Home,
  '/styleguide': Styleguide,
  '/404': NotFound,
}

function update () {
  const { pathname } = window.location
  const route = routes[pathname] || routes['404']

  const title = [
    t[route.name].title[t.lang],
    pathname !== '/' && t.title[t.lang],
  ].filter(i => i)

  document.querySelector('title').innerHTML = title.join(' | ')
  document.querySelector('#main').innerHTML = route.render()
}

function navigate (e) {
  const { href } = e.target
  e.preventDefault()
  history.pushState({}, undefined, href)
  update()
}

export default {
  update,
  navigate,
  routes,
}
