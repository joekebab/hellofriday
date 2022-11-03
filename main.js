// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const { autoUpdater } = require("electron-updater")
const isDev = require("electron-is-dev")

app.setAppUserModelId("🍿 helloFriday")
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 970,
    height: 670,
    minWidth: 970,
    minHeight: 670,
    autoHideMenuBar: true,
    icon: 'hellofriday-icon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // and load the index.html of the app.
  mainWindow.loadFile('fr-FR/html/home-page.html')

  // Open the DevTools.
  if(!isDev) {
    autoUpdater.checkForUpdates();
  }
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow() 
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
	const dialogOpts = {
		type: 'info',
		buttons: ['D\'accord'],
		title: 'Mise à jour de helloFriday',
		message: process.platform === 'win32' ? releaseNotes : releaseName,
		detail: 'Une nouvelle version a été téléchargée.'
	}
	dialog.showMessageBox(dialogOpts, (response) => {

	});
})

autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
	const dialogOpts = {
		type: 'info',
		buttons: ['Relancer', 'Plus Tard'],
		title: 'Mise à jour de helloFriday',
		message: process.platform === 'win32' ? releaseNotes : releaseName,
		detail: 'Une nouvelle version a été téléchargée. Redémarrez l\'application pour appliquer les mises à jour.'
	};
	dialog.showMessageBox(dialogOpts).then((returnValue) => {
		if (returnValue.response === 0) autoUpdater.quitAndInstall()
	})
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.