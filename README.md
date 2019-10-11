# @tomilenko/logger

## Description

The TypeScript logger module.

## Usage
```ts
import { Logger } from '@tomilenko/logger';

export class Home {

    private _logger: Logger = new Logger();

    constructor() {
        this._logger.showBanner('title', 'message');
    }
}
```

## Class methods

```ts

    public showBanner(title: string, message: string)

    public showError(message: string | Error)

    public showSuccess(message: string)

    public showInfo(message: string)

    public showGenerate(fileName: string)

    public showCreate(fileName: string, filePath: string)

    public showUpdate(fileName: string, filePath: string)
```