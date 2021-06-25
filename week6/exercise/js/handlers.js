document.querySelector('#customer-id')
    .addEventListener(
        'change', function () {
            setCustomer(document.querySelector('#customer-id').value)
        }
    )

document.querySelector('#bttn-address')
    .addEventListener(
        'click', function() {
            document.querySelector('#info').innerHTML = 
                customer.businessName + '<br />' + 
                'c/o ' +  customer.customerName + '<br />' + 
                customer.city + ', ' + customer.state + ' ' + customer.zip
        }
    )

    document.querySelector('#bttn-purchases')
    .addEventListener(
        'click', function() {
            document.querySelector('#info').innerHTML = customer.printPurchases()
        }
    )
    
document.querySelector('#bttn-balance')
    .addEventListener(
        'click', function() {
            document.querySelector('#info').innerHTML = 'Balance = $' + customer.getBalance()
        }
    )
    
document.querySelector('#bttn-payments')
    .addEventListener(
        'click', function() {
            document.querySelector('#info').innerHTML = customer.printPayments()
        }
    )