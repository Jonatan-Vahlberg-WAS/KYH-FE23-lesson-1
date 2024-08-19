function multiply(a: number, b: number): number {
    return a * b;
}
    
const multiplicand: number = 8;
const multiplier: number = 12;

const multipliedNum: number = multiply(multiplicand, multiplier)

console.log("Explicit Typing challanges")

console.log("Multiply:", multiplicand, multiplier, multipliedNum)

function calculateTotal(price: number, quantity:number, discount: number, taxRate: number) {
    let total = price * quantity;
  
    if (discount) {
      total *= (1 - discount);
    }
  
    const tax = total * taxRate;
    total += tax;
  
    return total;
  }
  