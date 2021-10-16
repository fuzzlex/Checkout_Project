function fibonacci(num) {
    arr = [1,2]
        for (i = 0; i < num  ; i++){
            arr.push(arr[i] + arr[i + 1])
        }
        return arr[num-1];
  }
console.log(fibonacci(7))      

 