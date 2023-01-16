import * as parser from 'ws_machine_translator/wsToMachineLikeParser';

describe('Stack Manipulation[Space]', () => {
  test('[Space]{Number}Push the number onto the stack', () => {
    expect(parser.parse('   \t\n')).toEqual(['push 1']);
  });
  test('[LF][Space]Duplicate the top item on the stack', () => {
    expect(parser.parse(' \n ')).toEqual(['dup']);
  });
  test('[Tab][Space]{Number}Copy the nth item on the stack (given by the argument) onto the top of the stack', () => {
    expect(parser.parse(' \t  \t\n')).toEqual(['copy 1']);
  });
  test('[LF][Tab]Swap the top two items on the stack', () => {
    expect(parser.parse(' \n\t')).toEqual(['swap']);
  });
  test('[LF][LF]Discard the top item on the stack', () => {
    expect(parser.parse(' \n\n')).toEqual(['discard']);
  });
  test('[Tab][LF]{Number}Slide n items off the stack, keeping the top item', () => {
    expect(parser.parse(' \t\n \t \n')).toEqual(['slide 2']);
  });
});

describe('Arithmetic[Tab][Space]', () => {
  test('[Space][Space]Addition', () => {
    expect(parser.parse('\t   ')).toEqual(['add']);
  });
  test('[Space][Tab]Subtraction', () => {
    expect(parser.parse('\t  \t')).toEqual(['sub']);
  });
  test('[Space][LF]Multiplication', () => {
    expect(parser.parse('\t  \n')).toEqual(['mul']);
  });
  test('[Tab][Space]Integer Division', () => {
    expect(parser.parse('\t \t ')).toEqual(['div']);
  });
  test('[Tab][Tab]Modulo', () => {
    expect(parser.parse('\t \t\t')).toEqual(['mod']);
  });
});

describe('Heap Access[Tab][Tab]', () => {
  test('[Space]Store', () => {
    expect(parser.parse('\t\t ')).toEqual(['store']);
  });
  test('[Tab]Retrieve', () => {
    expect(parser.parse('\t\t\t')).toEqual(['retrieve']);
  });
});

describe('Flow Control[LF]', () => {
  test('[Space][Space]{Label}Mark a location in the program', () => {
    expect(parser.parse('\n    \t\n')).toEqual(['mark SST']);
  });
  test('[Space][Tab]{Label}Call a subroutine', () => {
    expect(parser.parse('\n \t  \t\n')).toEqual(['call SST']);
  });
  test('[Space][LF]{Label}Jump unconditionally to a label', () => {
    expect(parser.parse('\n \n  \t\n')).toEqual(['jmp SST']);
  });
  test('[Tab][Space]{Label}Jump to a label if the top of the stack is zero', () => {
    expect(parser.parse('\n\t   \t\n')).toEqual(['jmpz SST']);
  });
  test('[Tab][Tab]{Label}Jump to a label if the top of the stack is negative', () => {
    expect(parser.parse('\n\t\t  \t\n')).toEqual(['jmpn SST']);
  });
  test('[Tab][LF]End a subroutine and transfer control back to the caller', () => {
    expect(parser.parse('\n\t\n')).toEqual(['ends']);
  });
  test('[LF][LF]End the program', () => {
    expect(parser.parse('\n\n\n')).toEqual(['end']);
  });
});

describe('IO[Tab][LF]', () => {
  test('[Space][Space]Output the character at the top of the stack', () => {
    expect(parser.parse('\t\n  ')).toEqual(['put_char']);
  });
  test('[Space][Tab]Output the number at the top of the stack', () => {
    expect(parser.parse('\t\n \t')).toEqual(['put_num']);
  });
  test('[Tab][Space]Read a character and place it in the location given by the top of the stack', () => {
    expect(parser.parse('\t\n\t ')).toEqual(['read_char']);
  });
  test('[Tab][Tab]Read a number and place it in the location given by the top of the stack', () => {
    expect(parser.parse('\t\n\t\t')).toEqual(['read_num']);
  });
});

