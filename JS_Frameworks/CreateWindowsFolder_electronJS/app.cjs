const {app, BrowserWindow} = require('electron');
var fs=require('fs');
var folderpath='C://angular//angular1';
const g=[];
filenames = fs.readdirSync(folderpath);
  
console.log("\nCurrent directory filenames:");
filenames.forEach(file => {
    g.push(file);
});
var stats = fs.statSync(folderpath+'//'+g[15]);
var fileSizeInBytes = stats.size;
var fileSizeInMegabytes = fileSizeInBytes / (1024*1024);
var time=stats.ctime;
let mainWindow    
function createWindow () {
    const path = require('path');
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            nodeIntegrationInSubFrames: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.cjs')
        },
        center: true
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);   
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
    mainWindow.webContents.on('did-finish-load', ()=>{
        let k=g.length;
        for(let h=0;h<k;h++)
        {
            const code=`var j=${h};var l=j.toString();var p=document.createElement('li');p.setAttribute('id',l);document.getElementById("ul").appendChild(p);document.getElementById(l).innerHTML='<p>${g[h]}</p>';`;
            mainWindow.webContents.executeJavaScript(code);
        }
        console.log(fileSizeInMegabytes);
    }); 
    mainWindow.on('closed', function () {
        mainWindow = null
    });
    mainWindow.removeMenu();
    // Open the DevTools.
    if (require('electron-is-dev')) {
        mainWindow.webContents.openDevTools();
    }
};
app.commandLine = '--disable-gpu';
app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
    if (mainWindow === null) createWindow()
});

const ipcMain = require('electron').ipcMain;
ipcMain.on('enum-system', async () => {
    const system = require('./system/system');            
    const entries = await system.enumSystem();
    mainWindow.webContents.send('enum-system', entries);
});
ipcMain.on('enum-path', (entry) => {
    const dir = require('./system/directory');
    const entries = dir.enumDirectory(entry);
    mainWindow.webContents.send('enum-path', entries);
}); 
