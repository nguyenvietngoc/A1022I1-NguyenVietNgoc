function clickBtn() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    if (a == b && b == c) {
        document.getElementById("outPut").innerHTML = "a, b, c bằng nhau";
    } else if (a > b && a > c) {
        document.getElementById("outPut").innerHTML = "a là số lớn nhất";
    } else if (b > a && b > c) {
        document.getElementById("outPut").innerHTML = "b là số lớn nhất";
    } else {
        document.getElementById("outPut").innerHTML = "c là số lớn nhất";
    }
}