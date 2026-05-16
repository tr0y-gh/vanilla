import t from './i18n.js'

export default {
  name: 'NotFound',
  render () {
    return `
      <h1>${t.NotFound.title[t.lang]}</h1>
      ${t.NotFound.content[t.lang].map(p => `<p>${p}</p>`).join('')}
    `
  }
}
