import { writeFileSync, readFileSync } from 'fs';
import { program } from 'commander';
import TxtToWhiteSpaceTranslator from 'txt_ws_translator/TranslatorClass';
import  getFileName  from 'utils/getFileName';

const commandLine = program.parse(process.argv);

for (let i = 0; i < commandLine.args.length; i++) {
  try {
    const filePath: string = commandLine.args[i];
    const tabSpaceCode: string = readFileSync(filePath, 'utf8');
    const whiteSpaceCode: string = new TxtToWhiteSpaceTranslator(tabSpaceCode).getWsCode();
    const fileName: string = getFileName(filePath);
    writeFileSync(`src/txt_ws_translator/sample_output/${fileName}.ws`, whiteSpaceCode);
  } catch (error) {
    console.log(error);
  }
}
