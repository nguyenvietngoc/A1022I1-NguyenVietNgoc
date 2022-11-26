document.write(" <table border=2px solid black>")
for (the_dividend = 1; the_dividend < 11; the_dividend++) {
    document.write(" <tr> ")
    for (divisor = 2; divisor < 10; divisor++) {
        document.write(" <td style= padding-right:20px > " + divisor
            + " x " + the_dividend + " = " + (divisor * the_dividend) + " </td> ")
    }
    document.write(" </tr> ")
}
document.write(" </table> ")