//-> https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
console.log(`vw`, vw)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
console.log(`vh`, vh)
//->https://stackoverflow.com/questions/19469881/remove-all-event-listeners-of-specific-type#:~:text=If%20your%20only%20goal%20by,stopPropagation()%3B%20%7D%2C%20true)%3B
// var elClone
// document.addEventListener('DOMContentLoaded', function () {
//   //overwriting click listener
//   console.log('Yeahh!')
//   var el = document.getElementsByClassName('title')[0]
//   elClone = el.cloneNode(true)
//   elClone.addEventListener('click', () => {
//     console.log('yahuuu!')
//     elClone.classList.toggle('blue')
//   })

//   el.parentNode.replaceChild(elClone, el)
// })
