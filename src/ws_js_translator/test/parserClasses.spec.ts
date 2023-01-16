import {
  Push,
  Dup,
  Copy,
  Swap,
  Discard,
  Slide,
  Add,
  Sub,
  Mul,
  Div,
  Mod,
  Store,
  Retrieve,
  Mark,
  Call,
  Jmp,
  Jmpz,
  Jmpn,
  Ends,
  End,
  ReadChar,
  ReadNum,
  PutChar,
  PutNum,
} from 'ws_js_translator/parserClasses';
import esCodegen from 'escodegen';
describe('Stack Manipulation[Space]', () => {
  test('push', () => {
    expect(esCodegen.generate(new Push(1).getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.push(1);});'
    );
  });
  test('push', () => {
    expect(esCodegen.generate(new Push(2).getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.push(2);});'
    );
  });
  test('Duplicate', () => {
    expect(esCodegen.generate(new Dup().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.push(stack[stack.length-1]);});'
    );
  });
  test('Copy', () => {
    expect(esCodegen.generate(new Copy(3).getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.push(stack[stack.length-3]);});'
    );
  });
  test('Copy', () => {
    expect(esCodegen.generate(new Copy(4).getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.push(stack[stack.length-4]);});'
    );
  });
  test('Swap', () => {
    expect(esCodegen.generate(new Swap().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.splice(stack.length-2,2,stack[stack.length-1],stack[stack.length-2]);});'
    );
  });
  test('Discard', () => {
    expect(esCodegen.generate(new Discard().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.splice(stack.length-1,1);});'
    );
  });
  test('Slide', () => {
    expect(esCodegen.generate(new Slide(2).getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.splice(stack.length-2-1,2);});'
    );
  });
  test('Slide', () => {
    expect(esCodegen.generate(new Slide(3).getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.splice(stack.length-3-1,3);});'
    );
  });
});

describe('Alithmetic', () => {
  test('Add', () => {
    expect(esCodegen.generate(new Add().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.push(stack.pop()+stack.pop());});'
    );
  });
  test('Sub', () => {
    expect(esCodegen.generate(new Sub().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.push(stack.pop()-stack.pop());});'
    );
  });
  test('Mul', () => {
    expect(esCodegen.generate(new Mul().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.push(stack.pop()*stack.pop());});'
    );
  });
  test('Div', () => {
    expect(esCodegen.generate(new Div().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.push(stack.pop()/stack.pop());});'
    );
  });
  test('Mod', () => {
    expect(esCodegen.generate(new Mod().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){stack.push(stack.pop()%stack.pop());});'
    );
  });
});

describe('Heap Access', () => {
  test('Store', () => {
    expect(esCodegen.generate(new Store().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){const value=stack.pop();const address=stack.pop();heap[address]=value;});'
    );
  });
  test('Retrieve', () => {
    expect(esCodegen.generate(new Retrieve().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){const address=stack.pop();stack.push(heap[address]);});'
    );
  });
});

describe('Flow Control[LF]', () => {
  test('mark', () => {
    expect(esCodegen.generate(new Mark('SST').getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      "label['SST']=memory.length-1;"
    );
  });
  test('Call', () => {
    expect(esCodegen.generate(new Call('SST').getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){bp.push(pointer);pointer=label.SST;});'
    );
  });
  test('Jump', () => {
    expect(esCodegen.generate(new Jmp('SST').getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){pointer=label.SST;});'
    );
  });
  test('Jumpz', () => {
    expect(esCodegen.generate(new Jmpz('SST').getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){if(stack.pop()===0){pointer=label.SST;};});'
    );
  });
  test('Jumpn', () => {
    expect(esCodegen.generate(new Jmpn('SST').getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){if(stack.pop()<=0){pointer=label.SST;};});'
    );
  });
  test('Ends', () => {
    expect(esCodegen.generate(new Ends().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){pointer=bp.pop();});'
    );
  });
  test('End', () => {
    expect(esCodegen.generate(new End().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){pointer=-1;});'
    );
  });
});

describe('IO', () => {
  test('OutputChar', () => {
    expect(esCodegen.generate(new PutChar().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){process.stdout.write(String.fromCharCode(stack.pop()));});'
    );
  });
  test('Outputnum', () => {
    expect(esCodegen.generate(new PutNum().getEsTree(), { format: { compact: true, semicolons: true } })).toEqual(
      'memory.push(function(){process.stdout.write(String(stack.pop()));});'
    );
  });
  test('Readchar', () => {
    expect(new ReadChar().getEsTree()).toEqual('');
  });
  test('Readnum', () => {
    expect(new ReadNum().getEsTree()).toEqual('');
  });
});
