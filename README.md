# @tomilenko/logger

## Logger package

[![npm version](https://badge.fury.io/js/%40tomilenko%2Flogger.svg)](https://badge.fury.io/js/%40tomilenko%2Flogger)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LW54FD3RBE2PJ)

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