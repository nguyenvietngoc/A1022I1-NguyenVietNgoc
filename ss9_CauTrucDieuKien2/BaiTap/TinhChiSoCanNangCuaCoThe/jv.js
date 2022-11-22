let inputWeidth;
let inputHeight;
inputWeidth = prompt("Enter the weidth");
inputHeight = prompt("Enter the height");
let weidth = parseInt(inputWeidth)
let height = parseFloat(inputHeight)
let bmi = weidth / ( height ^ 2 )
document.write("Weidth :" + weidth + "<br>");
document.write("Height :" + height + "<br>")
document.write("Body index : " + bmi + "<br>");
if (bmi < 18)
    document.write("Underweight");
else if (bmi < 25.0)
    document.write("Normal");
else if (bmi < 30.0)
    document.write("Overweight");
else
    document.write("Obese");