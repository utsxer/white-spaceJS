# whitespace＝＞JavaScript トランスレータ

## 説明
このトランスレータはWhitespaceコードをマシン語風（自作）に変換します。  
これにより，whitespaceコードのデバッグがかんたんになります。

変換前
```
   	  	   
	
     	   	 	
	
     	  		  
	
     	  		  
	
     	  				
	
     	 		  
	
     	 	 			
	
     	  				
	
     	 	  	 
	
     	  		  
	
     	   	  
	
  




```

変換後
```
push 72
put_char
push 69
put_char
push 76
put_char
push 76
put_char
push 79
put_char
push 44
put_char
push 87
put_char
push 79
put_char
push 82
put_char
push 76
put_char
push 68
put_char
end
```

## 変換内容

whitespace => WhiteSpaceMachineFormat

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
public getWstxt(): string {}
```
入力されたTS形式のWhiteSpaceコードを取得できます。

```ts
  public getParseResult(): string {
  }
```
パースした結果を取得できます。

```ts
  public getWsCode(): string {
  }
```
生成されたWsmfコードを取得できます。

### translatorSampleの説明

こちらはtscのように，
```
npx ts-node translatorSample.ts ~~.ws
```
とすることで変換が可能です。