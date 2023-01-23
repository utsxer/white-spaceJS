# whitespace＝＞JavaScript トランスレータ

## 説明
このトランスレータはWhitespaceコードをJavaScriptに変換するトランスレータです。

変換前
```
   	  	   
	
     	   	 	
	
     	  		  
	
     	  		  
	
     	  				
	
     	 		  
	
     	 	 			
	
     	  				
	
     	 	  	 
	
     	  		  
	
     	   	  
	
  




```

変換後
```js
const memory = ['dummy'];
const label = {};
const stack = [];
const bp = [];
const heap = {};
let pointer = 0;
function main() {
    while (pointer >= 0) {
        pointer++;
        memory[pointer]();
    }
}
memory.push(function () {
    stack.push(72);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(69);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(76);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(76);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(79);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(44);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(87);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(79);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(82);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(76);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    stack.push(68);
});
memory.push(function () {
    process.stdout.write(String.fromCharCode(stack.pop()));
});
memory.push(function () {
    pointer = -1;
});
main();
```

## 変換内容

whitespace => JS

## TranslatorClass詳細

### constructor

```ts
constructor(code:string) {
}
```

code => WhiteSpaceコード

### メソッド

#### 
```ts
  public getWsCode() {
    return this.wsCode;
  }
```
入力されたWhiteSpaceコードを取得できます。

```ts
  public getEsTree() {}
```
esTreeを取得できます。

```ts
  public getJs() {}
```
生成されたJavaScriptコードを取得できます。

### translatorSampleの説明

こちらはtscのように，
```
npx ts-node translatorSample.ts ~~.ws
```
とすることで変換が可能です。