const {app, BrowserWindow, globalShortcut} = require("electron")

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        alwaysOnTop: true,
        transparent: true,
        frame: false,
        toolbar: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    const shortcut = globalShortcut.register("0", ()=>{
        win.show()
    })
    const shortcut_2 = globalShortcut.register("9", ()=>{
        win.hide()
    })
    

    win.loadFile("index.html")
}

app.whenReady().then(createWindow)

app.on("window-all-closed", ()=>{
    if(process.platform != "darwin"){
        app.quit()
    }
})

app.on("activate", ()=>{
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})