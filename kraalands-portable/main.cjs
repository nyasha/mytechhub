const { app, BrowserWindow } = require('electron');
const path=require('path');
app.setName('Kraalands OS');
function create(){const w=new BrowserWindow({width:1440,height:900,minWidth:1040,minHeight:680,backgroundColor:'#f6f2e8',autoHideMenuBar:true,webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true}});w.loadFile(path.join(__dirname,'index.html'));}
app.whenReady().then(()=>{create();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)create()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
