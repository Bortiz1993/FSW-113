
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
    console.log(studentScoreSum)
    return studentScoreSum
    }

    possibleScore() {
        var possibleScoreSum =  this.possibleScores.reduce((accumulator, currentValue) =>{
            return accumulator + currentValue;
        },
        0)
        console.log(possibleScoreSum)
        return possibleScoreSum

    }

    calcGrade() {
        console.log("calculate grade")
        console.log( this.studentScore() + this.possibleScore())
    }
}
