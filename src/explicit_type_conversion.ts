import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('数値を入力してください:', (line) => {
    // Number()で, 明示的に型変換が可能.
    // lineが, 例えば, fooやhogeなどの場合, 数字に変換できないので, NaN
    // NaN+1000はNaNが返る.
    // プリミティブ型で同様に, 明示的に型変換可能. etc. String(), Boolean(),,,,
    const num = Number(line)
    console.log(num + 1000);
    rl.close();
});
