/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";import fs from"fs";import{generateWAMessageFromContent,WAProto}from"@adiwajshing/baileys";import moment from"moment-timezone";let handler=async(e,{conn:a,usedPrefix:t,command:i,args:r,isAdmin:o,isOwner:n})=>{const s=/encender|1/i.test(i),l=db.data.chats[e.chat],d=db.data.users[e.sender],c=db.data.settings[a.user.jid]||{},p=(r[0]||"").toLowerCase(),w=!1,b=!1,g=e.mentionedJid&&e.mentionedJid[0]?e.mentionedJid[0]:e.fromMe?a.user.jid:e.sender,f=await a.getName(e.sender),m=["Hola","Wenas","Que tal","Hi","Hello","Olá","Namaste","Hey!","Aloha","Konnichi wa","Mi king","Que hay","Como estas","Oi","Joder Buenas"],u=m[Math.floor(Math.random()*m.length)],I=[{title:"[ ⬇️ BIENVENIDA AUTOMÁTICA ]",rows:[{title:"[ 🛬 Activar ]",description:"~ᴱˡ ᵇᵒᵗ ᵈᵃʳᵃ́ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",rowId:`${t}encender bienvenida`},{title:"[ 🛫 Desactivar ]",description:"~ᴺᵒ ˢᵉ ᵈᵃʳᵃ́ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",rowId:`${t}apagar bienvenida`}]},{title:"[ ⬇️ DETECCIÓN ]",rows:[{title:"[ 🌕 Activar ]",description:"~ᴱˡ ᵇᵒᵗ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ʳᵉᵃˡᶦᶻᵃᵈᵒˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",rowId:`${t}encender deteccion`},{title:"[ 🌑 Desactivar ]",description:"~ᴺᵒ ˢᵉ́ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ʳᵉᵃˡᶦᶻᵃᵈᵒˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",rowId:`${t}apagar deteccion`}]},{title:"[ ⬇️ ANTI - ELIMINADO ]",rows:[{title:"[ ♻️ Activar ]",description:"~ᵀᵒᵈᵒ ᵐᵉⁿˢᵃʲᵉ ᵉˡᶦᵐᶦⁿᵃᵈᵒ ˢᵉʳᵃ́ ʳᵉᶜᵘᵖᵉʳᵃᵈᵒ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ~",rowId:`${t}encender antidelete`},{title:"[ 🗑️ Desactivar ]",description:"~ᴸᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ᵉˡᶦᵐᶦⁿᵃᵈᵒˢ ⁿᵒ ˢᵉʳᵃ́ⁿ ʳᵉᶜᵘᵖᵉʳᵃᵈᵒˢ~",rowId:`${t}encender delete`}]},{title:"[ ⬇️ USAR - DOCUMENTOS ]",rows:[{title:"[ 🗃️ Activar ]",description:"~ˢᵉ ᵃᶜᵗᶦᵛᵃʳᵃ́ ᵉˡ ᵘˢᵒ ᵈᵉ ᵈᵒᶜᵘᵐᵉⁿᵗᵒˢ ᵖᵃʳᵃ ᵉˡ ᵇᵒᵗ~",rowId:`${t}encender document`},{title:"[ 🗳️ Desactivar ]",description:"~ᵁˢᵒ ᵈᵉ ᵈᵒᶜᵘᵐᵉⁿᵗᵒˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒˢ ᵖᵃʳᵃ ᵉˡ ᵇᵒᵗ~",rowId:`${t}apagar document`}]},{title:"[ ⬇️ MODO DE USO ]",rows:[{title:"[ 🏬 Público ]",description:"~ᴹᵒᵈᵒ ᵖᵘᵇˡᶦᶜᵒ ᵃᶜᵗᶦᵛᵃᵈᵒ ᵃʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ᵖᵒᵈʳᵃⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",rowId:`${t}encender publico`},{title:"[ 🏡 Privado ]",description:"~ᴹᵒᵈᵒ ᵖʳᶦᵛᵃᵈᵒ ᵃᶜᵗᶦᵛᵃᵈᵒ ᵃʰᵒʳᵃ ˢᵒˡᵒ ᵉˡ ᵈᵘᵉⁿ̃ᵒ ᵈᵉˡ ᵇᵒᵗ ᵖᵒᵈʳᵃ ᵘˢᵃʳˡᵒ~",rowId:`${t}apagar publico`}]},{title:"[ ⬇️ ANTI - EXTRANJEROS ]",rows:[{title:"[ 🏳️ Activar ]",description:"~ˢᵉ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵈᶦˢᵗᶦⁿᵗᵒˢ ᵃˡ ᵖʳᵉᶠᶦʲᵒ ᵈᵉˡ ᵖʳᵒᵖᶦᵉᵗᵃʳᶦᵒ~\nᴸᵒˢ ⁿᵘ́ᵐᵉʳᵒˢ ᑫᵘᵉ ᶜᵒᵐᶦᵉⁿᶻᵉⁿ ᶜᵒⁿ +"+PaisPrefix+" ⁿᵒ ˢᵉʳᵃ́ⁿ ᵉˡᶦᵐᶦⁿᵃᵈᵒˢ",rowId:`${t}encender antiextranjeros`},{title:"[ 🏴 Desactivar ]",description:"~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᴬⁿᵗᶦᵉˢᵗʳᵃⁿʲᵉʳᵒˢ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",rowId:`${t}apagar antiextranjeros`}]},{title:"[ ⬇️ ANTI - FAKES 1 ]",rows:[{title:"[ 🛡️ Activar ]",description:"~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵉˢᵗᵃᵈᵒᵘⁿᶦᵈᵉⁿˢᵉˢ ⁺¹~",rowId:`${t}encender antifake1`},{title:"[ ⚰️ Desactivar ]",description:"~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",rowId:`${t}apagar antifake1`}]},{title:"[ ⬇️ ANTI - FAKES 2 ]",rows:[{title:"[ 🛡️ Activar ]",description:"~ˢᵉ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᶠᵃˡˢᵒˢ ᵒ ᵛᶦʳᵗᵘᵃˡᵉˢ~",rowId:`${t}encender antifake2`},{title:"[ ⚰️ Desactivar ]",description:"~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",rowId:`${t}apagar antifake2`}]},{title:"[ ⬇️ ANTI - LINK ]",rows:[{title:"[ 🗡️ Activar ]",description:"~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵃˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉ ᑫᵘᵉ ᵉⁿᵛᶦ́ᵉ ᵘⁿ ᵉⁿˡᵃᶜᵉ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",rowId:`${t}encender antilink`},{title:"[ 😴 Desactivar ]",description:"~ᴺᵒ ˢᵉ ʳᵉᵃˡᶦᶻᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉⁿᵛᶦ́ᵉⁿ ᵉⁿˡᵃᶜᵉˢ~",rowId:`${t}apagar antilink`}]},{title:"[ ⬇️ ANTI - LINK 2 ]",rows:[{title:"[ 🗡️ Activar ]",description:"~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵃ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵉⁿᵛᶦ́ᵉⁿ ˡᶦⁿᵏˢ~",rowId:`${t}encender antilink2`},{title:"[ 😴 Desactivar ]",description:"~ᴺᵒ ˢᵉ ʳᵉᵃˡᶦᶻᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉⁿᵛᶦ́ᵉⁿ ˡᶦⁿᵏˢ~",rowId:`${t}apagar antilink2`}]},{title:"[ ⬇️ ANTI - VER UNA VEZ ]",rows:[{title:"[ 🥤 Activar ]",description:"~ᴱˡ ᵇᵒᵗ ʳᵉᶜᵘᵖᵉʳᵃʳᵃ́ ˡᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ᵈᵉ ᵘⁿᵃ ˢᵒˡᵃ ᵛᶦˢᵗᵃ~",rowId:`${t}encender antiviewonce`},{title:"[ 🧊 Desactivar ]",description:"~ᴺᵒ ˢᵉ́ ʳᵉᶜᵘᵖᵉʳᵃʳᵃ́ⁿ ˡᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ᵈᵉ ᵘⁿᵃ ˢᵒˡᵃ ᵛᶦˢᵗᵃ~",rowId:`${t}apagar antiviewonce`}]},{title:"[ ⬇️ AUTO - NIVELEAR ]",rows:[{title:"[ 👑 Activar ]",description:"~ᴸᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ᵖᵒᵈʳᵃⁿ ᵃ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦᵛᵉˡ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ~",rowId:`${t}encender autolevelup`},{title:"[ 🎓 Desactivar ]",description:"~ᴸᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ʸᵃ ⁿᵒ ᵖᵒᵈʳᵃⁿ ᵃ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦᵛᵉˡ~",rowId:`${t}apagar autolevelup`}]},{title:"[ ⬇️ MODO RESTRINGIDO ]",rows:[{title:"[ 🌚 Activado ]",description:"~ᴬᶜᵗᶦᵛᵃ ˡᵃ ᶠᵘⁿᶜᶦᵒ́ⁿ ᵖᵃʳᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵍʳᵘᵖᵒˢ⁽ᴺᵒ ʳᵉᶜᵒᵐᵉⁿᵈᵃᵇˡᵉ⁾~",rowId:`${t}encender restringir`},{title:"[ 🌝 Desactivado ]",description:"~ᴬᶜᶜᶦᵒⁿᵉˢ ᵈᵉ ᵉˡᶦᵐᶦⁿᵃʳ ʸ ᵃᵍʳᵉᵍᵃʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵃ⁽ʳᵉᶜᵒᵐᵉⁿᵈᵃᵇˡᵉ⁾~",rowId:`${t}apagar restringir`}]},{title:"[ ⬇️ MODO SIN BOT ]",rows:[{title:"[ 🙈 Activar ]",description:"~ˢᵒˡᵒ ᶦᵐᵖʳᶦᵐᵉ ˡᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ʳᵉᶜᶦᵇᶦᵈᵒˢ ʸ ᵃᵍʳᵉᵍᵃ ᵘˢᵘᵃʳᶦᵒˢ ᵃ ˡᵃ ᵇᵃˢᵉ ᵈᵉ ᵈᵃᵗᵒˢ~",rowId:`${t}encender atender`},{title:"[ 🙉 Desactivar ]",description:"~ᶜᵒᵐᵉⁿᶻᵃʳᵃ́ ᵃ ᶜᵘᵐᵖˡᶦʳ ᶜᵒⁿ ˡᵃˢ ᶠᵘⁿᶜᶦᵒⁿᵉˢ ˢᵒˡᶦᶜᶦᵗᵃᵈᵃˢ~",rowId:`${t}apagar atender`}]},{title:"[ ⬇️ AUTO - LEER ]",rows:[{title:"[ 🤓 Leer ]",description:"~ᴱˡ ᵇᵒᵗ ᶜᵒᵐᵉⁿᶻᵃʳᵃ́ ᵃ ᵐᵃʳᶜᵃʳ ˡᵒˢ ᶜʰᵃᵗˢ ᶜᵒᵐᵒ ˡᵉᶦ́ᵈᵒˢ~",rowId:`${t}encender autoleer`},{title:"[ 😵 No-Leer ]",description:"~ᴱˡ ᵇᵒᵗ ⁿᵒ ˡᵉᵉʳᵃ́ ˡᵒˢ ᶜʰᵃᵗˢ~",rowId:`${t}apagar autoleer`}]},{title:"[ ⬇️ ANTI - PRIVADO ]",rows:[{title:"[ 💔 Activar ]",description:"~ᴬʰᵒʳᵃ ᵗᵒᵈᵒ ᵃᑫᵘᵉˡ ᑫᵘᵉ ʰᵃᵇˡᵉ ᵃˡ ᵇᵒᵗ ᵖᵒʳ ᵖʳᶦᵛᵃᵈᵒ ˢᵉʳᵃ ᵇˡᵒᑫᵘᵉᵃᵈᵒ~",rowId:`${t}encender noprivado`},{title:"[ ❤️ Desactivar ]",description:"~ᴹᵒᵈᵒ ᴬⁿᵗᶦ⁻ᴾʳᶦᵛᵃᵈᵒ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒ~",rowId:`${t}apagar noprivado`}]},{title:"[ ⬇️ ANTI - TRABA ]",rows:[{title:"[ 🐸 Activar ]",description:"~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵉⁿ ᵂʰᵃᵗˢᵃᵖᵖ~",rowId:`${t}encender antitraba`},{title:"[ 👾 Desactivar ]",description:"~ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒ~",rowId:`${t}apagar antitraba`}]},{title:"[ ⬇️ CHAT - BOT ]",rows:[{title:"[ 🗣️ Activar ]",description:"~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵘⁿ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ ᵈᵉ ʷʰᵃᵗˢᵃᵖᵖ~",rowId:`${t}encender chatbot`},{title:"[ 👤 Desactivar ]",description:"~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ ᵃᶜᵗᵘᵃˡ~",rowId:`${t}apagar chatbot`}]},{title:"[ ⬇️ SUB - BOTS ]",rows:[{title:"[ 🌳 Activar ]",description:"~ᴬʰᵒʳᵃ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵘˢᵃʳ ᵉˡ ᶜᵒᵐᵃⁿᵈᵒ ᵖᵃʳᵃ ˢᵉʳ ᵇᵒᵗˢ ᵗᵉᵐᵖᵒʳᵃˡᵉˢ~",rowId:`${t}encender yesclabots`},{title:"[ 🌱 Desactivar ]",description:"~ᴱˡ ᶜᵒᵐᵃⁿᵈᵒ ᵖᵃʳᵃ ˢᵉʳ ᵇᵒᵗ ⁿᵒ ᵖᵒᵈʳᵃ́ ˢᵉʳ ᵘˢᵃᵈᵒ~",rowId:`${t}encender noesclabots`}]},{title:"[ ⬇️ SOLO - ADMINS ]",rows:[{title:"[ ⭐ Activar ]",description:"~ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ ᵖᵒᵈʳᵃ́ⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",rowId:`${t}encender soloadmins`},{title:"[ ✨ Desactivar ]",description:"~ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ ᵖᵒᵈʳᵃ́ⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",rowId:`${t}apagar soloadmins`}]}];switch(p){case"bienvenida":case"wlc":case"welcome":if(e.isGroup){if(!o)throw global.dfail("admin",e,a),!1}else if(!n)throw global.dfail("group",e,a),!1;l.welcome=s;break;case"deteccion":if(e.isGroup){if(!o)throw global.dfail("admin",e,a),!1}else if(!n)throw global.dfail("group",e,a),!1;l.detect=s;break;case"delete":if(e.isGroup&&!o&&!n)throw global.dfail("admin",e,a),!1;l.delete=s;break;case"antidelete":if(e.isGroup&&!o&&!n)throw global.dfail("admin",e,a),!1;l.delete=!s;break;case"document":if(e.isGroup&&!o&&!n)return dfail("admin",e,a);l.useDocument=s;break;case"publico":case"public":if(w=!0,!n)throw global.dfail("rowner",e,a),!1;global.opts.self=!s;break;case"antiextranjeros":if(e.isGroup&&!n)throw global.dfail("owner",e,a),!1;l.estranjerosnot=s;break;case"antifake1":if(e.isGroup&&!n)throw global.dfail("owner",e,a),!1;l.antifake1=s;break;case"antifake2":if(e.isGroup&&!n)throw global.dfail("owner",e,a),!1;l.antifake2=s;break;case"antilink":if(e.isGroup&&!o&&!n)throw global.dfail("admin",e,a),!1;l.antiLink=s;break;case"antilink2":if(e.isGroup&&!o&&!n)throw global.dfail("admin",e,a),!1;l.antiLink2=s;break;case"antiviewonce":if(e.isGroup&&!o&&!n)throw global.dfail("admin",e,a),!1;l.antiviewonce=s;break;case"autolevelup":b=!0,d.autolevelup=s;break;case"restringir":case"restrict":if(w=!0,!n)throw global.dfail("rowner",e,a),!1;c.restrict=s;break;case"atender":case"nyimak":if(w=!0,!n)throw global.dfail("rowner",e,a),!1;global.opts.nyimak=s;break;case"autoleer":case"autoread":if(w=!0,!n)throw global.dfail("rowner",e,a),!1;global.opts.autoread=s;break;case"pconly":case"privateonly":if(w=!0,!n)throw global.dfail("rowner",e,a),!1;global.opts.pconly=s;break;case"gconly":case"grouponly":if(w=!0,!n)throw global.dfail("rowner",e,a),!1;global.opts.gconly=s;break;case"noprivado":if(w=!0,!n)throw global.dfail("rowner",e,a),!1;c.antiPrivado=s;break;case"swonly":case"statusonly":if(w=!0,!n)throw global.dfail("rowner",e,a),!1;global.opts.swonly=s;break;case"getmsg":if(e.isGroup&&!o&&!n)return dfail("admin",e,a);l.getmsg=s;break;case"antitraba":case"antivirtex":if(e.isGroup&&!o&&!n)throw global.dfail("admin",e,a),!1;l.antiTraba=s;break;case"chatbot":case"simi":if(e.isGroup&&!n)throw global.dfail("owner",e,a),!1;l.simi=s;break;case"yesclabots":if(w=!0,!n)throw global.dfail("rowner",e,a),!1;c.nkNspm=s,c.esclaBots=s,fs.mkdirSync("./esclabots",{recursive:!0});break;case"noesclabots":if(2<fs.readdirSync("./esclabots").length)return e.reply("_[ ! ] Despues de que un usuario ya uso el comando de *serbot*, no puedes desactivar esta opción..._");if(w=!0,!n)throw global.dfail("rowner",e,a),!1;c.nkNspm=!s,c.esclaBots=!s;break;case"soloadmins":if(e.isGroup&&!o&&!n)throw global.dfail("admin",e,a),!1;l.soloAdmins=s;break;default:if(!/[01]/.test(i))return await a.sendMessage(e.chat,{text:"┗⊱ Aqui tiene la lista de opciones :3",footer:"\n"+NombreDelBot,title:`\n┏━━⊱「 ${u} ${f}! 」`,buttonText:" Seleccione aqui ✓ ",sections:I},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",...e.chat?{remoteJid:"17608914335@s.whatsapp.net"}:{}},message:{productMessage:{product:{productImage:{mimetype:"image/jpeg",jpegThumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg")},title:Propietario,description:"[ NK-BOT ]",currencyCode:"PEN",priceAmount1000:"20000",retailerId:"Ghost",productImageCount:1},businessOwnerJid:"0@s.whatsapp.net"}}}});throw!1}await a.sendMessage(e.chat,{text:`\n@${g.replace(/@.+/,"")} ${s?"activó":"desactivó"} *${p}* exitosamente ${w?"para este bot":b?"":"para este chat"}\n`,mentions:[e.sender]},{ephemeralExpiration:86400,quoted:{key:{participant:"0@s.whatsapp.net"},message:{documentMessage:{title:""+(s?"[✓]":"[X]"),jpegThumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg")}}}}),reacMoji(e.chat,a,"✅",e)};handler.help=["encender","apagar"].map((e=>e+" <opción>")),handler.tags=["grupos","propietario"],handler.command=/^((encender|apagar)|[01])$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/