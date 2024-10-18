function isPrime(number){
    if (number <= 1) return false; // so <=1 ko phai snt
    if (number === 2) return true; // 2 la snt
    if (number % 2 === 0) return false; //Cac so chan >2 ko phai snt
    for (let i = 3; i <= Math.sqrt(number); i+=2){
        if (number % i === 0) return false; // neu chia het cho i ko phai snt vi la boi cua 3
    }
    return true; //Neu ko chia het cho so nao thi la snt
}

let num=parseInt(prompt("Nhap so"));
if(isPrime(num)){
    alert("la SNT");
}else {
    alert("KO la SNT")
}