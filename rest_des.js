let company = ['nipa','facebook','aws','goole','alibaba']
let vnl = {fname:'Thailand',age: 25 }

//Destruturing wit rest parameter
let [a,...fname] = company
let {...volley} = vnl

//console.log(a,fname)
console.log(volley)