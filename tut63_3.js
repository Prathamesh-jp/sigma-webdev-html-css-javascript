let arr = [1,7,8,9,11]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newarr.push(element**2)
    
// }
let newarr = arr.map((e)=>{
return e**2
})
 console.log(newarr)


const numberisgraterthanseven = (e)=>{
    if (e>7) {
        return true
    }
    return false
}

console.log(arr.filter(numberisgraterthanseven))

console.log(Array.from("prathamesh"));