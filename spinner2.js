const array = ['|', '/', '-', '\\', '|']
let counter = 100;
for (let i of array) {
  setTimeout(() => {
    process.stdout.write(`\r${i}   `)
  } ,counter += 200)
  
}