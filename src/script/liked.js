export default function (id) {
  const like = document.querySelector(`.l${id}`)
  const liked = like.getAttribute('like')
  like.setAttribute('like', liked === 'false'? 'true': 'false')
  return like.getAttribute('like') === 'true'? true: false
}
