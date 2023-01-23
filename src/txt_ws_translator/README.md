# TS記法＝＞whitespace トランスレータ

## 説明
Whitespaceは（物理的な）可読性が著しく低いのでまずはそこから解決していきます。  
このトランスレータは，Whitespaceを見えるように記述可能にします。  

変換前
```
SSSTSSTSSS
T
SSSSSTSSSTST
T
SSSSSTSSTTSS
T
SSSSSTSSTTSS
T
SSSSSTSSTTTT
T
SSSSSTSTTSS
T
SSSSSTSTSTTT
T
SSSSSTSSTTTT
T
SSSSSTSTSSTS
T
SSSSSTSSTTSS
T
SSSSSTSSSTSS
T
SS



```

変換後
```
   	  	   
	
     	   	 	
	
     	  		  
	
     	  		  
	
     	  				
	
     	 		  
	
     	 	 			
	
     	  				
	
     	 	  	 
	
     	  		  
	
     	   	  
	
  



```

## 変換内容

'T'=>'  '(Tab)
'S'=>' '(Space)
'\n'or'\r\n'=>'\n'

## TranslatorClass詳細

### constructor

```ts
constructor(wstxtCode: string) {}
```

wsTxtCode => TS形式のWhiteSpaceコード

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
生成されたWhitespaceコードを取得できます。

### translatorSampleの説明

こちらはtscのように，
```
npx ts-node translatorSample.ts ~~.txt
```
とすることで変換が可能です。