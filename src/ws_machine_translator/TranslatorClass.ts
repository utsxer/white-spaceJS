import * as parser from 'ws_machine_translator/wsToMachineLikeParser';
export default class WsToWsmfTranslator {
  private wsCode: string;
  private wsmfCode: string;
  private parseResult: string;
  constructor(wsCode: string) {
    this.wsCode = wsCode;
    this.parseResult = parser.parse(wsCode);
    this.wsmfCode = parser.parse(wsCode).join('\n');
  }

  public getWsCode(): string {
    return this.wsCode;
  }
  public getParseResult(): string {
    return this.parseResult;
  }
  public getWsmfCode(): string {
    return this.wsmfCode;
  }
}
