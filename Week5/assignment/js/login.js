import verifyLogin from
 "./validate.js"
console.log(verifyLogin)

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#pwd');

document.getElementById('togglePassword')
    .addEventListener(
        'click', function() {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            console.log(togglePassword.getAttribute('src'))
            const img = togglePassword.getAttribute('src') === './images/eye0.jpg' ? './images/eye1.jpg' : './images/eye0.jpg'
            togglePassword.setAttribute('src', img)
        }
    )


document.getElementById('login')
.addEventListener('click', function (){
    var verify = verifyLogin;
    console.log(verify)
   var username = document.getElementById('username').value
   console.log(username);
   var password = document.getElementById('pwd').value
   console.log(password)
    if (username === "Plato" && password === "MindWing5"){
    window.location.href="generator.html"
    }
});
//window.location.href="generator.html"


//console.log("Hello world")

//document.getElementById('div').textContent = "Hello world"