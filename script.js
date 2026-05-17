import t from './src/i18n.js'
import { $ } from './src/utils.js'
import router from './src/router.js'

function updateLanguage (e) {
  const lang = e.target.value
  t.lang = lang
  window.localStorage.setItem('lang', lang)

  $.one('#skip-link').textContent = t.skipLink[lang]
  // translate #page-header and #page-footer links
  $.all('.nav a').forEach(a => {
    const { pathname } = new URL(a.href)
    a.textContent = t.nav[pathname][t.lang]
  })
  $.all('#theme option').forEach(el => {
    el.textContent = t[el.value][t.lang]
  })

  router.render()
}

function updateTheme (theme) {
  $.one('#theme').value = theme
  $.one('body').className = theme
  window.localStorage.setItem('theme', theme)
}


function init () {
  router.redirect() // redirect from 404.html

  // i18n
  const lang = window.localStorage.getItem('lang') || t.lang
  t.lang = lang
  $.one('#lang').value = t.lang
  $.all('#theme option').forEach(el => {
    el.innerText = t[el.value][t.lang]
  })
  $.one('#lang').onchange = updateLanguage

  // theme
  let theme = null
  // check OS and browser preferences
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark'
  if (window.matchMedia('(prefers-color-scheme: light)').matches) theme = 'light'
  // then override with site settings
  theme = window.localStorage.getItem('theme') || theme
  updateTheme(theme)
  $.one('#theme').onchange = e => updateTheme(e.target.value)

  // router
  const links = $.all('a[href]')
  for (let link of links) {
    const href = link.getAttribute('href')
    if (href.startsWith('/')) {
      // only nagivate on internal links
      link.addEventListener('click', router.navigate)
    }
  }

  window.onpopstate = router.render
  router.render()
}
window.onload = init
