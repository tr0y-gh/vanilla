import t from './i18n.js'

export default {
  name: 'About',
  render () {
    return `
      <h1>${t.About.title[t.lang]}</h1>
      ${t.About.content[t.lang].map(p => `<p>${p}</p>`).join('')}
    `
  }
}
