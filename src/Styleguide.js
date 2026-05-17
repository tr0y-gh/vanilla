import t from './i18n.js'

function escapeHTML (str) {
  return str.replace(/[<>]/g, c => ({ '<': '&lt;', '>': '&gt;' }[c]))
}

function content () {
  return t.Styleguide.sections.map(section => {
    return `
    <section>
      <h2>${section.title[t.lang]}</h2>
      <div>${section.content[t.lang].join('')}</div>
      <pre>${section.content[t.lang].map(i => escapeHTML(i)).join('\n')}</pre>
    </section>
    `
  }).join('')
}

export default {
  name: 'Styleguide',
  render () {
    return `
      <h1>${t.Styleguide.title[t.lang]}</h1>
      ${t.Styleguide.content[t.lang].map(p => `<p>${p}</p>`).join('')}
      ${content()}
    `
  }
}
