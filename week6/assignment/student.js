
export default class Student {
    constructor(args) {
        this.studentName = arguments[0]
        this.className = arguments[1]
        this.studentScores = arguments[2]
        this.possibleScores = arguments[3]
    }

    studentScore() {
    var studentScoreSum =  this.studentScores.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue;
    },
    0)
    return studentScoreSum
    }

    possibleScore() {
        var possibleScoreSum =  this.possibleScores.reduce((accumulator, currentValue) =>{
            return accumulator + currentValue;
        },
        0)
        return possibleScoreSum

    }

    calcGrade() {
        console.log("calculate grade")
        var totalCalcGrade = this.studentScore() + this.possibleScore()
        if (totalCalcGrade >= "100"){
            document.querySelector('#certGrade').innerHTML = "A"
         }

        else if (totalCalcGrade >= "90" && totalCalcGrade < "100" ) {
            document.querySelector('#certGrade').innerHTML = "B"
        }

        else if (totalCalcGrade >= "80" && totalCalcGrade < "90"){
            document.querySelector('#certGrade').innerHTML = "C"
    
        }
        
        else if (totalCalcGrade >= "70" && totalCalcGrade < "80"){
            document.querySelector('#certGrade').innerHTML = "D"
            console.log(totalCalcGrade)
        }

       else if (totalCalcGrade >= "60" && totalCalcGrade < "70"){
            document.querySelector('#certGrade').innerHTML = "F"
            console.log(totalCalcGrade)
            
        }
        else{
            totalCalcGrade < "60"
            document.querySelector('#certGrade').innerHTML = "Failed"
            console.log(totalCalcGrade)
        
        }
      }
    }
