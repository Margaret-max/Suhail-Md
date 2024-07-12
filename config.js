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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_08_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0LFxuICAgICAgICA1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDMwLFxuICAgICAgICA3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDczLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDcwLFxuICAgICAgICAzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY1LFxuICAgICAgICA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBrSllFcVBqaTNyQSszbU5rcmRVb291TGorcEhjTXU5SEc3NTUvZWtqR2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVRbFRUaEo1Ulh1dHloS3JWX2NMdndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTFkOTZhZjItZDk2OS00N2Q5LTkzNGUtM2ZhNzdhZDUzOGQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDEyMyxcbiAgICAgIDU3LFxuICAgICAgMTg2LFxuICAgICAgMjA1LFxuICAgICAgMzgsXG4gICAgICAxMjcsXG4gICAgICAyMyxcbiAgICAgIDE1MyxcbiAgICAgIDEwMSxcbiAgICAgIDAsXG4gICAgICA5MixcbiAgICAgIDYwLFxuICAgICAgMjQsXG4gICAgICA0NixcbiAgICAgIDUxLFxuICAgICAgMTQyLFxuICAgICAgMjM0LFxuICAgICAgMTE1LFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgMjMxLFxuICAgICAgNjYsXG4gICAgICA5MSxcbiAgICAgIDE1MSxcbiAgICAgIDU5LFxuICAgICAgMTA1LFxuICAgICAgMTE1LFxuICAgICAgMTU2LFxuICAgICAgNDMsXG4gICAgICA5OSxcbiAgICAgIDE4NixcbiAgICAgIDM3LFxuICAgICAgMTM5LFxuICAgICAgMTU3LFxuICAgICAgMSxcbiAgICAgIDIwMyxcbiAgICAgIDgxLFxuICAgICAgMjIwLFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBBSDNNU0VKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAwNzQyMzkxOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzI5ODUxNjUwNzA1ODE6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmVBNEtRQkVLTzV4TFFHR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhc1grUk1DN2JUVFpLYVZ4N1lZTWpQNWZoZzlkaVNWQVlsc2VyaHk0bWlFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlQ2UEZHUjVvNFNQYnVqM1FKYUZNNlFaTUtBNklYSWNoOTRrdndrN2JtMGo4QlFZZXpqRG1saGtLdHdMekY3YVNiSVpPVDJNS29zK05tcC9BekkvTkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVJUHlLNFQ5c2k2Rk15V2VlQ21FOXJSTk5ZYXAvUmFuME9hRXMrQXJMTVVyRmgxdzBLQlAzOUZjbXErNlJ4TzJYU25ZR0NLVWVWc3lWWVM1cXBSZmdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDA3NDIzOTE6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzg2MDg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFCUUFBRHRsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUJRQUFEdGwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkK1UvU3ZkV2p1U3p5OTN4YmpUNHNRTzU3K2FiVjBYMTRHMHBlRC9RSEFZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NTUwNTgxNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwyMF19LFwidGltZXN0YW1wXCI6XCIxNzE3OTUwODQyNDIyXCJ9Igp9"  // PUT your SESSION_ID 


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
