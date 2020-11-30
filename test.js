const today = new Date()
console.log(today.getDate())

if (today.getDate() === 30) {
  console.log("num")
}

if (today.getDate() === '30') {
console.log('str')
}

console.log(typeof today.getDate())