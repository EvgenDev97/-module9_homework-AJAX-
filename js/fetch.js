
const btn = document.querySelector('.button')

btn.addEventListener('click', () => {
  const value1 = +document.getElementById('inputTypeOne').value;
  const value2 = +document.getElementById('inputTypeTwo').value;

  let res = document.getElementById('someResult');
  res.textContent = '';
  if (!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
    res.textContent = 'одно из чисел вне диапазона от 100 до 300';
    return;
  }
  // Делаем запрос за данными
  fetch(`https://picsum.photos/${value1}/${value2}`)
    .then((response) => {
      document.getElementById('result').src = response.url;
    });

}); 