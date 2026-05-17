import t from './src/i18n.js'
import router from './src/router.js'

function updateLanguage (e) {
  // TODO
  // - translate #skip-link
  // - translate #page-header
  // - translate #page-footer
  const lang = e.target.value
  t.lang = lang
  window.localStorage.setItem('lang', lang)
  router.update()
}

function updateTheme (theme) {
  document.querySelector('#theme').value = theme
  document.querySelector('body').className = theme
  window.localStorage.setItem('theme', theme)
}


function init () {
  // i18n
  const lang = window.localStorage.getItem('lang') || t.lang
  t.lang = lang
  document.querySelector('#lang').value = t.lang
  document.querySelector('#lang').onchange = updateLanguage

  // theme
  let theme = null
  // check OS and browser preferences
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark'
  if (window.matchMedia('(prefers-color-scheme: light)').matches) theme = 'light'
  // then override with site settings
  theme = window.localStorage.getItem('theme') || theme
  updateTheme(theme)
  document.querySelector('#theme').onchange = e => updateTheme(e.target.value)

  // router
  const links = document.querySelectorAll('a[href]')
  for (let link of links) {
    const href = link.getAttribute('href')
    if (href.startsWith('/')) {
      // only nagivate on internal links
      link.addEventListener('click', router.navigate)
    }
  }

  window.onpopstate = router.update
  router.update()
}
window.onload = init
