const { app, BrowserWindow } = require('electron/main');

function createWindow(): void {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.loadFile('./budget/browser/index.html')
}

app.whenReady().then(createWindow)