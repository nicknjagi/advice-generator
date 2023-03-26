const btn = document.querySelector('.btn');
const adviceText = document.querySelector('.advice-text');
const id = document.getElementById('id')

const url = 'https://api.adviceslip.com/advice';

btn.addEventListener('click', generateAdvice)

async function generateAdvice(){
  const advice = []
  
  await fetch(url)
    .then(response => response.json())
    .then(data => advice.push(data.slip))

  id.innerText = `#${advice[0].id}`

  adviceText.innerHTML = `
    &ldquo;${advice[0].advice}&rdquo;
  `
}