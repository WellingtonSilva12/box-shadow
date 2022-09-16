const boxShadow = document.querySelectorAll('li')
const tooltipText = document.querySelectorAll('li p')

function mouseOver(e) {
  boxShadow.forEach(item => {
    item.classList.add('tooltip', 'top')
    e.classList.add('tooltip')
  })
}

boxShadow.forEach(item =>
  item.addEventListener('mouseover', e => mouseOver(item))
)

function handleClickCopy() {
  tooltipText.forEach((item, index) => {
    console.log(index.toPrecision)
  })
}

boxShadow.forEach(item => item.addEventListener('click', handleClickCopy))
