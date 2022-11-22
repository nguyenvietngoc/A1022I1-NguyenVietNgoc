let a = +prompt('Nhập vào số a:');
let b = +prompt('Nhập vào số b:');
if (a % b === 0){
    document.write(a + ' chia hết cho ' + b);
}else {
    document.write(a + ' không chia hết cho ' + b);
}