function count(){
    const count = document.getElementById("count").value
    const h = count
    console.log(h.split(" "))
    const c = h.split(" ")
    console.log(c.length)
    const l = c.length
    const res = document.getElementById("res")
    res.innerHTML = l + "words"
}
