class objCustomer {
    constructor (args) {
        this.customerName = arguments[0],
        this.businessName = arguments[1],
        this.street = arguments[2],
        this.city = arguments[3],
        this.state = arguments[4],
        this.zip = arguments[5],
        this.phone = arguments[6],
        this.aryPurchases = arguments[7],
        this.aryPayments = arguments[8]
    }
    
    sumPurchases() {
        let allPurchases = this.aryPurchases.reduce((currentTotal, item) => {
                return item.price + currentTotal
            },
        0)
        return allPurchases
    }

    sumPayments() {
        let allPayments = this.aryPayments.reduce((currentTotal, item) => {
                return item.payment + currentTotal
            },
        0)
        return allPayments
    }

    getBalance() {
        return this.sumPurchases() - this.sumPayments()
    }

    printPurchases() {
        let lstPurchases = '<ul>'
        this.aryPurchases.forEach(element => {
            lstPurchases += '<li>' + element.item + ': $' + element.price + '</li>'
        })
        lstPurchases += '</ul>'
        return lstPurchases
    }

    printPayments() {
        let lstPayments = '<ul>'
        this.aryPayments.forEach(element => {
            lstPayments += '<li>' + element.date + ': $' + element.payment + '</li>'
        })
        lstPayments += '</ul>'
        return lstPayments
    }
}