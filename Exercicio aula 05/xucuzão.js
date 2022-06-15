a = 24
if ((a % 5) || 0) {
    console.log("ambos não são")
}
else {
    if ((a % 4) || 0)
        console.log("ambos não são.")
    else {
        console.log("É divisivel por 5 e por 4")
    }
}