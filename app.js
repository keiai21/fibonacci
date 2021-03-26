'use strict';
const memo = new Map(); //memoという名前のMapを作る
memo.set(0, 0); //キーには順番、名前には答えを格納、1番目2番目の答えはあらかじめフィボナッチ数列で定義されている
memo.set(1, 1);
function fib(n){ 
    if (memo.has(n)) {  //もしMapがnをキーとした答えをもっていれば、その値をそのまま関数の値として返す
        return memo.get(n);
    }
    const value = fib(n -1) + fib(n - 2);  //そうでない場合は再起関数を計算して値を求めMapに格納した後に帰す
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}



/**
以下は改善前
function fib(n){
    if (n === 0){
        return 0;
    } else if (n === 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}
*/