import t from './i18n.js'

export default {
  name: 'Home',
  render () {
    return `
      <h1>${t.Home.title[t.lang]}</h1>
      ${t.Home.content[t.lang].map(p => `<p>${p}</p>`).join('')}
    `
  }
}
