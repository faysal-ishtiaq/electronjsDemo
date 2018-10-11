const {app, BrowserWindow} = require('electron')
  
function createWindow(){
    let win = new BrowserWindow({width: 800, height: 600, show: false});
    win.on('closed', () => {
      win = null
    });
    
    win.webContents.session.clearCache(function(){console.log('cache cleared')});

    splashScreen = new BrowserWindow({width: 800, height: 600, frame: false, alwaysOnTop: true});
    splashScreen.loadURL(`file://${__dirname}/splash.html`);
    win.loadURL("your_website_url");
    win.once('ready-to-show', ()=>{
        splashScreen.destroy();
        win.show();
    });

    
  
}
  
app.on('ready', createWindow)