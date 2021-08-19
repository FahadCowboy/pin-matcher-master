function getPin(){
    const randomPin = Math.round(Math.random()*10000)
    const pin = randomPin + ''
    if(pin.length === 4){
        return randomPin
    } else{
        return getPin()
    }
}

function pinGenerate(){
    const pintInputField = document.getElementById('pin-input-field')
    pintInputField.value = getPin()
    const pinMachingValue = document.querySelector('#key-input').value = ''
}

document.querySelector('#key-pad').addEventListener('click', (e) => {
    const keyValue = e.target.innerText
    const kyeInput = document.querySelector('#key-input')
    if(isNaN(keyValue)){
        if(keyValue === 'C'){
            kyeInput.value = ''
        } else if (kyeInput === '<'){
            keyValue.value = ''
        }
    } else{ 
        const kyeInputValue =  kyeInput.value  
        const addedKeys = kyeInputValue + keyValue
        kyeInput.value = addedKeys
    }
})

document.querySelector('#submit-btn').addEventListener('click', (e) => {
    const pin = document.querySelector('#pin-input-field').value
    const pinMachingValue = document.querySelector('#key-input').value
    const failed = document.querySelector('#notify-failed')
    const success = document.querySelector('#notify-success')
    if(pin == pinMachingValue){
        failed.style.display = 'none'
        success.style.display = 'block'
    } else{
        failed.style.display = 'block'
        success.style.display = 'none'
    }
})
































































































