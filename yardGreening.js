function greening(input){
let squaresToDo = input[0];
let TotalAmount = squaresToDo * 7.61
let discount = TotalAmount * 0.18
let finalPrice = TotalAmount - discount
console.log("The final price is: " + finalPrice + " lv.")
console.log("The discount is: " + discount+ " lv.")
}

greening(["150"])