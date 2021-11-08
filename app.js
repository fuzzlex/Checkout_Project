let productEL = document.querySelectorAll(".productEl")
const taxRate = 0.18;
const shippingPrice = 15.0;
window.onload = () => {

    localStorage.getItem("taxRate", taxRate)
    localStorage.getItem("shippingPrice", shippingPrice)
    calculateTotal()}



productEL.forEach(element => {
    element.addEventListener("click", (e)=>{      
        if(e.target.classList.contains("eksi")) {          
            if(parseInt(element.children[1].textContent) > 0){ 
             element.children[1].textContent = parseInt(element.children[1].textContent) -1;
             calculate(parseInt(element.children[1].textContent))}
             
            if(parseInt(element.children[1].textContent) == 0){
                alert("Product will be removed Are you sure !!")
                element.parentElement.parentElement.remove(); }        }
        else if(e.target.classList.contains("plusEl")) {          
             element.children[1].textContent = parseInt(element.children[1].textContent) +1;
             calculate(parseInt(element.children[1].textContent))}
    })
    const calculate = (num) =>{
        let productSale = parseFloat(element.previousElementSibling.firstElementChild.textContent).toFixed(2);
        element.nextElementSibling.firstElementChild.textContent =  (num * productSale).toFixed(2);
        calculateTotal()
    }
    
});


const calculateTotal = () =>{
    let scale = 0;
    let totalEl = document.querySelectorAll(".totalPriceProduct");
    let totalPrice =document.getElementById("totalCheck");
    totalEl.forEach(e =>{
  scale += parseFloat(e.firstElementChild.textContent)       
    })
    let totalScale = scale.toFixed(2)
    totalPrice.textContent = "$" + totalScale; 
    let shipping = (totalScale > 0 ? shippingPrice: 0);
    let totalTax = parseFloat(totalScale * taxRate).toFixed(2);
    let cartTotal = parseFloat(totalScale) + parseFloat(totalTax) + parseFloat(shipping);
    document.querySelector("#tax").lastElementChild.textContent ="$" +  totalTax;  
    document.querySelector("#ship").lastElementChild.textContent = "$" + shipping;
    document.querySelector(".cartTotal").lastElementChild.textContent = "$" + cartTotal.toFixed(2);

}

 

