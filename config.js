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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_06_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDksXG4gICAgICAgIDg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDIyLFxuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjksXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDgzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg2LFxuICAgICAgICA1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJpZFFnVEl6MEIyeldUVzgzbU92dFp6WG5SS3BoYkpLN09qQXE0WW04MW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJWSjcwYmhGUmRXNzQzLWZjSDFudHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmUxY2MyMDktNDQ0ZS00NTAzLThlN2QtMGZlZTRiYzAyYjljXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAxNDEsXG4gICAgICA2NSxcbiAgICAgIDExMyxcbiAgICAgIDI1MixcbiAgICAgIDEzMyxcbiAgICAgIDc3LFxuICAgICAgMTE2LFxuICAgICAgMTQwLFxuICAgICAgMTIzLFxuICAgICAgMTUxLFxuICAgICAgODIsXG4gICAgICAxMjUsXG4gICAgICA3LFxuICAgICAgODAsXG4gICAgICAyOCxcbiAgICAgIDYxLFxuICAgICAgMTk3LFxuICAgICAgMTQ5LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDYsXG4gICAgICA1LFxuICAgICAgMTE4LFxuICAgICAgMzMsXG4gICAgICAxNzUsXG4gICAgICAxNjYsXG4gICAgICAxOTIsXG4gICAgICAxOTcsXG4gICAgICA4MSxcbiAgICAgIDE2NCxcbiAgICAgIDM5LFxuICAgICAgMTQ2LFxuICAgICAgMTE5LFxuICAgICAgNDIsXG4gICAgICA4OCxcbiAgICAgIDEyMixcbiAgICAgIDg2LFxuICAgICAgNyxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBKQkRIQTE2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY0NzE4MTEzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJndWVzcyB3aG8/XCIsXG4gICAgXCJsaWRcIjogXCIxOTE4MjIzODMwNTg5NDk6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLM1Z5NWNHRU16M3liUUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImYzNW1QYlhCQ1FLdWVReTJpRGhSaGRtZTcvMCtvakNpZVhGTTF0bDJxQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR0phWERsUm9MbVhGMlg1YWphNDJ6dHgwazlZVEhHUDlWTnhtMFV0VmNvQklicnJmeDA2MWhWZnJVUTJNcm1GcUFHYkN3QVI5TUdDa1dSMmltYjB1RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieU5PRlJSTHQ2d3JyRU5lMVl5aVVhZ1UrdzEwNFpLMHVGdi80eFRYaW8xcUExeVZCQ2ZLK25URUROU0hRSFlFRDlMNy9OWTFTSG4wT2IvU21HUTVvZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NDcxODExMzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NzU5ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEaVdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURpVy5qc29uIjogIntcImtleURhdGFcIjpcIkVoRlA2T1ZaUkhUeFJmbmtaNFNyS3NhS2EveXJPNGFIS2kzT1lqSXorUmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY2MDA4Njk1NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0OTUxMDA1NDFcIn0iCn0="  // PUT your SESSION_ID 


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
