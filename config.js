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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_32_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk3LFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjExLFxuICAgICAgICAyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NixcbiAgICAgICAgMTAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNixcbiAgICAgICAgNTksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieDhjMVAzWm5tVTdUTWF4VGRmSmRBTFJobjBHY1NRdGR1OXNRaVJWQTJzTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTAwNzQyMzkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNjU2NEVGMkJEM0Y5M0FCRTRDQzcyN0UwRDlCRDBBN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4MDkxMjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWjB3TVp2MmJRYmktV2JvSERVNjY2UVwiLFxuICBcInBob25lSWRcIjogXCI2OWMyNGE0Yi1jYTIyLTRkZTctYTQzZS00ODk4ZGFjYzlmY2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAyNDcsXG4gICAgICAyMzEsXG4gICAgICAyMDMsXG4gICAgICAyLFxuICAgICAgMTU1LFxuICAgICAgMjIzLFxuICAgICAgMTAsXG4gICAgICA5NyxcbiAgICAgIDE4MixcbiAgICAgIDI0NyxcbiAgICAgIDU3LFxuICAgICAgMjQsXG4gICAgICAxNTIsXG4gICAgICAxMDMsXG4gICAgICAxODUsXG4gICAgICAxNTQsXG4gICAgICAyNDUsXG4gICAgICAxNzksXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICAxMDMsXG4gICAgICAxMDksXG4gICAgICAxMzQsXG4gICAgICA0NSxcbiAgICAgIDIwMCxcbiAgICAgIDEwMixcbiAgICAgIDMxLFxuICAgICAgNzIsXG4gICAgICA4NyxcbiAgICAgIDE4LFxuICAgICAgMTk0LFxuICAgICAgOSxcbiAgICAgIDE1MixcbiAgICAgIDIxNCxcbiAgICAgIDg5LFxuICAgICAgMTY4LFxuICAgICAgMzMsXG4gICAgICA3MSxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc1UUxaRjUxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAwNzQyMzkxOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzI5ODUxNjUwNzA1ODE6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmlBNEtRQkVKenR4YlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhc1grUk1DN2JUVFpLYVZ4N1lZTWpQNWZoZzlkaVNWQVlsc2VyaHk0bWlFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZKWlJ3QjZHblJSdWkyeitnWC9BNUgwKzFCM3FaVi94YUQ4Y0c3dUlLd2Z1RlBLUENNQVBQQmtUQXgvMkFTUVNtcmpqTzliSE5uOWZmUkIycGJDTEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNkTDRIZzVNVk5xQlJ5UmtvWlJJR0lUaHZFQlBZVFZRS0phczFPMHV2M3pNeTRHclFGQkNPUDJJS3BOUXhGRHA1RDBDcERFM0hMTjg3VVBvSTdjbUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDA3NDIzOTE6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODA5MTE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUQ3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJRDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBNnpTZUdTbk5oV1I2WFhKSjltM3kydXBSU29sZ1ZZRzFVSlIwdXpLWDV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NTUwNTgxNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODA0NjQ1ODU4XCJ9Igp9"  // PUT your SESSION_ID 


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
