{
	
	function getSign(signData){
		return signData === " " ? "" : "-";
	}
	function getIntNumber(spaceTabNumberData):number{
		const numberBinary:string = spaceTabNumberData.map((element) => {
			return element === " "?"0":"1";
		}).join("");
		
		return parseInt(numberBinary,2);
	}
	function getLabel(enterLabelAllay):string{
		const outPutLabel:string = enterLabelAllay.map((element) => {
			return element === " "?"S":"T";
		}).join("");
		return outPutLabel;
	}
}

start = imp:IMP+ {return imp;} 
IMP = StackManipulation/Arithumetic/HeapAccess/FlowControl/IO ;

//Push,Dup,Copy,Swap,Discard,Slide
StackManipulation = Space stackManipValue:(Push/Duplicate/Copy/Swap/Discard/Slide) {return stackManipValue;};
Push = Space pushNumber:Number { 
	return new Push(pushNumber);
	};
Duplicate = Break Space {return new Dup()};
Copy = Tab Space copyNumber:Number {return new Copy(copyNumber)};
Swap = Break Tab {return new Swap()};
Discard = Break Break {return new Discard()};
Slide = Tab Break slideNumber:Number{return new Slide(slideNumber)};

Arithumetic = Tab Space arithValue:(Add/Sub/Mul/Div/Mod){return arithValue;};
Add = Space Space {return new Add();};
Sub = Space Tab {return new Sub();};
Mul = Space Break {return new Mul();};
Div = Tab Space {return new Div();};
Mod = Tab Tab {return new Mod();};

HeapAccess = Tab Tab heapValue:(Store/Retrieve){return heapValue;};
Store = Space {return new Store();};
Retrieve = Tab {return new Retrieve();};

FlowControl = Break flowValue:(MarkLocation/CallSubroutine/JumpUnconditionally/JumpTopOfStackIsZero/JumpTopOfStackIsNegative/EndSubroutine/EndProgram){return flowValue};
MarkLocation = Space Space markLabel:Label {return new Mark(markLabel)};
CallSubroutine = Space Tab callLabel:Label{return new Call(callLabel)};
JumpUnconditionally = Space Break jumpLabel:Label{return new Jmp(jumpLabel)};
JumpTopOfStackIsZero = Tab Space jumpzLabel:Label{return new Jmpz(jumpzLabel)};
JumpTopOfStackIsNegative = Tab Tab jumpnLabel:Label{return new Jmpn(jumpnLabel)};
EndSubroutine = Tab Break{return new Ends()};
EndProgram = Break Break {return new End()};

IO = Tab Break ioVal:(OutputChar/OutputNumber/ReadChar/ReadNumber){return ioVal};
OutputChar = Space Space{return new PutChar()};
OutputNumber = Space Tab{return new PutNum()};
ReadChar = Tab Space{return new ReadChar()};
ReadNumber = Tab Tab{return new ReadNum()};

Label = label:(Space/Tab)+ Break{return getLabel(label);}	

Number = number:((Space/Tab) (Space/Tab)+ Break){
	return parseInt(getSign(number[0])+getIntNumber(number[1]),10)};
//Number = (+/-) (binry(0/1)) (Terminate)

Space = " ";
Tab = "\t";
Break = "\n"/"\r\n";