//1.Define Object
let obj = {
    'a' : 1
    'b' : 2
    'c' : 3
}

let {a,b,c} = obj
//consile.log(a,b,c)

//2.Define Array
let arr = [1,2,3,4]
let [first,secound,third,...rest] = arr
console.log(first,secound,third,rest)