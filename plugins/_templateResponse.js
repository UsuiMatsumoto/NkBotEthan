/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/
import {plugins} from"../lib/plugins.js";const {proto,generateWAMessage,areJidsSameUser} = (await import("@whiskeysockets/baileys")).default;export async function all(e,s){if(e.isBaileys)return;if(!e.message)return;if(!(e.message.buttonsResponseMessage||e.message.templateButtonReplyMessage||e.message.listResponseMessage))return;let t,i=e.message.buttonsResponseMessage?.selectedButtonId||e.message.templateButtonReplyMessage?.selectedId||e.message.listResponseMessage?.singleSelectReply?.selectedRowId,n=e.message.buttonsResponseMessage?.selectedDisplayText||e.message.templateButtonReplyMessage?.selectedDisplayText||e.message.listResponseMessage?.title,a=!1;for(let e in plugins){let s=plugins[e];if(!s)continue;if(s.disabled)continue;if(!opts.restrict&&s.tags&&s.tags.includes("admin"))continue;if("function"!=typeof s)continue;if(!s.command)continue;const n=e=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");let o=s.customPrefix?s.customPrefix:this.prefix?this.prefix:global.prefix;if(t=((o instanceof RegExp?[[o.exec(i),o]]:Array.isArray(o)?o.map((e=>{let s=e instanceof RegExp?e:new RegExp(n(e));return[s.exec(i),s]})):"string"==typeof o?[[new RegExp(n(o)).exec(i),new RegExp(n(o))]]:[[[],new RegExp]]).find((e=>e[1]))[0]||"")[0]){let e=i.replace(t,""),[n]=e.trim().split` `.filter((e=>e));if(n=(n||"").toLowerCase(),!(s.command instanceof RegExp?s.command.test(n):Array.isArray(s.command)?s.command.some((e=>e instanceof RegExp?e.test(n):e===n)):"string"==typeof s.command&&s.command===n))continue;a=!0}}let o=await generateWAMessage(e.chat,{text:a?i:n,mentions:e.mentionedJid},{userJid:this.user.id,quoted:e.quoted&&e.quoted.fakeObj});o.key.fromMe=areJidsSameUser(e.sender,this.user.id),o.key.id=e.key.id,o.pushName=e.name,e.isGroup&&(o.key.participant=o.participant=e.sender);let p={...s,messages:[proto.WebMessageInfo.fromObject(o)].map(this.serializeM),type:"append"};this.ev.emit("messages.upsert",p)}
/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/