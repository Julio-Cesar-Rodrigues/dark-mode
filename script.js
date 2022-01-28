const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=theme]')

//aqui ele acessa o html e recebe as propiedades do syle.css
const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style)

//acessa as propiedades no css
const initialColors = {
  bg: getStyle(html, '--bg'),
  bgPanel: getStyle(html, '--bg-panel'),
  colorSwitch: getStyle(html, '--color-switch'),
  colorHeadings: getStyle(html, '--color-headings'),
  colorText: getStyle(html, '--color-text')
}

const darkMode = {
  bg: '#333333',
  bgPanel: '#434343',
  colorSwitch: '#fff',
  colorHeadings: '#333333',
  colorText: '#B5B5B5'
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

//ele recebe a propriedade do css, mapeia o nome da propriedade e altera o seu valor para o outro
const changeColors = colors => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}

checkbox.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
