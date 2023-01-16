import * as parser from 'txt_ws_translator/txtToWhiteSpaceParser';

describe('Normal test(Basic).', () => {
  test('S test', () => {
    expect(parser.parse('S')).toEqual([' ']);
  });

  test('T test', () => {
    expect(parser.parse('T')).toEqual(['\t']);
  });

  test('break(\\n) test', () => {
    expect(parser.parse('\n')).toEqual(['\n']);
  });

  test('break(\\r\\n) test', () => {
    expect(parser.parse('\r\n')).toEqual(['\n']);
  });
});

describe('Normal test(Intricate).', () => {
  test('S test', () => {
    expect(parser.parse('STS\n')).toEqual([' ', '\t', ' ', '\n']);
  });
});
