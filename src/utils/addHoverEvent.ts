export function addHoverEvent() {
  // Processing when hovering to a tag
  addHoverClass(document.getElementsByTagName('a'))
  addHoverClass(document.getElementsByTagName('button'))
  addHoverClass(document.getElementsByClassName('hover-target'))
}

export function addIsHover(e: any) {
  const target = e.currentTarget as HTMLInputElement
  target.classList.add('is-hover')
}

export function removeIsHover(e: any) {
  const target = e.currentTarget as HTMLInputElement
  target.classList.remove('is-hover')
}

export function addHoverClass(target: any) {
  let index = 0
  for (index = 0; index < target.length; ++index) {
    target[index].addEventListener('mouseover', addIsHover)
    target[index].addEventListener('touchstart', addIsHover)

    target[index].addEventListener('mouseout', removeIsHover)
    target[index].addEventListener('touchend', removeIsHover)
  }
}
