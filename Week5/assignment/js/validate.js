export default function verifyLogin (username, pwd) {
    let validated = false
    aryUsers.forEach ((item) => {
        if (item[0] === username && item[1] === pwd)
            validated = true
    })
    return validated
}

const aryUsers = [
    [ 'Socrates', 'kn0wt#y5elf'],
    [ 'Plato', 'MindWing5'],
    [ 'Aristotle', '3ducatedMind'],
    [ 'Plutarch', '5ilentP0etry'],
    [ 'Descartes', 'cogit0']
]


  