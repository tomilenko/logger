import { red, green, cyan } from 'kleur';
import * as figlet from 'figlet';

enum ConsoleMessage {
    ERROR = 'ERROR: ',
    SUCCESS = 'SUCCESS: ',
    INFO = 'INFO: ',
    GENERATE = 'GENERATE: ',
    CREATE = 'CREATE: ',
    UPDATE = 'UPDATE: ',
    START_GENERATING = 'Start generating ...',
}

export default class Logger {

    private _newLine = '\n';

    public showBanner(title: string, message: string): void {
        console.log(cyan(figlet.textSync(title, { horizontalLayout: 'full' })));
        console.info(cyan(message));
    }

    public showError(message: string | Error): void {
        console.error(red(ConsoleMessage.ERROR) + message);
    }

    public showSuccess(message: string): void {
        console.log(green(ConsoleMessage.SUCCESS) + message + this._newLine);
    }

    public showInfo(message: string): void {
        console.info(cyan(ConsoleMessage.INFO) + message + this._newLine);
    }

    public showGenerate(fileName: string): void {
        console.log(cyan(ConsoleMessage.GENERATE) + `${fileName}`);
    }

    public showCreate(fileName: string, filePath: string): void {
        filePath
            ? console.log(green(ConsoleMessage.CREATE) + `${fileName} in ${filePath}`)
            : console.log(green(ConsoleMessage.CREATE) + `${fileName}`);
    }

    public showUpdate(fileName: string, filePath: string): void {
        filePath
            ? console.log(green(ConsoleMessage.UPDATE) + `${fileName} in ${filePath}`)
            : console.log(green(ConsoleMessage.UPDATE) + `${fileName}`);
    }
}