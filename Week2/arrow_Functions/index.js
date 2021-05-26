const aryGrades = [66,72,100,88,92,74,72,94,80,78]

let sumGrades = array => array.reduce((accumulator, currentValue) => {return accumulator + currentValue}); 

let minGrade = aryGrades.reduce((a, b) => { return Math.min(a, b)})

let maxGrade = aryGrades.reduce((a, b) => { return Math.max(a, b)})

let mean = sumGrades(aryGrades) / aryGrades.length

let = gradeSlice = (maxGrade - minGrade) / 5;

function applyBell(grade, index, ary) {
    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
            ary[index] = 'A'
            break
        case grade >= (mean + gradeSlice): 
            ary[index] = 'B'
            break
        case grade >= (mean):
            ary[index] = 'C'
            break
        case grade >= (mean - gradeSlice): 
            ary[index] = 'D'
            break
        default:
            ary[index] = 'F'
            break
    }
}

const bellGrades = aryGrades.forEach(applyBell)

console.log(aryGrades)