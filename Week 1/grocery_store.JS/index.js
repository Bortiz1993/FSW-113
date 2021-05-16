//variables and const. Bank Name will be changed from CashMoney Bank to BigMoney Financial Center.
var bankName = "CashMoney Bank";
var bankName = "BigMoney Financial Center";
const collectDebt= `This is an attempt to collect a debt from ${bankName}. The amount past due is of:`;
const normalBalance = `Greetings from ${bankName}. Your balance is up to date, no need for action.`;
const goodBalance = `Greetings from ${bankName}. Because you are a good customer, we are lowering your interest rate to:`;
//customer database array.
const dataBase = [
    {fname: 'Brianna', balance: -54.99, rate: 2.7},
    {fname: 'Dillon', balance: 1014.94, rate: 5.1},
    {fname: 'Dmitri', balance: 0, rate: 7.2},
    {fname: 'Hazel', balance: 0, rate: 7.2},
    {fname: 'Isaiah', balance: 224.99, rate: 5.1},
    {fname: 'Laura', balance: -213.40, rate: 2.5},
    {fname: 'Matias', balance: -12.06, rate: 3.1},
    {fname: 'Monique', balance: 2220.54, rate: 7.2},
    {fname: 'Petra', balance: 500.35, rate: 4.9},
    {fname: 'Reggie', balance: 0, rate: 7.2}
]
//arrow functions are cleaner, must be put inside a var, const or let to be called.
const badCustomer = (fname, balance) => {
    console.log(`Hello ${fname}, ${collectDebt} ${balance}`)
}

const normalCustomer = (fname) => {
    console.log(`Hello ${fname}, ${normalBalance}`)
}

const goodCustomer = (fname, rate) => {
    console.log(`Hello ${fname}, ${goodBalance} ${rate}%`)
}
//let is best used in  blocked snippets of code, for switch statement is a better alternative to long if/else statements.
for (let x = 0; x < dataBase.length; x++) {
    switch (true) {
        case (dataBase[x].balance > 0):
            badCustomer(dataBase[x].fname, dataBase[x].balance)
            break;
        case (dataBase[x].balance == 0):
            normalCustomer(dataBase[x].fname)
            break;
        default:
            goodCustomer(dataBase[x].fname, dataBase[x].rate)
            break;

    }
} 