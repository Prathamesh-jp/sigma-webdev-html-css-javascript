// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(255)
//         }, 3500);
//     })
// }

async function getdata() {
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json()
  console.log(data)
      
}



console.log('mahesh');
console.log('ramesh');
console.log('ganesh');
console.log('bigdata');

async function wrap() {
    


let data = await getdata()

// data.then((v) => {
//     console.log(data)

//     console.log('process');
//     console.log('creating data');
// })

console.log(data)

console.log('process')

console.log('creating data')

}

wrap()



