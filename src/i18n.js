export default {
  lang: 'en',
  title: { en: 'Vanilla', se: 'Vanilj' },
  Home: {
    title: { en: 'Vanilla', se: 'Vanilj' },
    content: {
      en: [
        'This project is an exercise in minimalist and modern web development.',
        'No dependencies or build steps, just vanilla <code>JavaScript</code>, <code>HTML</code> and <code>CSS</code>.',
        'The source code is available on <a href="https://codeberg.org/tr0y/vanilla">Codeberg</a> and mirrored on <a href="https://github.com/tr0y-gh/vanilla">GitHub</a>.',
      ], 
      se: [
        'Det här projektet är en övning i minimalistisk och modern webbutveckling.',
        'Inga ramverk eller byggsteg, bara enkel <code>JavaScript</code>, <code>HTML</code> och <code>CSS</code>.',
        'Källkoden finns tillgänglig på <a href="https://codeberg.org/tr0y/vanilla">Codeberg</a> och speglas på <a href="https://github.com/tr0y-gh/vanilla">GitHub</a>.',
      ], 
    },
  }, 
  Styleguide: {
    title: { en: 'Styleguide', se: 'Stilguide' },
    content: {
      en: [
        'Most elements have their default styles and this page is only a reference.',
      ], 
      se: [
        'De flesta elementen har sin grundstil och den här sidan är bara en referens.',
      ], 
    },
    sections: [
      {
        title: { en: 'Headings', se: 'Rubriker' },
        content: {
          en: [
            '<h1>heading h1</h1>',
            '<h2>heading h2</h2>',
            '<h3>heading h3</h3>',
            '<h4>heading h4</h4>',
            '<h5>heading h5</h5>',
            '<h6>heading h6</h6>',
          ],
          se: [
            '<h1>rubrik h1</h1>',
            '<h2>rubrik h2</h2>',
            '<h3>rubrik h3</h3>',
            '<h4>rubrik h4</h4>',
            '<h5>rubrik h5</h5>',
            '<h6>rubrik h6</h6>',
          ],
        }
      },
      {
        title: { en: 'Copy', se: 'Text' },
        content: {
          en: [
            '<p class="lead">This is a lead paragraph.</p>',
            '<p>And this is normal copy.</p>',
            '<p>The text can be <strong>strong</strong> or <em>italic</em>.</p>',
          ],
          se: [
            '<p class="lead">Det här är en ingress.</p>',
            '<p>Och det här är normal text.</p>',
            '<p>Texten kan vara <strong>fet</strong> eller <em>kursiv</em>.</p>',
          ],
        }
      },
      {
        title: { en: 'Forms and buttons', se: 'Formulär och knappar' },
        content: {
          en: [
            '<input placeholder="Input something" />',
            `<select>
  <option value=''>Pick something</option>
  <option>Something</option>
</select>`,
            '<button>Click me</button>',
          ],
          se: [
            '<input placeholder="Skriv något" />',
            `<select>
  <option value=''>Välj något</option>
  <option>Något</option>
</select>`,
            '<button>Klicka här</button>',
          ],
        }
      },
    ]
  }, 
  NotFound: {
    title: { en: '404', se: '404' },
    content: {
      en: [
        'The page could not be found!',
      ], 
      se: [
        'Sidan kunde inte hittas!',
      ], 
    },
  }, 
}
