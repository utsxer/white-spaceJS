import { writeFileSync, readFileSync } from 'fs';
import { program } from 'commander';
import getFileName from 'utils/getFileName';
import WsToWsmfTranslator from 'ws_machine_translator/TranslatorClass';

const commandLine = program.parse(process.argv);
for (let i = 0; i < commandLine.args.length; i++) {
  const filePath: string = commandLine.args[i];
  const wsCode: string = readFileSync(filePath, 'utf8');
  const whiteSpaceCode: string = new WsToWsmfTranslator(wsCode).getWsmfCode();
  const fileName = getFileName(filePath);
  writeFileSync(`src/ws_machine_translator/sample_output/${fileName}.wsmf`, whiteSpaceCode);
}
