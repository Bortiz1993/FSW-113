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
    const Raji = 'Wired Mouse ;ToDo List'
    const Huang = 'Clacky Keyboard ;Family Picture'
    const Jose = 'Post-its ;USB Plug'
    const Veronica = 'Gum Package ;Coffee Cup'
    const re = /\s*(?:;|$)\s*/
    const newArray1 = Raji.split(re)
    console.log(newArray1)
    const newArray2 = Huang.split(re)
    console.log(newArray2)
    const newArray3 = Jose.split(re)
    console.log(newArray3)
    const newArray4 = Veronica.split(re)
    console.log(newArray4)
    const newFullArray = [...newArray1,...newArray2,...newArray3,...newArray4]
    console.log(newFullArray)
    const sortArray = newFullArray.sort();
    console.log(sortArray)
    const joinArray = sortArray.join(', ');
    console.log(joinArray)
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