const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_56_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDg5LFxuICAgICAgICA5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICA3NixcbiAgICAgICAgMTc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTksXG4gICAgICAgIDkzLFxuICAgICAgICAxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1U05hQ05mVlZXbkxhRGQwZ2U5YkhsalhTeVpscmU5VmRxa3NNTUZadnc4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBY2VTQnQ3WlREQ3JBZ1pJWlZZZzJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjIwM2M2MzU2LWNkYTQtNGMxZC1hYWE2LTQ0OTliZjJmZDRiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAxNDEsXG4gICAgICAwLFxuICAgICAgMTYzLFxuICAgICAgMTY5LFxuICAgICAgOTIsXG4gICAgICA4NixcbiAgICAgIDE5NCxcbiAgICAgIDE4OCxcbiAgICAgIDEwMyxcbiAgICAgIDIyLFxuICAgICAgNzYsXG4gICAgICAyMDAsXG4gICAgICAxNTcsXG4gICAgICAyMDUsXG4gICAgICAyMSxcbiAgICAgIDE0MixcbiAgICAgIDEzOSxcbiAgICAgIDE3OSxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICAyMDgsXG4gICAgICAxMDAsXG4gICAgICA2LFxuICAgICAgNDEsXG4gICAgICAyMjUsXG4gICAgICAxODcsXG4gICAgICAxMjQsXG4gICAgICA4MyxcbiAgICAgIDIxNyxcbiAgICAgIDcyLFxuICAgICAgMTM0LFxuICAgICAgMjU1LFxuICAgICAgMjI5LFxuICAgICAgOTcsXG4gICAgICAyNDIsXG4gICAgICA5NSxcbiAgICAgIDE3MixcbiAgICAgIDE3MSxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMllZTkEzMVRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNTMxOTI1MTc6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNzcyOTU5MjIwNTM1NDo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPS09qZ01RdUx1MXRBWVlDaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhvdmtvZ1V5UE8vS3AyWFpuT0dGcU1IZFJwY2dNSE1EVWxuR1JMYWlFa1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaWxWQjlVeEEzc09VL1pObllIellqcEFsZytWVXFYR2RoV3dUcTBRODFQK1dHVndmYTBIb2pYWmxuaCtEbFd1N1VXWlV6WWRaamY5bnFiTHZVcmxVQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNlpOc0xPc3lPbG1XN1FUL09nL1ZBYXpwZVQwT1lkR3VGT0Z6ZWVRY2wwa0p6b05jZ3Q2eTd1NGIrZjM0aWVwWHpQZVFkc1U1VFIwdHRwT0hmUmVSalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA1MzE5MjUxNzo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1NDA2MDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJRG5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlEbi5qc29uIjogIntcImtleURhdGFcIjpcImxETTNXWVJPc2QyZmlwK0Z5RmVPclFsMldBVVpzTE8rcWFqV01HVjdlSUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjUyMjcyMixcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTQwNDcyOTc4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