describe('Annotated Example', () => {
  test('Put a 1 on the stack[Space][Space][Space][Tab][LF]', () => {
    expect(parser.parse('   \t\n')).toEqual(['push 1']);
  });
  test('Set a Label at this point[LF][Space][Space][Space][Tab][Space][Space] [Space][Space][Tab][Tab][LF]', () => {
    expect(parser.parse('\n   \t    \t\t\n')).toEqual(['mark STSSSSTT']);
  });
  test('Duplicate the top stack item[Space][LF][Space]', () => {
    expect(parser.parse(' \n ')).toEqual(['dup']);
  });
  test('Output the current value[Tab][LF][Space][Tab]', () => {
    expect(parser.parse('\t\n \t')).toEqual(['put_num']);
  });
  test('Put 10 (newline) on the stack...[Space][Space][Space][Tab][Space][Tab][Space][LF]', () => {
    expect(parser.parse('   \t \t \n')).toEqual(['push 10']);
  });
  test('...and output the newline[Tab][LF][Space][Space]', () => {
    expect(parser.parse('\t\n  ')).toEqual(['put_char']);
  });
  test('Put a 1 on the stack[Space][Space][Space][Tab][LF]', () => {
    expect(parser.parse('   \t\n')).toEqual(['push 1']);
  });
  test('Addition. This increments our current value.[Tab][Space][Space][Space]', () => {
    expect(parser.parse('\t   ')).toEqual(['add']);
  });
  test('Duplicate that value so we can test it[Space][LF][Space]', () => {
    expect(parser.parse(' \n ')).toEqual(['dup']);
  });
  test('Push 11 onto the stack[Space][Space][Space][Tab][Space][Tab][Tab][LF]', () => {
    expect(parser.parse('   \t \t\t\n')).toEqual(['push 11']);
  });
  test('Subtraction. So if we have reached the end, we have a zero on the stack.[Tab][Space][Space][Tab]', () => {
    expect(parser.parse('\t  \t')).toEqual(['sub']);
  });
  test('If we have a zero, jump to the end[LF][Tab][Space][Space][Tab][Space][Space] [Space][Tab][Space][Tab][LF]', () => {
    expect(parser.parse('\n\t  \t   \t \t\n')).toEqual(['jmpz STSSSTST']);
  });
  test('Jump to the start[LF][Space][LF][Space][Tab][Space] [Space][Space][Space][Tab][Tab][LF]', () => {
    expect(parser.parse('\n \n \t    \t\t\n')).toEqual(['jmp STSSSSTT']);
  });
  test('Set the end label[LF][Space][Space][Space][Tab][Space] [Space][Space][Tab][Space][Tab][LF]', () => {
    expect(parser.parse('\n   \t   \t \t\n')).toEqual(['mark STSSSTST']);
  });
  test('Discard our accumulator, to be tidy[Space][LF][LF]', () => {
    expect(parser.parse(' \n\n')).toEqual(['discard']);
  });
  test('Finish[LF][LF][LF]', () => {
    expect(parser.parse('\n\n\n')).toEqual(['end']);
  });
  test('all', () => {
    expect(
      parser.parse(
        '   \t\n\n   \t    \t\t\n \n \t\n \t   \t \t \n\t\n     \t\n\t    \n    \t \t\t\n\t  \t\n\t  \t   \t \t\n\n \n \t    \t\t\n\n   \t   \t \t\n \n\n\n\n\n'
      )
    ).toEqual([
      'push 1',
      'mark STSSSSTT',
      'dup',
      'put_num',
      'push 10',
      'put_char',
      'push 1',
      'add',
      'dup',
      'push 11',
      'sub',
      'jmpz STSSSTST',
      'jmp STSSSSTT',
      'mark STSSSTST',
      'discard',
      'end',
    ]);
  });
});
