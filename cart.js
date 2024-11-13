const price = 5000

function buy(){
    const number = document.querySelector("#noOfGuitar").value
    const ans = number * price
    document.querySelector("#total-price").innerHTML = "The Total price is" + ans
}