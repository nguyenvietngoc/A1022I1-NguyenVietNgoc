numbers=+prompt("Nhập số lượng số nguyên tố cần in ra :");
let count=0;
for (let N = 0; N <= numbers; N++) {
    count=0;
    for (let i = 1; i <= N; i++) {
        if(N%i==0){
            count++;
        }
    }
    if(count==2){
        document.write(N+ " ");
    }