import Student from './student.js'

let objStudent
//use this function convert strings into numbers.
function convertArray(str) {
   var ary = str.split(',')
    ary = ary.map(function (x) {
        return parseInt(x)
    })
    return ary
}

document.getElementById('print')
    .addEventListener(
        'click', function () {
         var inputs = document.querySelectorAll('input')
         createStudent(inputs)
         var studentDivs = document.querySelectorAll('.cert-data')
         studentDivs[0].innerHTML = objStudent.studentName 
         studentDivs[1].innerHTML = objStudent.className
         studentDivs[2].innerHTML = " "
         objStudent.calcGrade()

        }
    )
//instantiate a new object off the student class.

function createStudent (inputs){
    var studentName = inputs[0].value
    var studentClass = inputs[1].value
    var studentScores = inputs[2].value
    var possibleScores = inputs[3].value
   var scores = scoresArray(studentScores, possibleScores)
 objStudent = new Student(
     studentName, studentClass, scores[0], scores[1]
 )
}
//step 3?
function scoresArray (studentScores, possibleScores){
    var studentArray = convertArray(studentScores)
    var possibleArray = convertArray(possibleScores)
    console.log(studentArray, possibleArray)
    return [studentArray, possibleArray]
}

document.querySelector('#reset').addEventListener('click', function (){
    var reset = document.querySelectorAll('input')
    reset.forEach(input => {
    input.value = " "
    
    }) 
})
