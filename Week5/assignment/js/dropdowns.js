function populateDD(ary, obj) {
    for (let x = 0; x < ary.length; x++) {
        obj.options[x] = new Option(ary[x], x);
    }
}

document.getElementById('generate')
.addEventListener(
    'click', function() {
        document.getElementById('suggestion').style.visibility = 'visible';
    }
)