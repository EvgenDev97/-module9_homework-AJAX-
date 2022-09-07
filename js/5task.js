
//get data from the page
let myKey = localStorage.getItem('key')



const limit = document.querySelector('.limit')
const idPageNum = document.querySelector('.idPageNum')
const result = document.querySelector('.result')
const btnRequest = document.querySelector('.request')

let  CreateView = function (piclist) {
	let toShow = '';

	for (var key in piclist) {
		const imgAuthor = piclist[key].author;
		const picHTML = `<div class="card"><img src="${piclist[key].download_url}" class="card-image"/><p>${imgAuthor}</p></div>`;
		toShow = toShow + picHTML;
	}
	result.innerHTML = toShow;
}

if (myKey) CreateView(JSON.parse(myKey))

// fetch requets
function checkNum(num){
	if (num >= 1 && num <= 10) {
		return true;
	} else {
		return false;
	}
}

btnRequest.addEventListener('click',  () => {
    let usPage =idPageNum.value;
    let usLimit = limit.value;
    //check condition
    if (!checkNum(usPage) && !checkNum(usLimit )){
        alert(`Номер страницы и лимит вне диапазона от 1 до 10`)
    }
    else if(!checkNum(usPage)){
        alert(`Номер страницы вне диапазона от 1 до 10`)
    }
    else if(!checkNum(usLimit)){
        alert(`Лимит вне диапазона от 1 до 10`)
    }
    else{
        //fetch request
        fetch(`https://picsum.photos/v2/list?page=${usPage}&limit=${usLimit}`)
        .then((response) =>{
                return response.json()
        })
        .then((json) => {
            localStorage.setItem('key', JSON.stringify(json))
            CreateView(json)
            return json
        })
        .catch(() => {
            console.log(`an error occurred: ${response.status}`)
        })
    }
})

