/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/
import e from"fs";import r from"path";import i from"./store.js";const{BufferJSON:t}=(await import("@adiwajshing/baileys")).default;export default async function s(s,a,o){const f=JSON.parse(await e.promises.readFile(s,"utf8"),t.reviver),m=f.creds||{},n=f.keys||{},l=(e,r)=>Object.keys(e).find((i=>e[i]===r)),p=Object.fromEntries(Object.entries(n).map((([e,r])=>r&&[l(i.KEY_MAP,e),r])).filter(Boolean));var c,d;await Promise.all([(c=m,d="creds.json",e.promises.writeFile(r.join(a,i.fixFileName(d)),JSON.stringify(c,i.JSONreplacer))),o.state.keys.set(p)])}
/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/