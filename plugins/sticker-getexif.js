/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{format as e}from"util";let{default:{Image:t}}=await import("node-webpmux"),handler=async a=>{if(!a.quoted)return a.reply("[ ! ] Responda un sticker!");if(/sticker/.test(a.quoted.mtype)){let r=new t;await r.load(await a.quoted.download()),a.reply(e(JSON.parse(r.exif.slice(22).toString())))}};handler.help=["getexif"],handler.tags=["conversor"],handler.command=["getexif"];export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/