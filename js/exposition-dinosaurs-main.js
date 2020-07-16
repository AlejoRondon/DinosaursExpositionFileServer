//-> https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
console.log(`vw`, vw)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
console.log(`vh`, vh)
