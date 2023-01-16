import * as parser from '../wsToJsParser';
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

describe('Stack Manipulation[Space]', () => {
  test('[Space]{Number}Push the number onto the stack', () => {
    expect(parser.parse('   \t\n')).toEqual([new Push(1)]);
  });
  test('[LF][Space]Duplicate the top item on the stack', () => {
    expect(parser.parse(' \n ')).toEqual([new Dup()]);
  });
  test('[Tab][Space]{Number}Copy the nth item on the stack (given by the argument) onto the top of the stack', () => {
    expect(parser.parse(' \t  \t\n')).toEqual([new Copy(1)]);
  });
  test('[LF][Tab]Swap the top two items on the stack', () => {
    expect(parser.parse(' \n\t')).toEqual([new Swap()]);
  });
  test('[LF][LF]Discard the top item on the stack', () => {
    expect(parser.parse(' \n\n')).toEqual([new Discard()]);
  });
  test('[Tab][LF]{Number}Slide n items off the stack, keeping the top item', () => {
    expect(parser.parse(' \t\n \t \n')).toEqual([new Slide(2)]);
  });
});

describe('Arithmetic[Tab][Space]', () => {
  test('[Space][Space]Addition', () => {
    expect(parser.parse('\t   ')).toEqual([new Add()]);
  });
  test('[Space][Tab]Subtraction', () => {
    expect(parser.parse('\t  \t')).toEqual([new Sub()]);
  });
  test('[Space][LF]Multiplication', () => {
    expect(parser.parse('\t  \n')).toEqual([new Mul()]);
  });
  test('[Tab][Space]Integer Division', () => {
    expect(parser.parse('\t \t ')).toEqual([new Div()]);
  });
  test('[Tab][Tab]Modulo', () => {
    expect(parser.parse('\t \t\t')).toEqual([new Mod()]);
  });
});

describe('Heap Access[Tab][Tab]', () => {
  test('[Space]Store', () => {
    expect(parser.parse('\t\t ')).toEqual([new Store()]);
  });
  test('[Tab]Retrieve', () => {
    expect(parser.parse('\t\t\t')).toEqual([new Retrieve()]);
  });
});

describe('Flow Control[LF]', () => {
  test('[Space][Space]{Label}Mark a location in the program', () => {
    expect(parser.parse('\n    \t\n')).toEqual([new Mark('SST')]);
  });
  test('[Space][Tab]{Label}Call a subroutine', () => {
    expect(parser.parse('\n \t  \t\n')).toEqual([new Call('SST')]);
  });
  test('[Space][LF]{Label}Jump unconditionally to a label', () => {
    expect(parser.parse('\n \n  \t\n')).toEqual([new Jmp('SST')]);
  });
  test('[Tab][Space]{Label}Jump to a label if the top of the stack is zero', () => {
    expect(parser.parse('\n\t   \t\n')).toEqual([new Jmpz('SST')]);
  });
  test('[Tab][Tab]{Label}Jump to a label if the top of the stack is negative', () => {
    expect(parser.parse('\n\t\t  \t\n')).toEqual([new Jmpn('SST')]);
  });
  test('[Tab][LF]End a subroutine and transfer control back to the caller', () => {
    expect(parser.parse('\n\t\n')).toEqual([new Ends()]);
  });
  test('[LF][LF]End the program', () => {
    expect(parser.parse('\n\n\n')).toEqual([new End()]);
  });
});

describe('IO[Tab][LF]', () => {
  test('[Space][Space]Output the character at the top of the stack', () => {
    expect(parser.parse('\t\n  ')).toEqual([new PutChar()]);
  });
  test('[Space][Tab]Output the number at the top of the stack', () => {
    expect(parser.parse('\t\n \t')).toEqual([new PutNum()]);
  });
  test('[Tab][Space]Read a character and place it in the location given by the top of the stack', () => {
    expect(parser.parse('\t\n\t ')).toEqual([new ReadChar()]);
  });
  test('[Tab][Tab]Read a number and place it in the location given by the top of the stack', () => {
    expect(parser.parse('\t\n\t\t')).toEqual([new ReadNum()]);
  });
});
