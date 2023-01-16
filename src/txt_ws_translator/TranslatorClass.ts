import * as parser from 'txt_ws_translator/txtToWhiteSpaceParser';
export default class TxtToWhiteSpaceTranslator {
  private wstxtCode: string;
  private wsCode: string;
  private parseResult: string;
  constructor(wstxtCode: string) {
    this.wstxtCode = wstxtCode;
    this.parseResult = parser.parse(wstxtCode);
    this.wsCode = parser.parse(wstxtCode).join('');
  }

  public getWstxt(): string {
    return this.wstxtCode;
  }
  public getParseResult(): string {
    return this.parseResult;
  }
  public getWsCode(): string {
    return this.wsCode;
  }
}
