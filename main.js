function copyToClipboard(value) {
  const tempInput = document.createElement('textarea')
  tempInput.style = 'position: absolute; left: -1000px; top: -1000px'
  tempInput.value = value
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand('copy')
  document.body.removeChild(tempInput)
  return true
}

const ul = document.querySelector('ul')
const shadows = [
  'rgba(149, 157, 165, 0.2) 0 8px 24px',
  '0 7px 29px 0 rgba(100,100,111,.2)',
  'rgba(0,0,0,.15) 1.95px 1.95px 2.6px',
  '0px 5px 15px rgba(0, 0, 0, 0.35)',
  'rgba(0, 0, 0, 0.16) 0 1px 4px',
  'rgba(0, 0, 0, 0.24) 0 3px 8px',
  'rgba(0, 0, 0, 0.02) 0 1px 3px 0, rgba(27, 31, 35, 0.15) 0 0 0 1px',
  'rgba(0, 0, 0, 0.1) 0 4px 12px',
  '0 0 5px 0 rgba(0, 0, 0, 0.1),0 0 1px 0 rgba(0, 0, 0, 0.1)',
  'rgba(0, 0, 0, 0.2) 0 18px 50px -10px',
  'rgba(0,0,0,.1) 0 1px 2px 0',
  'rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px',
  'rgba(17, 12, 46, 0.15) 0 48px 100px 0',
  'rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset',
  'rgba(255, 255, 255, 0.1) 0 1px 1px 0 inset, rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px',
  'rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px',
  '0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)',
  '0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3)',
  '0 2px 5px -1px rgba(50,50,93,.25), 0 1px 3px -1px rgba(0,0,0,.3)',
  '0 0 0 2px rgba(6,24,44,.4), 0 4px 6px -1px rgba(6,24,44,.65), inset 0 1px 0 hsla(0,0%,100%,.08)',
  '0 6px 12px -2px rgba(50,50,93,0.25),0 3px 7px -3px rgba(0,0,0,0.3)',
  '0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)',
  '0 30px 60px -12px rgba(50,50,93,0.25),0 18px 36px -18px rgba(0,0,0,0.3)',
  '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
]

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
