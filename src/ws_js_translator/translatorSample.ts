import { writeFileSync, readFileSync } from 'fs';
import { program } from 'commander';
import  WsToJsTranslator  from 'ws_js_translator/TranslatorClass';
import  getFileName  from 'utils/getFileName';

const commandLine = program.parse(process.argv);
for (let i = 0; i < commandLine.args.length; i++) {
  try {
    const filePath: string = commandLine.args[i];
    const code: string = readFileSync(filePath, 'utf8');
    const translator = new WsToJsTranslator(code);
    const fileName = getFileName(filePath);
    writeFileSync(`src/ws_js_translator/sample_output/${fileName}.js`, translator.getJs());
  } catch (error) {
    console.log(error);
  }
}
