let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function combineLists() {
    const Raji = document.querySelector('#scavenger-0').value.split(',')
    const Huang = document.querySelector('#scavenger-1').value.split(',')
    const Jose = document.querySelector('#scavenger-2').value.split(',')
    const Veronica = document.querySelector('#scavenger-3').value.split(',')
    const newFullArray = [...Raji,...Huang,...Jose,...Veronica]
    const sortArray = newFullArray.sort();
    const joinArray = sortArray.join(', ');
    const result = document.getElementById('AllItems').textContent = `${joinArray}`
    console.log(result)
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}