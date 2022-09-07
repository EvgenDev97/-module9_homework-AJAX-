//second task
/*
const jsonStr =`
    {
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const data = JSON.parse(jsonStr)
console.log(data)*/

//3 task


function someClick (){
    const elem = document.getElementById('inputButton')
    const value = elem.value
    console.log(value)
    if( value > 10){
        alert('число вне диапазона от 1 до 10')
    }else if(value >=1 && value <=10){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://picsum.photos/v2/list?limit=10')
        xhr.send()
        xhr.onload = function() {
            if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
              alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
            } else { // если всё прошло гладко, выводим результат
              const images = JSON.parse(xhr.response)
              console.log(images)
              renderImg(images)
            }
          }
          
          xhr.onprogress = function(event) {
            if (event.lengthComputable) {
              alert(`Получено ${event.loaded} из ${event.total} байт`);
            } else {
              alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
            }
          
          };
          
          xhr.onerror = function() {
            alert("Запрос не удался");
          };
    }
};

function renderImg(array){
    const images = new Array()
    const container = document.querySelector('#container')
    //debugger
    array.forEach(obj => {
        const imgWrap = document.createElement('div')
        const imgAuthor = document.createElement('div')
        const img = document.createElement('img')
        imgAuthor.append(obj.author) 
        imgWrap.appendChild(imgAuthor)
        img.setAttribute('src', obj.download_url)
        img.setAttribute('width', 300)
        imgWrap.appendChild(img)
        images.push(imgWrap)
        imgWrap.classList.add('imgWrap')
    })
    container.replaceChildren(...images)
}




