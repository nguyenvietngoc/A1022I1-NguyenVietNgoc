let inputVatly;
let inputHoahoc;
let inputSinhhoc;
inputVatly = prompt("Nhap Diem Vat ly");
inputHoahoc = prompt("Nhap Diem Hoa Hoc");
inputSinhhoc = prompt('Nhap Diem Sinh Hoc');
let Vatly = parseInt(inputVatly);
let Hoahoc = parseInt(inputHoahoc);
let Sinhhoc = parseInt(inputSinhhoc);
let DTB = ( Vatly + Hoahoc + Sinhhoc )/3;
document.write("Diem Vat Ly La : ",+inputVatly);
document.write('<br>');
document.write("Diem Hoa Hoc La : ",+inputHoahoc);
document.write("Diem Sinh Hoc la : ",+inputSinhhoc);
document.write("Diem Trung Binh : ",+DTB);

