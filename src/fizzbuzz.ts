// 3の倍数で、5の倍数でないときFizzを出力
// 5の倍数で、3の倍数でないときBuzzを出力
// 3と5の公倍数のとき、FizzBuzzを出力
// 3と5の倍数でないとき、整数をそのまま出力

// 複数行で表示
// for(let i = 1; i <= 100; i++){
//   if(i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
//   else if(i % 3 === 0) console.log('Fizz');
//   else if(i % 5 === 0) console.log('Buzz');
//   else console.log(i);
// }

// 1行で表示
let str: string = '';

for(let i = 1; i <= 100; i++){
  if(i > 1) str += ' ';
  if(i % 3 === 0 && i % 5 === 0) str += 'FizzBuzz';
  else if(i % 3 === 0) str += 'Fizz';
  else if(i % 5 === 0) str += 'Buzz';
  else str += String(i);
}

console.log(str);