import t from './i18n.js'
import { $ } from './utils.js'
import Home from './routes/Home.js'
import Styleguide from './routes/Styleguide.js'
import NotFound from './routes/NotFound.js'

const routes = {
  '/': Home,
  '/styleguide': Styleguide,
  '/404': NotFound,
}

function navigate (e) {
  const { href } = e.target
  e.preventDefault()
  history.pushState({}, undefined, href)
  render()
}

function redirect () {
  // redirect /path to index.html but keep /path
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
  }
}

function render () {
  const { pathname } = window.location
  const route = routes[pathname] || routes['/404']

  const title = [
    t[route.name].title[t.lang],
    pathname !== '/' && t.title[t.lang],
  ].filter(i => i)

  $.one('title').textContent = title.join(' | ')
  $.one('#main').innerHTML = route.render()
}

export default {
  navigate,
  redirect,
  render,
  routes,
}
