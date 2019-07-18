export default function (id) {

  const options = document.querySelector(`#o${id}`).childNodes[1]

  document.querySelectorAll('.div-options').forEach(div => {
    if (div.getAttribute('id') === `o${id}`) {
      div.childNodes[1].style.visibility = options.style.visibility === 'visible'? 'hidden': 'visible'
    } else {
      div.childNodes[1].style.visibility = 'hidden'
    }
  })
}
