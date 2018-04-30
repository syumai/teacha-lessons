# 基本文法 - 1

* 本当に最低限必要なものだけ紹介します

## サンプルの実行方法

* ターミナルに`node`コマンドを打ち込み、そのまま実行してください。
* 一行一行、実行して確認することが出来ます。

## 変数 / 定数

* 値を格納する箱のようなものです
* 新しい変数を作ることを**宣言**と言います
* 変数に値を与えることを**代入**と言います
* `let`で宣言した変数には再代入出来ます
* `const`で宣言した定数には再代入できません

```js
let num = 1; // numと言う変数を宣言する
const constNum = 2; // constNumと言う定数を宣言する
console.log(num); // => 1
console.log(constNum); // => 2

num = 3; // 変数には値を再代入できます
console.log(num); // 3
constNum = 4; // => エラーが発生します
```

## データ型

* Number (数値)
* String (文字列)
* Boolean (真偽値)
* Object (オブジェクト)
* Null (存在しない、空)

### Number

```js
const a = 2;
const b = 3;
console.log();
```

#### 補足

* Undefined (未定義)

定義されていない変数を参照しようとすると、undefined の値が返ってくる。

### 参考資料

[JavaScript のデータ型とデータ構造 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Data_structures)
