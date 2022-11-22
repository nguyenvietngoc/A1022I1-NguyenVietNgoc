let a = +prompt('Nhập số a');
let b = +prompt('Nhập số b');
let c = +prompt('Nhập số c');
if ( a > b) {
    if ( a > c){
        document.write(a + ' là số lớn nhất.');
    }else {
        document.write(c + ' là số lớn nhất.');
    }
}else if ( b < c) {
    document.write(c + ' là số lớn nhất.');

} else {
    document.write(b + ' là số lớn nhất.');
}