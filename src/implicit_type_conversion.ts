import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('文字列を入力してください:', (line) => {
    // lineの値は,標準入力により,文字列を受け取り,
    // 1000が文字列に暗黙的に変換される.
    // また,resultの型は,line + 1000は文字列を返すため,
    // 型推論によりstring型に決まる.
    const result = line + 1000;
    console.log(result);
    rl.close();
});
