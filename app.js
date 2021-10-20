let subtract1El = document.getElementById("subtract1");
let numberVin1El = document.getElementById("numberVin1");
let plus1El = document.getElementById("plus1");
let subtract2El = document.getElementById("subtract2");
let numberVin2El = document.getElementById("numberVin2");
let plus2El = document.getElementById("plus2");
let totalCheckEl = document.getElementById("totalCheck");
let i = 0;
let j = 0;


subtract1El.addEventListener("click", function(){
    i--;
    if(i <= 0){numberVin1El.innerHTML = 0;i = 0;}else{numberVin1El.innerHTML = i;};
    totalCheckEl.innerHTML = "$" + Number(Number(i * 54.99) + Number(j * 74.99) + 19).toFixed(2);

})
plus1El.addEventListener("click", function(){
    i++;
    if(i <= 0){numberVin1El.innerHTML = 0;i = 0;}else{numberVin1El.innerHTML = i;}
    totalCheckEl.innerHTML = "$" + Number(Number(i * 54.99) + Number(j * 74.99) + 19).toFixed(2);
})
subtract2El.addEventListener("click", function(){
    j--;
    if(j <= 0){numberVin2El.innerHTML = 0;j = 0;}else{numberVin2El.innerHTML = j;}
    totalCheckEl.innerHTML = "$" + Number(Number(i * 54.99) + Number(j * 74.99) + 19).toFixed(2);
})
plus2El.addEventListener("click", function(){
    j++;
    if(j <= 0){numberVin2El.innerHTML = 0;j = 0;}else{numberVin2El.innerHTML = j;}
    totalCheckEl.innerHTML = "$" + Number(Number(i * 54.99) + Number(j * 74.99) + 19).toFixed(2);
})
