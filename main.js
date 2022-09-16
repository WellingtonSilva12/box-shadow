import { shadows } from './shadows.js'

function copyToClipboard(value) {
  const tempInput = document.createElement('textarea')
  tempInput.style = 'position: absolute; left: -1000px; top: -1000px'
  tempInput.value = value
  document.body.appendChild(tempInput)
  tempInput.select()
  document.body.removeChild(tempInput)
  return true
}

const ul = document.querySelector('ul')

async function addShadow(shadow) {
  const li = document.createElement('li')
  li.innerHTML = `<span>box-shadow #${shadows.indexOf(shadow) + 1}</span>`

  if (typeof shadow === 'object') {
    li.style.boxShadow = shadow.boxShadow

    if (shadow.extra) {
      for (let z = 0; z < Object.keys(shadow.extra).length; z++) {
        li.style[Object.keys(shadow.extra)[z]] =
          shadow.extra[Object.keys(shadow.extra)[z]]
      }
    }
  } else {
    li.style.boxShadow = shadow
  }

  ul.appendChild(li)

  li.addEventListener('click', function (e) {
    const previousHTML = li.innerHTML
    li.classList.add('copied')
    copyToClipboard(`box-shadow: ${li.style.boxShadow};`)
    li.innerHTML = 'Copiado!'
    setTimeout(() => {
      li.innerHTML = previousHTML
      li.classList.remove('copied')
    }, 1000)
  })

  li.addEventListener('mouseover', e => {
    li.classList.add('tooltip', 'top')
  })
}

async function processArray(array) {
  for (const item of shadows) {
    await addShadow(item)
  }
}

processArray(shadows)
