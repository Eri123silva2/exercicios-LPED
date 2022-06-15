var a = -220
var b = 260
var c = -142
var media = (a + b + c) / 3
var Ta = a - media
var Tb = b - media
var Tc = c - media
if (Ta < 0) {
    Ta = -1 * Ta
}
if (Tb < 0) {
    Tb = -1 * Tb
}
if (Tc < 0) {
    Tc = -1 * Tc
}
if (Ta >= Tb && Tc >= Tb) {
    console.log(b, "é mais proximo do valor da media")
}
if (Tb >= Ta && Tc >= Ta) {
    console.log(a, "é mais proximo do valor da media")
}
if (Ta >= Tc && Tb >= Tc) {
    console.log(c, "é mais proximo do valor da media")
}
console.log("media =", media)
//console.log(Ta, Tb, Tc)