const getData = async () => {
    const response = await fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300');
    const data = await response.json();
    obj['valueResponse'] = data.value;
    obj['statusResponse'] = response.status;

    console.log(data.value)  
    
    checkStatusCode(obj); 
}
getData();

const checkStatusCode = (obj) => {
    const result = document.querySelector('.result');

    if(obj.statusResponse == 502){
        result.style.color = '#BF401F'
        result.innerHTML = 'ERRO';
        displayError();
        blockInput();
    }
}

const displayError = () => {
    getComponents().c2.style.display = 'block'
    getComponents().c3.style.display = 'block'

    const codeError = [5, 0, 2];

    codeError.forEach((element, index) => {
        switch(index){
            case 0:
                numbersObj[element].forEach(value => {
                    getComponents().c1Childrens[value].classList.add('activeError')
                })
                break;
            case 1:
                numbersObj[element].forEach(value => {
                    getComponents().c2Childrens[value].classList.add('activeError')
                })
                break;
            case 2:
                numbersObj[element].forEach(value => {
                    getComponents().c3Childrens[value].classList.add('activeError')
                })
                break;
        }
    })
}


const getComponents = () => {
    const c1 = document.querySelector('.c1')
    const c1Childrens = c1.children;

    const c2 = document.querySelector('.c2')
    const c2Childrens = c2.children;

    const c3 = document.querySelector('.c3')
    const c3Childrens = c3.children;

    const components ={
        'c1': c1,
        'c2': c2,
        'c3': c3,
        'c1Childrens': c1Childrens,
        'c2Childrens': c2Childrens,
        'c3Childrens': c3Childrens
    }

    return components;
}

const blockInput = () => {
    const btnReload = document.querySelector('.btn-reload');
    const input = document.querySelector('.input-bar')
    const btnSend = document.querySelector('.btn-send')

    input.classList.add('disabled')
    btnSend.classList.add('disabled')

    input.disabled = true
    btnSend.disabled = true

    btnReload.style.opacity = 1;
    btnReload.addEventListener('click', () => {
        location.reload();
    })
}

const numbersObj = {
    "0": [0,1,2,3,4,5],
    "1": [1,2],
    "2": [0,1,3,4,6],
    "3": [0,1,2,3,6],
    "4": [1,2,5,6],
    "5": [0,2,3,5,6],
    "6": [0,2,3,4,5,6],
    "7": [0,1,2],
    "8": [0,1,2,3,4,5,6],
    "9": [0,1,2,5,6]
}

const compare = (obj) => {
    const result = document.querySelector('.result');

    if(obj.inputValue == obj.valueResponse){
        const splitValue = obj.inputValue.split('');

        splitValue.forEach((element, index) => {
            switch(index){
                case 0:
                    numbersObj[element].forEach(value => {
                        getComponents().c1Childrens[value].style.background = '#5EBA37'
                    })
                    break;
                case 1:
                    numbersObj[element].forEach(value => {
                        getComponents().c2Childrens[value].style.background = '#5EBA37'
                    })
                    break;
                case 2:
                    numbersObj[element].forEach(value => {
                        getComponents().c3Childrens[value].style.background = '#5EBA37'
                    })
                    break;
            }
        })

        result.style.color = '#5EBA37'
        result.innerHTML = 'VOCÊ ACERTOU!'
        blockInput();
        
    }else if(obj.inputValue < obj.valueResponse){
        result.innerHTML = 'É maior'
    }else if(obj.inputValue > obj.valueResponse){
        result.innerHTML = 'É menor'
        
    }
}

const displayNumber = (obj) => {

    const splitObject = obj.inputValue.split('');
    console.log(splitObject)

    splitObject.forEach((element, index) => {
        switch(index){
            case 0:
                numbersObj[element].forEach(value => {
                    getComponents().c1Childrens[value].classList.add('active')
                })
                break;
            case 1:
                numbersObj[element].forEach(value => {
                    getComponents().c2Childrens[value].classList.add('active')
                })
                break;
            case 2:
                numbersObj[element].forEach(value => {
                    getComponents().c3Childrens[value].classList.add('active')
                })
                break;
        }
    })
    
    if(splitObject.length == 2){
        getComponents().c2.style.display = 'block'
        getComponents().c3.style.display = 'none'

    }else if(splitObject.length == 3){
        getComponents().c2.style.display = 'block'
        getComponents().c3.style.display = 'block'
    }else{
        getComponents().c2.style.display = 'none'
        getComponents().c3.style.display = 'none'
    }
}

const resetDisplay = () => {
    const seg = document.getElementsByClassName("segment");
    for (i=0; i < seg.length; i++) {
        seg[i].classList.remove('active');
      }
}

const button = document.getElementById('btn-send').addEventListener('click', (e) => {
    e.preventDefault();
    
    const inputValue = document.getElementById('input-number').value
    obj['inputValue'] = inputValue;

    compare(obj);
    resetDisplay();
    displayNumber(obj)
    clearInput();
})

var obj = {}

// const printObj = (obj) => {
//     console.log(obj)
// }

const clearInput = () =>{
    const inputValue = document.getElementById('input-number').value = '';
}

const removeSimbols = (input) => {
    const regex = /[^0-9]/gi;
    input.value = input.value.replace(regex, '');
}
