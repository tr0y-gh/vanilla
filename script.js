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


function init () {
  // i18n
  const lang = window.localStorage.getItem('lang') || t.lang
  t.lang = lang
  document.querySelector('#lang').value = t.lang
  document.querySelector('#lang').onchange = updateLanguage

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
  window.onload = router.update
}
init()
