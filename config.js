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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_10_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc4LFxuICAgICAgICA3MixcbiAgICAgICAgMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMixcbiAgICAgICAgNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODksXG4gICAgICAgIDI1LFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICA3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDcxLFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg2LFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUnJnbmlLMTNPYlVzT1NKUzJ6UFpjUG1vL1kxa1VkT1dkeVljV2U4RFNjZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWldubmxFel9UTEt2MW5kcFBHRGdWd1wiLFxuICBcInBob25lSWRcIjogXCJkZTU1YzVlMi01MTEzLTRiYzQtODlmNS0yMjFjNjNjNTM2ODdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMzMsXG4gICAgICA1LFxuICAgICAgOTgsXG4gICAgICAzMCxcbiAgICAgIDM2LFxuICAgICAgMTAxLFxuICAgICAgNDUsXG4gICAgICA1LFxuICAgICAgMjA1LFxuICAgICAgMzEsXG4gICAgICAyNyxcbiAgICAgIDE1MixcbiAgICAgIDE2MyxcbiAgICAgIDE4OCxcbiAgICAgIDE5MixcbiAgICAgIDE1NCxcbiAgICAgIDE2NCxcbiAgICAgIDE0MSxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAxMixcbiAgICAgIDIzNSxcbiAgICAgIDU3LFxuICAgICAgMTk0LFxuICAgICAgOTcsXG4gICAgICAxMSxcbiAgICAgIDM4LFxuICAgICAgMTYzLFxuICAgICAgMTE2LFxuICAgICAgMTM1LFxuICAgICAgNSxcbiAgICAgIDI4LFxuICAgICAgMjAwLFxuICAgICAgMTcwLFxuICAgICAgMTc2LFxuICAgICAgMTgwLFxuICAgICAgNTgsXG4gICAgICAxOTAsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIM1JQSkdUQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1MzE5MjUxNzo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE3NzI5NTkyMjA1MzU0OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09LT2pnTVFoSjdFdEFZWUN5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaG92a29nVXlQTy9LcDJYWm5PR0ZxTUhkUnBjZ01ITURVbG5HUkxhaUVrVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZUkZuY1ZEeTg2RlBsbGdoTXlDN3VDVlpWT1J1c05HODBoNy83VVQxZWE0QUZkb1haTkVDTEN2QStwV2JkdHRlcDJqcnFhZTdLZ1FjUU5UN2tUMHVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGV3ZvNjFvUVM2YjAram9MNzJWWndYdDRGZUdkdGRuYzl2SUE2VHhlV2hSOEZ1WjZVeTdvb0ZjKzBPL1ZnVFJWNFk0SnRvdnplZTNKeDRKUzZZc1hnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDUzMTkyNTE3OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDc4MjYwMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
