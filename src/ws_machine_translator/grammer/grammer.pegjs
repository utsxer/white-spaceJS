{
	function getSign(signData){
		return signData === " " ? "" : "-";
	}
	function getIntNumber(spaceTabNumberData){
		const numberBinary = spaceTabNumberData.map((element) => {
			return element === " "?"0":"1";
		}).join("");
		
		return parseInt(numberBinary,2);
	}
	function getLabel(enterLabelAllay){
		const outPutLabel = enterLabelAllay.map((element) => {
			return element === " "?"S":"T";
		}).join("");
		return outPutLabel;
	}
}

start = test:IMP+ {return test;} 
IMP = StackManipulation/Arithumetic/HeapAccess/FlowControl/IO ;

StackManipulation = Space stackManipValue:(Push/Duplicate/Copy/Swap/Discard/Slide) {return stackManipValue;};
Push = Space pushNumber:Number { 
	return "push " + pushNumber;
	};
Duplicate = Break Space {return "dup"};
Copy = Tab Space copyNumber:Number {return "copy "+ copyNumber;};
Swap = Break Tab {return "swap";};
Discard = Break Break {return "discard"};
Slide = Tab Break slideNumber:Number{return "slide "+ slideNumber;};

Arithumetic = Tab Space arithValue:(Add/Sub/Mul/Div/Mod){return arithValue;};
Add = Space Space {return "add";};
Sub = Space Tab {return "sub";};
Mul = Space Break {return "mul";};
Div = Tab Space {return "div";};
Mod = Tab Tab {return "mod";};

HeapAccess = Tab Tab heapValue:(Store/Retrieve){return heapValue;};
Store = Space {return "store";};
Retrieve = Tab {return "retrieve";};

FlowControl = Break flowValue:(MarkLocation/CallSubroutine/JumpUnconditionally/JumpTopOfStackIsZero/JumpTopOfStackIsNegative/EndSubroutine/EndProgram){return flowValue};
MarkLocation = Space Space markLabel:Label {return "mark "+markLabel};
CallSubroutine = Space Tab callLabel:Label{return "call "+ callLabel};
JumpUnconditionally = Space Break jumpLabel:Label{return "jmp "+ jumpLabel};
JumpTopOfStackIsZero = Tab Space jumpzLabel:Label{return "jmpz " +jumpzLabel};
JumpTopOfStackIsNegative = Tab Tab jumpnLabel:Label{return "jmpn "+jumpnLabel};
EndSubroutine = Tab Break{return "ends"};
EndProgram = Break Break {return "end"};

IO = Tab Break ioVal:(OutputChar/OutputNumber/ReadChar/ReadNumber){return ioVal};
OutputChar = Space Space{return "put_char"};
OutputNumber = Space Tab{return "put_num"};
ReadChar = Tab Space{return "read_char"};
ReadNumber = Tab Tab{return "read_num"};

Label = label:(Space/Tab)+ Break
{return getLabel(label);}	

Number = number:((Space/Tab) (Space/Tab)+ Break){
	return parseInt(getSign(number[0])+getIntNumber(number[1]),10)};
//Number = (+/-) (binry(0/1)) (Terminate)

Space = " ";
Tab = "\t";
Break = "\n"/"\r\n";