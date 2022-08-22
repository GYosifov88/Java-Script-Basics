function equipment(input){
    let annumTax = Number(input[0])
    let sneakersPrice = annumTax - (annumTax * 0.4)
    let clothes = sneakersPrice - (sneakersPrice * 0.2)
    let basketball = clothes / 4 
    let accessoaries = basketball / 5
    let total = annumTax + sneakersPrice + clothes + basketball + accessoaries
    console.log(total)
}

equipment(["365"])