const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}
]
//First Problem: // use maybe for loop/ or use .Find method or .forEach.
parts.forEach(function(list){
    console.log(`qty: ${list.qty} partNumber: ${list.partNbr}`);
});
console.log("*******")

//second problem:
parts.forEach(function(list){
    if (list.aisle === 'B3'){
        console.log("Aisle: " + list.aisle + '; requires special packaging')
    }
    else {
        console.log("Aisle: " + list.aisle + "; Does not require special packaging")
    }
});
console.log("*******")
//Third problem:
parts.forEach(function(list){
    if (list.partDescr === "Shreckendwammer" && list.aisle === 'J4'){
        console.log("Part description: " + list.partDescr + " aisle: " + list.aisle + '; You will need a pair of gloves from the storeroom!')
    }
    else {
        console.log("Part description: " + list.partDescr + " aisle: " + list.aisle + "; No gloves required")
    }
});
console.log("******")

//fourth problem:
parts.some((list) => {
    if (list.aisle === 'H1'){
    console.log( "Part number: " + list.partNbr + "; You will need a basket in aisle H1!")

}
    else {
        console.log("Part number: " + list.partNbr +  '; You don`t need a basket.')
    }
});
console.log('******')

//Fifth problem:
parts.forEach(function(list){
    if (list.aisle === 'S' || list.aisle ==='T' || list.aisle === 'U'){
        console.log("Part description: " + list.partDescr + "; You will need a Forklift")
    }
    else {
        console.log("Part description: " + list.partDescr + "; No forklift required")
    }
});
console.log("*****")

//Sixth problem:
let qtySum  = parts.reduce((total, quantity) =>  total + quantity.qty ,0);
console.log("Final tally of items: " + qtySum);

//Final problem:
let newArray = parts.map(part => "Part number: " + part.partNbr + ' Aisle: ' +  part.aisle);
console.log(newArray)