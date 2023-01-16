import genEsTreeFinctions from 'ws_js_translator/esTreeObject';
import type { Node } from 'esprima';

export interface WhiteSpaceInstr {
  getEsTree(): Node;
}

export class Push implements WhiteSpaceInstr {
  private param: number;
  constructor(param: number) {
    this.param = param;
  }
  public getEsTree() {
    return genEsTreeFinctions.pushNum(this.param);
  }
}

export class Dup implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.dup();
  }
}

export class Copy implements WhiteSpaceInstr {
  private param: number;
  constructor(param: number) {
    this.param = param;
  }
  getEsTree() {
    return genEsTreeFinctions.copy(this.param);
  }
}

export class Swap implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.swap();
  }
}

export class Discard implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.discard();
  }
}

export class Slide implements WhiteSpaceInstr {
  private param: number;
  constructor(param: number) {
    this.param = param;
  }
  public getEsTree() {
    return genEsTreeFinctions.slide(this.param);
  }
}

export class Add implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.add();
  }
}

export class Sub implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.sub();
  }
}

export class Mul implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.mul();
  }
}

export class Div implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.div();
  }
}

export class Mod implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.mod();
  }
}

export class Store implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.store();
  }
}

export class Retrieve implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.retrieve();
  }
}

export class Mark implements WhiteSpaceInstr {
  param: string;
  constructor(param: string) {
    this.param = param;
  }
  getEsTree() {
    return genEsTreeFinctions.mark(this.param);
  }
}

export class Call implements WhiteSpaceInstr {
  param: string;
  constructor(param: string) {
    this.param = param;
  }
  getEsTree() {
    return genEsTreeFinctions.call(this.param);
  }
}

export class Jmp implements WhiteSpaceInstr {
  param: string;
  constructor(param: string) {
    this.param = param;
  }
  getEsTree() {
    return genEsTreeFinctions.jmp(this.param);
  }
}

export class Jmpz implements WhiteSpaceInstr {
  param: string;
  constructor(param: string) {
    this.param = param;
  }
  getEsTree(): Node {
    return genEsTreeFinctions.jmpz(this.param);
  }
}

export class Jmpn implements WhiteSpaceInstr {
  param: string;
  constructor(param: string) {
    this.param = param;
  }
  getEsTree() {
    return genEsTreeFinctions.jmpn(this.param);
  }
}

export class Ends implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.ends();
  }
}

export class End implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.end();
  }
}

export class PutChar implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.putChar();
  }
}
export class PutNum implements WhiteSpaceInstr {
  getEsTree() {
    return genEsTreeFinctions.putNum();
  }
}
export class ReadChar implements WhiteSpaceInstr {
  getEsTree() {
    return '';
  }
}
export class ReadNum implements WhiteSpaceInstr {
  getEsTree() {
    return '';
  }
}
