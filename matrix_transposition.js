const printMatrix = (matrix) => {
  for (const row of matrix) {
      for (const el of row) {
          process.stdout.write(el + " ");
          //console.log(row[el]);
      }
      process.stdout.write('\n')
  }
}

const transpose = (arrays) => {
  
  let result = [];

  for (let arr = 0; arr < arrays.length ; arr++){

    for (let num = 0; num < arrays[arr].length; num++){

      if (result[num]){
        result[num].push(arrays[arr][num])
      } else {
        result.push([arrays[arr][num]])
      }
    }
    
    
  }
  return result;
};

printMatrix(transpose([
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
[1, 2],
[3, 4],
[5, 6]
]));

console.log('----')

printMatrix(transpose([
[1, 2, 3, 4, 5, 6, 7]
]));
