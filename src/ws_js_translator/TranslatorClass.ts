import * as parser from 'ws_js_translator/wsToJsParser';
import { WhiteSpaceInstr } from 'ws_js_translator/parserClasses';
import esCodegen from 'escodegen';
import getEsTree from 'ws_js_translator/getEsTreeFunction';
import type { Node } from 'esprima';

export default class WsToJsTranslator {
  private wsCode: string;
  private wsInstrObjects: WhiteSpaceInstr[];
  private partOfEsTree: Node[] = [];
  private esTree;

  constructor(code) {
    this.wsCode = code;
    this.wsInstrObjects = parser.parse(code);
    this.wsInstrObjects.forEach((element) => {
      this.partOfEsTree.push(element.getEsTree());
    });
    this.esTree = this.genEsTree(this.partOfEsTree);
  }
  public getWsCode() {
    return this.wsCode;
  }
  public getEsTree() {
    return this.esTree;
  }
  public getJs() {
    return esCodegen.generate(this.esTree);
  }
  private genEsTree(partsOfEsTree) {
    return getEsTree(partsOfEsTree);
  }
}
