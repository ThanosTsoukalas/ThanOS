// 1515 lines of code in the whole platform!!!
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('ThanOS/bootloader.html')
}

app.whenReady().then(() => {
    createWindow()
})