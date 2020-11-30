fetch("https://nostalgic-meninsky-0d5f94.netlify.app/.netlify/functions/api").then(data => data.json()).then(response => {
  console.log(response)
})