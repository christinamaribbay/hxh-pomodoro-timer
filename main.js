const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 380,
    height: 500,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#905EA9',
      symbolColor: '#000000',
      height: 55
    },
    roundedCorners: false
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})



